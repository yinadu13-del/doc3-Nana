#!/usr/bin/env node
'use strict';
/*
 * NanaBase — backend tự host theo kiểu Firebase
 * Đăng nhập · Cơ sở dữ liệu dạng collection/document · Lưu file · Thống kê · Sao lưu
 *
 * Không cần cài thêm thư viện. Yêu cầu Node.js 22.13 trở lên.
 * Chạy:  node server.js
 */

// Ẩn cảnh báo "experimental" của module SQLite có sẵn trong Node.js
const _emitWarning = process.emitWarning;
process.emitWarning = function (warning, ...rest) {
  const msg = typeof warning === 'string' ? warning : (warning && warning.message) || '';
  if (msg.includes('SQLite')) return;
  return _emitWarning.call(process, warning, ...rest);
};

const http = require('node:http');
const fs = require('node:fs');
const fsp = require('node:fs/promises');
const path = require('node:path');
const crypto = require('node:crypto');
const os = require('node:os');
const zlib = require('node:zlib');
const { pipeline } = require('node:stream/promises');

let DatabaseSync;
try {
  ({ DatabaseSync } = require('node:sqlite'));
} catch (e) {
  console.error('\n[NanaBase] Phiên bản Node.js hiện tại (' + process.version + ') chưa hỗ trợ SQLite có sẵn.');
  console.error('[NanaBase] Hãy cài Node.js 22.13 trở lên (khuyên dùng bản LTS mới nhất) tại https://nodejs.org\n');
  process.exit(1);
}

// ───────────────────────────── Cấu hình ─────────────────────────────
const VERSION = '1.0.0';
const ROOT = __dirname;
const DATA_DIR = path.resolve(process.env.NANABASE_DATA || path.join(ROOT, 'data'));
const PORT = parseInt(process.env.PORT || '8080', 10);
const HOST = process.env.HOST || '0.0.0.0';
const TZ = process.env.NANABASE_TZ || 'Asia/Ho_Chi_Minh';
const TRUST_PROXY = process.env.TRUST_PROXY === '1';
const FILES_DIR = path.join(DATA_DIR, 'files');
const BACKUP_DIR = path.join(DATA_DIR, 'backups');
const TMP_DIR = path.join(DATA_DIR, 'tmp');
const PUBLIC_DIR = path.join(ROOT, 'public');
const DB_PATH = path.join(DATA_DIR, 'nanabase.db');
const MAX_DOC_BYTES = 1024 * 1024; // 1 MB / tài liệu, giống Firestore
const ROLES = ['student', 'teacher', 'admin'];
const ROLE_RANK = { student: 1, teacher: 2, admin: 3 };
const RULE_LEVELS = ['public', 'auth', 'owner', 'owner_or_teacher', 'self', 'self_or_teacher', 'teacher', 'admin'];

for (const d of [DATA_DIR, FILES_DIR, BACKUP_DIR, TMP_DIR]) fs.mkdirSync(d, { recursive: true });

/** Chuẩn hóa họ tên / tên lớp để so sánh: bỏ dấu, chữ thường, gộp khoảng trắng */
function nameKeyOf(s) {
  return String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[đĐ]/g, 'd').toLowerCase().replace(/\s+/g, ' ').trim();
}

const SECRET_PATH = path.join(DATA_DIR, 'secret.key');
if (!fs.existsSync(SECRET_PATH)) fs.writeFileSync(SECRET_PATH, crypto.randomBytes(48).toString('hex'), { mode: 0o600 });
const SECRET = Buffer.from(fs.readFileSync(SECRET_PATH, 'utf8').trim(), 'utf8');

// ───────────────────────────── Cơ sở dữ liệu ─────────────────────────────
const db = new DatabaseSync(DB_PATH);
db.exec(`
PRAGMA journal_mode = WAL;
PRAGMA synchronous = NORMAL;
PRAGMA busy_timeout = 5000;
CREATE TABLE IF NOT EXISTS users (
  uid TEXT PRIMARY KEY,
  email TEXT UNIQUE COLLATE NOCASE,
  name TEXT NOT NULL DEFAULT '',
  name_key TEXT NOT NULL DEFAULT '',
  grp TEXT NOT NULL DEFAULT '',
  pass_hash TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'student',
  disabled INTEGER NOT NULL DEFAULT 0,
  token_ver INTEGER NOT NULL DEFAULT 1,
  created_at INTEGER NOT NULL,
  last_login INTEGER,
  meta TEXT NOT NULL DEFAULT '{}'
);
CREATE TABLE IF NOT EXISTS docs (
  collection TEXT NOT NULL,
  id TEXT NOT NULL,
  owner TEXT,
  data TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL,
  PRIMARY KEY (collection, id)
);
CREATE INDEX IF NOT EXISTS docs_owner ON docs(collection, owner);
CREATE INDEX IF NOT EXISTS docs_updated ON docs(collection, updated_at);
CREATE TABLE IF NOT EXISTS files (
  id TEXT PRIMARY KEY,
  owner TEXT,
  name TEXT NOT NULL,
  mime TEXT NOT NULL,
  size INTEGER NOT NULL,
  folder TEXT NOT NULL DEFAULT '',
  public INTEGER NOT NULL DEFAULT 0,
  sha256 TEXT,
  created_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS files_owner ON files(owner);
CREATE INDEX IF NOT EXISTS files_folder ON files(folder);
CREATE TABLE IF NOT EXISTS settings (key TEXT PRIMARY KEY, value TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS stats_daily (
  day TEXT PRIMARY KEY,
  requests INTEGER NOT NULL DEFAULT 0,
  reads INTEGER NOT NULL DEFAULT 0,
  writes INTEGER NOT NULL DEFAULT 0
);
CREATE TABLE IF NOT EXISTS activity (day TEXT NOT NULL, uid TEXT NOT NULL, PRIMARY KEY (day, uid));
`);
// Nâng cấp cơ sở dữ liệu cũ: email không bắt buộc, thêm cột họ tên chuẩn hóa và lớp
(function migrateUsers() {
  const cols = db.prepare('PRAGMA table_info(users)').all();
  const has = (n) => cols.some((c) => c.name === n);
  const emailCol = cols.find((c) => c.name === 'email');
  if (!has('name_key') || !has('grp') || (emailCol && emailCol.notnull)) {
    db.exec(`BEGIN;
      CREATE TABLE users_new (uid TEXT PRIMARY KEY, email TEXT UNIQUE COLLATE NOCASE, name TEXT NOT NULL DEFAULT '',
        name_key TEXT NOT NULL DEFAULT '', grp TEXT NOT NULL DEFAULT '', pass_hash TEXT NOT NULL, role TEXT NOT NULL DEFAULT 'student',
        disabled INTEGER NOT NULL DEFAULT 0, token_ver INTEGER NOT NULL DEFAULT 1, created_at INTEGER NOT NULL, last_login INTEGER, meta TEXT NOT NULL DEFAULT '{}');
      INSERT INTO users_new(uid, email, name, pass_hash, role, disabled, token_ver, created_at, last_login, meta)
        SELECT uid, email, name, pass_hash, role, disabled, token_ver, created_at, last_login, meta FROM users;
      DROP TABLE users; ALTER TABLE users_new RENAME TO users; COMMIT;`);
    for (const u of db.prepare('SELECT uid, name FROM users').all()) db.prepare('UPDATE users SET name_key = ? WHERE uid = ?').run(nameKeyOf(u.name), u.uid);
  }
  db.exec('CREATE INDEX IF NOT EXISTS users_name_key ON users(name_key)');
})();

const _stmts = new Map();
function stmt(sql) {
  let s = _stmts.get(sql);
  if (!s) {
    s = db.prepare(sql);
    if (_stmts.size < 400) _stmts.set(sql, s);
  }
  return s;
}
let pendingEmits = null; // sự kiện thời gian thực chờ giao dịch hoàn tất
function tx(fn) {
  db.exec('BEGIN IMMEDIATE');
  const outer = pendingEmits === null;
  if (outer) pendingEmits = [];
  try {
    const r = fn();
    db.exec('COMMIT');
    if (outer) { const list = pendingEmits; pendingEmits = null; for (const e of list) emitChange(...e); }
    return r;
  } catch (e) {
    try { db.exec('ROLLBACK'); } catch {}
    if (outer) pendingEmits = null;
    throw e;
  }
}

// ───────────────────────────── Cài đặt & quy tắc ─────────────────────────────
const DEFAULT_SETTINGS = {
  appName: 'NanaBase',
  allowRegister: true,      // cho phép người dùng tự đăng ký
  nameLogin: true,          // cho phép đăng ký/đăng nhập bằng họ tên (+ lớp), không cần email
  defaultRole: 'student',   // vai trò khi tự đăng ký
  maxFileMB: 50,            // dung lượng tối đa mỗi file
  userQuotaMB: 500,         // tổng dung lượng mỗi người dùng (quản trị viên không giới hạn)
  uploadRole: 'student',    // vai trò thấp nhất được tải file lên: student | teacher | admin
  corsOrigins: '*',         // các trang web được phép gọi API, cách nhau bằng dấu phẩy
  tokenDays: 30,            // số ngày giữ đăng nhập
  autoBackup: true,         // tự sao lưu mỗi ngày
  backupKeep: 14            // giữ lại bao nhiêu bản sao lưu tự động
};
const DEFAULT_RULES = {
  default: { read: 'owner_or_teacher', write: 'owner' },
  collections: {
    announcements: { read: 'public', write: 'teacher' },
    progress: { read: 'owner_or_teacher', write: 'self' },
    leaderboard: { read: 'auth', write: 'self' }
  }
};

function loadSetting(key, fallback) {
  const row = stmt('SELECT value FROM settings WHERE key = ?').get(key);
  if (!row) return structuredClone(fallback);
  try { return JSON.parse(row.value); } catch { return structuredClone(fallback); }
}
function saveSetting(key, value) {
  stmt('INSERT INTO settings(key, value) VALUES(?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value').run(key, JSON.stringify(value));
}
let settings = { ...DEFAULT_SETTINGS, ...loadSetting('settings', {}) };
let rules = loadSetting('rules', DEFAULT_RULES);
if (!rules.default) rules.default = DEFAULT_RULES.default;
if (!rules.collections) rules.collections = {};

function sanitizeSettings(input) {
  const s = { ...settings };
  const num = (v, min, max, d) => { const n = Number(v); return Number.isFinite(n) ? Math.min(max, Math.max(min, Math.round(n))) : d; };
  if ('appName' in input) s.appName = String(input.appName || 'NanaBase').slice(0, 80);
  if ('allowRegister' in input) s.allowRegister = !!input.allowRegister;
  if ('nameLogin' in input) s.nameLogin = !!input.nameLogin;
  if ('defaultRole' in input) s.defaultRole = ROLES.includes(input.defaultRole) && input.defaultRole !== 'admin' ? input.defaultRole : 'student';
  if ('maxFileMB' in input) s.maxFileMB = num(input.maxFileMB, 1, 4096, s.maxFileMB);
  if ('userQuotaMB' in input) s.userQuotaMB = num(input.userQuotaMB, 1, 1024 * 1024, s.userQuotaMB);
  if ('uploadRole' in input) s.uploadRole = ROLES.includes(input.uploadRole) ? input.uploadRole : 'student';
  if ('corsOrigins' in input) s.corsOrigins = String(input.corsOrigins || '*').slice(0, 2000);
  if ('tokenDays' in input) s.tokenDays = num(input.tokenDays, 1, 365, s.tokenDays);
  if ('autoBackup' in input) s.autoBackup = !!input.autoBackup;
  if ('backupKeep' in input) s.backupKeep = num(input.backupKeep, 1, 365, s.backupKeep);
  return s;
}
function sanitizeRules(input) {
  const level = (v, d) => (RULE_LEVELS.includes(v) ? v : d);
  const out = {
    default: {
      read: level(input?.default?.read, 'owner_or_teacher'),
      write: level(input?.default?.write, 'owner')
    },
    collections: {}
  };
  for (const [name, r] of Object.entries(input?.collections || {})) {
    if (!/^[A-Za-z0-9_-]{1,64}$/.test(name)) fail(400, `Tên bộ sưu tập không hợp lệ: "${name}"`, 'bad-collection');
    out.collections[name] = { read: level(r?.read, out.default.read), write: level(r?.write, out.default.write) };
  }
  return out;
}

// ───────────────────────────── Tiện ích ─────────────────────────────
class HttpError extends Error {
  constructor(status, message, code) { super(message); this.status = status; this.code = code || 'error'; }
}
function fail(status, message, code) { throw new HttpError(status, message, code); }

const B62 = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
function newId(n = 20) {
  const bytes = crypto.randomBytes(n * 2);
  let s = '';
  for (let i = 0; i < bytes.length && s.length < n; i++) if (bytes[i] < 248) s += B62[bytes[i] % 62];
  return s.length === n ? s : newId(n);
}
function randomPassword() {
  const chars = 'abcdefghjkmnpqrstuvwxyz23456789';
  const b = crypto.randomBytes(8);
  return Array.from(b, (x) => chars[x % chars.length]).join('');
}
const _dayFmt = new Intl.DateTimeFormat('en-CA', { timeZone: TZ, year: 'numeric', month: '2-digit', day: '2-digit' });
const _dtFmt = new Intl.DateTimeFormat('vi-VN', { timeZone: TZ, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false });
function dayKey(ts = Date.now()) { return _dayFmt.format(new Date(ts)); }
const _hmFmt = new Intl.DateTimeFormat('en-GB', { timeZone: TZ, hour: '2-digit', minute: '2-digit', hour12: false });
function stampLocal(ts = Date.now()) { return dayKey(ts) + '-' + _hmFmt.format(new Date(ts)).replace(':', 'h'); }
function fmtDate(ts) {
  if (!ts) return '';
  const p = Object.fromEntries(_dtFmt.formatToParts(new Date(ts)).map((x) => [x.type, x.value]));
  return `${p.day}/${p.month}/${p.year} ${p.hour}:${p.minute}`;
}
function lastDays(n) {
  const out = [];
  for (let i = n - 1; i >= 0; i--) out.push(dayKey(Date.now() - i * 86400000));
  return [...new Set(out)];
}
function deepEqual(a, b) { return JSON.stringify(a) === JSON.stringify(b); }
function isEmail(s) { return typeof s === 'string' && s.length <= 200 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s); }
function cleanName(s) { return String(s ?? '').replace(/[\u0000-\u001f]/g, '').trim().slice(0, 120); }
function parseJsonSafe(s, d) { try { return JSON.parse(s); } catch { return d; } }

// Mật khẩu: scrypt + salt
function scryptAsync(pw, salt) {
  return new Promise((resolve, reject) =>
    crypto.scrypt(String(pw), salt, 64, { N: 16384, r: 8, p: 1, maxmem: 64 * 1024 * 1024 }, (e, k) => (e ? reject(e) : resolve(k))));
}
async function hashPassword(pw) {
  const salt = crypto.randomBytes(16);
  const key = await scryptAsync(pw, salt);
  return `scrypt$${salt.toString('base64')}$${key.toString('base64')}`;
}
async function verifyPassword(pw, stored) {
  const [alg, s, h] = String(stored || '').split('$');
  if (alg !== 'scrypt' || !s || !h) return false;
  const key = await scryptAsync(pw, Buffer.from(s, 'base64'));
  const hb = Buffer.from(h, 'base64');
  return hb.length === key.length && crypto.timingSafeEqual(hb, key);
}
function checkPassword(pw) {
  if (typeof pw !== 'string' || pw.length < 6) fail(400, 'Mật khẩu phải có ít nhất 6 ký tự', 'weak-password');
  if (pw.length > 200) fail(400, 'Mật khẩu quá dài', 'weak-password');
}

// Token đăng nhập (JWT HS256)
function hmac(data) { return crypto.createHmac('sha256', SECRET).update(data).digest(); }
function signToken(user) {
  const header = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64url');
  const payload = Buffer.from(JSON.stringify({
    uid: user.uid, v: user.token_ver, exp: Math.floor(Date.now() / 1000) + settings.tokenDays * 86400
  })).toString('base64url');
  return `${header}.${payload}.${hmac(header + '.' + payload).toString('base64url')}`;
}
function verifyToken(token) {
  if (!token || typeof token !== 'string') return null;
  const parts = token.split('.');
  if (parts.length !== 3) return null;
  const expected = hmac(parts[0] + '.' + parts[1]);
  const got = Buffer.from(parts[2], 'base64url');
  if (got.length !== expected.length || !crypto.timingSafeEqual(got, expected)) return null;
  const p = parseJsonSafe(Buffer.from(parts[1], 'base64url').toString('utf8'), null);
  if (!p || !p.exp || p.exp * 1000 < Date.now()) return null;
  const u = stmt('SELECT * FROM users WHERE uid = ?').get(p.uid);
  if (!u || u.disabled || u.token_ver !== p.v) return null;
  return u;
}
function signFileUrl(id, hours = 12) {
  const exp = Math.floor(Date.now() / 1000) + hours * 3600;
  return { exp, sig: hmac(`file:${id}:${exp}`).toString('base64url') };
}
function checkFileSig(id, exp, sig) {
  if (!exp || !sig || Number(exp) * 1000 < Date.now()) return false;
  const expected = hmac(`file:${id}:${exp}`);
  const got = Buffer.from(String(sig), 'base64url');
  return got.length === expected.length && crypto.timingSafeEqual(got, expected);
}

function publicUser(u, full = true) {
  if (!u) return null;
  const out = { uid: u.uid, name: u.name, role: u.role, group: u.grp || '' };
  if (full) {
    Object.assign(out, {
      email: u.email || null, disabled: !!u.disabled, createdAt: u.created_at, lastLogin: u.last_login || null,
      meta: parseJsonSafe(u.meta, {})
    });
  }
  return out;
}
function hasRole(user, role) { return !!user && (ROLE_RANK[user.role] || 0) >= (ROLE_RANK[role] || 99); }

// ───────────────────────────── Thống kê ─────────────────────────────
const counters = { requests: 0, reads: 0, writes: 0 };
function flushStats() {
  if (!counters.requests && !counters.reads && !counters.writes) return;
  stmt(`INSERT INTO stats_daily(day, requests, reads, writes) VALUES(?, ?, ?, ?)
        ON CONFLICT(day) DO UPDATE SET requests = requests + excluded.requests,
        reads = reads + excluded.reads, writes = writes + excluded.writes`)
    .run(dayKey(), counters.requests, counters.reads, counters.writes);
  counters.requests = counters.reads = counters.writes = 0;
}
setInterval(flushStats, 10000).unref();

let seenDay = dayKey();
const seenToday = new Set();
function markActive(uid) {
  const d = dayKey();
  if (d !== seenDay) { seenDay = d; seenToday.clear(); }
  if (seenToday.has(uid)) return;
  seenToday.add(uid);
  stmt('INSERT OR IGNORE INTO activity(day, uid) VALUES(?, ?)').run(d, uid);
}

// ───────────────────────────── Quy tắc truy cập ─────────────────────────────
function ruleFor(col) {
  const r = rules.collections[col] || rules.default;
  return { read: r.read || rules.default.read, write: r.write || rules.default.write };
}
/** level: mức quy tắc; owner: chủ tài liệu (null nếu đang tạo mới) */
function allowed(level, user, { owner = null, id = null, creating = false } = {}) {
  if (user && user.role === 'admin') return true;
  switch (level) {
    case 'public': return true;
    case 'auth': return !!user;
    case 'owner': return !!user && (creating || owner === user.uid);
    case 'owner_or_teacher': return !!user && (creating || owner === user.uid || user.role === 'teacher');
    case 'self': return !!user && id === user.uid;
    case 'self_or_teacher': return !!user && (id === user.uid || user.role === 'teacher');
    case 'teacher': return !!user && user.role === 'teacher';
    default: return false;
  }
}
function denied(user) {
  return user ? new HttpError(403, 'Bạn không có quyền thực hiện thao tác này', 'permission-denied')
              : new HttpError(401, 'Vui lòng đăng nhập', 'unauthenticated');
}

// ───────────────────────────── Tài liệu (database) ─────────────────────────────
const COL_RE = /^[A-Za-z0-9_-]{1,64}$/;
const ID_RE = /^[A-Za-z0-9_.@+-]{1,128}$/;
function checkCol(col) { if (!COL_RE.test(col || '')) fail(400, 'Tên bộ sưu tập chỉ gồm chữ không dấu, số, "_" hoặc "-" (tối đa 64 ký tự)', 'bad-collection'); }
function checkId(id) { if (!ID_RE.test(id || '')) fail(400, 'Mã tài liệu không hợp lệ (chữ không dấu, số, . _ - @ +; tối đa 128 ký tự)', 'bad-id'); }

function docOut(r) {
  return { id: r.id, data: parseJsonSafe(r.data, {}), owner: r.owner, createdAt: r.created_at, updatedAt: r.updated_at };
}
function getDocRow(col, id) { return stmt('SELECT * FROM docs WHERE collection = ? AND id = ?').get(col, id); }

const DELETE = Symbol('delete');
function isOp(v) { return v && typeof v === 'object' && !Array.isArray(v) && typeof v.$op === 'string'; }
function resolveOp(v, current) {
  switch (v.$op) {
    case 'serverTime': return Date.now();
    case 'increment': {
      const by = Number(v.by ?? 1);
      if (!Number.isFinite(by)) fail(400, 'Giá trị tăng phải là số', 'bad-op');
      return (typeof current === 'number' ? current : 0) + by;
    }
    case 'arrayUnion': {
      const arr = Array.isArray(current) ? current.slice() : [];
      for (const x of v.values || []) if (!arr.some((y) => deepEqual(x, y))) arr.push(x);
      return arr;
    }
    case 'arrayRemove': {
      const vals = v.values || [];
      return (Array.isArray(current) ? current : []).filter((y) => !vals.some((x) => deepEqual(x, y)));
    }
    case 'delete': return DELETE;
    default: fail(400, `Thao tác không hỗ trợ: ${v.$op}`, 'bad-op');
  }
}
function resolveDeep(value, current) {
  if (isOp(value)) return resolveOp(value, current);
  if (Array.isArray(value)) return value.map((x) => { const r = resolveDeep(x, undefined); return r === DELETE ? null : r; });
  if (value && typeof value === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(value)) {
      const r = resolveDeep(v, current && typeof current === 'object' ? current[k] : undefined);
      if (r !== DELETE) out[k] = r;
    }
    return out;
  }
  return value === undefined ? null : value;
}
function applyUpdate(data, patch) {
  const out = structuredClone(data);
  for (const [key, val] of Object.entries(patch)) {
    const segs = key.split('.');
    let obj = out;
    for (let i = 0; i < segs.length - 1; i++) {
      if (!obj[segs[i]] || typeof obj[segs[i]] !== 'object' || Array.isArray(obj[segs[i]])) obj[segs[i]] = {};
      obj = obj[segs[i]];
    }
    const last = segs[segs.length - 1];
    const r = resolveDeep(val, obj[last]);
    if (r === DELETE) delete obj[last];
    else obj[last] = r;
  }
  return out;
}

/** mode: create | set | merge | update */
function writeDoc(user, col, id, mode, data) {
  checkCol(col);
  if (id == null || id === '') id = newId();
  checkId(id);
  if (!data || typeof data !== 'object' || Array.isArray(data)) fail(400, 'Dữ liệu phải là một object JSON, ví dụ {"ten": "An"}', 'bad-data');
  const rule = ruleFor(col);
  const ex = getDocRow(col, id);
  if (ex) {
    if (!allowed(rule.write, user, { owner: ex.owner, id })) throw denied(user);
    if (mode === 'create') fail(409, 'Tài liệu đã tồn tại', 'already-exists');
  } else {
    if (!allowed(rule.write, user, { id, creating: true })) throw denied(user);
    if (mode === 'update') fail(404, 'Không tìm thấy tài liệu', 'not-found');
  }
  const current = ex ? parseJsonSafe(ex.data, {}) : {};
  const next = mode === 'update' || mode === 'merge' ? applyUpdate(current, data) : resolveDeep(data, current);
  const str = JSON.stringify(next);
  if (Buffer.byteLength(str) > MAX_DOC_BYTES) fail(413, 'Mỗi tài liệu tối đa 1 MB. Hãy tách dữ liệu ra nhiều tài liệu.', 'too-large');
  const t = Date.now();
  if (ex) stmt('UPDATE docs SET data = ?, updated_at = ? WHERE collection = ? AND id = ?').run(str, t, col, id);
  else stmt('INSERT INTO docs(collection, id, owner, data, created_at, updated_at) VALUES(?, ?, ?, ?, ?, ?)').run(col, id, user ? user.uid : null, str, t, t);
  counters.writes++;
  const out = { id, data: next, owner: ex ? ex.owner : user ? user.uid : null, createdAt: ex ? ex.created_at : t, updatedAt: t };
  emitChange(col, 'set', out);
  return out;
}
function deleteDoc(user, col, id) {
  checkCol(col); checkId(id);
  const ex = getDocRow(col, id);
  if (!ex) fail(404, 'Không tìm thấy tài liệu', 'not-found');
  if (!allowed(ruleFor(col).write, user, { owner: ex.owner, id })) throw denied(user);
  stmt('DELETE FROM docs WHERE collection = ? AND id = ?').run(col, id);
  counters.writes++;
  emitChange(col, 'delete', { id, owner: ex.owner });
  return { id, deleted: true };
}
function readDoc(user, col, id) {
  checkCol(col); checkId(id);
  const r = getDocRow(col, id);
  const rule = ruleFor(col);
  if (!r) {
    // Không tiết lộ tài liệu có tồn tại hay không với người không có quyền
    if (!allowed(rule.read, user, { id, owner: user ? user.uid : null })) throw denied(user);
    fail(404, 'Không tìm thấy tài liệu', 'not-found');
  }
  if (!allowed(rule.read, user, { owner: r.owner, id })) throw denied(user);
  counters.reads++;
  return docOut(r);
}

const SPECIAL_FIELDS = { __id: 'id', __owner: 'owner', __createdAt: 'created_at', __updatedAt: 'updated_at' };
function fieldPath(field) {
  if (typeof field !== 'string' || !field) fail(400, 'Tên trường không hợp lệ', 'bad-field');
  const segs = field.split('.');
  for (const s of segs) if (!/^[\p{L}\p{N}_-]{1,64}$/u.test(s)) fail(400, `Tên trường không hợp lệ: "${field}"`, 'bad-field');
  return '$' + segs.map((s) => `."${s}"`).join('');
}
function sqlValue(v) {
  if (typeof v === 'boolean') return v ? 1 : 0;
  if (v === undefined) return null;
  if (v && typeof v === 'object') return JSON.stringify(v);
  return v;
}

function queryDocs(user, col, q = {}) {
  checkCol(col);
  const level = ruleFor(col).read;
  const where = ['collection = ?'];
  const args = [col];
  if (!user || user.role !== 'admin') {
    if (level === 'public') {}
    else if (!user) throw denied(null);
    else if (level === 'auth') {}
    else if (level === 'owner') { where.push('owner = ?'); args.push(user.uid); }
    else if (level === 'owner_or_teacher') { if (user.role !== 'teacher') { where.push('owner = ?'); args.push(user.uid); } }
    else if (level === 'self') { where.push('id = ?'); args.push(user.uid); }
    else if (level === 'self_or_teacher') { if (user.role !== 'teacher') { where.push('id = ?'); args.push(user.uid); } }
    else if (level === 'teacher') { if (user.role !== 'teacher') throw denied(user); }
    else throw denied(user);
  }
  const conds = Array.isArray(q.where) ? q.where : [];
  if (conds.length > 20) fail(400, 'Tối đa 20 điều kiện lọc', 'bad-query');
  for (const c of conds) {
    if (!Array.isArray(c) || c.length !== 3) fail(400, 'Điều kiện lọc phải có dạng ["trường", "toán tử", giá trị]', 'bad-query');
    const [field, op, value] = c;
    const special = SPECIAL_FIELDS[field];
    let expr;
    if (special) expr = special;
    else { expr = 'json_extract(data, ?)'; }
    const pushPath = () => { if (!special) args.push(fieldPath(field)); };
    switch (op) {
      case '==': case '=':
        if (value === null) { where.push(`${expr} IS NULL`); pushPath(); }
        else { where.push(`${expr} = ?`); pushPath(); args.push(sqlValue(value)); }
        break;
      case '!=':
        if (value === null) { where.push(`${expr} IS NOT NULL`); pushPath(); }
        else { where.push(`${expr} <> ?`); pushPath(); args.push(sqlValue(value)); }
        break;
      case '<': case '<=': case '>': case '>=':
        where.push(`${expr} ${op} ?`); pushPath(); args.push(sqlValue(value));
        break;
      case 'in': case 'not-in': {
        if (!Array.isArray(value) || !value.length || value.length > 50) fail(400, 'Toán tử "in" cần một mảng từ 1 đến 50 giá trị', 'bad-query');
        where.push(`${expr} ${op === 'in' ? 'IN' : 'NOT IN'} (${value.map(() => '?').join(', ')})`);
        pushPath(); for (const v of value) args.push(sqlValue(v));
        break;
      }
      case 'array-contains':
        if (special) fail(400, 'array-contains chỉ dùng với trường dữ liệu', 'bad-query');
        where.push('EXISTS (SELECT 1 FROM json_each(data, ?) WHERE value = ?)');
        args.push(fieldPath(field), sqlValue(value));
        break;
      case 'contains': // tìm chuỗi con (không phân biệt hoa thường với chữ không dấu)
        where.push(`${expr} LIKE ? ESCAPE '\\'`); pushPath();
        args.push('%' + String(value).replace(/[\\%_]/g, (m) => '\\' + m) + '%');
        break;
      default:
        fail(400, `Toán tử không hỗ trợ: "${op}"`, 'bad-query');
    }
  }
  if (q.search) {
    where.push(`data LIKE ? ESCAPE '\\'`);
    args.push('%' + String(q.search).replace(/[\\%_]/g, (m) => '\\' + m) + '%');
  }
  const whereSql = where.join(' AND ');
  const orderArgs = [];
  let orderSql = 'created_at ASC, id ASC';
  if (q.orderBy) {
    const list = Array.isArray(q.orderBy[0]) ? q.orderBy : [q.orderBy];
    const parts = [];
    for (const o of list.slice(0, 3)) {
      const [field, dir] = Array.isArray(o) ? o : [o, 'asc'];
      const d = String(dir || 'asc').toLowerCase() === 'desc' ? 'DESC' : 'ASC';
      if (SPECIAL_FIELDS[field]) parts.push(`${SPECIAL_FIELDS[field]} ${d}`);
      else { parts.push(`json_extract(data, ?) ${d}`); orderArgs.push(fieldPath(field)); }
    }
    parts.push('id ASC');
    orderSql = parts.join(', ');
  }
  const limit = Math.min(1000, Math.max(1, parseInt(q.limit ?? 100, 10) || 100));
  const offset = Math.max(0, parseInt(q.offset ?? 0, 10) || 0);
  const rows = stmt(`SELECT * FROM docs WHERE ${whereSql} ORDER BY ${orderSql} LIMIT ? OFFSET ?`).all(...args, ...orderArgs, limit + 1, offset);
  const hasMore = rows.length > limit;
  const items = rows.slice(0, limit).map(docOut);
  counters.reads += items.length || 1;
  const out = { items, hasMore, limit, offset };
  if (q.count) out.total = stmt(`SELECT COUNT(*) AS n FROM docs WHERE ${whereSql}`).get(...args).n;
  return out;
}

// Theo dõi thay đổi theo thời gian thực (Server-Sent Events)
const streams = new Map(); // collection -> Set<{res, user, token}>
// Nhật ký thay đổi gần đây: dùng khi kết nối thời gian thực bị chặn (ví dụ Cloudflare Quick Tunnel),
// trình duyệt sẽ hỏi định kỳ /api/changes thay cho SSE
const CHANGE_LOG_MAX = 20000;
const changeLog = [];
let changeSeq = 0;
function emitChange(col, type, doc) {
  if (pendingEmits) { pendingEmits.push([col, type, doc]); return; }
  changeLog.push({ seq: ++changeSeq, col, type, doc });
  if (changeLog.length > CHANGE_LOG_MAX) changeLog.splice(0, changeLog.length - CHANGE_LOG_MAX);
  const set = streams.get(col);
  if (!set || !set.size) return;
  const level = ruleFor(col).read;
  const payload = `event: change\ndata: ${JSON.stringify({ type, doc, collection: col })}\n\n`;
  for (const c of set) {
    if (!allowed(level, c.user, { owner: doc.owner, id: doc.id })) continue;
    try { c.res.write(payload); } catch {}
  }
}
setInterval(() => {
  const done = new Set();
  for (const [col, set] of streams) {
    for (const c of set) {
      if (c.token && !verifyToken(c.token)) { try { c.res.end(); } catch {} set.delete(c); continue; }
      if (done.has(c)) continue;
      done.add(c);
      try { c.res.write(': ping\n\n'); } catch {}
    }
    if (!set.size) streams.delete(col);
  }
}, 25000).unref();

// ───────────────────────────── HTTP ─────────────────────────────
const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg', '.gif': 'image/gif', '.webp': 'image/webp', '.ico': 'image/x-icon', '.txt': 'text/plain; charset=utf-8',
  '.pdf': 'application/pdf', '.mp3': 'audio/mpeg', '.wav': 'audio/wav', '.ogg': 'audio/ogg', '.m4a': 'audio/mp4',
  '.mp4': 'video/mp4', '.webm': 'video/webm', '.doc': 'application/msword',
  '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  '.ppt': 'application/vnd.ms-powerpoint', '.pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  '.xls': 'application/vnd.ms-excel', '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  '.zip': 'application/zip', '.csv': 'text/csv; charset=utf-8', '.avif': 'image/avif', '.bmp': 'image/bmp'
};
const INLINE_SAFE = /^(image\/(png|jpeg|gif|webp|avif|bmp)|audio\/|video\/|application\/pdf$|text\/plain$)/;

function applyCors(req, res) {
  const allowList = String(settings.corsOrigins || '*').split(',').map((s) => s.trim()).filter(Boolean);
  const origin = req.headers.origin;
  if (allowList.includes('*')) res.setHeader('Access-Control-Allow-Origin', '*');
  else if (origin && allowList.includes(origin)) { res.setHeader('Access-Control-Allow-Origin', origin); res.setHeader('Vary', 'Origin'); }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type, X-File-Name, X-Folder, X-Public');
  res.setHeader('Access-Control-Expose-Headers', 'Content-Disposition, Content-Length');
  res.setHeader('Access-Control-Max-Age', '86400');
}
function json(res, status, obj) {
  const body = JSON.stringify(obj);
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Content-Length': Buffer.byteLength(body), 'Cache-Control': 'no-store' });
  res.end(body);
}
function sendDownload(res, buf, filename, mime) {
  res.writeHead(200, {
    'Content-Type': mime, 'Content-Length': buf.length, 'Cache-Control': 'no-store',
    'Content-Disposition': `attachment; filename="${filename.replace(/[^\x20-\x7e]|"/g, '_')}"; filename*=UTF-8''${encodeURIComponent(filename)}`
  });
  res.end(buf);
}
function readBody(req, limit) {
  return new Promise((resolve, reject) => {
    const declared = parseInt(req.headers['content-length'] || '0', 10);
    if (declared > limit) return reject(new HttpError(413, 'Dữ liệu gửi lên quá lớn', 'too-large'));
    const chunks = []; let size = 0;
    req.on('data', (c) => {
      size += c.length;
      if (size > limit) { reject(new HttpError(413, 'Dữ liệu gửi lên quá lớn', 'too-large')); req.destroy(); return; }
      chunks.push(c);
    });
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}
async function readJson(req, limit = 2 * 1024 * 1024) {
  const buf = await readBody(req, limit);
  if (!buf.length) return {};
  try { return JSON.parse(buf.toString('utf8')); }
  catch { fail(400, 'Dữ liệu JSON không hợp lệ', 'bad-json'); }
}
function clientIp(req) {
  const remote = req.socket.remoteAddress || '';
  // Qua Cloudflare Tunnel, mọi yêu cầu đến từ chính máy này: lấy địa chỉ thật Cloudflare gửi kèm
  const loopback = remote === '127.0.0.1' || remote === '::1' || remote === '::ffff:127.0.0.1';
  if (loopback && req.headers['cf-connecting-ip']) return String(req.headers['cf-connecting-ip']).trim();
  if (TRUST_PROXY && req.headers['x-forwarded-for']) return String(req.headers['x-forwarded-for']).split(',')[0].trim();
  return remote;
}

const routes = [];
function route(method, pattern, handler) {
  const keys = [];
  const re = new RegExp('^' + pattern.replace(/:(\w+)/g, (_, k) => { keys.push(k); return '([^/]+)'; }) + '/?$');
  routes.push({ method, re, keys, handler });
}
function requireAuth(ctx) { if (!ctx.user) fail(401, 'Vui lòng đăng nhập', 'unauthenticated'); return ctx.user; }
function requireRole(ctx, role) {
  const u = requireAuth(ctx);
  if (!hasRole(u, role)) fail(403, role === 'admin' ? 'Chỉ quản trị viên mới được làm việc này' : 'Chỉ giáo viên hoặc quản trị viên mới được làm việc này', 'permission-denied');
  return u;
}

// ───────────── Trạng thái ─────────────
const startedAt = Date.now();
function userCount() { return stmt('SELECT COUNT(*) AS n FROM users').get().n; }

route('GET', '/api/health', (ctx) => json(ctx.res, 200, { ok: true, version: VERSION, uptime: Math.round((Date.now() - startedAt) / 1000) }));
route('GET', '/api/status', (ctx) => json(ctx.res, 200, {
  app: settings.appName, version: VERSION, needsSetup: userCount() === 0, allowRegister: !!settings.allowRegister
}));

// ───────────── Đăng nhập ─────────────
const loginFails = new Map();
function loginGuard(key) {
  const now = Date.now();
  const e = loginFails.get(key);
  if (e && e.until > now && e.count >= 10) fail(429, 'Bạn nhập sai quá nhiều lần. Vui lòng thử lại sau 15 phút.', 'too-many-attempts');
  if (e && e.until <= now) loginFails.delete(key);
}
function loginFailed(key) {
  const e = loginFails.get(key) || { count: 0, until: Date.now() + 15 * 60000 };
  e.count++;
  loginFails.set(key, e);
}
setInterval(() => { const now = Date.now(); for (const [k, e] of loginFails) if (e.until <= now) loginFails.delete(k); }, 60000).unref();

function cleanGroup(g) { return cleanName(g).slice(0, 60); }
/** Kiểm tra trùng họ tên trong cùng lớp (dùng cho tài khoản đăng nhập bằng họ tên) */
function nameTaken(name, group, exceptUid) {
  const gk = nameKeyOf(group);
  return stmt('SELECT uid, grp FROM users WHERE name_key = ?').all(nameKeyOf(name))
    .some((u) => u.uid !== exceptUid && nameKeyOf(u.grp) === gk);
}
function nameTakenMessage(group) {
  return `Tên này đã được đăng ký${group ? ' trong lớp ' + group : ''}. Hãy đăng nhập, hoặc nhờ giáo viên cấp lại tài khoản.`;
}
/** Tạo tài khoản. Có email: đăng nhập bằng email. Không có email: đăng nhập bằng họ tên (+ lớp). */
function validateNewUser({ email, password, name, role, group }) {
  email = String(email || '').trim().toLowerCase();
  name = cleanName(name);
  group = cleanGroup(group);
  if (email) {
    if (!isEmail(email)) fail(400, 'Email không hợp lệ', 'bad-email');
    if (stmt('SELECT 1 FROM users WHERE email = ?').get(email)) fail(409, 'Email này đã được đăng ký', 'email-exists');
  } else {
    if (name.length < 2) fail(400, 'Vui lòng nhập họ và tên (hoặc email)', 'bad-name');
    if (nameTaken(name, group)) fail(409, nameTakenMessage(group), 'name-exists');
  }
  checkPassword(password);
  if (!ROLES.includes(role)) fail(400, 'Vai trò không hợp lệ', 'bad-role');
  return { email: email || null, name: name || email.split('@')[0], group };
}
function insertUser(v, hash, role) {
  const user = { uid: newId(24), email: v.email, name: v.name, name_key: nameKeyOf(v.name), grp: v.group, pass_hash: hash, role, disabled: 0, token_ver: 1, created_at: Date.now(), last_login: null, meta: '{}' };
  stmt('INSERT INTO users(uid, email, name, name_key, grp, pass_hash, role, disabled, token_ver, created_at, last_login, meta) VALUES(?, ?, ?, ?, ?, ?, ?, 0, 1, ?, NULL, ?)')
    .run(user.uid, user.email, user.name, user.name_key, user.grp, user.pass_hash, user.role, user.created_at, '{}');
  return user;
}
async function createUser(input) {
  validateNewUser(input);
  const hash = await hashPassword(input.password);
  const v = validateNewUser(input); // kiểm tra lại sau khi băm (tránh hai yêu cầu trùng nhau)
  return insertUser(v, hash, input.role);
}

route('POST', '/api/auth/setup', async (ctx) => {
  if (userCount() > 0) fail(403, 'Hệ thống đã có tài khoản quản trị', 'already-setup');
  const b = await readJson(ctx.req);
  const user = await createUser({ ...b, role: 'admin' });
  json(ctx.res, 201, { token: signToken(user), user: publicUser(user) });
});
route('POST', '/api/auth/register', async (ctx) => {
  if (!settings.allowRegister) fail(403, 'Hệ thống đang tắt chức năng tự đăng ký. Hãy liên hệ giáo viên để được cấp tài khoản.', 'register-disabled');
  const b = await readJson(ctx.req);
  if (!b.email && !settings.nameLogin) fail(400, 'Vui lòng nhập email', 'bad-email');
  const user = await createUser({ email: b.email, password: b.password, name: b.name, group: b.group, role: settings.defaultRole === 'teacher' ? 'teacher' : 'student' });
  markActive(user.uid);
  json(ctx.res, 201, { token: signToken(user), user: publicUser(user) });
});
route('POST', '/api/auth/login', async (ctx) => {
  const b = await readJson(ctx.req);
  if (!b.email && b.name) return loginByName(ctx, b);
  const email = String(b.email || '').trim().toLowerCase();
  const key = clientIp(ctx.req) + '|' + email;
  loginGuard(key);
  const u = stmt('SELECT * FROM users WHERE email = ?').get(email);
  const ok = u ? await verifyPassword(b.password, u.pass_hash) : (await hashPassword('x'), false);
  if (!ok) { loginFailed(key); fail(401, 'Email hoặc mật khẩu không đúng', 'wrong-credentials'); }
  if (u.disabled) fail(403, 'Tài khoản này đã bị khóa. Hãy liên hệ quản trị viên.', 'user-disabled');
  loginFails.delete(key);
  const t = Date.now();
  stmt('UPDATE users SET last_login = ? WHERE uid = ?').run(t, u.uid);
  u.last_login = t;
  markActive(u.uid);
  json(ctx.res, 200, { token: signToken(u), user: publicUser(u) });
});
async function loginByName(ctx, b) {
  if (!settings.nameLogin) fail(400, 'Hệ thống chưa bật đăng nhập bằng họ tên', 'name-login-disabled');
  const key = nameKeyOf(b.name);
  const guard = clientIp(ctx.req) + '|name:' + key;
  loginGuard(guard);
  let list = stmt('SELECT * FROM users WHERE name_key = ? LIMIT 50').all(key);
  if (b.uid) list = list.filter((u) => u.uid === b.uid);
  const checks = await Promise.all(list.map((u) => verifyPassword(b.password, u.pass_hash)));
  const matches = list.filter((u, i) => checks[i]);
  if (!list.length) await hashPassword('x'); // giữ thời gian phản hồi tương đương
  if (!matches.length) { loginFailed(guard); fail(401, 'Họ tên hoặc mật khẩu không đúng', 'wrong-credentials'); }
  const active = matches.filter((u) => !u.disabled);
  if (!active.length) fail(403, 'Tài khoản này đã bị khóa. Hãy liên hệ giáo viên.', 'user-disabled');
  loginFails.delete(guard);
  if (active.length > 1) return json(ctx.res, 200, { choices: active.map((u) => ({ uid: u.uid, name: u.name, group: u.grp || '' })) });
  const u = active[0];
  const t = Date.now();
  stmt('UPDATE users SET last_login = ? WHERE uid = ?').run(t, u.uid);
  u.last_login = t;
  markActive(u.uid);
  json(ctx.res, 200, { token: signToken(u), user: publicUser(u) });
}
route('GET', '/api/auth/me', (ctx) => json(ctx.res, 200, { user: publicUser(requireAuth(ctx)) }));
route('PATCH', '/api/auth/me', async (ctx) => {
  const u = requireAuth(ctx);
  const b = await readJson(ctx.req);
  if ('name' in b) { u.name = cleanName(b.name) || u.name; }
  if ('meta' in b) {
    if (!b.meta || typeof b.meta !== 'object' || Array.isArray(b.meta)) fail(400, 'meta phải là object', 'bad-data');
    const m = JSON.stringify(b.meta);
    if (m.length > 20000) fail(413, 'meta tối đa 20 KB', 'too-large');
    u.meta = m;
  }
  stmt('UPDATE users SET name = ?, meta = ? WHERE uid = ?').run(u.name, u.meta, u.uid);
  json(ctx.res, 200, { user: publicUser(u) });
});
route('POST', '/api/auth/password', async (ctx) => {
  const u = requireAuth(ctx);
  const b = await readJson(ctx.req);
  if (!(await verifyPassword(b.oldPassword, u.pass_hash))) fail(400, 'Mật khẩu hiện tại không đúng', 'wrong-credentials');
  checkPassword(b.newPassword);
  u.pass_hash = await hashPassword(b.newPassword);
  u.token_ver++;
  stmt('UPDATE users SET pass_hash = ?, token_ver = ? WHERE uid = ?').run(u.pass_hash, u.token_ver, u.uid);
  json(ctx.res, 200, { token: signToken(u), user: publicUser(u) });
});
route('POST', '/api/auth/logout-all', (ctx) => {
  const u = requireAuth(ctx);
  stmt('UPDATE users SET token_ver = token_ver + 1 WHERE uid = ?').run(u.uid);
  json(ctx.res, 200, { ok: true });
});

// Danh sách người dùng cho giáo viên (không có mật khẩu)
route('GET', '/api/users', (ctx) => {
  const me = requireRole(ctx, 'teacher');
  return json(ctx.res, 200, listUsers(ctx.query, me.role === 'admin'));
});
route('POST', '/api/users/names', async (ctx) => {
  const me = requireAuth(ctx);
  const b = await readJson(ctx.req);
  const uids = Array.isArray(b.uids) ? b.uids.slice(0, 500).map(String) : [];
  const out = {};
  if (uids.length) {
    const rows = stmt(`SELECT uid, name, role, email, grp FROM users WHERE uid IN (${uids.map(() => '?').join(',')})`).all(...uids);
    for (const r of rows) out[r.uid] = hasRole(me, 'teacher') ? { name: r.name, role: r.role, group: r.grp || '', email: r.email || null } : { name: r.name, role: r.role, group: r.grp || '' };
  }
  json(ctx.res, 200, { users: out });
});

// Giáo viên quản lý tài khoản học viên (quản trị viên quản lý được mọi tài khoản)
function targetForManager(me, uid) {
  const u = stmt('SELECT * FROM users WHERE uid = ?').get(uid);
  if (!u) fail(404, 'Không tìm thấy người dùng', 'not-found');
  if (me.role !== 'admin' && u.role !== 'student') fail(403, 'Giáo viên chỉ quản lý được tài khoản học viên', 'permission-denied');
  return u;
}
route('PATCH', '/api/users/:uid', async (ctx) => {
  const me = requireRole(ctx, 'teacher');
  const u = targetForManager(me, ctx.params.uid);
  const b = await readJson(ctx.req);
  const patch = {};
  for (const k of ['name', 'group', 'disabled', 'password']) if (k in b) patch[k] = b[k];
  json(ctx.res, 200, { user: publicUser(await updateUser(me, u, patch)) });
});
route('DELETE', '/api/users/:uid', async (ctx) => {
  const me = requireRole(ctx, 'teacher');
  targetForManager(me, ctx.params.uid);
  json(ctx.res, 200, await removeUser(me, ctx.params.uid, ctx.query.get('purge') === '1'));
});

async function updateUser(me, u, b) {
  let bump = false;
  if ('name' in b) { u.name = cleanName(b.name) || u.name; u.name_key = nameKeyOf(u.name); }
  if ('group' in b) u.grp = cleanGroup(b.group);
  if ('email' in b) {
    const email = String(b.email || '').trim().toLowerCase();
    if (email) {
      if (!isEmail(email)) fail(400, 'Email không hợp lệ', 'bad-email');
      const other = stmt('SELECT uid FROM users WHERE email = ?').get(email);
      if (other && other.uid !== u.uid) fail(409, 'Email này đã được dùng', 'email-exists');
      u.email = email;
    } else u.email = null;
  }
  if (!u.email && ('name' in b || 'group' in b || 'email' in b) && nameTaken(u.name, u.grp, u.uid)) fail(409, nameTakenMessage(u.grp), 'name-exists');
  if ('role' in b) {
    if (!ROLES.includes(b.role)) fail(400, 'Vai trò không hợp lệ', 'bad-role');
    if (me.role !== 'admin') fail(403, 'Chỉ quản trị viên mới đổi được vai trò', 'permission-denied');
    if (u.uid === me.uid && b.role !== 'admin') fail(400, 'Bạn không thể tự hạ quyền quản trị của chính mình', 'self-demote');
    u.role = b.role;
  }
  if ('disabled' in b) {
    if (u.uid === me.uid && b.disabled) fail(400, 'Bạn không thể tự khóa tài khoản của mình', 'self-disable');
    u.disabled = b.disabled ? 1 : 0;
    if (u.disabled) bump = true;
  }
  if (b.password) { checkPassword(b.password); u.pass_hash = await hashPassword(b.password); bump = true; }
  if (bump) u.token_ver++;
  stmt('UPDATE users SET name = ?, name_key = ?, grp = ?, email = ?, role = ?, disabled = ?, pass_hash = ?, token_ver = ? WHERE uid = ?')
    .run(u.name, u.name_key || nameKeyOf(u.name), u.grp || '', u.email || null, u.role, u.disabled, u.pass_hash, u.token_ver, u.uid);
  return u;
}
async function removeUser(me, uid, purge) {
  if (uid === me.uid) fail(400, 'Bạn không thể tự xóa tài khoản của mình', 'self-delete');
  let removedFiles = [];
  tx(() => {
    stmt('DELETE FROM users WHERE uid = ?').run(uid);
    stmt('DELETE FROM activity WHERE uid = ?').run(uid);
    if (purge) {
      for (const d of stmt('SELECT collection, id FROM docs WHERE owner = ? OR id = ?').all(uid, uid)) emitChange(d.collection, 'delete', { id: d.id, owner: uid });
      stmt('DELETE FROM docs WHERE owner = ? OR id = ?').run(uid, uid);
      removedFiles = stmt('SELECT id FROM files WHERE owner = ?').all(uid).map((r) => r.id);
      stmt('DELETE FROM files WHERE owner = ?').run(uid);
    }
  });
  for (const id of removedFiles) await fsp.rm(path.join(FILES_DIR, id), { force: true });
  return { deleted: true, purged: purge, files: removedFiles.length };
}

function listUsers(query, full) {
  const where = []; const args = [];
  const q = (query.get('q') || '').trim();
  if (q) { where.push('(email LIKE ? OR name LIKE ? OR name_key LIKE ? OR grp LIKE ?)'); args.push(`%${q}%`, `%${q}%`, `%${nameKeyOf(q)}%`, `%${q}%`); }
  const grp = query.get('group');
  if (grp) { where.push('grp = ? COLLATE NOCASE'); args.push(grp); }
  const role = query.get('role');
  if (role && ROLES.includes(role)) { where.push('role = ?'); args.push(role); }
  if (query.get('disabled') === '1') where.push('disabled = 1');
  const w = where.length ? 'WHERE ' + where.join(' AND ') : '';
  const sortMap = { created: 'created_at DESC', login: 'last_login DESC', name: 'name COLLATE NOCASE ASC', email: 'email ASC' };
  const order = sortMap[query.get('sort')] || 'created_at DESC';
  const limit = Math.min(1000, Math.max(1, parseInt(query.get('limit') || '50', 10)));
  const offset = Math.max(0, parseInt(query.get('offset') || '0', 10));
  const total = stmt(`SELECT COUNT(*) AS n FROM users ${w}`).get(...args).n;
  const rows = stmt(`SELECT * FROM users ${w} ORDER BY ${order} LIMIT ? OFFSET ?`).all(...args, limit, offset);
  return { total, items: rows.map((r) => publicUser(r, true)), limit, offset, full };
}

// ───────────── Quản lý người dùng (quản trị viên) ─────────────
route('GET', '/api/admin/users', (ctx) => { requireRole(ctx, 'admin'); json(ctx.res, 200, listUsers(ctx.query, true)); });
route('POST', '/api/admin/users', async (ctx) => {
  requireRole(ctx, 'admin');
  const b = await readJson(ctx.req);
  const generated = !b.password;
  const password = b.password || randomPassword();
  const user = await createUser({ email: b.email, password, name: b.name, group: b.group, role: b.role || 'student' });
  json(ctx.res, 201, { user: publicUser(user), password: generated ? password : undefined });
});
route('POST', '/api/admin/users/import', async (ctx) => {
  requireRole(ctx, 'admin');
  const b = await readJson(ctx.req, 10 * 1024 * 1024);
  const list = Array.isArray(b.users) ? b.users : [];
  if (!list.length) fail(400, 'Danh sách người dùng trống', 'bad-data');
  if (list.length > 5000) fail(400, 'Mỗi lần nhập tối đa 5.000 người dùng', 'bad-data');
  const created = []; const skipped = [];
  const seen = new Set();
  const prepared = [];
  for (const raw of list) {
    const email = String(raw.email || '').trim().toLowerCase();
    const name = cleanName(raw.name);
    const group = cleanGroup(raw.group);
    const label = email || (name + (group ? ' – ' + group : ''));
    let key;
    if (email) {
      if (!isEmail(email)) { skipped.push({ email: raw.email, reason: 'Email không hợp lệ' }); continue; }
      key = 'e:' + email;
      if (stmt('SELECT 1 FROM users WHERE email = ?').get(email)) { skipped.push({ email: label, reason: 'Đã có tài khoản' }); continue; }
    } else {
      if (name.length < 2) { skipped.push({ email: label || '(trống)', reason: 'Thiếu email hoặc họ tên' }); continue; }
      key = 'n:' + nameKeyOf(name) + '|' + nameKeyOf(group);
      if (nameTaken(name, group)) { skipped.push({ email: label, reason: 'Đã có tài khoản cùng họ tên trong lớp' }); continue; }
    }
    if (seen.has(key)) { skipped.push({ email: label, reason: 'Trùng trong danh sách' }); continue; }
    seen.add(key);
    const pw = raw.password ? String(raw.password) : b.defaultPassword ? String(b.defaultPassword) : randomPassword();
    if (pw.length < 6) { skipped.push({ email: label, reason: 'Mật khẩu dưới 6 ký tự' }); continue; }
    const role = ROLES.includes(raw.role) ? raw.role : 'student';
    prepared.push({ email: email || null, pw, name: name || email.split('@')[0], group, role, showPw: !raw.password && !b.defaultPassword });
  }
  for (let i = 0; i < prepared.length; i += 16) {
    const chunk = prepared.slice(i, i + 16);
    const hashes = await Promise.all(chunk.map((p) => hashPassword(p.pw)));
    tx(() => {
      chunk.forEach((p, j) => {
        const u = insertUser({ email: p.email, name: p.name, group: p.group }, hashes[j], p.role);
        created.push({ uid: u.uid, email: p.email, name: p.name, group: p.group, role: p.role, password: p.showPw ? p.pw : undefined });
      });
    });
  }
  json(ctx.res, 200, { created, skipped });
});
route('PATCH', '/api/admin/users/:uid', async (ctx) => {
  const me = requireRole(ctx, 'admin');
  const u = stmt('SELECT * FROM users WHERE uid = ?').get(ctx.params.uid);
  if (!u) fail(404, 'Không tìm thấy người dùng', 'not-found');
  json(ctx.res, 200, { user: publicUser(await updateUser(me, u, await readJson(ctx.req))) });
});
route('DELETE', '/api/admin/users/:uid', async (ctx) => {
  const me = requireRole(ctx, 'admin');
  if (!stmt('SELECT 1 FROM users WHERE uid = ?').get(ctx.params.uid)) fail(404, 'Không tìm thấy người dùng', 'not-found');
  json(ctx.res, 200, await removeUser(me, ctx.params.uid, ctx.query.get('purge') === '1'));
});

// ───────────── Cơ sở dữ liệu ─────────────
route('GET', '/api/db/:col', (ctx) => {
  const q = ctx.query.get('q') ? parseJsonSafe(ctx.query.get('q'), null) : {};
  if (q === null) fail(400, 'Tham số q phải là JSON', 'bad-query');
  for (const k of ['limit', 'offset', 'search']) if (ctx.query.get(k)) q[k] = ctx.query.get(k);
  if (ctx.query.get('count') === '1') q.count = true;
  json(ctx.res, 200, queryDocs(ctx.user, ctx.params.col, q));
});
route('POST', '/api/db/:col/query', async (ctx) => json(ctx.res, 200, queryDocs(ctx.user, ctx.params.col, await readJson(ctx.req))));
route('GET', '/api/db/:col/stream', (ctx) => {
  const col = ctx.params.col;
  checkCol(col);
  const level = ruleFor(col).read;
  if (level !== 'public' && !ctx.user) throw denied(null);
  if (level === 'teacher' && !hasRole(ctx.user, 'teacher')) throw denied(ctx.user);
  if (level === 'admin' && !hasRole(ctx.user, 'admin')) throw denied(ctx.user);
  ctx.res.writeHead(200, { 'Content-Type': 'text/event-stream; charset=utf-8', 'Cache-Control': 'no-store', Connection: 'keep-alive', 'X-Accel-Buffering': 'no' });
  ctx.res.write(`event: ready\ndata: {"collection":"${col}"}\n\n`);
  const client = { res: ctx.res, user: ctx.user, token: ctx.token };
  if (!streams.has(col)) streams.set(col, new Set());
  streams.get(col).add(client);
  ctx.req.on('close', () => { const s = streams.get(col); if (s) s.delete(client); });
  ctx.streaming = true;
});
// Một kết nối theo dõi nhiều bộ sưu tập cùng lúc: /api/stream?c=a,b,c
function watchCols(ctx) {
  const cols = [...new Set(String(ctx.query.get('c') || '').split(',').map((x) => x.trim()).filter(Boolean))];
  if (!cols.length || cols.length > 30) fail(400, 'Cần từ 1 đến 30 bộ sưu tập', 'bad-query');
  for (const col of cols) {
    checkCol(col);
    const level = ruleFor(col).read;
    if (level !== 'public' && !ctx.user) throw denied(null);
    if (level === 'teacher' && !hasRole(ctx.user, 'teacher')) throw denied(ctx.user);
    if (level === 'admin' && !hasRole(ctx.user, 'admin')) throw denied(ctx.user);
  }
  return cols;
}
// Hỏi định kỳ các thay đổi sau số thứ tự `after` (thay cho SSE khi bị chặn)
route('GET', '/api/changes', (ctx) => {
  const cols = new Set(watchCols(ctx));
  const after = ctx.query.has('after') ? parseInt(ctx.query.get('after'), 10) : NaN;
  if (!Number.isFinite(after)) return json(ctx.res, 200, { seq: changeSeq, events: [] });
  const oldest = changeLog.length ? changeLog[0].seq : changeSeq + 1;
  if (after < oldest - 1 || after > changeSeq) return json(ctx.res, 200, { seq: changeSeq, reset: true, events: [] });
  const events = []; let last = after;
  let i = changeLog.length - (changeSeq - after);
  for (; i < changeLog.length && events.length < 1000; i++) {
    const e = changeLog.at(i);
    last = e.seq;
    if (!cols.has(e.col)) continue;
    if (!allowed(ruleFor(e.col).read, ctx.user, { owner: e.doc.owner, id: e.doc.id })) continue;
    events.push({ type: e.type, doc: e.doc, collection: e.col });
  }
  json(ctx.res, 200, { seq: last, events, more: last < changeSeq });
});
route('GET', '/api/stream', (ctx) => {
  const cols = watchCols(ctx);
  ctx.res.writeHead(200, { 'Content-Type': 'text/event-stream; charset=utf-8', 'Cache-Control': 'no-store, no-transform', Connection: 'keep-alive', 'X-Accel-Buffering': 'no' });
  ctx.res.write(':' + ' '.repeat(2048) + '\n\n'); // đệm để proxy không giữ lại dữ liệu
  ctx.res.write(`event: ready\ndata: ${JSON.stringify({ collections: cols })}\n\n`);
  const client = { res: ctx.res, user: ctx.user, token: ctx.token };
  for (const col of cols) { if (!streams.has(col)) streams.set(col, new Set()); streams.get(col).add(client); }
  ctx.req.on('close', () => { for (const col of cols) { const s = streams.get(col); if (s) s.delete(client); } });
  ctx.streaming = true;
});
route('POST', '/api/db/batch', async (ctx) => {
  const b = await readJson(ctx.req, 10 * 1024 * 1024);
  const ops = Array.isArray(b.ops) ? b.ops : [];
  if (!ops.length) fail(400, 'Danh sách thao tác trống', 'bad-data');
  if (ops.length > 500) fail(400, 'Mỗi lần tối đa 500 thao tác', 'bad-data');
  const results = tx(() => ops.map((op) => {
    switch (op.op) {
      case 'add': return writeDoc(ctx.user, op.collection, null, 'create', op.data);
      case 'create': return writeDoc(ctx.user, op.collection, op.id, 'create', op.data);
      case 'set': return writeDoc(ctx.user, op.collection, op.id, op.merge ? 'merge' : 'set', op.data);
      case 'update': return writeDoc(ctx.user, op.collection, op.id, 'update', op.data);
      case 'delete': return deleteDoc(ctx.user, op.collection, op.id);
      default: fail(400, `Thao tác không hỗ trợ: ${op.op}`, 'bad-op');
    }
  }));
  json(ctx.res, 200, { results });
});
route('GET', '/api/db/:col/:id', (ctx) => json(ctx.res, 200, readDoc(ctx.user, ctx.params.col, ctx.params.id)));
route('POST', '/api/db/:col', async (ctx) => json(ctx.res, 201, writeDoc(ctx.user, ctx.params.col, null, 'create', await readJson(ctx.req))));
route('PUT', '/api/db/:col/:id', async (ctx) => {
  const merge = ctx.query.get('merge') === '1';
  json(ctx.res, 200, writeDoc(ctx.user, ctx.params.col, ctx.params.id, merge ? 'merge' : 'set', await readJson(ctx.req)));
});
route('PATCH', '/api/db/:col/:id', async (ctx) => json(ctx.res, 200, writeDoc(ctx.user, ctx.params.col, ctx.params.id, 'update', await readJson(ctx.req))));
route('DELETE', '/api/db/:col/:id', (ctx) => json(ctx.res, 200, deleteDoc(ctx.user, ctx.params.col, ctx.params.id)));

// ───────────── Lưu trữ file ─────────────
function cleanFileName(s) {
  const n = String(s || '').replace(/[\u0000-\u001f\\/:*?"<>|]/g, '_').trim().slice(0, 200);
  return n || 'file';
}
function cleanFolder(s) {
  return String(s || '').split('/').map((p) => p.replace(/[\u0000-\u001f\\:*?"<>|]/g, '').trim()).filter((p) => p && p !== '.' && p !== '..').join('/').slice(0, 200);
}
function fileOut(f, withUrl = true) {
  const out = { id: f.id, name: f.name, mime: f.mime, size: f.size, folder: f.folder, public: !!f.public, owner: f.owner, createdAt: f.created_at };
  if (withUrl) out.url = `/files/${f.id}/${encodeURIComponent(f.name)}`;
  return out;
}
function canSeeFile(user, f) { return !!f.public || (user && (user.uid === f.owner || hasRole(user, 'teacher'))); }
function canEditFile(user, f) { return !!user && (user.uid === f.owner || user.role === 'admin'); }

route('POST', '/api/storage', async (ctx) => {
  const u = requireAuth(ctx);
  if (!hasRole(u, settings.uploadRole)) fail(403, 'Tài khoản của bạn chưa được phép tải file lên', 'permission-denied');
  const h = ctx.req.headers;
  const rawName = h['x-file-name'] ? decodeURIComponent(String(h['x-file-name'])) : ctx.query.get('name');
  const name = cleanFileName(rawName);
  const folder = cleanFolder(h['x-folder'] ? decodeURIComponent(String(h['x-folder'])) : ctx.query.get('folder'));
  const isPublic = ['1', 'true'].includes(String(h['x-public'] ?? ctx.query.get('public') ?? '0'));
  let mime = String(h['content-type'] || '').split(';')[0].trim().toLowerCase();
  if (!mime || mime === 'application/octet-stream' || mime === 'application/x-www-form-urlencoded') mime = (MIME[path.extname(name).toLowerCase()] || 'application/octet-stream').split(';')[0];
  const max = settings.maxFileMB * 1024 * 1024;
  const declared = parseInt(h['content-length'] || '0', 10);
  if (declared > max) fail(413, `File vượt quá giới hạn ${settings.maxFileMB} MB`, 'too-large');
  let quotaLeft = Infinity;
  if (u.role !== 'admin') {
    const used = stmt('SELECT COALESCE(SUM(size), 0) AS n FROM files WHERE owner = ?').get(u.uid).n;
    quotaLeft = settings.userQuotaMB * 1024 * 1024 - used;
    if (declared > quotaLeft || quotaLeft <= 0) fail(413, `Bạn đã dùng hết dung lượng ${settings.userQuotaMB} MB`, 'quota-exceeded');
  }
  const limit = Math.min(max, quotaLeft);
  const id = newId();
  const tmp = path.join(TMP_DIR, id);
  let size = 0;
  const hash = crypto.createHash('sha256');
  try {
    await new Promise((resolve, reject) => {
      const out = fs.createWriteStream(tmp);
      let failed = null;
      ctx.req.on('data', (chunk) => {
        if (failed) return; // đọc bỏ phần còn lại để trả được thông báo lỗi
        size += chunk.length;
        if (size > limit) {
          failed = new HttpError(413, size > max ? `File vượt quá giới hạn ${settings.maxFileMB} MB` : 'Bạn đã dùng hết dung lượng', 'too-large');
          out.destroy();
          ctx.req.resume();
          return;
        }
        hash.update(chunk);
        if (!out.write(chunk)) { ctx.req.pause(); out.once('drain', () => ctx.req.resume()); }
      });
      ctx.req.on('end', () => { if (failed) reject(failed); else out.end(resolve); });
      ctx.req.on('aborted', () => reject(new HttpError(400, 'Tải file bị gián đoạn', 'upload-failed')));
      ctx.req.on('error', () => reject(new HttpError(400, 'Tải file thất bại', 'upload-failed')));
      out.on('error', (e) => { if (!failed) reject(e); });
    });
  } catch (e) {
    await fsp.rm(tmp, { force: true });
    throw e instanceof HttpError ? e : new HttpError(500, 'Không ghi được file', 'upload-failed');
  }
  if (!size) { await fsp.rm(tmp, { force: true }); fail(400, 'File rỗng', 'empty-file'); }
  await fsp.rename(tmp, path.join(FILES_DIR, id));
  const f = { id, owner: u.uid, name, mime, size, folder, public: isPublic ? 1 : 0, sha256: hash.digest('hex'), created_at: Date.now() };
  stmt('INSERT INTO files(id, owner, name, mime, size, folder, public, sha256, created_at) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)')
    .run(f.id, f.owner, f.name, f.mime, f.size, f.folder, f.public, f.sha256, f.created_at);
  counters.writes++;
  json(ctx.res, 201, fileOut(f));
});
route('GET', '/api/storage', (ctx) => {
  const u = requireAuth(ctx);
  const where = []; const args = [];
  if (!hasRole(u, 'teacher') || ctx.query.get('mine') === '1') {
    if (ctx.query.get('mine') === '1') { where.push('owner = ?'); args.push(u.uid); }
    else { where.push('(owner = ? OR public = 1)'); args.push(u.uid); }
  }
  if (ctx.query.has('folder')) { where.push('folder = ?'); args.push(cleanFolder(ctx.query.get('folder'))); }
  const q = (ctx.query.get('q') || '').trim();
  if (q) { where.push('name LIKE ?'); args.push(`%${q}%`); }
  const w = where.length ? 'WHERE ' + where.join(' AND ') : '';
  const limit = Math.min(1000, Math.max(1, parseInt(ctx.query.get('limit') || '100', 10)));
  const offset = Math.max(0, parseInt(ctx.query.get('offset') || '0', 10));
  const total = stmt(`SELECT COUNT(*) AS n FROM files ${w}`).get(...args).n;
  const rows = stmt(`SELECT * FROM files ${w} ORDER BY created_at DESC LIMIT ? OFFSET ?`).all(...args, limit, offset);
  const used = stmt('SELECT COALESCE(SUM(size), 0) AS n FROM files WHERE owner = ?').get(u.uid).n;
  const folders = stmt(`SELECT folder, COUNT(*) AS n FROM files ${w ? w + ' AND' : 'WHERE'} folder <> '' GROUP BY folder ORDER BY folder`).all(...args);
  json(ctx.res, 200, {
    total, items: rows.map((r) => fileOut(r)), limit, offset, folders,
    usedBytes: used, quotaBytes: u.role === 'admin' ? null : settings.userQuotaMB * 1024 * 1024
  });
});
route('GET', '/api/storage/:id', (ctx) => {
  const f = stmt('SELECT * FROM files WHERE id = ?').get(ctx.params.id);
  if (!f || !canSeeFile(ctx.user, f)) fail(404, 'Không tìm thấy file', 'not-found');
  json(ctx.res, 200, fileOut(f));
});
route('GET', '/api/storage/:id/url', (ctx) => {
  const f = stmt('SELECT * FROM files WHERE id = ?').get(ctx.params.id);
  if (!f || !canSeeFile(ctx.user, f)) fail(404, 'Không tìm thấy file', 'not-found');
  const base = `/files/${f.id}/${encodeURIComponent(f.name)}`;
  if (f.public) return json(ctx.res, 200, { url: base, expires: null });
  const hours = Math.min(168, Math.max(1, parseInt(ctx.query.get('hours') || '12', 10)));
  const { exp, sig } = signFileUrl(f.id, hours);
  json(ctx.res, 200, { url: `${base}?exp=${exp}&sig=${sig}`, expires: exp * 1000 });
});
route('PATCH', '/api/storage/:id', async (ctx) => {
  const f = stmt('SELECT * FROM files WHERE id = ?').get(ctx.params.id);
  if (!f) fail(404, 'Không tìm thấy file', 'not-found');
  if (!canEditFile(ctx.user, f)) throw denied(ctx.user);
  const b = await readJson(ctx.req);
  if ('name' in b) f.name = cleanFileName(b.name);
  if ('folder' in b) f.folder = cleanFolder(b.folder);
  if ('public' in b) f.public = b.public ? 1 : 0;
  stmt('UPDATE files SET name = ?, folder = ?, public = ? WHERE id = ?').run(f.name, f.folder, f.public, f.id);
  json(ctx.res, 200, fileOut(f));
});
route('DELETE', '/api/storage/:id', async (ctx) => {
  const f = stmt('SELECT * FROM files WHERE id = ?').get(ctx.params.id);
  if (!f) fail(404, 'Không tìm thấy file', 'not-found');
  if (!canEditFile(ctx.user, f)) throw denied(ctx.user);
  stmt('DELETE FROM files WHERE id = ?').run(f.id);
  await fsp.rm(path.join(FILES_DIR, f.id), { force: true });
  counters.writes++;
  json(ctx.res, 200, { id: f.id, deleted: true });
});

async function serveFile(ctx, id) {
  const f = stmt('SELECT * FROM files WHERE id = ?').get(id);
  if (!f) fail(404, 'Không tìm thấy file', 'not-found');
  const signed = checkFileSig(f.id, ctx.query.get('exp'), ctx.query.get('sig'));
  if (!f.public && !signed) {
    if (!ctx.user) fail(401, 'File này cần đăng nhập để xem', 'unauthenticated');
    if (!canSeeFile(ctx.user, f)) fail(404, 'Không tìm thấy file', 'not-found');
  }
  const p = path.join(FILES_DIR, f.id);
  const st = await fsp.stat(p).catch(() => null);
  if (!st) fail(404, 'File không còn trên máy chủ', 'not-found');
  const inline = INLINE_SAFE.test(f.mime) && ctx.query.get('download') !== '1';
  const headers = {
    'Content-Type': f.mime.startsWith('text/') && !f.mime.includes('charset') ? f.mime + '; charset=utf-8' : f.mime,
    'Accept-Ranges': 'bytes',
    'X-Content-Type-Options': 'nosniff',
    'Content-Disposition': `${inline ? 'inline' : 'attachment'}; filename="${f.name.replace(/[^\x20-\x7e]|"/g, '_')}"; filename*=UTF-8''${encodeURIComponent(f.name)}`,
    'Cache-Control': f.public ? 'public, max-age=86400' : 'private, max-age=3600',
    ETag: `"${f.sha256 || f.id}"`
  };
  if (!inline) headers['Content-Security-Policy'] = "default-src 'none'; sandbox";
  if (ctx.req.headers['if-none-match'] === headers.ETag) { ctx.res.writeHead(304, headers); return ctx.res.end(); }
  const range = /^bytes=(\d*)-(\d*)$/.exec(ctx.req.headers.range || '');
  let start = 0; let end = st.size - 1; let status = 200;
  if (range && (range[1] || range[2])) {
    if (range[1]) { start = parseInt(range[1], 10); end = range[2] ? Math.min(parseInt(range[2], 10), st.size - 1) : st.size - 1; }
    else { start = Math.max(0, st.size - parseInt(range[2], 10)); }
    if (start > end || start >= st.size) { ctx.res.writeHead(416, { 'Content-Range': `bytes */${st.size}` }); return ctx.res.end(); }
    status = 206;
    headers['Content-Range'] = `bytes ${start}-${end}/${st.size}`;
  }
  headers['Content-Length'] = end - start + 1;
  ctx.res.writeHead(status, headers);
  if (ctx.req.method === 'HEAD') return ctx.res.end();
  await pipeline(fs.createReadStream(p, { start, end }), ctx.res).catch(() => {});
}
route('GET', '/files/:id', (ctx) => serveFile(ctx, ctx.params.id));
route('GET', '/files/:id/:name', (ctx) => serveFile(ctx, ctx.params.id));

// ───────────── Thống kê (quản trị viên) ─────────────
route('GET', '/api/admin/stats', async (ctx) => {
  requireRole(ctx, 'admin');
  flushStats();
  const days = lastDays(30);
  const since = Date.now() - 31 * 86400000;
  const signups = {};
  for (const r of stmt('SELECT created_at FROM users WHERE created_at >= ?').all(since)) {
    const d = dayKey(r.created_at); signups[d] = (signups[d] || 0) + 1;
  }
  const active = {};
  for (const r of stmt('SELECT day, COUNT(*) AS n FROM activity WHERE day >= ? GROUP BY day').all(days[0])) active[r.day] = r.n;
  const daily = {};
  for (const r of stmt('SELECT * FROM stats_daily WHERE day >= ?').all(days[0])) daily[r.day] = r;
  const byRole = { student: 0, teacher: 0, admin: 0 };
  for (const r of stmt('SELECT role, COUNT(*) AS n FROM users GROUP BY role').all()) byRole[r.role] = r.n;
  const distinctSince = (n) => stmt('SELECT COUNT(DISTINCT uid) AS n FROM activity WHERE day >= ?').get(dayKey(Date.now() - (n - 1) * 86400000)).n;
  const collections = stmt('SELECT collection AS name, COUNT(*) AS count, SUM(LENGTH(data)) AS bytes, MAX(updated_at) AS lastUpdated FROM docs GROUP BY collection ORDER BY count DESC').all();
  const fileStats = stmt('SELECT COUNT(*) AS n, COALESCE(SUM(size), 0) AS bytes FROM files').get();
  const fileTypes = stmt(`SELECT CASE
      WHEN mime LIKE 'image/%' THEN 'Hình ảnh' WHEN mime LIKE 'audio/%' THEN 'Âm thanh' WHEN mime LIKE 'video/%' THEN 'Video'
      WHEN mime = 'application/pdf' THEN 'PDF' WHEN mime LIKE '%presentation%' OR mime LIKE '%powerpoint%' THEN 'PowerPoint'
      WHEN mime LIKE '%word%' THEN 'Word' WHEN mime LIKE '%sheet%' OR mime LIKE '%excel%' THEN 'Excel' ELSE 'Khác' END AS type,
      COUNT(*) AS n, SUM(size) AS bytes FROM files GROUP BY type ORDER BY bytes DESC`).all();
  let dbBytes = 0;
  for (const f of [DB_PATH, DB_PATH + '-wal']) dbBytes += (await fsp.stat(f).catch(() => ({ size: 0 }))).size;
  let diskFree = null;
  try { const s = await fsp.statfs(DATA_DIR); diskFree = s.bavail * s.bsize; } catch {}
  const recentUsers = stmt('SELECT * FROM users ORDER BY created_at DESC LIMIT 6').all().map((u) => publicUser(u));
  const today = dayKey();
  json(ctx.res, 200, {
    users: {
      total: byRole.student + byRole.teacher + byRole.admin, byRole,
      disabled: stmt('SELECT COUNT(*) AS n FROM users WHERE disabled = 1').get().n,
      newToday: signups[today] || 0,
      new7d: days.slice(-7).reduce((a, d) => a + (signups[d] || 0), 0)
    },
    active: { today: active[today] || 0, d7: distinctSince(7), d30: distinctSince(30) },
    docs: { total: collections.reduce((a, c) => a + c.count, 0), bytes: collections.reduce((a, c) => a + (c.bytes || 0), 0), collections },
    storage: { files: fileStats.n, bytes: fileStats.bytes, types: fileTypes },
    system: { dbBytes, diskFree, version: VERSION, node: process.version, uptime: Math.round((Date.now() - startedAt) / 1000), dataDir: DATA_DIR },
    daily: days.map((d) => ({
      day: d, signups: signups[d] || 0, active: active[d] || 0,
      requests: daily[d]?.requests || 0, reads: daily[d]?.reads || 0, writes: daily[d]?.writes || 0
    })),
    recentUsers
  });
});

route('GET', '/api/admin/collections', (ctx) => {
  requireRole(ctx, 'admin');
  const rows = stmt('SELECT collection AS name, COUNT(*) AS count, SUM(LENGTH(data)) AS bytes, MAX(updated_at) AS lastUpdated FROM docs GROUP BY collection ORDER BY name').all();
  const names = new Set(rows.map((r) => r.name));
  for (const n of Object.keys(rules.collections)) if (!names.has(n)) rows.push({ name: n, count: 0, bytes: 0, lastUpdated: null });
  rows.sort((a, b) => a.name.localeCompare(b.name));
  for (const r of rows) { r.rule = ruleFor(r.name); r.custom = !!rules.collections[r.name]; }
  json(ctx.res, 200, { collections: rows, default: rules.default });
});
route('DELETE', '/api/admin/collections/:col', (ctx) => {
  requireRole(ctx, 'admin');
  checkCol(ctx.params.col);
  const r = stmt('DELETE FROM docs WHERE collection = ?').run(ctx.params.col);
  counters.writes += Number(r.changes);
  json(ctx.res, 200, { deleted: Number(r.changes) });
});

// ───────────── Cài đặt & quy tắc ─────────────
route('GET', '/api/admin/settings', (ctx) => { requireRole(ctx, 'admin'); json(ctx.res, 200, { settings, defaults: DEFAULT_SETTINGS }); });
route('PUT', '/api/admin/settings', async (ctx) => {
  requireRole(ctx, 'admin');
  settings = sanitizeSettings(await readJson(ctx.req));
  saveSetting('settings', settings);
  json(ctx.res, 200, { settings });
});
route('GET', '/api/admin/rules', (ctx) => { requireRole(ctx, 'admin'); json(ctx.res, 200, { rules, levels: RULE_LEVELS }); });
route('PUT', '/api/admin/rules', async (ctx) => {
  requireRole(ctx, 'admin');
  rules = sanitizeRules(await readJson(ctx.req));
  saveSetting('rules', rules);
  json(ctx.res, 200, { rules });
});

// ───────────── Sao lưu & xuất dữ liệu ─────────────
function buildBackup() {
  flushStats();
  return {
    format: 'nanabase-backup', version: VERSION, createdAt: Date.now(),
    settings, rules,
    users: stmt('SELECT * FROM users ORDER BY created_at').all().map((u) => ({ ...u, meta: parseJsonSafe(u.meta, {}) })),
    docs: stmt('SELECT * FROM docs ORDER BY collection, created_at').all().map((d) => ({ ...d, data: parseJsonSafe(d.data, {}) })),
    files: stmt('SELECT * FROM files ORDER BY created_at').all()
  };
}
route('GET', '/api/admin/backup', (ctx) => {
  requireRole(ctx, 'admin');
  const buf = Buffer.from(JSON.stringify(buildBackup()), 'utf8');
  const stamp = stampLocal();
  sendDownload(ctx.res, ctx.query.get('gzip') === '1' ? zlib.gzipSync(buf) : buf, `nanabase-backup-${stamp}.json${ctx.query.get('gzip') === '1' ? '.gz' : ''}`, ctx.query.get('gzip') === '1' ? 'application/gzip' : 'application/json');
});
route('POST', '/api/admin/restore', async (ctx) => {
  const me = requireRole(ctx, 'admin');
  let buf = await readBody(ctx.req, 1024 * 1024 * 1024);
  if (buf[0] === 0x1f && buf[1] === 0x8b) buf = zlib.gunzipSync(buf);
  const data = parseJsonSafe(buf.toString('utf8'), null);
  if (!data || data.format !== 'nanabase-backup') fail(400, 'File sao lưu không đúng định dạng NanaBase', 'bad-backup');
  const mode = ctx.query.get('mode') === 'replace' ? 'replace' : 'merge';
  const users = Array.isArray(data.users) ? data.users : [];
  const docs = Array.isArray(data.docs) ? data.docs : [];
  const files = Array.isArray(data.files) ? data.files : [];
  if (mode === 'replace' && !users.some((u) => u.role === 'admin' && !u.disabled)) fail(400, 'File sao lưu không có tài khoản quản trị nào, không thể thay thế toàn bộ', 'bad-backup');
  // tạo bản sao lưu an toàn trước khi khôi phục
  await snapshot('truoc-khoi-phuc');
  const result = { users: 0, docs: 0, files: 0, missingFiles: 0 };
  tx(() => {
    if (mode === 'replace') { db.exec('DELETE FROM users; DELETE FROM docs; DELETE FROM files; DELETE FROM activity;'); }
    const up = stmt(`INSERT INTO users(uid, email, name, name_key, grp, pass_hash, role, disabled, token_ver, created_at, last_login, meta) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(uid) DO UPDATE SET email = excluded.email, name = excluded.name, name_key = excluded.name_key, grp = excluded.grp, pass_hash = excluded.pass_hash,
      role = excluded.role, disabled = excluded.disabled, token_ver = excluded.token_ver, created_at = excluded.created_at, last_login = excluded.last_login, meta = excluded.meta`);
    for (const u of users) {
      const email = u.email ? String(u.email).toLowerCase() : null;
      if (!u.uid || !u.pass_hash || (email && !isEmail(email)) || (!email && !cleanName(u.name))) continue;
      if (email && stmt('SELECT uid FROM users WHERE email = ? AND uid <> ?').get(email, u.uid)) continue;
      up.run(String(u.uid), email, cleanName(u.name), nameKeyOf(u.name), cleanGroup(u.grp), String(u.pass_hash), ROLES.includes(u.role) ? u.role : 'student',
        u.disabled ? 1 : 0, Number(u.token_ver) || 1, Number(u.created_at) || Date.now(), u.last_login ? Number(u.last_login) : null, JSON.stringify(u.meta || {}));
      result.users++;
    }
    const dp = stmt(`INSERT INTO docs(collection, id, owner, data, created_at, updated_at) VALUES(?, ?, ?, ?, ?, ?)
      ON CONFLICT(collection, id) DO UPDATE SET owner = excluded.owner, data = excluded.data, created_at = excluded.created_at, updated_at = excluded.updated_at`);
    for (const d of docs) {
      if (!COL_RE.test(d.collection || '') || !ID_RE.test(d.id || '')) continue;
      dp.run(d.collection, d.id, d.owner || null, JSON.stringify(d.data ?? {}), Number(d.created_at) || Date.now(), Number(d.updated_at) || Date.now());
      result.docs++;
    }
    const fp = stmt(`INSERT INTO files(id, owner, name, mime, size, folder, public, sha256, created_at) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(id) DO UPDATE SET owner = excluded.owner, name = excluded.name, mime = excluded.mime, size = excluded.size,
      folder = excluded.folder, public = excluded.public, sha256 = excluded.sha256, created_at = excluded.created_at`);
    for (const f of files) {
      if (!f.id || !/^[A-Za-z0-9]{10,40}$/.test(f.id)) continue;
      if (!fs.existsSync(path.join(FILES_DIR, f.id))) { result.missingFiles++; continue; }
      fp.run(f.id, f.owner || null, cleanFileName(f.name), String(f.mime || 'application/octet-stream'), Number(f.size) || 0, cleanFolder(f.folder), f.public ? 1 : 0, f.sha256 || null, Number(f.created_at) || Date.now());
      result.files++;
    }
  });
  if (data.rules && ctx.query.get('rules') !== '0') { rules = sanitizeRules(data.rules); saveSetting('rules', rules); }
  if (data.settings && ctx.query.get('settings') !== '0') { settings = sanitizeSettings(data.settings); saveSetting('settings', settings); }
  const stillAdmin = stmt('SELECT role, disabled FROM users WHERE uid = ?').get(me.uid);
  json(ctx.res, 200, { mode, ...result, sessionValid: !!(stillAdmin && stillAdmin.role === 'admin' && !stillAdmin.disabled) });
});

async function snapshot(label = 'tu-dong') {
  flushStats();
  const stamp = stampLocal();
  const file = path.join(BACKUP_DIR, `nanabase-${stamp}-${label}.db`);
  await fsp.rm(file, { force: true });
  db.exec(`VACUUM INTO '${file.replace(/'/g, "''")}'`);
  return path.basename(file);
}
async function listSnapshots() {
  const names = (await fsp.readdir(BACKUP_DIR)).filter((n) => n.endsWith('.db'));
  const out = [];
  for (const n of names) {
    const st = await fsp.stat(path.join(BACKUP_DIR, n));
    out.push({ name: n, size: st.size, createdAt: st.mtimeMs, auto: n.includes('-tu-dong') });
  }
  return out.sort((a, b) => b.createdAt - a.createdAt);
}
async function autoBackup() {
  if (!settings.autoBackup) return;
  try {
    const list = await listSnapshots();
    const autos = list.filter((s) => s.auto);
    if (!autos.some((s) => dayKey(s.createdAt) === dayKey())) {
      const name = await snapshot('tu-dong');
      console.log(`[NanaBase] Đã tự sao lưu: ${name}`);
      autos.unshift({ name });
    }
    for (const s of autos.slice(settings.backupKeep)) await fsp.rm(path.join(BACKUP_DIR, s.name), { force: true });
    // dọn dữ liệu hoạt động cũ hơn 400 ngày
    stmt('DELETE FROM activity WHERE day < ?').run(dayKey(Date.now() - 400 * 86400000));
  } catch (e) { console.error('[NanaBase] Lỗi tự sao lưu:', e.message); }
}
setInterval(autoBackup, 60 * 60 * 1000).unref();

route('GET', '/api/admin/backups', async (ctx) => { requireRole(ctx, 'admin'); json(ctx.res, 200, { backups: await listSnapshots(), dir: BACKUP_DIR }); });
route('POST', '/api/admin/backups', async (ctx) => { requireRole(ctx, 'admin'); json(ctx.res, 201, { name: await snapshot('thu-cong') }); });
function snapshotPath(name) {
  if (!/^nanabase-[\w-]+\.db$/.test(name)) fail(400, 'Tên bản sao lưu không hợp lệ', 'bad-name');
  return path.join(BACKUP_DIR, name);
}
route('GET', '/api/admin/backups/:name', async (ctx) => {
  requireRole(ctx, 'admin');
  const p = snapshotPath(ctx.params.name);
  const st = await fsp.stat(p).catch(() => null);
  if (!st) fail(404, 'Không tìm thấy bản sao lưu', 'not-found');
  ctx.res.writeHead(200, { 'Content-Type': 'application/octet-stream', 'Content-Length': st.size, 'Content-Disposition': `attachment; filename="${ctx.params.name}"` });
  await pipeline(fs.createReadStream(p), ctx.res).catch(() => {});
});
route('DELETE', '/api/admin/backups/:name', async (ctx) => {
  requireRole(ctx, 'admin');
  await fsp.rm(snapshotPath(ctx.params.name), { force: true });
  json(ctx.res, 200, { deleted: true });
});

// Xuất Excel / CSV
function crc32(buf) {
  if (typeof zlib.crc32 === 'function') return zlib.crc32(buf) >>> 0;
  let c, crc = 0xffffffff;
  for (let n = 0; n < buf.length; n++) {
    c = (crc ^ buf[n]) & 0xff;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    crc = (crc >>> 8) ^ c;
  }
  return (crc ^ 0xffffffff) >>> 0;
}
function makeZip(entries) {
  const locals = []; const centrals = []; let offset = 0;
  const d = new Date();
  const dosTime = (d.getHours() << 11) | (d.getMinutes() << 5) | (d.getSeconds() >> 1);
  const dosDate = ((d.getFullYear() - 1980) << 9) | ((d.getMonth() + 1) << 5) | d.getDate();
  for (const e of entries) {
    const name = Buffer.from(e.name, 'utf8');
    const raw = Buffer.isBuffer(e.data) ? e.data : Buffer.from(e.data, 'utf8');
    const comp = zlib.deflateRawSync(raw);
    const crc = crc32(raw);
    const lh = Buffer.alloc(30);
    lh.writeUInt32LE(0x04034b50, 0); lh.writeUInt16LE(20, 4); lh.writeUInt16LE(0x0800, 6); lh.writeUInt16LE(8, 8);
    lh.writeUInt16LE(dosTime, 10); lh.writeUInt16LE(dosDate, 12); lh.writeUInt32LE(crc, 14);
    lh.writeUInt32LE(comp.length, 18); lh.writeUInt32LE(raw.length, 22); lh.writeUInt16LE(name.length, 26); lh.writeUInt16LE(0, 28);
    const ch = Buffer.alloc(46);
    ch.writeUInt32LE(0x02014b50, 0); ch.writeUInt16LE(20, 4); ch.writeUInt16LE(20, 6); ch.writeUInt16LE(0x0800, 8); ch.writeUInt16LE(8, 10);
    ch.writeUInt16LE(dosTime, 12); ch.writeUInt16LE(dosDate, 14); ch.writeUInt32LE(crc, 16); ch.writeUInt32LE(comp.length, 20);
    ch.writeUInt32LE(raw.length, 24); ch.writeUInt16LE(name.length, 28); ch.writeUInt32LE(offset, 42);
    locals.push(lh, name, comp);
    centrals.push(ch, name);
    offset += lh.length + name.length + comp.length;
  }
  const cd = Buffer.concat(centrals);
  const end = Buffer.alloc(22);
  end.writeUInt32LE(0x06054b50, 0); end.writeUInt16LE(entries.length, 8); end.writeUInt16LE(entries.length, 10);
  end.writeUInt32LE(cd.length, 12); end.writeUInt32LE(offset, 16);
  return Buffer.concat([...locals, cd, end]);
}
function xmlEsc(s) {
  return String(s).replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g, '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function colName(i) { let s = ''; i++; while (i > 0) { const m = (i - 1) % 26; s = String.fromCharCode(65 + m) + s; i = Math.floor((i - 1) / 26); } return s; }
function makeXlsx(sheetName, header, rows) {
  const widths = header.map((h, i) => Math.min(60, Math.max(String(h).length, ...rows.slice(0, 200).map((r) => String(r[i] ?? '').length)) + 2));
  const cell = (v, r, c, style = '') => {
    const ref = colName(c) + r;
    if (v === null || v === undefined || v === '') return '';
    if (typeof v === 'number' && Number.isFinite(v)) return `<c r="${ref}"${style}><v>${v}</v></c>`;
    if (typeof v === 'boolean') return `<c r="${ref}" t="b"${style}><v>${v ? 1 : 0}</v></c>`;
    return `<c r="${ref}" t="inlineStr"${style}><is><t xml:space="preserve">${xmlEsc(String(v).slice(0, 32000))}</t></is></c>`;
  };
  const sheetRows = [`<row r="1">${header.map((h, c) => cell(h, 1, c, ' s="1"')).join('')}</row>`];
  rows.forEach((r, i) => sheetRows.push(`<row r="${i + 2}">${r.map((v, c) => cell(v, i + 2, c)).join('')}</row>`));
  const sheet = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><sheetViews><sheetView workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews><cols>${widths.map((w, i) => `<col min="${i + 1}" max="${i + 1}" width="${w}" customWidth="1"/>`).join('')}</cols><sheetData>${sheetRows.join('')}</sheetData></worksheet>`;
  const safeSheet = xmlEsc(String(sheetName).replace(/[\\/?*[\]:]/g, ' ').slice(0, 31) || 'Sheet1');
  return makeZip([
    { name: '[Content_Types].xml', data: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/></Types>' },
    { name: '_rels/.rels', data: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>' },
    { name: 'xl/workbook.xml', data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="${safeSheet}" sheetId="1" r:id="rId1"/></sheets></workbook>` },
    { name: 'xl/_rels/workbook.xml.rels', data: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>' },
    { name: 'xl/styles.xml', data: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><fonts count="2"><font><sz val="11"/><name val="Calibri"/></font><font><b/><sz val="11"/><name val="Calibri"/></font></fonts><fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills><borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs><cellXfs count="2"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/><xf numFmtId="0" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1"/></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles></styleSheet>' },
    { name: 'xl/worksheets/sheet1.xml', data: sheet }
  ]);
}
function makeCsv(header, rows) {
  const esc = (v) => { const s = v === null || v === undefined ? '' : String(v); return /[",\r\n;]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; };
  return Buffer.from('﻿' + [header, ...rows].map((r) => r.map(esc).join(',')).join('\r\n'), 'utf8');
}
const ROLE_VI = { student: 'Học viên', teacher: 'Giáo viên', admin: 'Quản trị viên' };
function exportTable(kind, col) {
  if (kind === 'users') {
    const header = ['Mã người dùng', 'Họ tên', 'Lớp', 'Email', 'Vai trò', 'Trạng thái', 'Ngày tạo', 'Đăng nhập gần nhất'];
    const rows = stmt('SELECT * FROM users ORDER BY grp, name_key').all().map((u) => [u.uid, u.name, u.grp || '', u.email || '', ROLE_VI[u.role] || u.role, u.disabled ? 'Đã khóa' : 'Hoạt động', fmtDate(u.created_at), fmtDate(u.last_login)]);
    return { name: 'nguoi-dung', sheet: 'Người dùng', header, rows };
  }
  checkCol(col);
  const docs = stmt('SELECT * FROM docs WHERE collection = ? ORDER BY created_at').all(col);
  const emails = new Map(stmt('SELECT uid, email, name, grp FROM users').all().map((u) => [u.uid, u.email || (u.name + (u.grp ? ' – ' + u.grp : ''))]));
  const keys = [];
  const parsed = docs.map((d) => { const data = parseJsonSafe(d.data, {}); for (const k of Object.keys(data)) if (!keys.includes(k) && keys.length < 200) keys.push(k); return { d, data }; });
  const header = ['id', 'Người tạo', 'Ngày tạo', 'Cập nhật', ...keys];
  const rows = parsed.map(({ d, data }) => [d.id, emails.get(d.owner) || d.owner || '', fmtDate(d.created_at), fmtDate(d.updated_at),
    ...keys.map((k) => { const v = data[k]; return v !== null && typeof v === 'object' ? JSON.stringify(v) : v; })]);
  return { name: col, sheet: col, header, rows };
}
route('GET', '/api/admin/export/:kind', (ctx) => {
  requireRole(ctx, 'admin');
  const m = /^(users|collection)\.(xlsx|csv)$/.exec(ctx.params.kind);
  if (!m) fail(404, 'Không hỗ trợ kiểu xuất này', 'not-found');
  const t = exportTable(m[1], ctx.query.get('collection'));
  const stamp = dayKey();
  if (m[2] === 'xlsx') sendDownload(ctx.res, makeXlsx(t.sheet, t.header, t.rows), `${t.name}-${stamp}.xlsx`, MIME['.xlsx']);
  else sendDownload(ctx.res, makeCsv(t.header, t.rows), `${t.name}-${stamp}.csv`, 'text/csv; charset=utf-8');
});

// ───────────── File tĩnh (trang quản trị, demo, sdk) ─────────────
async function serveStatic(ctx) {
  let p = decodeURIComponent(ctx.url.pathname);
  if (p === '/') { ctx.res.writeHead(302, { Location: '/admin/' }); return ctx.res.end(); }
  const full = path.resolve(PUBLIC_DIR, '.' + p);
  if (!full.startsWith(PUBLIC_DIR)) fail(404, 'Không tìm thấy', 'not-found');
  let st = await fsp.stat(full).catch(() => null);
  let file = full;
  if (st && st.isDirectory()) {
    if (!p.endsWith('/')) { ctx.res.writeHead(301, { Location: p + '/' }); return ctx.res.end(); }
    file = path.join(full, 'index.html');
    st = await fsp.stat(file).catch(() => null);
  }
  if (!st || !st.isFile()) fail(404, 'Không tìm thấy trang', 'not-found');
  const type = MIME[path.extname(file).toLowerCase()] || 'application/octet-stream';
  const headers = { 'Content-Type': type, 'Content-Length': st.size, 'Cache-Control': 'no-cache', 'X-Content-Type-Options': 'nosniff' };
  if (type.startsWith('text/html')) { headers['X-Frame-Options'] = 'SAMEORIGIN'; headers['Referrer-Policy'] = 'same-origin'; }
  ctx.res.writeHead(200, headers);
  if (ctx.req.method === 'HEAD') return ctx.res.end();
  await pipeline(fs.createReadStream(file), ctx.res).catch(() => {});
}

// ───────────── Máy chủ ─────────────
const server = http.createServer(async (req, res) => {
  counters.requests++;
  applyCors(req, res);
  if (req.method === 'OPTIONS') { res.writeHead(204); return res.end(); }
  let url;
  try { url = new URL(req.url, 'http://localhost'); } catch { return json(res, 400, { error: { code: 'bad-url', message: 'Địa chỉ không hợp lệ' } }); }
  const ctx = { req, res, url, query: url.searchParams, params: {}, user: null, token: null };
  try {
    const auth = req.headers.authorization || '';
    let token = auth.startsWith('Bearer ') ? auth.slice(7).trim() : null;
    if (!token && /\/stream\/?$/.test(url.pathname)) token = url.searchParams.get('token');
    if (token) {
      ctx.user = verifyToken(token);
      ctx.token = token;
      if (!ctx.user && url.pathname.startsWith('/api/') && !url.pathname.startsWith('/api/auth/login') && !url.pathname.startsWith('/api/auth/register'))
        fail(401, 'Phiên đăng nhập đã hết hạn, vui lòng đăng nhập lại', 'token-expired');
      if (ctx.user) markActive(ctx.user.uid);
    }
    const method = req.method === 'HEAD' ? 'GET' : req.method;
    for (const r of routes) {
      if (r.method !== method) continue;
      const m = r.re.exec(url.pathname);
      if (!m) continue;
      r.keys.forEach((k, i) => { ctx.params[k] = decodeURIComponent(m[i + 1]); });
      await r.handler(ctx);
      return;
    }
    if (url.pathname.startsWith('/api/')) fail(404, 'Không có API này', 'not-found');
    if (method !== 'GET') fail(405, 'Phương thức không hỗ trợ', 'method-not-allowed');
    await serveStatic(ctx);
  } catch (e) {
    if (ctx.streaming) return;
    const status = e instanceof HttpError ? e.status : 500;
    if (status === 500) console.error('[NanaBase] Lỗi:', e);
    if (res.headersSent) { try { res.end(); } catch {} return; }
    json(res, status, { error: { code: e.code || 'internal', message: status === 500 ? 'Lỗi máy chủ, vui lòng thử lại' : e.message } });
    if (status === 413) req.resume();
  }
});
server.requestTimeout = 0; // cho phép tải file lớn
server.headersTimeout = 60000;

// ───────────── Lệnh dòng lệnh ─────────────
async function cli(args) {
  const [cmd, a, b, c] = args;
  if (cmd === 'reset-password') {
    if (!a || !b) { console.log('Cách dùng: node server.js reset-password <email> <mật-khẩu-mới>'); process.exit(1); }
    const u = stmt('SELECT * FROM users WHERE email = ?').get(a.toLowerCase());
    if (!u) { console.log('Không tìm thấy email ' + a); process.exit(1); }
    checkPassword(b);
    stmt('UPDATE users SET pass_hash = ?, token_ver = token_ver + 1, disabled = 0 WHERE uid = ?').run(await hashPassword(b), u.uid);
    console.log(`Đã đặt lại mật khẩu cho ${u.email}`);
    process.exit(0);
  }
  if (cmd === 'create-admin') {
    if (!a || !b) { console.log('Cách dùng: node server.js create-admin <email> <mật-khẩu> [họ tên]'); process.exit(1); }
    const u = await createUser({ email: a, password: b, name: c || 'Quản trị viên', role: 'admin' });
    console.log(`Đã tạo quản trị viên ${u.email}`);
    process.exit(0);
  }
  if (cmd === 'backup') { console.log('Đã sao lưu: ' + (await snapshot('thu-cong'))); process.exit(0); }
  if (cmd && cmd !== 'start') {
    console.log('Lệnh hỗ trợ:\n  node server.js                       chạy máy chủ\n  node server.js reset-password <email> <mật-khẩu-mới>\n  node server.js create-admin <email> <mật-khẩu> [họ tên]\n  node server.js backup');
    process.exit(1);
  }
  return false;
}

(async () => {
  try { await cli(process.argv.slice(2)); }
  catch (e) { console.error(e.message); process.exit(1); }
  server.listen(PORT, HOST, () => {
    const lan = [];
    for (const list of Object.values(os.networkInterfaces())) for (const i of list || []) if (i.family === 'IPv4' && !i.internal) lan.push(i.address);
    console.log(`\n  NanaBase v${VERSION} đang chạy`);
    console.log(`  Trang quản trị : http://localhost:${PORT}/admin/`);
    for (const ip of lan) console.log(`  Trong mạng LAN : http://${ip}:${PORT}/admin/`);
    console.log(`  Trang demo     : http://localhost:${PORT}/demo.html`);
    console.log(`  Dữ liệu lưu tại: ${DATA_DIR}`);
    if (userCount() === 0) console.log('\n  → Lần đầu chạy: mở trang quản trị để tạo tài khoản quản trị viên.');
    console.log('\n  Nhấn Ctrl + C để dừng.\n');
    autoBackup();
  });
  server.on('error', (e) => {
    if (e.code === 'EADDRINUSE') console.error(`\n[NanaBase] Cổng ${PORT} đang được dùng. Hãy tắt chương trình khác hoặc chạy với cổng khác, ví dụ: PORT=8081 node server.js\n`);
    else console.error(e);
    process.exit(1);
  });
})();

function shutdown() {
  try { flushStats(); } catch {}
  for (const set of streams.values()) for (const c of set) { try { c.res.end(); } catch {} }
  server.close();
  try { db.close(); } catch {}
  process.exit(0);
}
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

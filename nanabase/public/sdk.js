/*!
 * NanaBase SDK — thư viện kết nối các app HTML với máy chủ NanaBase
 * Dùng:  <script src="http://DIA-CHI-MAY-CHU:8080/sdk.js"></script>
 *        const nb = NanaBase.init('http://DIA-CHI-MAY-CHU:8080');
 */
(function (global) {
  'use strict';

  class NanaBaseError extends Error {
    constructor(message, code, status) { super(message); this.name = 'NanaBaseError'; this.code = code; this.status = status; }
  }

  const store = {
    get(k) { try { return global.localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { global.localStorage.setItem(k, v); } catch (e) {} },
    del(k) { try { global.localStorage.removeItem(k); } catch (e) {} }
  };

  function op(name, extra) { return Object.assign({ $op: name }, extra || {}); }

  function App(baseUrl) {
    const base = String(baseUrl || (global.location ? global.location.origin : '')).replace(/\/+$/, '');
    const key = 'nanabase:' + base;
    const app = this;
    let token = store.get(key + ':token');
    let user = null;
    try { user = JSON.parse(store.get(key + ':user') || 'null'); } catch (e) { user = null; }
    if (!token) user = null;
    const listeners = new Set();

    function setSession(t, u) {
      token = t || null; user = u || null;
      if (token) { store.set(key + ':token', token); store.set(key + ':user', JSON.stringify(user)); }
      else { store.del(key + ':token'); store.del(key + ':user'); }
      listeners.forEach(function (cb) { try { cb(user); } catch (e) { console.error(e); } });
    }

    async function request(method, path, body, opts) {
      opts = opts || {};
      const headers = Object.assign({}, opts.headers || {});
      if (token) headers.Authorization = 'Bearer ' + token;
      let payload = body;
      if (body !== undefined && !(body instanceof Blob) && !(body instanceof ArrayBuffer)) {
        headers['Content-Type'] = 'application/json';
        payload = JSON.stringify(body);
      }
      let res;
      try { res = await fetch(base + path, { method: method, headers: headers, body: payload, keepalive: !!opts.keepalive && (!payload || payload.length < 60000) }); }
      catch (e) { throw new NanaBaseError('Không kết nối được máy chủ NanaBase (' + base + '). Hãy kiểm tra máy chủ đã chạy và địa chỉ đúng.', 'network', 0); }
      if (opts.raw) {
        if (!res.ok) { const j = await res.json().catch(function () { return {}; }); throw new NanaBaseError((j.error && j.error.message) || 'Lỗi ' + res.status, (j.error && j.error.code) || 'error', res.status); }
        return res;
      }
      const data = await res.json().catch(function () { return {}; });
      if (!res.ok) {
        const err = data.error || {};
        if (res.status === 401 && token && (err.code === 'token-expired' || err.code === 'unauthenticated')) setSession(null, null);
        throw new NanaBaseError(err.message || ('Lỗi ' + res.status), err.code || 'error', res.status);
      }
      return data;
    }
    this.request = request;
    this.baseUrl = base;

    // ───────────── Đăng nhập ─────────────
    this.auth = {
      get user() { return user; },
      get token() { return token; },
      async register(email, password, name) { const r = await request('POST', '/api/auth/register', { email: email, password: password, name: name }); setSession(r.token, r.user); return r.user; },
      async login(email, password) { const r = await request('POST', '/api/auth/login', { email: email, password: password }); setSession(r.token, r.user); return r.user; },
      /** Đăng ký không cần email: họ tên + mật khẩu (+ lớp). Trùng họ tên trong cùng lớp sẽ bị từ chối. */
      async registerByName(name, password, group) { const r = await request('POST', '/api/auth/register', { name: name, password: password, group: group || '' }); setSession(r.token, r.user); return r.user; },
      /** Đăng nhập bằng họ tên. Nếu nhiều bạn trùng tên và mật khẩu: trả về { choices: [{uid, name, group}] };
       *  gọi lại với uid đã chọn. Ngược lại trả về người dùng. */
      async loginByName(name, password, uid) {
        const r = await request('POST', '/api/auth/login', { name: name, password: password, uid: uid || undefined });
        if (r.choices) return { choices: r.choices };
        setSession(r.token, r.user); return r.user;
      },
      logout() { setSession(null, null); },
      async logoutEverywhere() { await request('POST', '/api/auth/logout-all'); setSession(null, null); },
      async refresh() {
        if (!token) return null;
        try { const r = await request('GET', '/api/auth/me'); setSession(token, r.user); return r.user; }
        catch (e) { if (e.status === 401) return null; throw e; }
      },
      async updateProfile(p) { const r = await request('PATCH', '/api/auth/me', p); setSession(token, r.user); return r.user; },
      async changePassword(oldPassword, newPassword) { const r = await request('POST', '/api/auth/password', { oldPassword: oldPassword, newPassword: newPassword }); setSession(r.token, r.user); return r.user; },
      /** Gọi cb(user) ngay lập tức và mỗi khi đăng nhập/đăng xuất. Trả về hàm hủy. */
      onChange(cb) { listeners.add(cb); try { cb(user); } catch (e) { console.error(e); } return function () { listeners.delete(cb); }; }
    };

    // ───────────── Cơ sở dữ liệu ─────────────
    function enc(s) { return encodeURIComponent(s); }

    function Query(col, q) { this.col = col; this.q = q || {}; }
    Query.prototype._with = function (patch) { return new Query(this.col, Object.assign({}, this.q, patch)); };
    Query.prototype.where = function (field, opName, value) { return this._with({ where: (this.q.where || []).concat([[field, opName, value]]) }); };
    Query.prototype.orderBy = function (field, dir) { return this._with({ orderBy: (this.q.orderBy || []).concat([[field, dir || 'asc']]) }); };
    Query.prototype.limit = function (n) { return this._with({ limit: n }); };
    Query.prototype.offset = function (n) { return this._with({ offset: n }); };
    Query.prototype.search = function (text) { return this._with({ search: text }); };
    Query.prototype.withCount = function () { return this._with({ count: true }); };
    /** Trả về { items: [{id, data, owner, createdAt, updatedAt}], hasMore, total? } */
    Query.prototype.get = function () { return request('POST', '/api/db/' + enc(this.col) + '/query', this.q); };
    /** Lấy tất cả (tự lật trang), tối đa maxItems */
    Query.prototype.getAll = async function (maxItems) {
      const out = []; let offset = 0; const cap = maxItems || 10000;
      for (;;) {
        const page = await this.limit(1000).offset(offset).get();
        out.push.apply(out, page.items); offset += page.items.length;
        if (!page.hasMore || out.length >= cap) return out.slice(0, cap);
      }
    };
    /** Nghe thay đổi theo thời gian thực: cb(items) mỗi khi bộ sưu tập thay đổi. Trả về hàm hủy. */
    Query.prototype.onSnapshot = function (cb, onError) {
      const self = this; let timer = null; let stopped = false;
      const reload = function () { self.get().then(function (r) { if (!stopped) cb(r.items, r); }).catch(function (e) { if (onError) onError(e); else console.error(e); }); };
      reload();
      const unsub = app._listen(this.col, function () { clearTimeout(timer); timer = setTimeout(reload, 250); }, onError);
      return function () { stopped = true; clearTimeout(timer); unsub(); };
    };

    function DocRef(col, id) { this.col = col; this.id = id; }
    DocRef.prototype._path = function () { return '/api/db/' + enc(this.col) + '/' + enc(this.id); };
    /** Trả về {id, data, ...} hoặc null nếu chưa có */
    DocRef.prototype.get = async function () {
      try { return await request('GET', this._path()); }
      catch (e) { if (e.status === 404) return null; throw e; }
    };
    DocRef.prototype.set = function (data, opts) { return request('PUT', this._path() + (opts && opts.merge ? '?merge=1' : ''), data); };
    DocRef.prototype.update = function (data) { return request('PATCH', this._path(), data); };
    DocRef.prototype.delete = function () { return request('DELETE', this._path()); };
    DocRef.prototype.onSnapshot = function (cb, onError) {
      const self = this; let stopped = false;
      self.get().then(function (d) { if (!stopped) cb(d); }).catch(function (e) { if (onError) onError(e); });
      const unsub = app._listen(this.col, function (ev) {
        if (ev.doc && ev.doc.id === self.id && !stopped) cb(ev.type === 'delete' ? null : ev.doc);
      }, onError);
      return function () { stopped = true; unsub(); };
    };

    function Collection(name) { Query.call(this, name, {}); this.name = name; }
    Collection.prototype = Object.create(Query.prototype);
    Collection.prototype.doc = function (id) { return new DocRef(this.name, id); };
    Collection.prototype.add = function (data) { return request('POST', '/api/db/' + enc(this.name), data); };
    /** Nhận từng sự kiện thay đổi: cb({type: 'set'|'delete', doc}) */
    Collection.prototype.onChange = function (cb, onError) { return app._listen(this.name, cb, onError); };

    this.collection = function (name) { return new Collection(name); };

    // Kết nối thời gian thực: MỘT kết nối dùng chung cho mọi bộ sưu tập đang theo dõi
    // (trình duyệt chỉ mở được khoảng 6 kết nối tới cùng máy chủ, nên không mở mỗi bộ sưu tập một kết nối)
    const watchers = {};
    let es = null, esKey = '', esTimer = null;
    function reopenStream() { clearTimeout(esTimer); esTimer = setTimeout(openStream, 30); }
    function openStream() {
      const cols = Object.keys(watchers).filter(function (c) { return watchers[c].size; }).sort();
      const k = cols.join(',') + '|' + (token || '');
      if (es && k === esKey) return;
      if (es) { es.close(); es = null; }
      esKey = k;
      if (!cols.length || typeof EventSource === 'undefined') return;
      es = new EventSource(base + '/api/stream?c=' + enc(cols.join(',')) + (token ? '&token=' + enc(token) : ''));
      es.addEventListener('change', function (e) {
        let ev; try { ev = JSON.parse(e.data); } catch (x) { return; }
        const set = watchers[ev.collection];
        if (set) set.forEach(function (sub) { try { sub.cb(ev); } catch (x) { console.error(x); } });
      });
      es.onerror = function () {
        Object.keys(watchers).forEach(function (c) { watchers[c].forEach(function (sub) { if (sub.onError) sub.onError(new NanaBaseError('Mất kết nối thời gian thực, đang thử lại…', 'stream', 0)); }); });
      };
    }
    listeners.add(function () { if (Object.keys(watchers).length) reopenStream(); }); // đổi người đăng nhập → mở lại với token mới
    this._listen = function (col, cb, onError) {
      const sub = { cb: cb, onError: onError };
      (watchers[col] = watchers[col] || new Set()).add(sub);
      reopenStream();
      return function () { watchers[col].delete(sub); if (!watchers[col].size) delete watchers[col]; reopenStream(); };
    };

    this.batch = function () {
      const ops = [];
      const b = {
        add(col, data) { ops.push({ op: 'add', collection: col, data: data }); return b; },
        set(col, id, data, opts) { ops.push({ op: 'set', collection: col, id: id, data: data, merge: !!(opts && opts.merge) }); return b; },
        update(col, id, data) { ops.push({ op: 'update', collection: col, id: id, data: data }); return b; },
        delete(col, id) { ops.push({ op: 'delete', collection: col, id: id }); return b; },
        commit() { return request('POST', '/api/db/batch', { ops: ops }); }
      };
      return b;
    };

    // Giá trị đặc biệt khi ghi
    this.field = {
      increment(by) { return op('increment', { by: by === undefined ? 1 : by }); },
      serverTime() { return op('serverTime'); },
      arrayUnion() { return op('arrayUnion', { values: Array.prototype.slice.call(arguments) }); },
      arrayRemove() { return op('arrayRemove', { values: Array.prototype.slice.call(arguments) }); },
      delete() { return op('delete'); }
    };

    // ───────────── Lưu trữ file ─────────────
    this.storage = {
      /** file: File/Blob. options: { name, folder, public, onProgress(phanTram) } */
      upload(file, options) {
        options = options || {};
        return new Promise(function (resolve, reject) {
          const xhr = new XMLHttpRequest();
          xhr.open('POST', base + '/api/storage');
          if (token) xhr.setRequestHeader('Authorization', 'Bearer ' + token);
          xhr.setRequestHeader('X-File-Name', encodeURIComponent(options.name || file.name || 'file'));
          if (options.folder) xhr.setRequestHeader('X-Folder', encodeURIComponent(options.folder));
          if (options.public) xhr.setRequestHeader('X-Public', '1');
          if (file.type) xhr.setRequestHeader('Content-Type', file.type);
          if (options.onProgress) xhr.upload.onprogress = function (e) { if (e.lengthComputable) options.onProgress(Math.round(e.loaded / e.total * 100)); };
          xhr.onload = function () {
            let data = {}; try { data = JSON.parse(xhr.responseText); } catch (e) {}
            if (xhr.status >= 200 && xhr.status < 300) { data.url = base + data.url; resolve(data); }
            else reject(new NanaBaseError((data.error && data.error.message) || 'Tải file thất bại', (data.error && data.error.code) || 'upload-failed', xhr.status));
          };
          xhr.onerror = function () { reject(new NanaBaseError('Không kết nối được máy chủ', 'network', 0)); };
          xhr.send(file);
        });
      },
      async list(options) {
        options = options || {};
        const p = new URLSearchParams();
        if (options.folder !== undefined) p.set('folder', options.folder);
        if (options.mine) p.set('mine', '1');
        if (options.search) p.set('q', options.search);
        if (options.limit) p.set('limit', options.limit);
        if (options.offset) p.set('offset', options.offset);
        const r = await request('GET', '/api/storage?' + p.toString());
        r.items.forEach(function (f) { f.url = base + f.url; });
        return r;
      },
      /** Đường dẫn xem/tải file (file riêng tư có hạn dùng mặc định 12 giờ) */
      async getUrl(id, hours) { const r = await request('GET', '/api/storage/' + enc(id) + '/url' + (hours ? '?hours=' + hours : '')); return base + r.url; },
      async get(id) { const f = await request('GET', '/api/storage/' + enc(id)); f.url = base + f.url; return f; },
      update(id, patch) { return request('PATCH', '/api/storage/' + enc(id), patch); },
      delete(id) { return request('DELETE', '/api/storage/' + enc(id)); }
    };

    // ───────────── Người dùng ─────────────
    this.users = {
      /** Lấy tên hiển thị theo danh sách uid: trả về { uid: {name, role} } */
      async names(uids) { const r = await request('POST', '/api/users/names', { uids: uids }); return r.users; },
      /** Dành cho giáo viên: danh sách người dùng */
      list(options) { const p = new URLSearchParams(options || {}); return request('GET', '/api/users?' + p.toString()); },
      /** Giáo viên: sửa tài khoản học viên ({ name, group, disabled, password }) */
      update(uid, patch) { return request('PATCH', '/api/users/' + enc(uid), patch); },
      setPassword(uid, password) { return request('PATCH', '/api/users/' + enc(uid), { password: password }); },
      /** Giáo viên: xóa tài khoản học viên; purge = xóa luôn dữ liệu và file của học viên đó */
      remove(uid, options) { return request('DELETE', '/api/users/' + enc(uid) + (options && options.purge ? '?purge=1' : '')); }
    };
  }

  const NanaBase = {
    init(baseUrl) { return new App(baseUrl); },
    Error: NanaBaseError,
    version: '1.0.0'
  };
  global.NanaBase = NanaBase;
  if (typeof module === 'object' && module.exports) module.exports = NanaBase;
})(typeof window !== 'undefined' ? window : globalThis);

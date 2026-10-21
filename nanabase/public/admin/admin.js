/* NanaBase — trang quản trị */
(() => {
  'use strict';
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
  const TOKEN_KEY = 'nanabase-admin-token';
  let token = null;
  try { token = localStorage.getItem(TOKEN_KEY); } catch (e) {}
  let me = null;
  let status = null;

  // ───────────── Tiện ích ─────────────
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const nf = new Intl.NumberFormat('vi-VN');
  const fmtNum = (n) => nf.format(n || 0);
  function fmtBytes(b) {
    if (b == null) return '—';
    const u = ['B', 'KB', 'MB', 'GB', 'TB']; let i = 0; let v = b;
    while (v >= 1024 && i < u.length - 1) { v /= 1024; i++; }
    return (i === 0 ? v : v.toFixed(v < 10 ? 1 : 0)).toString().replace('.', ',') + ' ' + u[i];
  }
  const pad = (n) => String(n).padStart(2, '0');
  function fmtDate(ts) { if (!ts) return '—'; const d = new Date(ts); return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}`; }
  function fmtRel(ts) {
    if (!ts) return 'Chưa đăng nhập';
    const s = (Date.now() - ts) / 1000;
    if (s < 60) return 'Vừa xong';
    if (s < 3600) return Math.floor(s / 60) + ' phút trước';
    if (s < 86400) return Math.floor(s / 3600) + ' giờ trước';
    if (s < 86400 * 30) return Math.floor(s / 86400) + ' ngày trước';
    return fmtDate(ts).slice(0, 10);
  }
  const ROLE_VI = { student: 'Học viên', teacher: 'Giáo viên', admin: 'Quản trị viên' };
  const LEVELS = {
    public: 'Mọi người (kể cả chưa đăng nhập)',
    auth: 'Mọi người đã đăng nhập',
    owner: 'Chỉ người tạo',
    owner_or_teacher: 'Người tạo và giáo viên',
    self: 'Chính chủ (mã tài liệu = mã người dùng)',
    self_or_teacher: 'Chính chủ và giáo viên',
    teacher: 'Chỉ giáo viên',
    admin: 'Chỉ quản trị viên'
  };
  const icon = {
    plus: '<svg viewBox="0 0 24 24"><path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z"/></svg>',
    edit: '<svg viewBox="0 0 24 24"><path d="M3 17.2V21h3.8l11-11-3.8-3.8zM20.7 7a1 1 0 0 0 0-1.4l-2.3-2.3a1 1 0 0 0-1.4 0l-1.8 1.8 3.8 3.8z"/></svg>',
    trash: '<svg viewBox="0 0 24 24"><path d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"/></svg>',
    down: '<svg viewBox="0 0 24 24"><path d="M19 12v7H5v-7H3v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7zm-6 .7 2.6-2.6L17 11.5 12 16.5l-5-5 1.4-1.4 2.6 2.6V3h2z"/></svg>',
    up: '<svg viewBox="0 0 24 24"><path d="M5 20h14v-2H5zM12 3 6 9l1.4 1.4L11 6.8V16h2V6.8l3.6 3.6L18 9z"/></svg>',
    link: '<svg viewBox="0 0 24 24"><path d="M10.6 13.4a1 1 0 0 1 0-1.4l3.5-3.5a1 1 0 1 1 1.4 1.4L12 13.4a1 1 0 0 1-1.4 0zM8.5 19.8a4.5 4.5 0 0 1-3.2-7.7l2.1-2.1 1.4 1.4-2.1 2.1a2.5 2.5 0 0 0 3.5 3.5l2.1-2.1 1.4 1.4-2.1 2.1a4.5 4.5 0 0 1-3.1 1.4zm8.1-5.8-1.4-1.4 2.1-2.1a2.5 2.5 0 0 0-3.5-3.5L11.7 9 10.3 7.6l2.1-2.1a4.5 4.5 0 0 1 6.4 6.4z"/></svg>',
    open: '<svg viewBox="0 0 24 24"><path d="M14 3v2h3.6l-9.8 9.8 1.4 1.4L19 6.4V10h2V3zM19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2z"/></svg>',
    info: '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 15h-2v-6h2zm0-8h-2V7h2z"/></svg>',
    copy: '<svg viewBox="0 0 24 24"><path d="M16 1H4a2 2 0 0 0-2 2v14h2V3h12zm3 4H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 16H8V7h11z"/></svg>',
    close: '<svg viewBox="0 0 24 24"><path d="M19 6.4 17.6 5 12 10.6 6.4 5 5 6.4 10.6 12 5 17.6 6.4 19 12 13.4 17.6 19 19 17.6 13.4 12z"/></svg>'
  };

  async function api(method, path, body, opts = {}) {
    const headers = {};
    if (token) headers.Authorization = 'Bearer ' + token;
    let payload;
    if (body instanceof Blob || body instanceof ArrayBuffer) payload = body;
    else if (body !== undefined) { headers['Content-Type'] = 'application/json'; payload = JSON.stringify(body); }
    let res;
    try { res = await fetch(path, { method, headers, body: payload }); }
    catch (e) { throw new Error('Không kết nối được máy chủ. Kiểm tra cửa sổ chạy NanaBase còn mở không.'); }
    if (opts.raw && res.ok) return res;
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      const err = new Error((data.error && data.error.message) || 'Lỗi ' + res.status);
      err.status = res.status; err.code = data.error && data.error.code;
      if (res.status === 401 && token && !opts.noLogout) { logout(); }
      throw err;
    }
    return data;
  }
  async function download(path, fallbackName) {
    const res = await api('GET', path, undefined, { raw: true });
    const cd = res.headers.get('Content-Disposition') || '';
    const m = /filename\*=UTF-8''([^;]+)/.exec(cd);
    const name = m ? decodeURIComponent(m[1]) : fallbackName;
    saveBlob(await res.blob(), name);
  }
  function saveBlob(blob, name) {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob); a.download = name;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 5000);
  }
  function toast(msg, type) {
    const el = document.createElement('div');
    el.className = 'toast' + (type === 'error' ? ' error' : '');
    el.textContent = msg;
    $('#toasts').appendChild(el);
    setTimeout(() => el.remove(), type === 'error' ? 6000 : 3200);
  }
  const fail = (e) => toast(e.message || String(e), 'error');
  async function copyText(text) {
    try { await navigator.clipboard.writeText(text); toast('Đã sao chép'); }
    catch (e) { window.prompt('Sao chép đoạn này:', text); }
  }

  // Hộp thoại
  function modal({ title, body, wide, actions = [], onOpen }) {
    const back = document.createElement('div');
    back.className = 'modal-back';
    back.innerHTML = `<div class="modal${wide ? ' wide' : ''}" role="dialog" aria-modal="true" aria-label="${esc(title)}">
      <div class="modal-head"><h2>${esc(title)}</h2><button class="icon-btn" data-close aria-label="Đóng">${icon.close}</button></div>
      <div class="modal-body">${body}</div>
      ${actions.length ? '<div class="modal-foot"></div>' : ''}</div>`;
    const prevFocus = document.activeElement;
    const close = () => { back.remove(); document.removeEventListener('keydown', onKey); if (prevFocus) prevFocus.focus(); };
    const onKey = (e) => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', onKey);
    back.addEventListener('mousedown', (e) => { if (e.target === back) close(); });
    $('[data-close]', back).onclick = close;
    const foot = $('.modal-foot', back);
    actions.forEach((a) => {
      const b = document.createElement('button');
      b.className = 'btn ' + (a.kind === 'primary' ? 'btn-primary' : a.kind === 'danger' ? 'btn-danger solid' : a.kind === 'danger-outline' ? 'btn-danger' : '');
      b.textContent = a.label;
      if (a.left) b.style.marginRight = 'auto';
      b.onclick = async () => {
        if (!a.onClick) return close();
        b.disabled = true;
        try { await a.onClick(close, back); }
        catch (e) { fail(e); }
        finally { b.disabled = false; }
      };
      foot.appendChild(b);
    });
    $('#modal-root').appendChild(back);
    const first = $('input, select, textarea', $('.modal-body', back)) || $('.modal-foot .btn-primary', back);
    if (first) setTimeout(() => first.focus(), 30);
    if (onOpen) onOpen(back, close);
    return { close, root: back };
  }
  function confirmBox({ title, message, confirmLabel = 'Đồng ý', danger = false, extra = '', typeToConfirm }) {
    return new Promise((resolve) => {
      let done = false;
      const m = modal({
        title,
        body: `<p class="muted">${message}</p>${extra}${typeToConfirm ? `<label class="field" style="margin-top:14px"><span>Gõ <strong>${esc(typeToConfirm)}</strong> để xác nhận</span><input data-confirm autocomplete="off"></label>` : ''}`,
        actions: [
          { label: 'Hủy', onClick: (close) => { close(); } },
          {
            label: confirmLabel, kind: danger ? 'danger' : 'primary', onClick: (close, root) => {
              if (typeToConfirm && $('[data-confirm]', root).value.trim() !== typeToConfirm) { toast('Chưa gõ đúng chữ xác nhận', 'error'); return false; }
              const values = {};
              $$('input[type=checkbox][name]', root).forEach((i) => { values[i.name] = i.checked; });
              done = true; close(); resolve(values);
            }
          }
        ]
      });
      const obs = new MutationObserver(() => { if (!document.body.contains(m.root)) { obs.disconnect(); if (!done) resolve(null); } });
      obs.observe($('#modal-root'), { childList: true });
    });
  }

  // ───────────── Đăng nhập ─────────────
  function showAuth(mode) {
    $('#app').hidden = true;
    $('#auth').hidden = false;
    const setup = mode === 'setup';
    $('#auth-title').textContent = setup ? 'Tạo tài khoản quản trị' : 'Đăng nhập quản trị';
    $('#auth-desc').textContent = setup
      ? 'Đây là lần đầu chạy NanaBase. Tài khoản này sẽ có toàn quyền quản lý người dùng, dữ liệu và file.'
      : 'Dùng tài khoản quản trị viên để quản lý người dùng, dữ liệu và file.';
    $('#auth-submit').textContent = setup ? 'Tạo tài khoản và bắt đầu' : 'Đăng nhập';
    $('#auth-name-field').hidden = !setup;
    $('#auth-app').textContent = status && status.app !== 'NanaBase' ? status.app : 'Máy chủ dữ liệu của bạn';
    const pw = $('#auth-form [name=password]');
    pw.autocomplete = setup ? 'new-password' : 'current-password';
    $('#auth-form').onsubmit = async (e) => {
      e.preventDefault();
      const f = new FormData(e.target);
      const err = $('#auth-error');
      err.textContent = '';
      const btn = $('#auth-submit'); btn.disabled = true;
      try {
        const r = await api(setup ? 'POST' : 'POST', setup ? '/api/auth/setup' : '/api/auth/login',
          { email: f.get('email'), password: f.get('password'), name: f.get('name') }, { noLogout: true });
        if (r.user.role !== 'admin') { err.textContent = 'Tài khoản này không phải quản trị viên.'; return; }
        token = r.token; me = r.user;
        try { localStorage.setItem(TOKEN_KEY, token); } catch (x) {}
        status.needsSetup = false;
        e.target.reset();
        startApp();
      } catch (x) { err.textContent = x.message; }
      finally { btn.disabled = false; }
    };
    setTimeout(() => $(setup ? '#auth-form [name=name]' : '#auth-form [name=email]').focus(), 30);
  }
  function logout() {
    token = null; me = null;
    try { localStorage.removeItem(TOKEN_KEY); } catch (e) {}
    showAuth(status && status.needsSetup ? 'setup' : 'login');
  }

  // ───────────── Khung ứng dụng ─────────────
  const views = {};
  function startApp() {
    $('#auth').hidden = true;
    $('#app').hidden = false;
    $('#me-name').textContent = me.name;
    $('#me-email').textContent = me.email;
    $('#me-avatar').textContent = (me.name || me.email).trim().charAt(0).toUpperCase();
    $('#side-app').textContent = status.app;
    document.title = status.app + ' · Quản trị';
    route();
  }
  function route() {
    if (!me) return;
    const name = (location.hash || '#overview').slice(1).split('/')[0];
    const view = views[name] ? name : 'overview';
    $$('.nav a').forEach((a) => a.classList.toggle('active', a.dataset.view === view));
    $('#side').classList.remove('open'); $('#scrim').classList.remove('open');
    $('#view-actions').innerHTML = '';
    $('#view').innerHTML = '<p class="skeleton">Đang tải…</p>';
    views[view]().catch(fail);
  }
  function setHead(title, actionsHtml = '') {
    $('#view-title').textContent = title;
    $('#view-actions').innerHTML = actionsHtml;
  }
  window.addEventListener('hashchange', route);
  $('#logout').onclick = logout;
  $('#menu-btn').onclick = () => { $('#side').classList.add('open'); $('#scrim').classList.add('open'); };
  $('#scrim').onclick = () => { $('#side').classList.remove('open'); $('#scrim').classList.remove('open'); };

  // ───────────── Biểu đồ cột ─────────────
  function niceMax(v) {
    if (v <= 4) return 4;
    const p = Math.pow(10, Math.floor(Math.log10(v)));
    for (const m of [1, 2, 2.5, 5, 10]) if (m * p >= v) return m * p;
    return 10 * p;
  }
  function barChart(el, rows, key, color, unit) {
    const W = 640, H = 200, padL = 34, padB = 26, padT = 10;
    const max = niceMax(Math.max(0, ...rows.map((r) => r[key])));
    const n = rows.length;
    const slot = (W - padL) / n;
    const bw = Math.max(3, slot - 2);
    const y = (v) => padT + (H - padT - padB) * (1 - v / max);
    const ticks = [0, max / 2, max];
    let svg = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(unit)} theo ngày, 30 ngày gần nhất">`;
    for (const t of ticks) {
      svg += `<line x1="${padL}" x2="${W}" y1="${y(t)}" y2="${y(t)}" stroke="var(--grid)" stroke-width="1"/>`;
      svg += `<text class="chart-axis" x="${padL - 8}" y="${y(t) + 4}" text-anchor="end">${fmtNum(t)}</text>`;
    }
    rows.forEach((r, i) => {
      const x = padL + i * slot + (slot - bw) / 2;
      const v = r[key];
      const top = y(v);
      const h = H - padB - top;
      if (v > 0) {
        const rad = Math.min(4, bw / 2, h);
        svg += `<path class="bar" fill="${color}" d="M${x},${H - padB} V${top + rad} Q${x},${top} ${x + rad},${top} H${x + bw - rad} Q${x + bw},${top} ${x + bw},${top + rad} V${H - padB} Z"/>`;
      }
      if (i % 7 === (n - 1) % 7) {
        const [yy, mm, dd] = r.day.split('-');
        svg += `<text class="chart-axis" x="${x + bw / 2}" y="${H - 8}" text-anchor="middle">${dd}/${mm}</text>`;
      }
      svg += `<rect class="hit" data-i="${i}" x="${padL + i * slot}" y="${padT}" width="${slot}" height="${H - padT - padB}"/>`;
    });
    svg += `<line x1="${padL}" x2="${W}" y1="${H - padB}" y2="${H - padB}" stroke="var(--line-2)" stroke-width="1"/></svg>`;
    el.innerHTML = svg + '<div class="chart-tip" hidden></div>';
    const tip = $('.chart-tip', el);
    const svgEl = $('svg', el);
    $$('.hit', el).forEach((hit) => {
      const show = () => {
        const r = rows[+hit.dataset.i];
        const [yy, mm, dd] = r.day.split('-');
        tip.innerHTML = `<strong>${fmtNum(r[key])}</strong> ${esc(unit)} · ${dd}/${mm}`;
        const box = svgEl.getBoundingClientRect();
        const scale = box.width / W;
        tip.style.left = (+hit.getAttribute('x') + slot / 2) * scale + 'px';
        tip.style.top = y(r[key]) * scale + 'px';
        tip.hidden = false;
        $$('.bar', el).forEach((b) => (b.style.opacity = '.45'));
      };
      const hide = () => { tip.hidden = true; $$('.bar', el).forEach((b) => (b.style.opacity = '')); };
      hit.addEventListener('mouseenter', show);
      hit.addEventListener('mouseleave', hide);
      hit.addEventListener('touchstart', show, { passive: true });
    });
  }

  // ───────────── Tổng quan ─────────────
  views.overview = async () => {
    setHead('Tổng quan', `<button class="btn btn-sm" id="ov-refresh">Làm mới</button>`);
    const s = await api('GET', '/api/admin/stats');
    const target = 1000;
    const userPct = Math.min(100, s.users.total / target * 100);
    const dataBytes = s.system.dbBytes + s.storage.bytes;
    const diskPct = s.system.diskFree ? Math.min(100, dataBytes / (dataBytes + s.system.diskFree) * 100) : null;
    const maxCol = Math.max(1, ...s.docs.collections.map((c) => c.count));
    const maxType = Math.max(1, ...s.storage.types.map((t) => t.bytes));
    const sumKey = (k) => s.daily.reduce((a, d) => a + d[k], 0);
    $('#view').innerHTML = `
    <div class="stack">
      <div class="kpis">
        <div class="kpi"><div class="label">Người dùng</div><div class="value">${fmtNum(s.users.total)}</div><div class="sub">${s.users.newToday ? '+' + fmtNum(s.users.newToday) + ' hôm nay' : 'Chưa có ai mới hôm nay'}</div></div>
        <div class="kpi"><div class="label">Hoạt động hôm nay</div><div class="value">${fmtNum(s.active.today)}</div><div class="sub">${fmtNum(s.active.d7)} người trong 7 ngày qua</div></div>
        <div class="kpi"><div class="label">Tài liệu dữ liệu</div><div class="value">${fmtNum(s.docs.total)}</div><div class="sub">${fmtBytes(s.docs.bytes)} trong ${fmtNum(s.docs.collections.length)} bộ sưu tập</div></div>
        <div class="kpi"><div class="label">File đã lưu</div><div class="value">${fmtNum(s.storage.files)}</div><div class="sub">${fmtBytes(s.storage.bytes)}</div></div>
      </div>

      <div class="cols">
        <div class="panel"><div class="panel-body">
          <div class="chart-title"><span class="swatch" style="background:var(--chart-a)"></span><strong>Người dùng mới</strong><span class="total">${fmtNum(sumKey('signups'))} trong 30 ngày</span></div>
          <div class="chart" id="ch-signups"></div>
        </div></div>
        <div class="panel"><div class="panel-body">
          <div class="chart-title"><span class="swatch" style="background:var(--chart-b)"></span><strong>Người dùng hoạt động</strong><span class="total">${fmtNum(s.active.d30)} người khác nhau trong 30 ngày</span></div>
          <div class="chart" id="ch-active"></div>
        </div></div>
      </div>
      <details class="panel"><summary class="panel-body" style="cursor:pointer">Xem số liệu từng ngày dạng bảng</summary>
        <div class="table-wrap"><table><thead><tr><th>Ngày</th><th class="num">Người dùng mới</th><th class="num">Hoạt động</th><th class="num">Lượt gọi API</th><th class="num">Lượt đọc</th><th class="num">Lượt ghi</th></tr></thead>
        <tbody>${s.daily.slice().reverse().map((d) => `<tr><td>${d.day.split('-').reverse().join('/')}</td><td class="num">${fmtNum(d.signups)}</td><td class="num">${fmtNum(d.active)}</td><td class="num">${fmtNum(d.requests)}</td><td class="num">${fmtNum(d.reads)}</td><td class="num">${fmtNum(d.writes)}</td></tr>`).join('')}</tbody></table></div>
      </details>

      <div class="cols">
        <div class="panel"><div class="panel-head"><h2>Sức chứa</h2></div><div class="panel-body capacity">
          <div class="meter-legend"><span>Người dùng so với mục tiêu ${fmtNum(target)}</span><strong>${fmtNum(s.users.total)} / ${fmtNum(target)}</strong></div>
          <div class="meter" role="meter" aria-valuemin="0" aria-valuemax="${target}" aria-valuenow="${s.users.total}"><span style="width:${userPct}%"></span></div>
          ${diskPct !== null ? `
          <div class="meter-legend" style="margin-top:10px"><span>Dữ liệu và file trên ổ đĩa</span><strong>${fmtBytes(dataBytes)} đã dùng, còn trống ${fmtBytes(s.system.diskFree)}</strong></div>
          <div class="meter${diskPct > 85 ? ' warn' : ''}"><span style="width:${Math.max(diskPct, 0.5)}%"></span></div>` : ''}
          <p class="small muted" style="margin-top:6px">${fmtNum(s.users.byRole.student)} học viên, ${fmtNum(s.users.byRole.teacher)} giáo viên, ${fmtNum(s.users.byRole.admin)} quản trị viên${s.users.disabled ? `, ${fmtNum(s.users.disabled)} tài khoản đang khóa` : ''}.</p>
        </div></div>
        <div class="panel"><div class="panel-head"><h2>Hệ thống</h2></div><div class="panel-body">
          <dl class="kv">
            <dt>Phiên bản</dt><dd>NanaBase ${esc(s.system.version)} · Node.js ${esc(s.system.node)}</dd>
            <dt>Đã chạy liên tục</dt><dd>${uptime(s.system.uptime)}</dd>
            <dt>Cơ sở dữ liệu</dt><dd>${fmtBytes(s.system.dbBytes)}</dd>
            <dt>Thư mục dữ liệu</dt><dd class="mono" style="word-break:break-all">${esc(s.system.dataDir)}</dd>
          </dl>
        </div></div>
      </div>

      <div class="cols">
        <div class="panel"><div class="panel-head"><h2>Bộ sưu tập lớn nhất</h2><a class="btn btn-sm" href="#data">Xem dữ liệu</a></div><div class="panel-body">
          ${s.docs.collections.length ? `<div class="bars-list">${s.docs.collections.slice(0, 6).map((c) => `<div class="item"><span class="mono">${esc(c.name)}</span><span class="muted small">${fmtNum(c.count)} tài liệu · ${fmtBytes(c.bytes)}</span><div class="track"><span style="width:${c.count / maxCol * 100}%"></span></div></div>`).join('')}</div>`
          : '<div class="empty"><strong>Chưa có dữ liệu</strong>Khi app của bạn lưu dữ liệu, các bộ sưu tập sẽ hiện ở đây.</div>'}
        </div></div>
        <div class="panel"><div class="panel-head"><h2>File theo loại</h2><a class="btn btn-sm" href="#storage">Xem file</a></div><div class="panel-body">
          ${s.storage.types.length ? `<div class="bars-list">${s.storage.types.map((t) => `<div class="item"><span>${esc(t.type)}</span><span class="muted small">${fmtNum(t.n)} file · ${fmtBytes(t.bytes)}</span><div class="track"><span style="width:${t.bytes / maxType * 100}%"></span></div></div>`).join('')}</div>`
          : '<div class="empty"><strong>Chưa có file nào</strong>Tải giáo trình, âm thanh, hình ảnh ở mục Lưu trữ file.</div>'}
        </div></div>
      </div>

      <div class="panel"><div class="panel-head"><h2>Người dùng mới nhất</h2><a class="btn btn-sm" href="#users">Quản lý người dùng</a></div>
        <div class="table-wrap"><table><thead><tr><th>Người dùng</th><th>Vai trò</th><th>Ngày tạo</th><th>Đăng nhập gần nhất</th></tr></thead><tbody>
        ${s.recentUsers.map((u) => `<tr><td><div class="cell-main">${esc(u.name)}</div><div class="cell-sub">${esc(u.email || (u.group ? 'Lớp ' + u.group : 'Đăng nhập bằng họ tên'))}</div></td><td>${roleBadge(u.role)}</td><td>${fmtDate(u.createdAt)}</td><td>${fmtRel(u.lastLogin)}</td></tr>`).join('')}
        </tbody></table></div></div>
    </div>`;
    barChart($('#ch-signups'), s.daily, 'signups', 'var(--chart-a)', 'người dùng mới');
    barChart($('#ch-active'), s.daily, 'active', 'var(--chart-b)', 'người hoạt động');
    $('#ov-refresh').onclick = () => views.overview().catch(fail);
  };
  function uptime(sec) {
    const d = Math.floor(sec / 86400), h = Math.floor(sec % 86400 / 3600), m = Math.floor(sec % 3600 / 60);
    return (d ? d + ' ngày ' : '') + (h ? h + ' giờ ' : '') + m + ' phút';
  }
  function roleBadge(role) { return `<span class="badge ${role === 'student' ? '' : role}">${ROLE_VI[role] || role}</span>`; }

  // ───────────── Người dùng ─────────────
  const userState = { q: '', role: '', sort: 'created', offset: 0, limit: 50 };
  views.users = async () => {
    setHead('Người dùng', `
      <button class="btn btn-sm" id="u-export">${icon.down}Xuất Excel</button>
      <button class="btn btn-sm" id="u-import">${icon.up}Nhập danh sách</button>
      <button class="btn btn-sm btn-primary" id="u-add">${icon.plus}Thêm người dùng</button>`);
    $('#view').innerHTML = `
      <div class="panel">
        <div class="toolbar">
          <input type="search" id="u-q" placeholder="Tìm theo tên, email hoặc lớp" value="${esc(userState.q)}" aria-label="Tìm người dùng">
          <select id="u-role" aria-label="Lọc vai trò"><option value="">Mọi vai trò</option><option value="student">Học viên</option><option value="teacher">Giáo viên</option><option value="admin">Quản trị viên</option></select>
          <select id="u-sort" aria-label="Sắp xếp"><option value="created">Mới tạo trước</option><option value="login">Đăng nhập gần đây</option><option value="name">Theo tên A–Z</option><option value="email">Theo email</option></select>
        </div>
        <div id="u-table"></div>
      </div>`;
    $('#u-role').value = userState.role;
    $('#u-sort').value = userState.sort;
    let t;
    $('#u-q').oninput = (e) => { clearTimeout(t); t = setTimeout(() => { userState.q = e.target.value; userState.offset = 0; loadUsers(); }, 250); };
    $('#u-role').onchange = (e) => { userState.role = e.target.value; userState.offset = 0; loadUsers(); };
    $('#u-sort').onchange = (e) => { userState.sort = e.target.value; userState.offset = 0; loadUsers(); };
    $('#u-add').onclick = addUser;
    $('#u-import').onclick = importUsers;
    $('#u-export').onclick = () => download('/api/admin/export/users.xlsx', 'nguoi-dung.xlsx').catch(fail);
    await loadUsers();
  };
  async function loadUsers() {
    const p = new URLSearchParams({ q: userState.q, role: userState.role, sort: userState.sort, offset: userState.offset, limit: userState.limit });
    const r = await api('GET', '/api/admin/users?' + p);
    const box = $('#u-table');
    if (!box) return;
    if (!r.items.length) {
      box.innerHTML = userState.q || userState.role
        ? '<div class="empty"><strong>Không tìm thấy người dùng phù hợp</strong>Thử từ khóa khác (tên, email, lớp) hoặc bỏ bộ lọc vai trò.</div>'
        : '<div class="empty"><strong>Chưa có người dùng</strong>Thêm từng người, nhập cả danh sách từ Excel, hoặc để học viên tự đăng ký trong app.</div>';
      return;
    }
    box.innerHTML = `<div class="table-wrap"><table><thead><tr><th>Người dùng</th><th>Lớp</th><th>Vai trò</th><th>Trạng thái</th><th>Ngày tạo</th><th>Đăng nhập gần nhất</th><th></th></tr></thead><tbody>
      ${r.items.map((u) => `<tr data-uid="${esc(u.uid)}">
        <td><div class="cell-main">${esc(u.name)}${u.uid === me.uid ? ' <span class="cell-sub">(bạn)</span>' : ''}</div><div class="cell-sub">${u.email ? esc(u.email) : 'Đăng nhập bằng họ tên'}</div></td>
        <td>${u.group ? esc(u.group) : '<span class="cell-sub">—</span>'}</td>
        <td>${roleBadge(u.role)}</td>
        <td>${u.disabled ? '<span class="badge off">Đã khóa</span>' : '<span class="badge on">Hoạt động</span>'}</td>
        <td>${fmtDate(u.createdAt)}</td>
        <td>${fmtRel(u.lastLogin)}</td>
        <td class="actions"><button class="icon-btn" data-act="edit" aria-label="Sửa ${esc(u.name)}" title="Sửa">${icon.edit}</button>${u.uid !== me.uid ? `<button class="icon-btn danger" data-act="del" aria-label="Xóa ${esc(u.name)}" title="Xóa">${icon.trash}</button>` : ''}</td>
      </tr>`).join('')}</tbody></table></div>
      ${pager(r.total, userState, loadUsers)}`;
    bindPager(box, r.total, userState, loadUsers);
    $$('tr[data-uid]', box).forEach((tr) => {
      const u = r.items.find((x) => x.uid === tr.dataset.uid);
      const e = $('[data-act=edit]', tr); if (e) e.onclick = () => editUser(u);
      const d = $('[data-act=del]', tr); if (d) d.onclick = () => deleteUser(u);
    });
  }
  function pager(total, st) {
    if (total <= st.limit) return `<div class="pager"><span>${fmtNum(total)} kết quả</span></div>`;
    const from = st.offset + 1, to = Math.min(total, st.offset + st.limit);
    return `<div class="pager"><span>${fmtNum(from)}–${fmtNum(to)} trong ${fmtNum(total)}</span><span class="row"><button class="btn btn-sm" data-pg="prev" ${st.offset === 0 ? 'disabled' : ''}>Trang trước</button><button class="btn btn-sm" data-pg="next" ${to >= total ? 'disabled' : ''}>Trang sau</button></span></div>`;
  }
  function bindPager(box, total, st, reload) {
    const p = $('[data-pg=prev]', box), n = $('[data-pg=next]', box);
    if (p) p.onclick = () => { st.offset = Math.max(0, st.offset - st.limit); reload().catch(fail); };
    if (n) n.onclick = () => { st.offset += st.limit; reload().catch(fail); };
  }
  const roleOptions = (sel) => ['student', 'teacher', 'admin'].map((r) => `<option value="${r}" ${r === sel ? 'selected' : ''}>${ROLE_VI[r]}</option>`).join('');
  function genPassword() {
    const c = 'abcdefghjkmnpqrstuvwxyz23456789'; const a = new Uint32Array(8); crypto.getRandomValues(a);
    return Array.from(a, (x) => c[x % c.length]).join('');
  }
  function addUser() {
    modal({
      title: 'Thêm người dùng',
      body: `<form id="f-add" onsubmit="return false">
        <label class="field"><span>Họ tên</span><input name="name" placeholder="Nguyễn Văn An"></label>
        <div class="grid-2">
          <label class="field"><span>Lớp</span><input name="group" placeholder="Ví dụ: K28-TQ1"></label>
          <label class="field"><span>Email (không bắt buộc)</span><input name="email" type="email" placeholder="Bỏ trống: đăng nhập bằng họ tên"></label>
        </div>
        <div class="grid-2">
          <label class="field"><span>Vai trò</span><select name="role">${roleOptions('student')}</select></label>
          <label class="field"><span>Mật khẩu</span><input name="password" placeholder="Bỏ trống để tạo tự động"></label>
        </div></form>`,
      actions: [{ label: 'Hủy' }, {
        label: 'Thêm người dùng', kind: 'primary', onClick: async (close, root) => {
          const f = new FormData($('#f-add', root));
          const r = await api('POST', '/api/admin/users', Object.fromEntries(f));
          close();
          if (r.password) showCredentials([{ email: r.user.email, name: r.user.name, group: r.user.group, password: r.password }]);
          else toast('Đã thêm ' + (r.user.email || r.user.name));
          loadUsers().catch(fail);
        }
      }]
    });
  }
  function showCredentials(list) {
    modal({
      title: 'Thông tin đăng nhập', wide: list.length > 1,
      body: `<div class="notice warn">${icon.info}<span>Mật khẩu chỉ hiện một lần. Hãy tải về hoặc sao chép để gửi cho học viên.</span></div>
        <div class="table-wrap" style="margin-top:14px;max-height:340px"><table><thead><tr><th>Họ tên</th><th>Lớp</th><th>Email</th><th>Mật khẩu</th></tr></thead><tbody>
        ${list.map((u) => `<tr><td>${esc(u.name)}</td><td>${esc(u.group || '')}</td><td>${esc(u.email || '—')}</td><td class="mono">${esc(u.password)}</td></tr>`).join('')}</tbody></table></div>`,
      actions: [
        { label: 'Sao chép', onClick: () => { copyText(list.map((u) => `${u.name}\t${u.group || ''}\t${u.email || ''}\t${u.password}`).join('\n')); return false; } },
        { label: 'Tải file Excel (CSV)', onClick: () => { saveCsv('tai-khoan-moi.csv', [['Họ tên', 'Lớp', 'Email', 'Mật khẩu'], ...list.map((u) => [u.name, u.group || '', u.email || '', u.password])]); return false; } },
        { label: 'Xong', kind: 'primary' }
      ]
    });
  }
  function saveCsv(name, rows) {
    const e = (v) => { const s = String(v ?? ''); return /[",\r\n;]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; };
    saveBlob(new Blob(['﻿' + rows.map((r) => r.map(e).join(',')).join('\r\n')], { type: 'text/csv;charset=utf-8' }), name);
  }
  function editUser(u) {
    const self = u.uid === me.uid;
    modal({
      title: 'Sửa người dùng',
      body: `<form id="f-edit" onsubmit="return false">
        <label class="field"><span>Họ tên</span><input name="name" value="${esc(u.name)}"></label>
        <div class="grid-2">
          <label class="field"><span>Lớp</span><input name="group" value="${esc(u.group || '')}"></label>
          <label class="field"><span>Email</span><input name="email" type="email" value="${esc(u.email || '')}" placeholder="Bỏ trống: đăng nhập bằng họ tên"></label>
        </div>
        <label class="field"><span>Vai trò</span><select name="role" ${self ? 'disabled' : ''}>${roleOptions(u.role)}</select>${self ? '<small>Bạn không thể tự đổi vai trò của mình.</small>' : ''}</label>
        <label class="field"><span>Đặt mật khẩu mới</span><div class="row"><input name="password" class="grow" placeholder="Bỏ trống nếu không đổi"><button type="button" class="btn btn-sm" id="gen">Tạo ngẫu nhiên</button></div><small>Đổi mật khẩu sẽ đăng xuất người này khỏi mọi thiết bị.</small></label>
        ${self ? '' : `<label class="check"><input type="checkbox" name="disabled" ${u.disabled ? 'checked' : ''}><span>Khóa tài khoản<br><small class="muted">Người dùng sẽ không đăng nhập được cho đến khi mở khóa.</small></span></label>`}
        <p class="small muted">Mã người dùng: <span class="mono">${esc(u.uid)}</span> <button type="button" class="btn btn-ghost btn-sm" id="cp-uid">${icon.copy}Sao chép</button></p>
      </form>`,
      onOpen: (root) => {
        $('#gen', root).onclick = () => { $('[name=password]', root).value = genPassword(); };
        $('#cp-uid', root).onclick = () => copyText(u.uid);
      },
      actions: [{ label: 'Hủy' }, {
        label: 'Lưu thay đổi', kind: 'primary', onClick: async (close, root) => {
          const f = $('#f-edit', root);
          const body = { name: f.name.value, email: f.email.value, group: f.group.value };
          if (!self) { body.role = f.role.value; body.disabled = f.disabled.checked; }
          const pw = f.password.value.trim();
          if (pw) body.password = pw;
          await api('PATCH', '/api/admin/users/' + encodeURIComponent(u.uid), body);
          close();
          if (pw) showCredentials([{ email: body.email, name: body.name, group: body.group, password: pw }]);
          else toast('Đã lưu');
          loadUsers().catch(fail);
        }
      }]
    });
  }
  async function deleteUser(u) {
    const r = await confirmBox({
      title: 'Xóa người dùng?',
      message: `Tài khoản <strong>${esc(u.email || u.name + (u.group ? ' – lớp ' + u.group : ''))}</strong> sẽ bị xóa và không đăng nhập được nữa.`,
      extra: `<label class="check" style="margin-top:14px"><input type="checkbox" name="purge"><span>Xóa luôn dữ liệu và file người này đã tạo<br><small class="muted">File đã xóa không thể khôi phục từ bản sao lưu dữ liệu.</small></span></label>`,
      confirmLabel: 'Xóa người dùng', danger: true
    });
    if (!r) return;
    try {
      const res = await api('DELETE', `/api/admin/users/${encodeURIComponent(u.uid)}${r.purge ? '?purge=1' : ''}`);
      toast(`Đã xóa ${u.email || u.name}${res.purged ? ` cùng ${res.files} file` : ''}`);
      loadUsers().catch(fail);
    } catch (e) { fail(e); }
  }
  function parseRoster(text) {
    const lines = text.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
    if (!lines.length) return [];
    const sep = lines[0].includes('\t') ? '\t' : lines[0].includes(';') && !lines[0].includes(',') ? ';' : ',';
    const split = (l) => {
      if (sep !== ',') return l.split(sep).map((s) => s.trim());
      const out = []; let cur = ''; let q = false;
      for (let i = 0; i < l.length; i++) {
        const ch = l[i];
        if (q) { if (ch === '"' && l[i + 1] === '"') { cur += '"'; i++; } else if (ch === '"') q = false; else cur += ch; }
        else if (ch === '"') q = true; else if (ch === ',') { out.push(cur.trim()); cur = ''; } else cur += ch;
      }
      out.push(cur.trim()); return out;
    };
    const mapRole = (s) => {
      const v = String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd');
      if (/^(gv|giao ?vien|teacher|giang ?vien)$/.test(v)) return 'teacher';
      if (/^(admin|quan ?tri|quan ?tri ?vien)$/.test(v)) return 'admin';
      return 'student';
    };
    const rows = lines.map(split);
    const emailCol = (r) => r.findIndex((c) => /@/.test(c));
    const isHeader = (r) => /^(email|e-mail|h[oọ] ?(v[aà] ?)?t[eê]n|họ tên|ten|tên)$/i.test(String(r[0] || '').trim());
    return rows.filter((r) => !isHeader(r) && r.some((c) => c)).map((r) => {
      const ei = emailCol(r);
      if (ei >= 0) { // email, họ tên, mật khẩu, vai trò
        const rest = r.filter((_, i) => i !== ei);
        return { email: r[ei], name: rest[0] || '', password: rest[1] || '', role: mapRole(rest[2]) };
      }
      // không có email: họ tên, lớp, mật khẩu, vai trò
      return { name: r[0] || '', group: r[1] || '', password: r[2] || '', role: mapRole(r[3]) };
    }).filter((u) => u.email || (u.name && u.name.length >= 2));
  }
  function importUsers() {
    modal({
      title: 'Nhập danh sách người dùng', wide: true,
      body: `<p class="muted" style="margin-bottom:14px">Mở danh sách lớp trong Excel, bôi đen các cột rồi dán vào đây. Mỗi dòng một người, theo một trong hai cách: <strong>email, họ tên, mật khẩu, vai trò</strong> hoặc (không có email) <strong>họ tên, lớp, mật khẩu, vai trò</strong>. Mật khẩu và vai trò có thể bỏ trống; dòng tiêu đề được tự động bỏ qua.</p>
        <label class="field"><span>Dán danh sách</span><textarea id="roster" rows="9" placeholder="Nguyễn Văn An&#9;K28-TQ1&#10;Trần Thị Bình&#9;K28-TQ1&#9;matkhau123&#10;thay.c@dtu.edu.vn&#9;Thầy C&#9;&#9;giáo viên"></textarea></label>
        <div class="row" style="margin-bottom:14px"><label class="btn btn-sm">${icon.up}Chọn file CSV<input type="file" id="roster-file" accept=".csv,.txt,.tsv" hidden></label><span class="small muted">File Excel: chọn Lưu thành → CSV UTF-8.</span></div>
        <label class="field"><span>Mật khẩu chung cho người không có mật khẩu</span><input id="roster-pw" placeholder="Bỏ trống để tạo mật khẩu riêng cho từng người"></label>
        <p class="small" id="roster-count" style="color:var(--ink-2)">Chưa có dòng nào hợp lệ.</p>`,
      onOpen: (root) => {
        const ta = $('#roster', root);
        const upd = () => { const n = parseRoster(ta.value).length; $('#roster-count', root).textContent = n ? `Sẽ nhập ${fmtNum(n)} người.` : 'Chưa có dòng nào hợp lệ.'; };
        ta.oninput = upd;
        $('#roster-file', root).onchange = async (e) => { const f = e.target.files[0]; if (f) { ta.value = await f.text(); upd(); } };
      },
      actions: [{ label: 'Hủy' }, {
        label: 'Nhập danh sách', kind: 'primary', onClick: async (close, root) => {
          const users = parseRoster($('#roster', root).value);
          if (!users.length) { toast('Danh sách chưa có dòng hợp lệ', 'error'); return false; }
          const defaultPassword = $('#roster-pw', root).value.trim() || undefined;
          toast(`Đang tạo ${fmtNum(users.length)} tài khoản, vui lòng chờ…`);
          const r = await api('POST', '/api/admin/users/import', { users, defaultPassword });
          close();
          loadUsers().catch(fail);
          const withPw = r.created.filter((u) => u.password);
          modal({
            title: 'Kết quả nhập danh sách', wide: true,
            body: `<p><strong>${fmtNum(r.created.length)}</strong> tài khoản đã được tạo${r.skipped.length ? `, <strong>${fmtNum(r.skipped.length)}</strong> dòng bị bỏ qua` : ''}.</p>
              ${r.skipped.length ? `<div class="table-wrap" style="margin-top:12px;max-height:180px"><table><thead><tr><th>Dòng</th><th>Lý do bỏ qua</th></tr></thead><tbody>${r.skipped.map((s) => `<tr><td>${esc(s.email)}</td><td>${esc(s.reason)}</td></tr>`).join('')}</tbody></table></div>` : ''}
              ${withPw.length ? `<div class="notice warn" style="margin-top:14px">${icon.info}<span>${fmtNum(withPw.length)} tài khoản có mật khẩu tự tạo. Hãy tải danh sách ngay, mật khẩu sẽ không hiện lại.</span></div>` : ''}`,
            actions: [
              ...(withPw.length ? [{ label: 'Tải danh sách mật khẩu', onClick: () => { saveCsv('tai-khoan-moi.csv', [['Họ tên', 'Lớp', 'Email', 'Mật khẩu'], ...withPw.map((u) => [u.name, u.group || '', u.email || '', u.password])]); return false; } }] : []),
              { label: 'Xong', kind: 'primary' }
            ]
          });
        }
      }]
    });
  }

  // ───────────── Dữ liệu ─────────────
  const dataState = { col: null, search: '', offset: 0, limit: 50 };
  views.data = async () => {
    setHead('Dữ liệu', `<button class="btn btn-sm btn-primary" id="d-newcol">${icon.plus}Bộ sưu tập mới</button>`);
    const r = await api('GET', '/api/admin/collections');
    const cols = r.collections;
    if (!dataState.col || !cols.some((c) => c.name === dataState.col)) dataState.col = cols.length ? cols[0].name : null;
    $('#view').innerHTML = `<div class="browser">
      <div class="panel"><div class="panel-head"><h2>Bộ sưu tập</h2></div>
        ${cols.length ? `<div class="col-list">${cols.map((c) => `<button class="col-item${c.name === dataState.col ? ' active' : ''}" data-col="${esc(c.name)}"><span class="name">${esc(c.name)}</span><span class="count">${fmtNum(c.count)}</span><span class="rule">Đọc: ${esc(shortLevel(c.rule.read))} · Ghi: ${esc(shortLevel(c.rule.write))}</span></button>`).join('')}</div>`
        : '<div class="empty"><strong>Chưa có bộ sưu tập</strong>Bộ sưu tập được tạo tự động khi app lưu dữ liệu đầu tiên.</div>'}
      </div>
      <div class="panel" id="d-docs"></div></div>`;
    $$('.col-item').forEach((b) => (b.onclick = () => { dataState.col = b.dataset.col; dataState.offset = 0; dataState.search = ''; $$('.col-item').forEach((x) => x.classList.toggle('active', x === b)); loadDocs().catch(fail); }));
    $('#d-newcol').onclick = () => {
      modal({
        title: 'Bộ sưu tập mới',
        body: `<label class="field"><span>Tên bộ sưu tập</span><input id="nc" placeholder="vi_du: diem_thi" pattern="[A-Za-z0-9_-]+"><small>Chữ không dấu, số, dấu gạch dưới hoặc gạch ngang. Ví dụ: <span class="mono">progress</span>, <span class="mono">diem_hsk3</span>.</small></label>`,
        actions: [{ label: 'Hủy' }, { label: 'Tiếp tục', kind: 'primary', onClick: (close, root) => {
          const n = $('#nc', root).value.trim();
          if (!/^[A-Za-z0-9_-]{1,64}$/.test(n)) { toast('Tên chỉ gồm chữ không dấu, số, _ hoặc -', 'error'); return false; }
          close(); dataState.col = n; dataState.offset = 0; editDoc(null, true);
        } }]
      });
    };
    if (dataState.col) await loadDocs();
    else $('#d-docs').innerHTML = '<div class="empty"><strong>Chọn hoặc tạo một bộ sưu tập</strong>Mỗi bộ sưu tập giống một sheet Excel, mỗi tài liệu giống một dòng.</div>';
  };
  function shortLevel(l) { return { public: 'mọi người', auth: 'đã đăng nhập', owner: 'người tạo', owner_or_teacher: 'người tạo + GV', self: 'chính chủ', self_or_teacher: 'chính chủ + GV', teacher: 'giáo viên', admin: 'quản trị' }[l] || l; }
  async function loadDocs() {
    const box = $('#d-docs');
    const col = dataState.col;
    box.innerHTML = `<div class="panel-head"><h2 class="mono">${esc(col)}</h2>
        <button class="btn btn-sm" id="d-export">${icon.down}Xuất Excel</button>
        <button class="btn btn-sm btn-danger" id="d-dropcol">Xóa bộ sưu tập</button>
        <button class="btn btn-sm btn-primary" id="d-add">${icon.plus}Thêm tài liệu</button></div>
      <div class="toolbar"><input type="search" id="d-q" placeholder="Tìm trong nội dung" value="${esc(dataState.search)}" aria-label="Tìm tài liệu"></div>
      <div id="d-list"><p class="skeleton" style="padding:20px">Đang tải…</p></div>`;
    $('#d-add').onclick = () => editDoc(null);
    $('#d-export').onclick = () => download('/api/admin/export/collection.xlsx?collection=' + encodeURIComponent(col), col + '.xlsx').catch(fail);
    $('#d-dropcol').onclick = async () => {
      const ok = await confirmBox({ title: `Xóa toàn bộ "${col}"?`, message: 'Tất cả tài liệu trong bộ sưu tập này sẽ bị xóa. Nên tải bản sao lưu trước khi làm việc này.', confirmLabel: 'Xóa toàn bộ', danger: true, typeToConfirm: col });
      if (!ok) return;
      try { const r = await api('DELETE', '/api/admin/collections/' + encodeURIComponent(col)); toast(`Đã xóa ${fmtNum(r.deleted)} tài liệu`); dataState.col = null; views.data().catch(fail); } catch (e) { fail(e); }
    };
    let t;
    $('#d-q').oninput = (e) => { clearTimeout(t); t = setTimeout(() => { dataState.search = e.target.value; dataState.offset = 0; loadDocList().catch(fail); }, 300); };
    await loadDocList();
  }
  async function loadDocList() {
    const col = dataState.col;
    const r = await api('POST', '/api/db/' + encodeURIComponent(col) + '/query', { orderBy: [['__updatedAt', 'desc']], limit: dataState.limit, offset: dataState.offset, search: dataState.search || undefined, count: true });
    const list = $('#d-list');
    if (!list) return;
    if (!r.items.length) {
      list.innerHTML = dataState.search ? '<div class="empty"><strong>Không có tài liệu chứa từ này</strong>Thử từ khóa khác.</div>' : '<div class="empty"><strong>Bộ sưu tập đang trống</strong>Bấm Thêm tài liệu để tạo dòng đầu tiên.</div>';
      return;
    }
    const uids = [...new Set(r.items.map((d) => d.owner).filter(Boolean))];
    let names = {};
    if (uids.length) names = (await api('POST', '/api/users/names', { uids })).users;
    list.innerHTML = `<div class="table-wrap"><table><thead><tr><th>Mã tài liệu</th><th>Nội dung</th><th>Người tạo</th><th>Cập nhật</th></tr></thead><tbody>
      ${r.items.map((d) => `<tr class="clickable" data-id="${esc(d.id)}" tabindex="0"><td class="mono">${esc(d.id)}</td><td><div class="clamp json-preview">${esc(JSON.stringify(d.data))}</div></td><td>${d.owner ? esc(names[d.owner] ? names[d.owner].email || names[d.owner].name : 'Đã xóa') : '<span class="cell-sub">Khách</span>'}</td><td class="nowrap">${fmtDate(d.updatedAt)}</td></tr>`).join('')}
      </tbody></table></div>${pager(r.total, dataState)}`;
    bindPager(list, r.total, dataState, loadDocList);
    $$('tr[data-id]', list).forEach((tr) => {
      const d = r.items.find((x) => x.id === tr.dataset.id);
      tr.onclick = () => editDoc(d, false, names);
      tr.onkeydown = (e) => { if (e.key === 'Enter') editDoc(d, false, names); };
    });
  }
  function editDoc(doc, firstInCollection, names = {}) {
    const col = dataState.col;
    const isNew = !doc;
    modal({
      title: isNew ? `Thêm tài liệu vào ${col}` : 'Tài liệu ' + doc.id, wide: true,
      body: `${isNew ? `<label class="field"><span>Mã tài liệu</span><input id="doc-id" placeholder="Bỏ trống để tạo mã tự động"><small>Gợi ý: dùng mã người dùng làm mã tài liệu để mỗi học viên có một tài liệu riêng.</small></label>`
        : `<p class="small muted" style="margin-bottom:12px">Tạo lúc ${fmtDate(doc.createdAt)} bởi ${doc.owner ? esc(names[doc.owner] ? names[doc.owner].email || names[doc.owner].name : doc.owner) : 'khách'} · Cập nhật ${fmtDate(doc.updatedAt)}</p>`}
        <label class="field"><span>Nội dung (JSON)</span><textarea id="doc-json" rows="16" spellcheck="false">${esc(JSON.stringify(isNew ? (firstInCollection ? { ten: 'Ví dụ', diem: 10 } : {}) : doc.data, null, 2))}</textarea><small>Dạng {"tên_trường": giá trị}. Chuỗi đặt trong ngoặc kép, số và true/false thì không.</small></label>
        <p class="form-error" id="doc-err"></p>`,
      actions: [
        ...(isNew ? [] : [{ label: 'Xóa tài liệu', kind: 'danger-outline', left: true, onClick: async (close) => {
          const ok = await confirmBox({ title: 'Xóa tài liệu?', message: `Tài liệu <span class="mono">${esc(doc.id)}</span> sẽ bị xóa vĩnh viễn.`, confirmLabel: 'Xóa', danger: true });
          if (!ok) return false;
          await api('DELETE', `/api/db/${encodeURIComponent(col)}/${encodeURIComponent(doc.id)}`);
          close(); toast('Đã xóa tài liệu'); loadDocList().catch(fail);
        } }]),
        { label: 'Hủy' },
        { label: isNew ? 'Thêm tài liệu' : 'Lưu', kind: 'primary', onClick: async (close, root) => {
          let data;
          try { data = JSON.parse($('#doc-json', root).value); }
          catch (e) { $('#doc-err', root).textContent = 'JSON chưa đúng cú pháp: ' + e.message; return false; }
          if (!data || typeof data !== 'object' || Array.isArray(data)) { $('#doc-err', root).textContent = 'Nội dung phải là một object, bắt đầu bằng { và kết thúc bằng }.'; return false; }
          if (isNew) {
            const id = $('#doc-id', root).value.trim();
            if (id) await api('PUT', `/api/db/${encodeURIComponent(col)}/${encodeURIComponent(id)}`, data);
            else await api('POST', `/api/db/${encodeURIComponent(col)}`, data);
          } else await api('PUT', `/api/db/${encodeURIComponent(col)}/${encodeURIComponent(doc.id)}`, data);
          close(); toast(isNew ? 'Đã thêm tài liệu' : 'Đã lưu');
          if (firstInCollection) views.data().catch(fail); else loadDocList().catch(fail);
        } }
      ]
    });
  }

  // ───────────── Lưu trữ ─────────────
  const fileState = { folder: null, q: '', offset: 0, limit: 50 };
  function fileKind(f) {
    const n = f.name.toLowerCase();
    if (f.mime.startsWith('image/')) return ['img', 'ẢNH'];
    if (f.mime.startsWith('audio/')) return ['aud', 'MP3'];
    if (f.mime.startsWith('video/')) return ['aud', 'VID'];
    if (f.mime === 'application/pdf') return ['pdf', 'PDF'];
    if (/pptx?$/.test(n)) return ['ppt', 'PPT'];
    if (/docx?$/.test(n)) return ['', 'DOC'];
    if (/xlsx?$|csv$/.test(n)) return ['', 'XLS'];
    return ['', (n.split('.').pop() || 'FILE').slice(0, 4).toUpperCase()];
  }
  views.storage = async () => {
    setHead('Lưu trữ file');
    $('#view').innerHTML = `<div class="stack">
      <div>
        <div class="drop" id="drop" tabindex="0" role="button" aria-label="Chọn file để tải lên">
          <strong>Kéo thả file vào đây hoặc bấm để chọn</strong>
          <span class="muted small">Giáo trình PDF, PowerPoint, âm thanh, hình ảnh… Tối đa <span id="max-mb">50</span> MB mỗi file.</span>
          <input type="file" id="file-input" multiple hidden>
        </div>
        <div class="row" style="margin-top:12px">
          <label class="row small" style="gap:8px">Tải vào thư mục <input id="up-folder" style="width:200px" placeholder="Ví dụ: HSK3/Bai1" list="folder-list"></label>
          <label class="check" style="margin:0"><input type="checkbox" id="up-public"><span class="small">Công khai (ai có đường dẫn đều xem được)</span></label>
        </div>
        <datalist id="folder-list"></datalist>
        <div class="uploads" id="uploads"></div>
      </div>
      <div class="panel">
        <div class="toolbar">
          <input type="search" id="f-q" placeholder="Tìm theo tên file" value="${esc(fileState.q)}" aria-label="Tìm file">
          <select id="f-folder" aria-label="Lọc thư mục"><option value="">Mọi thư mục</option></select>
          <span class="grow"></span><span class="small muted" id="f-usage"></span>
        </div>
        <div id="f-list"></div>
      </div></div>`;
    api('GET', '/api/admin/settings').then((r) => { const el = $('#max-mb'); if (el) el.textContent = r.settings.maxFileMB; }).catch(() => {});
    const input = $('#file-input');
    const drop = $('#drop');
    drop.onclick = () => input.click();
    drop.onkeydown = (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); input.click(); } };
    input.onchange = () => { uploadFiles(Array.from(input.files)); input.value = ''; };
    drop.ondragover = (e) => { e.preventDefault(); drop.classList.add('over'); };
    drop.ondragleave = () => drop.classList.remove('over');
    drop.ondrop = (e) => { e.preventDefault(); drop.classList.remove('over'); uploadFiles(Array.from(e.dataTransfer.files)); };
    let t;
    $('#f-q').oninput = (e) => { clearTimeout(t); t = setTimeout(() => { fileState.q = e.target.value; fileState.offset = 0; loadFiles().catch(fail); }, 250); };
    $('#f-folder').onchange = (e) => { fileState.folder = e.target.value || null; fileState.offset = 0; loadFiles().catch(fail); };
    await loadFiles();
  };
  function uploadFiles(files) {
    const folder = $('#up-folder').value.trim();
    const isPublic = $('#up-public').checked;
    let pending = files.length;
    files.forEach((file) => {
      const row = document.createElement('div');
      row.className = 'upload-row';
      row.innerHTML = `<span class="clamp">${esc(file.name)}</span><span class="muted" data-st>Đang tải 0%</span><div class="meter"><span style="width:0%"></span></div>`;
      $('#uploads').prepend(row);
      const xhr = new XMLHttpRequest();
      xhr.open('POST', '/api/storage');
      xhr.setRequestHeader('Authorization', 'Bearer ' + token);
      xhr.setRequestHeader('X-File-Name', encodeURIComponent(file.name));
      if (folder) xhr.setRequestHeader('X-Folder', encodeURIComponent(folder));
      if (isPublic) xhr.setRequestHeader('X-Public', '1');
      if (file.type) xhr.setRequestHeader('Content-Type', file.type);
      xhr.upload.onprogress = (e) => { if (e.lengthComputable) { const p = Math.round(e.loaded / e.total * 100); $('[data-st]', row).textContent = 'Đang tải ' + p + '%'; $('.meter span', row).style.width = p + '%'; } };
      const finish = () => { if (--pending === 0) loadFiles().catch(fail); };
      xhr.onload = () => {
        let d = {}; try { d = JSON.parse(xhr.responseText); } catch (e) {}
        if (xhr.status < 300) { $('[data-st]', row).textContent = 'Xong · ' + fmtBytes(d.size); $('.meter span', row).style.width = '100%'; setTimeout(() => row.remove(), 4000); }
        else { $('[data-st]', row).textContent = (d.error && d.error.message) || 'Lỗi tải lên'; $('[data-st]', row).style.color = 'var(--seal)'; $('.meter', row).remove(); }
        finish();
      };
      xhr.onerror = () => { $('[data-st]', row).textContent = 'Mất kết nối'; finish(); };
      xhr.send(file);
    });
  }
  async function loadFiles() {
    const p = new URLSearchParams({ limit: fileState.limit, offset: fileState.offset });
    if (fileState.q) p.set('q', fileState.q);
    if (fileState.folder !== null) p.set('folder', fileState.folder);
    const r = await api('GET', '/api/storage?' + p);
    const sel = $('#f-folder');
    if (!sel) return;
    if (fileState.folder === null && !fileState.q) {
      sel.innerHTML = '<option value="">Mọi thư mục</option>' + r.folders.map((f) => `<option value="${esc(f.folder)}">${esc(f.folder)} (${fmtNum(f.n)})</option>`).join('');
      $('#folder-list').innerHTML = r.folders.map((f) => `<option value="${esc(f.folder)}">`).join('');
    }
    sel.value = fileState.folder || '';
    const list = $('#f-list');
    if (!r.items.length) {
      list.innerHTML = fileState.q || fileState.folder ? '<div class="empty"><strong>Không có file phù hợp</strong>Thử từ khóa hoặc thư mục khác.</div>' : '<div class="empty"><strong>Chưa có file nào</strong>Kéo thả giáo trình hoặc file âm thanh vào khung phía trên.</div>';
      return;
    }
    const uids = [...new Set(r.items.map((f) => f.owner).filter(Boolean))];
    const names = uids.length ? (await api('POST', '/api/users/names', { uids })).users : {};
    list.innerHTML = `<div class="table-wrap"><table><thead><tr><th>Tên file</th><th>Thư mục</th><th class="num">Dung lượng</th><th>Chế độ</th><th>Người tải</th><th>Ngày tải</th><th></th></tr></thead><tbody>
      ${r.items.map((f) => { const [k, label] = fileKind(f); return `<tr data-id="${esc(f.id)}">
        <td><div class="file-name">${f.public && f.mime.startsWith('image/') ? `<img class="thumb" src="${esc(f.url)}" alt="" loading="lazy">` : `<span class="file-icon ${k}">${esc(label)}</span>`}<span class="clamp" style="max-width:300px" title="${esc(f.name)}">${esc(f.name)}</span></div></td>
        <td>${f.folder ? esc(f.folder) : '<span class="cell-sub">—</span>'}</td>
        <td class="num">${fmtBytes(f.size)}</td>
        <td><button class="badge ${f.public ? 'teacher' : ''}" data-act="pub" title="Bấm để đổi" style="cursor:pointer">${f.public ? 'Công khai' : 'Riêng tư'}</button></td>
        <td>${esc(names[f.owner] ? names[f.owner].email || names[f.owner].name : '—')}</td>
        <td>${fmtDate(f.createdAt)}</td>
        <td class="actions"><button class="icon-btn" data-act="link" title="Sao chép đường dẫn" aria-label="Sao chép đường dẫn">${icon.link}</button><button class="icon-btn" data-act="open" title="Mở" aria-label="Mở">${icon.open}</button><button class="icon-btn" data-act="edit" title="Đổi tên, thư mục" aria-label="Đổi tên">${icon.edit}</button><button class="icon-btn danger" data-act="del" title="Xóa" aria-label="Xóa">${icon.trash}</button></td>
      </tr>`; }).join('')}</tbody></table></div>${pager(r.total, fileState)}`;
    $('#f-usage').textContent = `${fmtNum(r.total)} file`;
    bindPager(list, r.total, fileState, loadFiles);
    $$('tr[data-id]', list).forEach((tr) => {
      const f = r.items.find((x) => x.id === tr.dataset.id);
      const link = async () => f.public ? location.origin + f.url : location.origin + (await api('GET', `/api/storage/${f.id}/url?hours=168`)).url;
      $('[data-act=link]', tr).onclick = async () => { try { copyText(await link()); if (!f.public) toast('Đường dẫn riêng tư có hạn 7 ngày'); } catch (e) { fail(e); } };
      $('[data-act=open]', tr).onclick = async () => { const w = window.open('', '_blank'); try { w.location = await link(); } catch (e) { w.close(); fail(e); } };
      $('[data-act=pub]', tr).onclick = async () => { try { await api('PATCH', '/api/storage/' + f.id, { public: !f.public }); toast(f.public ? 'Đã chuyển sang riêng tư' : 'Đã công khai file'); loadFiles().catch(fail); } catch (e) { fail(e); } };
      $('[data-act=edit]', tr).onclick = () => modal({
        title: 'Đổi tên file',
        body: `<label class="field"><span>Tên file</span><input id="fn" value="${esc(f.name)}"></label><label class="field"><span>Thư mục</span><input id="ff" value="${esc(f.folder)}" placeholder="Để trống nếu không xếp vào thư mục" list="folder-list"></label>`,
        actions: [{ label: 'Hủy' }, { label: 'Lưu', kind: 'primary', onClick: async (close, root) => { await api('PATCH', '/api/storage/' + f.id, { name: $('#fn', root).value, folder: $('#ff', root).value }); close(); toast('Đã lưu'); loadFiles().catch(fail); } }]
      });
      $('[data-act=del]', tr).onclick = async () => {
        const ok = await confirmBox({ title: 'Xóa file?', message: `<strong>${esc(f.name)}</strong> sẽ bị xóa vĩnh viễn khỏi máy chủ. App nào đang dùng đường dẫn này sẽ không mở được nữa.`, confirmLabel: 'Xóa file', danger: true });
        if (!ok) return;
        try { await api('DELETE', '/api/storage/' + f.id); toast('Đã xóa file'); loadFiles().catch(fail); } catch (e) { fail(e); }
      };
    });
  }

  // ───────────── Quyền truy cập ─────────────
  views.rules = async () => {
    setHead('Quyền truy cập', `<button class="btn btn-sm btn-primary" id="r-save">Lưu quyền truy cập</button>`);
    const [{ rules }, { collections }] = await Promise.all([api('GET', '/api/admin/rules'), api('GET', '/api/admin/collections')]);
    const state = { default: { ...rules.default }, collections: JSON.parse(JSON.stringify(rules.collections)) };
    const opts = (sel) => Object.entries(LEVELS).map(([k, v]) => `<option value="${k}" ${k === sel ? 'selected' : ''}>${v}</option>`).join('');
    const render = () => {
      const names = Object.keys(state.collections).sort();
      const unruled = collections.filter((c) => !state.collections[c.name]).map((c) => c.name);
      $('#view').innerHTML = `<div class="stack">
        <div class="panel"><div class="panel-head"><h2>Ai được đọc và ghi từng bộ sưu tập</h2><label class="btn btn-sm">${icon.up}Nhập từ file<input type="file" id="r-import" accept=".json" hidden></label><button class="btn btn-sm" id="r-add">${icon.plus}Thêm bộ sưu tập</button></div>
          <div class="table-wrap rules-table"><table><thead><tr><th>Bộ sưu tập</th><th>Được đọc</th><th>Được ghi (thêm, sửa, xóa)</th><th></th></tr></thead><tbody>
            <tr><td><div class="cell-main">Mặc định</div><div class="cell-sub">Áp dụng cho mọi bộ sưu tập không có trong danh sách</div></td>
              <td><select data-k="__default" data-f="read">${opts(state.default.read)}</select></td>
              <td><select data-k="__default" data-f="write">${opts(state.default.write)}</select></td><td></td></tr>
            ${names.map((n) => `<tr><td class="mono">${esc(n)}</td>
              <td><select data-k="${esc(n)}" data-f="read">${opts(state.collections[n].read)}</select></td>
              <td><select data-k="${esc(n)}" data-f="write">${opts(state.collections[n].write)}</select></td>
              <td class="actions"><button class="icon-btn danger" data-del="${esc(n)}" title="Dùng quy tắc mặc định" aria-label="Bỏ quy tắc riêng của ${esc(n)}">${icon.trash}</button></td></tr>`).join('')}
          </tbody></table></div>
          ${unruled.length ? `<div class="panel-body small muted" style="border-top:1px solid var(--line)">Đang dùng quy tắc mặc định: ${unruled.map((n) => `<span class="mono">${esc(n)}</span>`).join(', ')}</div>` : ''}
        </div>
        <div class="panel"><div class="panel-head"><h2>Ý nghĩa các mức</h2></div><div class="panel-body levels">
          <div><code>Mọi người</code><span>Ai cũng xem được, không cần đăng nhập. Hợp với thông báo, bảng từ vựng công khai.</span></div>
          <div><code>Đã đăng nhập</code><span>Mọi tài khoản đã đăng nhập. Hợp với bảng xếp hạng chung của lớp.</span></div>
          <div><code>Người tạo</code><span>Chỉ người đã tạo tài liệu đó. Khi đọc danh sách, mỗi người chỉ thấy tài liệu của mình.</span></div>
          <div><code>Người tạo + GV</code><span>Như trên, thêm giáo viên xem được của mọi học viên. Hợp với bài làm, tiến độ học.</span></div>
          <div><code>Chính chủ</code><span>Mã tài liệu phải trùng mã người dùng, ví dụ <span class="mono">progress/{mã học viên}</span>. Tránh học viên ghi đè lên tài liệu của nhau.</span></div>
          <div><code>Chính chủ + GV</code><span>Như Chính chủ, thêm giáo viên đọc và sửa được của mọi học viên. Hợp với hồ sơ, điểm, trạng thái học.</span></div>
          <div><code>Chỉ giáo viên</code><span>Giáo viên và quản trị viên. Hợp với đề thi, đáp án.</span></div>
          <div><code>Chỉ quản trị viên</code><span>Chỉ bạn. Quản trị viên luôn có toàn quyền ở mọi bộ sưu tập.</span></div>
        </div></div></div>`;
      $$('select[data-k]').forEach((s) => (s.onchange = () => { const t = s.dataset.k === '__default' ? state.default : state.collections[s.dataset.k]; t[s.dataset.f] = s.value; }));
      $$('[data-del]').forEach((b) => (b.onclick = () => { delete state.collections[b.dataset.del]; render(); }));
      $('#r-import').onchange = async (e) => {
        const f = e.target.files[0]; if (!f) return;
        try {
          const j = JSON.parse(await f.text());
          const cols = j.collections || (j.rules && j.rules.collections) || {};
          let n = 0;
          for (const [name, r] of Object.entries(cols)) {
            if (!/^[A-Za-z0-9_-]{1,64}$/.test(name)) continue;
            state.collections[name] = { read: LEVELS[r.read] ? r.read : state.default.read, write: LEVELS[r.write] ? r.write : state.default.write }; n++;
          }
          if (!n) throw new Error('File không có bộ sưu tập nào');
          render(); toast(`Đã nhập quyền cho ${n} bộ sưu tập. Bấm Lưu quyền truy cập để áp dụng.`);
        } catch (x) { toast('File quy tắc không hợp lệ: ' + x.message, 'error'); }
      };
      $('#r-add').onclick = () => modal({
        title: 'Đặt quyền riêng cho bộ sưu tập',
        body: `<label class="field"><span>Tên bộ sưu tập</span><input id="rn" list="rn-list" placeholder="vi_du: diem_thi"><datalist id="rn-list">${unruled.map((n) => `<option value="${esc(n)}">`).join('')}</datalist></label>`,
        actions: [{ label: 'Hủy' }, { label: 'Thêm', kind: 'primary', onClick: (close, root) => {
          const n = $('#rn', root).value.trim();
          if (!/^[A-Za-z0-9_-]{1,64}$/.test(n)) { toast('Tên chỉ gồm chữ không dấu, số, _ hoặc -', 'error'); return false; }
          state.collections[n] = state.collections[n] || { ...state.default };
          close(); render();
        } }]
      });
    };
    render();
    $('#r-save').onclick = async () => { try { await api('PUT', '/api/admin/rules', state); toast('Đã lưu quyền truy cập'); } catch (e) { fail(e); } };
  };

  // ───────────── Sao lưu ─────────────
  views.backup = async () => {
    setHead('Sao lưu & xuất');
    const [{ backups, dir }, { collections }] = await Promise.all([api('GET', '/api/admin/backups'), api('GET', '/api/admin/collections')]);
    $('#view').innerHTML = `<div class="stack">
      <div class="cols">
        <div class="panel"><div class="panel-head"><h2>Tải bản sao lưu dữ liệu</h2></div><div class="panel-body">
          <p class="muted" style="margin-bottom:14px">Một file chứa toàn bộ tài khoản (mật khẩu đã mã hóa), dữ liệu, quyền truy cập và danh sách file. Nên tải định kỳ và cất ở nơi khác như Google Drive.</p>
          <label class="check"><input type="checkbox" id="bk-gz" checked><span>Nén nhỏ file (.json.gz)</span></label>
          <button class="btn btn-primary" id="bk-dl">${icon.down}Tải bản sao lưu</button>
          <p class="small muted" style="margin-top:14px">File thật (PDF, âm thanh…) nằm trong thư mục <span class="mono">data/files</span>. Để sao lưu đầy đủ, chép cả thư mục <span class="mono">data</span>.</p>
        </div></div>
        <div class="panel"><div class="panel-head"><h2>Khôi phục từ bản sao lưu</h2></div><div class="panel-body">
          <label class="field"><span>File sao lưu (.json hoặc .json.gz)</span><input type="file" id="rs-file" accept=".json,.gz"></label>
          <label class="check"><input type="radio" name="rs-mode" value="merge" checked><span>Gộp vào dữ liệu hiện có<br><small class="muted">Thêm lại tài khoản, tài liệu bị mất; ghi đè tài liệu trùng mã.</small></span></label>
          <label class="check"><input type="radio" name="rs-mode" value="replace"><span>Thay thế toàn bộ<br><small class="muted">Xóa hết dữ liệu hiện tại rồi đưa về đúng như trong bản sao lưu.</small></span></label>
          <button class="btn" id="rs-go">${icon.up}Khôi phục</button>
        </div></div>
      </div>
      <div class="panel"><div class="panel-head"><h2>Bản sao lưu trên máy chủ</h2><button class="btn btn-sm" id="sn-new">Sao lưu ngay</button></div>
        <div class="panel-body small muted" style="border-bottom:1px solid var(--line)">NanaBase tự sao lưu cơ sở dữ liệu mỗi ngày vào <span class="mono" style="word-break:break-all">${esc(dir)}</span>. Để khôi phục một bản: tắt NanaBase, chép file đó đè lên <span class="mono">data/nanabase.db</span>, rồi chạy lại.</div>
        ${backups.length ? `<div class="table-wrap"><table><thead><tr><th>Tên</th><th>Loại</th><th class="num">Dung lượng</th><th>Thời gian</th><th></th></tr></thead><tbody>
          ${backups.map((b) => `<tr data-n="${esc(b.name)}"><td class="mono">${esc(b.name)}</td><td>${b.auto ? 'Tự động' : b.name.includes('truoc-khoi-phuc') ? 'Trước khi khôi phục' : 'Thủ công'}</td><td class="num">${fmtBytes(b.size)}</td><td>${fmtDate(b.createdAt)}</td>
          <td class="actions"><button class="icon-btn" data-act="dl" title="Tải về" aria-label="Tải về">${icon.down}</button><button class="icon-btn danger" data-act="del" title="Xóa" aria-label="Xóa">${icon.trash}</button></td></tr>`).join('')}
        </tbody></table></div>` : '<div class="empty"><strong>Chưa có bản sao lưu</strong>Bấm Sao lưu ngay để tạo bản đầu tiên.</div>'}
      </div>
      <div class="panel"><div class="panel-head"><h2>Xuất ra Excel</h2></div><div class="panel-body">
        <div class="row" style="margin-bottom:14px"><span class="grow">Danh sách người dùng</span><button class="btn btn-sm" data-exp="users.xlsx">Excel (.xlsx)</button><button class="btn btn-sm" data-exp="users.csv">CSV</button></div>
        <div class="row"><select id="ex-col" class="grow" style="max-width:320px" aria-label="Chọn bộ sưu tập">${collections.map((c) => `<option value="${esc(c.name)}">${esc(c.name)} (${fmtNum(c.count)} tài liệu)</option>`).join('') || '<option value="">Chưa có bộ sưu tập</option>'}</select><span class="grow"></span><button class="btn btn-sm" data-exp="collection.xlsx">Excel (.xlsx)</button><button class="btn btn-sm" data-exp="collection.csv">CSV</button></div>
      </div></div></div>`;
    $('#bk-dl').onclick = () => download('/api/admin/backup' + ($('#bk-gz').checked ? '?gzip=1' : ''), 'nanabase-backup.json').then(() => toast('Đã tải bản sao lưu')).catch(fail);
    $('#rs-go').onclick = async () => {
      const file = $('#rs-file').files[0];
      if (!file) return toast('Hãy chọn file sao lưu trước', 'error');
      const mode = $('input[name=rs-mode]:checked').value;
      const ok = await confirmBox({
        title: mode === 'replace' ? 'Thay thế toàn bộ dữ liệu?' : 'Khôi phục dữ liệu?',
        message: mode === 'replace' ? 'Mọi tài khoản và dữ liệu hiện tại sẽ bị thay bằng nội dung trong bản sao lưu. NanaBase sẽ tự lưu một bản trước khi thay.' : 'Dữ liệu trong bản sao lưu sẽ được gộp vào. NanaBase sẽ tự lưu một bản trước khi gộp.',
        confirmLabel: 'Khôi phục', danger: mode === 'replace', typeToConfirm: mode === 'replace' ? 'THAY THẾ' : undefined
      });
      if (!ok) return;
      try {
        const r = await api('POST', '/api/admin/restore?mode=' + mode, file);
        toast(`Đã khôi phục ${fmtNum(r.users)} tài khoản, ${fmtNum(r.docs)} tài liệu, ${fmtNum(r.files)} file${r.missingFiles ? `; ${fmtNum(r.missingFiles)} file không còn trên máy chủ` : ''}`);
        if (!r.sessionValid) { toast('Phiên đăng nhập đã thay đổi, vui lòng đăng nhập lại'); logout(); } else views.backup().catch(fail);
      } catch (e) { fail(e); }
    };
    $('#sn-new').onclick = async () => { try { const r = await api('POST', '/api/admin/backups'); toast('Đã tạo ' + r.name); views.backup().catch(fail); } catch (e) { fail(e); } };
    $$('tr[data-n]').forEach((tr) => {
      const n = tr.dataset.n;
      $('[data-act=dl]', tr).onclick = () => download('/api/admin/backups/' + encodeURIComponent(n), n).catch(fail);
      $('[data-act=del]', tr).onclick = async () => {
        const ok = await confirmBox({ title: 'Xóa bản sao lưu?', message: `<span class="mono">${esc(n)}</span> sẽ bị xóa khỏi máy chủ.`, confirmLabel: 'Xóa', danger: true });
        if (ok) { try { await api('DELETE', '/api/admin/backups/' + encodeURIComponent(n)); views.backup().catch(fail); } catch (e) { fail(e); } }
      };
    });
    $$('[data-exp]').forEach((b) => (b.onclick = () => {
      const kind = b.dataset.exp;
      if (kind.startsWith('collection')) {
        const c = $('#ex-col').value;
        if (!c) return toast('Chưa có bộ sưu tập để xuất', 'error');
        download(`/api/admin/export/${kind}?collection=${encodeURIComponent(c)}`, c + '.' + kind.split('.')[1]).catch(fail);
      } else download('/api/admin/export/' + kind, 'nguoi-dung.' + kind.split('.')[1]).catch(fail);
    }));
  };

  // ───────────── Cài đặt ─────────────
  views.settings = async () => {
    setHead('Cài đặt', `<button class="btn btn-sm btn-primary" id="s-save">Lưu cài đặt</button>`);
    const { settings: s } = await api('GET', '/api/admin/settings');
    $('#view').innerHTML = `<form id="sf" class="stack" onsubmit="return false" style="max-width:760px">
      <div class="panel"><div class="panel-head"><h2>Chung</h2></div><div class="panel-body">
        <label class="field"><span>Tên hệ thống</span><input name="appName" value="${esc(s.appName)}"><small>Hiện ở trang quản trị và trang đăng nhập.</small></label>
      </div></div>
      <div class="panel"><div class="panel-head"><h2>Tài khoản</h2></div><div class="panel-body">
        <label class="check"><input type="checkbox" name="allowRegister" ${s.allowRegister ? 'checked' : ''}><span>Cho phép tự đăng ký trong app<br><small class="muted">Tắt đi nếu bạn muốn tự cấp tài khoản cho từng lớp.</small></span></label>
        <label class="check"><input type="checkbox" name="nameLogin" ${s.nameLogin ? 'checked' : ''}><span>Cho phép đăng nhập bằng họ tên, không cần email<br><small class="muted">Học viên đăng ký bằng họ tên + lớp + mật khẩu. Trùng họ tên khác lớp vẫn đăng nhập được: app sẽ hỏi chọn lớp.</small></span></label>
        <div class="grid-2">
          <label class="field"><span>Vai trò khi tự đăng ký</span><select name="defaultRole"><option value="student" ${s.defaultRole === 'student' ? 'selected' : ''}>Học viên</option><option value="teacher" ${s.defaultRole === 'teacher' ? 'selected' : ''}>Giáo viên</option></select></label>
          <label class="field"><span>Giữ đăng nhập (ngày)</span><input name="tokenDays" type="number" min="1" max="365" value="${s.tokenDays}"></label>
        </div>
      </div></div>
      <div class="panel"><div class="panel-head"><h2>Lưu trữ file</h2></div><div class="panel-body">
        <div class="grid-2">
          <label class="field"><span>Dung lượng tối đa mỗi file (MB)</span><input name="maxFileMB" type="number" min="1" max="4096" value="${s.maxFileMB}"></label>
          <label class="field"><span>Tổng dung lượng mỗi người (MB)</span><input name="userQuotaMB" type="number" min="1" value="${s.userQuotaMB}"><small>Quản trị viên không bị giới hạn.</small></label>
        </div>
        <label class="field"><span>Ai được tải file lên</span><select name="uploadRole"><option value="student" ${s.uploadRole === 'student' ? 'selected' : ''}>Mọi người dùng</option><option value="teacher" ${s.uploadRole === 'teacher' ? 'selected' : ''}>Giáo viên và quản trị viên</option><option value="admin" ${s.uploadRole === 'admin' ? 'selected' : ''}>Chỉ quản trị viên</option></select></label>
      </div></div>
      <div class="panel"><div class="panel-head"><h2>Sao lưu tự động</h2></div><div class="panel-body">
        <label class="check"><input type="checkbox" name="autoBackup" ${s.autoBackup ? 'checked' : ''}><span>Tự sao lưu cơ sở dữ liệu mỗi ngày</span></label>
        <label class="field" style="max-width:280px"><span>Giữ lại số bản gần nhất</span><input name="backupKeep" type="number" min="1" max="365" value="${s.backupKeep}"></label>
      </div></div>
      <div class="panel"><div class="panel-head"><h2>Trang web được phép kết nối</h2></div><div class="panel-body">
        <label class="field"><span>Địa chỉ trang web</span><input name="corsOrigins" value="${esc(s.corsOrigins)}"><small>Dấu <span class="mono">*</span> cho phép mọi trang. Để chặt hơn, ghi các địa chỉ app của bạn cách nhau bằng dấu phẩy, ví dụ <span class="mono">https://nana.github.io, https://hsk3.netlify.app</span>. App mở trực tiếp từ file trên máy cần để <span class="mono">*</span>.</small></label>
      </div></div></form>`;
    $('#s-save').onclick = async () => {
      const f = $('#sf');
      const body = {
        appName: f.appName.value, allowRegister: f.allowRegister.checked, nameLogin: f.nameLogin.checked, defaultRole: f.defaultRole.value, tokenDays: +f.tokenDays.value,
        maxFileMB: +f.maxFileMB.value, userQuotaMB: +f.userQuotaMB.value, uploadRole: f.uploadRole.value,
        autoBackup: f.autoBackup.checked, backupKeep: +f.backupKeep.value, corsOrigins: f.corsOrigins.value
      };
      try {
        const r = await api('PUT', '/api/admin/settings', body);
        status.app = r.settings.appName; $('#side-app').textContent = status.app;
        toast('Đã lưu cài đặt');
      } catch (e) { fail(e); }
    };
  };

  // ───────────── Kết nối app ─────────────
  views.connect = async () => {
    setHead('Kết nối app', `<a class="btn btn-sm" href="/demo.html" target="_blank">${icon.open}Mở trang demo</a>`);
    const base = location.origin;
    const snippets = [
      ['Bước 1. Thêm vào thẻ <head> của app', `<script src="${base}/sdk.js"></script>
<script>
  const nb = NanaBase.init('${base}');
</script>`],
      ['Bước 2. Đăng ký, đăng nhập, đăng xuất', `await nb.auth.register('an@gmail.com', 'matkhau123', 'Nguyễn Văn An');
await nb.auth.login('an@gmail.com', 'matkhau123');
nb.auth.logout();

// Chạy mỗi khi trạng thái đăng nhập thay đổi
nb.auth.onChange(user => {
  if (user) console.log('Xin chào', user.name);
  else console.log('Chưa đăng nhập');
});`],
      ['Bước 3. Lưu và đọc tiến độ học', `const uid = nb.auth.user.uid;
const tienDo = nb.collection('progress').doc(uid);

// Lưu (tạo mới hoặc ghi đè)
await tienDo.set({ lop: 'HSK1', bai: 3, diem: 85, tuDaHoc: ['你好', '谢谢'] });

// Cập nhật một phần: cộng điểm, thêm từ mới
await tienDo.update({
  diem: nb.field.increment(5),
  tuDaHoc: nb.field.arrayUnion('再见'),
  lanCuoi: nb.field.serverTime()
});

// Đọc
const doc = await tienDo.get();   // null nếu chưa có
console.log(doc && doc.data.diem);`],
      ['Bước 4. Truy vấn, bảng xếp hạng', `const { items } = await nb.collection('progress')
  .where('lop', '==', 'HSK1')
  .where('diem', '>=', 80)
  .orderBy('diem', 'desc')
  .limit(10)
  .get();
items.forEach(d => console.log(d.id, d.data.diem));`],
      ['Bước 5. Cập nhật theo thời gian thực', `const huy = nb.collection('announcements').onSnapshot(items => {
  hienThiThongBao(items);   // chạy lại mỗi khi có thông báo mới
});
// huy();  // gọi khi không cần nghe nữa`],
      ['Bước 6. Tải file lên và lấy đường dẫn', `const input = document.querySelector('input[type=file]');
const file = await nb.storage.upload(input.files[0], {
  folder: 'bai-nop/HSK1',
  onProgress: p => console.log(p + '%')
});
const url = await nb.storage.getUrl(file.id);  // dùng cho <img>, <audio>, <a>`]
    ];
    $('#view').innerHTML = `<div class="stack" style="max-width:900px">
      <div class="notice">${icon.info}<span>Địa chỉ máy chủ hiện tại: <strong class="mono">${esc(base)}</strong>. Học viên ở mạng khác cần địa chỉ công khai (xem phần "Đưa lên Internet" trong file HƯỚNG DẪN).</span></div>
      <div class="panel"><div class="panel-body">
        ${snippets.map(([t, code], i) => `<div class="code-head"><h3>${esc(t)}</h3><button class="btn btn-sm" data-copy="${i}">${icon.copy}Sao chép</button></div><pre class="code">${esc(code)}</pre>`).join('')}
      </div></div>
      <div class="panel"><div class="panel-head"><h2>Chuyển từ Firebase</h2></div><div class="panel-body">
        <dl class="kv" style="grid-template-columns:minmax(0,1fr) minmax(0,1fr)">
          <dt class="mono">firebase.auth().signInWithEmailAndPassword</dt><dd class="mono" style="text-align:left">nb.auth.login</dd>
          <dt class="mono">firebase.auth().onAuthStateChanged</dt><dd class="mono" style="text-align:left">nb.auth.onChange</dd>
          <dt class="mono">db.collection(x).doc(id).set / get</dt><dd class="mono" style="text-align:left">nb.collection(x).doc(id).set / get</dd>
          <dt class="mono">FieldValue.increment(1)</dt><dd class="mono" style="text-align:left">nb.field.increment(1)</dd>
          <dt class="mono">snapshot.docs.map(d =&gt; d.data())</dt><dd class="mono" style="text-align:left">items.map(d =&gt; d.data)</dd>
          <dt class="mono">storage.ref(path).put(file)</dt><dd class="mono" style="text-align:left">nb.storage.upload(file, { folder })</dd>
        </dl>
      </div></div></div>`;
    $$('[data-copy]').forEach((b) => (b.onclick = () => copyText(snippets[+b.dataset.copy][1])));
  };

  // ───────────── Khởi động ─────────────
  (async () => {
    try { status = await api('GET', '/api/status', undefined, { noLogout: true }); }
    catch (e) { document.body.innerHTML = `<div class="auth"><div class="auth-card"><h1 style="margin:0 0 8px">Không kết nối được</h1><p class="muted">${esc(e.message)}</p></div></div>`; return; }
    if (status.needsSetup) return showAuth('setup');
    if (!token) return showAuth('login');
    try {
      const r = await api('GET', '/api/auth/me', undefined, { noLogout: true });
      if (r.user.role !== 'admin') throw new Error();
      me = r.user; startApp();
    } catch (e) { logout(); }
  })();
})();

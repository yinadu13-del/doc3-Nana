# NanaBase — máy chủ dữ liệu tự host, dùng giống Firebase

NanaBase chạy trên máy tính của bạn (hoặc một máy chủ thuê), lưu tài khoản, dữ liệu và file cho các app HTML dạy tiếng Trung. Không phụ thuộc hạn mức miễn phí của Firebase, dữ liệu nằm trong tay bạn.

**Có sẵn:**

- **Đăng nhập** bằng email/mật khẩu, 3 vai trò: học viên, giáo viên, quản trị viên. Nhập cả danh sách lớp từ Excel.
- **Cơ sở dữ liệu** dạng bộ sưu tập / tài liệu như Firestore: lọc, sắp xếp, đếm, cập nhật tức thì, tăng điểm, thêm phần tử vào mảng.
- **Lưu file**: PDF, PowerPoint, âm thanh, hình ảnh; file riêng tư hoặc công khai; nghe/tua âm thanh trực tiếp.
- **Quyền truy cập** cho từng bộ sưu tập (ai được đọc, ai được ghi).
- **Thống kê**: người dùng mới, người hoạt động mỗi ngày, dung lượng.
- **Sao lưu** tự động mỗi ngày, tải bản sao lưu, khôi phục, xuất Excel.
- **Trang quản trị** tiếng Việt và **thư viện kết nối** (`sdk.js`) cho app HTML.

Không cần cài thêm thư viện nào: chỉ cần Node.js.

---

## 1. Cài đặt và chạy

1. Cài **Node.js bản LTS** (22.13 trở lên) tại <https://nodejs.org>. Cài xong, mở lại máy nếu được yêu cầu.
2. Giải nén thư mục `nanabase` vào nơi cố định, ví dụ `D:\NanaBase` hoặc `~/NanaBase`.
3. Chạy:
   - **Windows:** bấm đúp `start.bat`.
   - **macOS:** bấm đúp `start.command` (lần đầu: chuột phải → Mở).
   - **Linux / máy chủ:** `./start.sh` hoặc `node server.js`.
4. Mở trình duyệt vào **http://localhost:8080/admin/** và tạo tài khoản quản trị đầu tiên.

Cửa sổ dòng lệnh phải để mở trong lúc dùng. Đóng cửa sổ hoặc nhấn `Ctrl + C` là tắt máy chủ.

Muốn xem thử ngay: mở **http://localhost:8080/demo.html**, một app học từ HSK1 mẫu có đăng ký, lưu điểm, bảng xếp hạng, thông báo và nộp bài.

---

## 2. Kết nối app HTML của bạn

Thêm vào thẻ `<head>` (thay địa chỉ bằng địa chỉ máy chủ của bạn):

```html
<script src="http://localhost:8080/sdk.js"></script>
<script>
  const nb = NanaBase.init('http://localhost:8080');
</script>
```

### Đăng nhập

```js
await nb.auth.register('an@gmail.com', 'matkhau123', 'Nguyễn Văn An');
await nb.auth.login('an@gmail.com', 'matkhau123');
nb.auth.logout();

nb.auth.onChange(user => {          // chạy mỗi khi đăng nhập / đăng xuất
  if (user) console.log(user.uid, user.name, user.role);
});
```

Đăng nhập được giữ lại sau khi tải lại trang (mặc định 30 ngày).

Không cần email: học viên đăng ký và đăng nhập bằng **họ tên + lớp + mật khẩu**. Không cho trùng họ tên trong cùng một lớp; nếu trùng họ tên và mật khẩu ở lớp khác, máy chủ trả về danh sách lớp để chọn:

```js
await nb.auth.registerByName('Nguyễn Văn An', 'matkhau123', 'K28-TQ1');

const r = await nb.auth.loginByName('nguyen van an', 'matkhau123');   // không phân biệt dấu, hoa thường
if (r.choices) {
  // r.choices = [{ uid, name, group }, ...] → hỏi học viên chọn lớp, rồi:
  await nb.auth.loginByName('nguyen van an', 'matkhau123', r.choices[0].uid);
}
```

Giáo viên quản lý tài khoản học viên ngay trong app của mình:

```js
await nb.users.setPassword(uid, 'matkhaumoi');     // cấp lại mật khẩu
await nb.users.update(uid, { disabled: true });    // khóa tài khoản
await nb.users.remove(uid, { purge: true });       // xóa tài khoản cùng dữ liệu, file của học viên
```

### Lưu và đọc dữ liệu

```js
const uid = nb.auth.user.uid;
const tienDo = nb.collection('progress').doc(uid);

await tienDo.set({ lop: 'HSK1', bai: 3, diem: 85 });             // tạo mới / ghi đè
await tienDo.set({ bai: 4 }, { merge: true });                   // chỉ ghi các trường này
await tienDo.update({                                             // cập nhật một phần
  diem: nb.field.increment(5),
  tuDaHoc: nb.field.arrayUnion('你好', '谢谢'),
  lanCuoi: nb.field.serverTime()
});
const doc = await tienDo.get();        // { id, data, owner, createdAt, updatedAt } hoặc null
await tienDo.delete();

await nb.collection('bai_lam').add({ bai: 2, cauTraLoi: [...] }); // tự tạo mã tài liệu
```

### Truy vấn

```js
const { items, hasMore } = await nb.collection('progress')
  .where('lop', '==', 'HSK1')
  .where('diem', '>=', 80)
  .orderBy('diem', 'desc')
  .limit(10)
  .get();
items.forEach(d => console.log(d.id, d.data.diem));
```

Toán tử: `==`, `!=`, `<`, `<=`, `>`, `>=`, `in`, `not-in`, `array-contains`, `contains` (tìm chuỗi con).
Trường đặc biệt: `__id`, `__owner`, `__createdAt`, `__updatedAt`. Trường lồng nhau viết `thongTin.lop`.
Lấy tất cả (tự lật trang): `await nb.collection('progress').getAll()`.

### Cập nhật tức thì

```js
const huy = nb.collection('announcements')
  .orderBy('__createdAt', 'desc')
  .onSnapshot(items => hienThi(items));    // chạy lại mỗi khi có thay đổi
// huy();

nb.collection('progress').doc(uid).onSnapshot(doc => ...);
```

### Ghi nhiều tài liệu cùng lúc

```js
await nb.batch()
  .set('progress', uid, { diem: 0 })
  .add('nhat_ky', { suKien: 'reset' })
  .commit();     // tất cả cùng thành công hoặc cùng thất bại
```

### File

```js
const f = await nb.storage.upload(input.files[0], {
  folder: 'bai-nop/HSK1',
  public: false,                    // true: ai có đường dẫn đều xem được
  onProgress: p => console.log(p + '%')
});
const url = await nb.storage.getUrl(f.id);   // dùng cho <img>, <audio>, <a>
const { items } = await nb.storage.list({ folder: 'bai-nop/HSK1', mine: true });
await nb.storage.delete(f.id);
```

File riêng tư: chỉ người tải lên, giáo viên và quản trị viên xem được; đường dẫn từ `getUrl` có hạn 12 giờ.

### Bắt lỗi

Mọi lỗi đều có thông báo tiếng Việt:

```js
try { await nb.auth.login(email, pw); }
catch (e) { alert(e.message); }   // e.code: 'wrong-credentials', 'permission-denied', ...
```

### Chuyển từ Firebase

| Firebase | NanaBase |
|---|---|
| `signInWithEmailAndPassword(e, p)` | `nb.auth.login(e, p)` |
| `onAuthStateChanged(cb)` | `nb.auth.onChange(cb)` |
| `db.collection(x).doc(id).set(data, {merge})` | `nb.collection(x).doc(id).set(data, {merge})` |
| `FieldValue.increment(1)` | `nb.field.increment(1)` |
| `query.onSnapshot(s => s.docs.map(d => d.data()))` | `query.onSnapshot(items => items.map(d => d.data))` |
| `storage.ref(path).put(file)` | `nb.storage.upload(file, { folder })` |

---

## 3. Quyền truy cập

Vào **Quyền truy cập** trong trang quản trị để đặt cho từng bộ sưu tập ai được đọc, ai được ghi:

| Mức | Ý nghĩa |
|---|---|
| Mọi người | Không cần đăng nhập. Hợp với thông báo, từ vựng công khai. |
| Đã đăng nhập | Mọi tài khoản. Hợp với bảng xếp hạng. |
| Người tạo | Chỉ người tạo tài liệu; khi đọc danh sách, mỗi người chỉ thấy của mình. |
| Người tạo và giáo viên | Như trên, giáo viên xem được của mọi học viên. |
| Chính chủ | Mã tài liệu phải trùng mã người dùng (`progress/{uid}`). |
| Chính chủ và giáo viên | Như trên, giáo viên đọc và sửa được của mọi học viên. |
| Chỉ giáo viên | Giáo viên và quản trị viên. |
| Chỉ quản trị viên | Chỉ quản trị viên. |

Quản trị viên luôn có toàn quyền. Cài sẵn:

- `announcements`: mọi người đọc, giáo viên ghi.
- `progress`: người tạo và giáo viên đọc, chính chủ ghi.
- `leaderboard`: người đã đăng nhập đọc, chính chủ ghi.
- Các bộ sưu tập khác: người tạo và giáo viên đọc, người tạo ghi.

> Lưu ý: app HTML chạy trên máy học viên nên học viên rành kỹ thuật có thể tự gửi điểm giả lên bộ sưu tập của chính mình. Với bài thi quan trọng, chỉ dùng điểm để tham khảo hoặc để giáo viên chấm.

---

## 4. Cho học viên truy cập

`localhost` chỉ dùng được trên chính máy đang chạy NanaBase. Để học viên dùng từ máy khác:

### Cách A — Cùng mạng Wi-Fi (lớp học, phòng máy)

Khi chạy, cửa sổ dòng lệnh in ra dòng `Trong mạng LAN : http://192.168.x.x:8080/admin/`. Dùng địa chỉ đó trong app:

```js
const nb = NanaBase.init('http://192.168.1.5:8080');
```

Windows có thể hỏi cho phép Node.js qua tường lửa: chọn **Allow** cho mạng Private.

### Cách B — Qua Internet, miễn phí, chạy trên máy của bạn

Dùng **Cloudflare Tunnel** để có đường dẫn `https://` công khai:

1. Tải `cloudflared` tại <https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/downloads/>.
2. Trong lúc NanaBase đang chạy, mở cửa sổ dòng lệnh khác và gõ:
   ```
   cloudflared tunnel --url http://localhost:8080
   ```
3. Dùng đường dẫn `https://....trycloudflare.com` hiện ra trong app.

Đường dẫn này đổi mỗi lần chạy lại. Muốn địa chỉ cố định, tạo tài khoản Cloudflare (miễn phí) và gắn tên miền riêng. Máy tính phải bật thì học viên mới dùng được.

### Cách C — Máy chủ chạy 24/7 (VPS)

Thuê một VPS Ubuntu 1 GB RAM là đủ cho 1.000 người dùng. Trên VPS:

```bash
# cài Node.js 22
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs
# chép thư mục nanabase lên, rồi chạy nền bằng pm2
sudo npm install -g pm2
cd ~/nanabase && TRUST_PROXY=1 pm2 start server.js --name nanabase
pm2 save && pm2 startup
```

Rồi cài **Caddy** để có HTTPS tự động cho tên miền của bạn, file `/etc/caddy/Caddyfile`:

```
data.ten-mien-cua-ban.vn {
  reverse_proxy localhost:8080
}
```

Hoặc dùng Docker: `docker build -t nanabase . && docker run -d -p 8080:8080 -v nanabase-data:/app/data nanabase`.

---

## 5. Sao lưu

- **Tự động:** mỗi ngày NanaBase sao lưu cơ sở dữ liệu vào `data/backups/`, giữ 14 bản gần nhất.
- **Tải về:** trang quản trị → **Sao lưu & xuất** → **Tải bản sao lưu**. Nên tải mỗi tuần và cất lên Google Drive.
- **Sao lưu đầy đủ kèm file:** chép cả thư mục `data` sang nơi khác.
- **Khôi phục từ bản tự động:** tắt NanaBase, chép file trong `data/backups/` đè lên `data/nanabase.db`, chạy lại.
- **Xuất Excel:** danh sách người dùng hoặc bất kỳ bộ sưu tập nào.

Thư mục `data` chứa toàn bộ dữ liệu, kể cả `secret.key` dùng để ký đăng nhập: đừng chia sẻ thư mục này.

---

## 6. Lệnh hữu ích

```bash
node server.js reset-password nana@dtu.edu.vn matkhaumoi   # quên mật khẩu quản trị
node server.js create-admin  admin2@dtu.edu.vn matkhau      # thêm quản trị viên
node server.js backup                                       # sao lưu ngay
```

Biến môi trường:

| Biến | Mặc định | Ý nghĩa |
|---|---|---|
| `PORT` | `8080` | Cổng chạy |
| `NANABASE_DATA` | `./data` | Thư mục dữ liệu |
| `NANABASE_TZ` | `Asia/Ho_Chi_Minh` | Múi giờ tính thống kê theo ngày |
| `TRUST_PROXY` | (tắt) | Đặt `1` khi chạy sau Caddy/Nginx/Cloudflare |

Ví dụ đổi cổng trên Windows: `set PORT=8081 && node server.js`; trên macOS/Linux: `PORT=8081 node server.js`.

---

## 7. Sức chứa

Đã thử với 1.000 tài khoản trên một máy bình thường:

| Thao tác | Kết quả |
|---|---|
| Nhập 1.000 tài khoản từ danh sách | khoảng 24 giây |
| 1.000 học viên cùng lưu tiến độ một lúc | khoảng 1,3 giây cho cả 1.000 |
| 1.000 học viên cùng truy vấn bảng xếp hạng | khoảng 0,6 giây cho cả 1.000 |
| Bộ nhớ máy chủ | khoảng 160 MB |
| Dữ liệu 1.000 tài khoản + 1.000 tài liệu tiến độ | khoảng 5 MB |

Không giới hạn số lượt đọc/ghi mỗi ngày như gói miễn phí Firebase. Giới hạn thực tế là dung lượng ổ đĩa (cho file) và tốc độ mạng của máy chạy NanaBase.

Mặc định mỗi file tối đa 50 MB, mỗi người tối đa 500 MB; đổi trong **Cài đặt**.

---

## 8. So với Firebase

NanaBase chưa có: đăng nhập bằng Google/số điện thoại, gửi email quên mật khẩu (quản trị viên đặt lại mật khẩu trong trang quản trị), thông báo đẩy, chạy offline phía app, và tự mở rộng ra nhiều máy chủ. Với một trung tâm hoặc khoa có vài nghìn học viên, một máy NanaBase là đủ.

---

## 9. Danh sách API (cho lập trình viên)

Mọi yêu cầu cần đăng nhập gửi kèm `Authorization: Bearer <token>`. Lỗi trả về `{ "error": { "code", "message" } }`.

| Phương thức | Đường dẫn | Việc |
|---|---|---|
| POST | `/api/auth/register` `/api/auth/login` | Đăng ký / đăng nhập bằng `email` hoặc `name` (+ `group`) → `{ token, user }`; trùng tên: `{ choices }` |
| GET / PATCH | `/api/auth/me` | Thông tin / sửa tên, `meta` |
| POST | `/api/auth/password` | Đổi mật khẩu |
| GET | `/api/db/:col?q={json}` | Truy vấn (`where`, `orderBy`, `limit`, `offset`, `count`, `search`) |
| POST | `/api/db/:col/query` | Truy vấn, thân là JSON |
| POST | `/api/db/:col` | Thêm tài liệu, tự tạo mã |
| GET / PUT / PATCH / DELETE | `/api/db/:col/:id` | Đọc / ghi đè (`?merge=1`) / cập nhật / xóa |
| POST | `/api/db/batch` | Nhiều thao tác trong một giao dịch |
| GET | `/api/stream?c=a,b&token=` | Theo dõi thay đổi nhiều bộ sưu tập trên một kết nối (Server-Sent Events) |
| PATCH / DELETE | `/api/users/:uid` | Giáo viên sửa (`name`, `group`, `disabled`, `password`) / xóa (`?purge=1`) tài khoản học viên |
| POST | `/api/storage` | Tải file (thân là nội dung file; tiêu đề `X-File-Name`, `X-Folder`, `X-Public`) |
| GET | `/api/storage` | Danh sách file |
| GET | `/api/storage/:id/url` | Đường dẫn có chữ ký cho file riêng tư |
| PATCH / DELETE | `/api/storage/:id` | Đổi tên, thư mục, chế độ / xóa |
| GET | `/files/:id/:ten` | Tải / xem file (hỗ trợ tua âm thanh, video) |
| GET | `/api/admin/...` | Thống kê, người dùng, quyền, cài đặt, sao lưu, xuất Excel (chỉ quản trị viên) |

Giá trị đặc biệt khi ghi: `{"$op":"increment","by":1}`, `{"$op":"serverTime"}`, `{"$op":"arrayUnion","values":[...]}`, `{"$op":"arrayRemove","values":[...]}`, `{"$op":"delete"}`.

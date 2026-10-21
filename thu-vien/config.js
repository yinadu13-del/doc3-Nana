/* =====================================================================
 *  CẤU HÌNH THƯ VIỆN CHUYÊN NGÀNH TIẾNG TRUNG
 *  ---------------------------------------------------------------
 *  Muốn THÊM MÔN MỚI:
 *    1. Sao chép file  mon/_mau-mon-moi.js  thành file mới, ví dụ  mon/doc-4.js
 *    2. Mở file mới, sửa "id", "name"... và điền bài học theo mẫu.
 *    3. Thêm đường dẫn file đó vào danh sách "subjects" bên dưới.
 *    4. Lưu lại và mở (hoặc tải lại) index.html — môn mới sẽ xuất hiện.
 *
 *  Thứ tự trong danh sách = thứ tự hiển thị trên trang thư viện.
 *  Muốn TẠM ẨN một môn: thêm  //  vào đầu dòng của môn đó.
 * ===================================================================== */
window.LIBRARY_CONFIG = {
  // Tên hiển thị trên đầu trang
  siteName: "Thư viện Tiếng Trung",
  subtitle: "Các môn chuyên ngành · Từ vựng & Đọc hiểu song ngữ",

  // Chữ trong ô logo (1–2 ký tự)
  logoText: "书",

  // Danh sách file dữ liệu môn học (đường dẫn tính từ thư mục chứa index.html)
  subjects: [
    "mon/doc-2.js",
    "mon/doc-3.js",
    // "mon/_mau-mon-moi.js",   // ← bỏ // ở đầu dòng để xem thử môn mẫu
  ],

  // (Tùy chọn) mở thẳng một môn khi vào web, ví dụ: "doc-3". Để "" để hiện trang thư viện.
  defaultSubject: "",

  /* ---------------------------------------------------------------
   *  TÀI KHOẢN SINH VIÊN · ĐIỂM · KHÓA BÀI · TRANG GIẢNG VIÊN
   * --------------------------------------------------------------- */
  accounts: {
    // true = bắt buộc đăng nhập mới được học; false = ai cũng học được, không lưu điểm
    requireLogin: true,

    // Điểm tối thiểu (trên thang 100) của một bài để mở khóa bài tiếp theo
    unlockScore: 60,

    // Cách tính điểm một bài (tổng 100): thuộc từ vựng + luyện tập trắc nghiệm + bài tập bài khóa
    scoring: { vocab: 40, quiz: 30, reading: 30 },

    // ===== MÁY CHỦ NANABASE (khuyên dùng: máy chủ tự host của giảng viên) =====
    // Điền địa chỉ máy chủ NanaBase để cả lớp dùng chung tài khoản, điểm, trạng thái online.
    // Ví dụ: "http://192.168.1.5:8080" (cùng Wi-Fi) hoặc "https://data.ten-mien.vn" (qua Internet).
    // Đã điền NanaBase thì phần Firebase bên dưới được bỏ qua. Xem file HUONG-DAN-NANABASE.txt
    nanabase: {
      url: "https://ten-ngau-nhien.trycloudflare.com",
      prefix: "tv_",         // tiền tố tên bộ sưu tập, giữ nguyên trừ khi chạy nhiều thư viện trên cùng máy chủ
      realtime: "auto"       // "auto": cập nhật tức thì, tự chuyển sang hỏi định kỳ 5 giây/lần nếu đường truyền chặn
                             // "poll": luôn hỏi định kỳ (dùng khi chạy qua Cloudflare Quick Tunnel)
    },

    // ===== MÁY CHỦ FIREBASE (cách cũ, chỉ dùng khi không điền NanaBase) =====
    // Chưa điền → web chạy "chế độ thử": tài khoản chỉ lưu trên trình duyệt của máy đang mở.
    // Cách lấy các thông số này: xem file HUONG-DAN-FIREBASE.txt
    firebase: {
      apiKey: "",
      authDomain: "",
      databaseURL: "",
      projectId: "",
      appId: ""
    },

    // (Chỉ dùng với Firebase) Email giảng viên được phép vào trang quản lý.
    // Với NanaBase: tài khoản có vai trò Giáo viên hoặc Quản trị viên đều vào được.
    teacherEmails: ["giangvien@example.com"],

    // Mật khẩu giảng viên dùng trong CHẾ ĐỘ THỬ (khi chưa cấu hình Firebase)
    teacherDemoPassword: "giangvien123"
  }
};

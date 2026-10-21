/* =====================================================================
 *  FILE MẪU — DÙNG ĐỂ TẠO MÔN HỌC MỚI
 *  ---------------------------------------------------------------
 *  Cách dùng:
 *   1. Sao chép file này, đặt tên mới (ví dụ: mon/doc-4.js, mon/nghe-3.js...).
 *   2. Sửa thông tin môn học và điền các bài học theo đúng mẫu bên dưới.
 *   3. Mở config.js, thêm tên file vào danh sách "subjects".
 *
 *  Quy tắc quan trọng:
 *   - Mỗi môn phải có "id" KHÁC NHAU (chỉ dùng chữ không dấu, số, dấu gạch ngang).
 *     Tiến độ học của học sinh được lưu theo id này, nên đã dùng rồi thì đừng đổi.
 *   - Chuỗi chữ đặt trong dấu ngoặc kép "..." ; giữa các mục có dấu phẩy.
 *   - Những trường ghi (tùy chọn) có thể bỏ trống hoặc xóa hẳn.
 *
 *  Web sẽ TỰ ĐỘNG:
 *   - Tách từ bài khóa, gắn pinyin + nghĩa khi rê chuột / chạm vào từ
 *     (ưu tiên từ vựng của bài, sau đó tra file tu-dien.js).
 *   - Tạo thẻ bài (flashcard), trắc nghiệm từ vựng thích ứng.
 *   - Tạo bài điền từ từ câu trong bài khóa (nếu bạn không tự soạn "fills").
 *   - Lấy câu ví dụ trong bài khóa cho từ vựng nào chưa có ví dụ.
 * ===================================================================== */
window.ZH_SUBJECTS = window.ZH_SUBJECTS || [];
ZH_SUBJECTS.push({

  // ---------- THÔNG TIN MÔN HỌC ----------
  id: "mon-mau",                       // mã môn (không trùng môn khác)
  name: "Môn mẫu",                     // tên hiển thị
  nameZh: "示范课程",                   // tên tiếng Trung (tùy chọn)
  code: "CHI 000",                     // mã học phần (tùy chọn)
  logo: "示",                           // (tùy chọn) 1–2 chữ hiện trong ô vuông của môn; bỏ trống thì web tự chọn
  group: "Môn khác",                   // nhóm trên trang thư viện, ví dụ "Đọc hiểu", "Nghe nói", "Viết"
  description: "Môn ví dụ để xem cách điền dữ liệu.",

  // Cách gọi tên bài (tùy chọn):
  //  - Nếu bài học có "unit" → hiển thị "Bài 1 · Bài khóa 2"
  //  - Nếu không có "unit"   → hiển thị "Bài 1", "Bài 2"...
  unitLabel: "Bài",
  lessonLabel: "Bài khóa",

  // ---------- DANH SÁCH BÀI HỌC ----------
  lessons: [
    {
      unit: 1,                         // (tùy chọn) thuộc Bài/Chương số mấy — bỏ đi nếu môn không chia chương
      no: 1,                           // (tùy chọn) số thứ tự bài
      titleZh: "我的周末",               // tiêu đề bài khóa (không cần 《》)
      titleVi: "Cuối tuần của tôi",
      note: "",                        // (tùy chọn) ghi chú nhỏ cạnh tiêu đề, ví dụ tên tác giả

      // TỪ VỰNG — mỗi từ một dòng.
      // Có thể viết dạng đầy đủ:
      //   { hanzi: "周末", pinyin: "zhōumò", pos: "Danh từ", meaning: "Cuối tuần", exZh: "...", exVi: "..." }
      // hoặc dạng ngắn theo thứ tự: [Chữ Hán, Pinyin, Từ loại, Nghĩa, Ví dụ TQ, Nghĩa ví dụ]
      vocab: [
        { hanzi: "周末", pinyin: "zhōumò", pos: "Danh từ", meaning: "Cuối tuần", exZh: "这个周末你有空吗？", exVi: "Cuối tuần này bạn có rảnh không?" },
        { hanzi: "公园", pinyin: "gōngyuán", pos: "Danh từ", meaning: "Công viên" },
        ["散步", "sànbù", "Động từ", "Đi dạo"],
        ["打算", "dǎsuan", "Động từ", "Dự định", "我打算去北京旅行。", "Tôi dự định đi Bắc Kinh du lịch."]
      ],

      // NGỮ PHÁP (tùy chọn) — để trống [] nếu bài không có
      grammar: [
        {
          name: "Vừa... vừa...",
          struct: "一边······一边······",
          explain: "Diễn tả hai hành động xảy ra cùng lúc.",
          exZh: "我们一边散步，一边聊天。",
          exVi: "Chúng tôi vừa đi dạo vừa trò chuyện."
        }
      ],

      // BÀI KHÓA — mỗi đoạn một mục { zh: "tiếng Trung", vi: "bản dịch (tùy chọn)" }
      // Thơ: mỗi câu thơ là một mục; muốn cách khổ thì thêm một mục rỗng { zh: "" }
      text: [
        { zh: "这个周末天气很好，我打算和朋友去公园散步。", vi: "Cuối tuần này thời tiết rất đẹp, tôi định cùng bạn đi dạo công viên." },
        { zh: "我们一边散步，一边聊天，非常开心。", vi: "Chúng tôi vừa đi dạo vừa trò chuyện, vô cùng vui vẻ." }
      ],

      // CÂU HỎI ĐỌC HIỂU — answer là số thứ tự đáp án đúng, bắt đầu từ 0 (0 = A, 1 = B, 2 = C, 3 = D)
      questions: [
        {
          q: "周末“我”打算做什么？",
          options: ["去公园散步", "在家看书", "去商店买东西"],
          answer: 0,
          explain: "Câu đầu tiên: 我打算和朋友去公园散步。"        // (tùy chọn) giải thích đáp án
        }
      ]

      // BÀI ĐIỀN TỪ (tùy chọn) — nếu bỏ trống, web tự tạo từ câu trong bài khóa.
      // fills: [ { sentence: "我们一边_______，一边聊天。", answer: "散步", options: ["散步", "公园", "周末", "打算"] } ]
    }

    // , { ...bài tiếp theo, chép lại khối {...} ở trên và sửa nội dung... }
  ]
});

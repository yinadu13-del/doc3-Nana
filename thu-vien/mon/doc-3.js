/* =====================================================================
 * DỮ LIỆU MÔN HỌC: ĐỌC 3
 * File này được nạp tự động nhờ danh sách "subjects" trong config.js.
 * Cấu trúc dữ liệu giống hệt file mẫu  mon/_mau-mon-moi.js  (xem chú thích ở đó).
 * Trường "tokens" trong mỗi đoạn bài khóa là phần tách từ + pinyin + nghĩa đã làm sẵn;
 * môn mới KHÔNG cần trường này — web sẽ tự tách từ.
 * ===================================================================== */
window.ZH_SUBJECTS = window.ZH_SUBJECTS || [];
ZH_SUBJECTS.push({
 "id": "doc-3",
 "name": "Đọc 3",
 "nameZh": "阅读（三）",
 "code": "CHI 219",
 "group": "Đọc hiểu",
 "description": "8 bài · 29 bài khóa nguyên bản: từ vựng, ngữ pháp, bài khóa song ngữ, đọc hiểu.",
 "unitLabel": "Bài",
 "lessonLabel": "Bài khóa",
 "lessons": [
  {
   "id": "u1t1",
   "unit": 1,
   "no": 1,
   "titleZh": "山谷的起点",
   "titleVi": "Điểm khởi đầu của thung lũng",
   "note": "",
   "vocab": [
    {
     "hanzi": "山谷",
     "pinyin": "shāngǔ",
     "pos": "Danh từ",
     "meaning": "Sơn cốc, thung lũng",
     "exZh": "走出山谷",
     "exVi": "Bước ra khỏi thung lũng"
    },
    {
     "hanzi": "退步",
     "pinyin": "tuìbù",
     "pos": "Động từ",
     "meaning": "Thụt lùi, sa sút",
     "exZh": "成绩退步",
     "exVi": "Thành tích sa sút"
    },
    {
     "hanzi": "鼓励",
     "pinyin": "gǔlì",
     "pos": "Động từ",
     "meaning": "Cổ vũ, khuyến khích",
     "exZh": "鼓励他向前",
     "exVi": "Động viên cậu ấy tiến lên"
    },
    {
     "hanzi": "果然",
     "pinyin": "guǒrán",
     "pos": "Phó từ",
     "meaning": "Quả nhiên",
     "exZh": "果然往上升",
     "exVi": "Quả nhiên đi lên"
    },
    {
     "hanzi": "升",
     "pinyin": "shēng",
     "pos": "Động từ",
     "meaning": "Lên, thăng lên",
     "exZh": "不断往上升",
     "exVi": "Không ngừng đi lên"
    },
    {
     "hanzi": "蹲",
     "pinyin": "dūn",
     "pos": "Động từ",
     "meaning": "Ngồi xổm",
     "exZh": "蹲在山谷",
     "exVi": "Ngồi xổm trong thung lũng"
    },
    {
     "hanzi": "哭泣",
     "pinyin": "kūqì",
     "pos": "Động từ",
     "meaning": "Khóc lóc",
     "exZh": "烦恼哭泣",
     "exVi": "Phiền muộn khóc lóc"
    },
    {
     "hanzi": "缘故",
     "pinyin": "yuángù",
     "pos": "Danh từ",
     "meaning": "Duyên cớ, nguyên do",
     "exZh": "正是这个缘故",
     "exVi": "Chính là vì lý do này"
    }
   ],
   "grammar": [
    {
     "name": "Sở dĩ... là vì...",
     "struct": "之所以······是因为······",
     "explain": "Biểu thị nguyên nhân giải thích cho kết quả đã biết.",
     "exZh": "许多人之所以走不出来，是因为他们停住双脚。",
     "exVi": "Nhiều người sở dĩ không bước ra được là vì họ dừng chân lại."
    },
    {
     "name": "Không phải... mà là...",
     "struct": "不是······而是······",
     "explain": "Phủ định vế trước, khẳng định vế sau.",
     "exZh": "不是成功来的慢，而是放弃速度快。",
     "exVi": "Không phải thành công đến chậm, mà là bỏ cuộc quá nhanh."
    }
   ],
   "text": [
    {
     "zh": "一位烦恼的母亲找到我，说她正为孩子的功课烦恼。",
     "vi": "Một người mẹ đang phiền muộn tìm đến tôi, nói rằng bà đang lo lắng vì chuyện học hành của con.",
     "tokens": [["一位","yīwèi","một vị, một người"],["烦恼","fánnǎo","phiền muộn"],["的","de","của (trợ từ)"],["母亲","mǔqīn","mẹ"],["找到","zhǎodào","tìm thấy"],["我","wǒ","tôi"],["，"],["说","shuō","nói"],["她","tā","cô ấy, bà ấy"],["正","zhèng","đang; đúng"],["为","wèi","vì, cho; là"],["孩子","háizi","đứa trẻ, con"],["的","de","của (trợ từ)"],["功课","gōngkè","bài vở, việc học"],["烦恼","fánnǎo","phiền muộn"],["。"]]
    },
    {
     "zh": "我说：“孩子的功课应该孩子自己烦恼才对呀！”",
     "vi": "Tôi nói: “Chuyện học hành của con thì lẽ ra con phải tự lo mới đúng chứ!”",
     "tokens": [["我","wǒ","tôi"],["说","shuō","nói"],["："],["“"],["孩子","háizi","đứa trẻ, con"],["的","de","của (trợ từ)"],["功课","gōngkè","bài vở, việc học"],["应该","yīnggāi","nên"],["孩子","háizi","đứa trẻ, con"],["自己","zìjǐ","bản thân"],["烦恼","fánnǎo","phiền muộn"],["才","cái","mới"],["对","duì","đối với; đúng"],["呀","ya","à, nhé (trợ từ)"],["！"],["”"]]
    },
    {
     "zh": "她说：“林先生，你不知道，我的孩子考试考了第四十名，可是他们班上只有四十个学生。”",
     "vi": "Bà nói: “Thầy Lâm, thầy không biết đâu, con tôi thi được hạng bốn mươi, mà cả lớp nó chỉ có bốn mươi học sinh.”",
     "tokens": [["她","tā","cô ấy, bà ấy"],["说","shuō","nói"],["："],["“"],["林先生","línxiānshēng","thầy Lâm"],["，"],["你","nǐ","bạn"],["不","bù","không"],["知道","zhīdào","biết"],["，"],["我","wǒ","tôi"],["的","de","của (trợ từ)"],["孩子","háizi","đứa trẻ, con"],["考试","kǎoshì","thi cử"],["考","kǎo","thi"],["了","le","rồi (trợ từ)"],["第四十名","dìsìshímíng","hạng bốn mươi"],["，"],["可是","kěshì","nhưng"],["他们","tāmen","họ"],["班上","bānshàng","trong lớp"],["只有","zhǐyǒu","chỉ có"],["四十个","sìshígè","bốn mươi (cái)"],["学生","xuéshēng","học sinh"],["。"],["”"]]
    },
    {
     "zh": "我开玩笑地说：“如果我是你，我一定会很高兴！”",
     "vi": "Tôi nói đùa: “Nếu tôi là chị, tôi nhất định sẽ rất vui!”",
     "tokens": [["我","wǒ","tôi"],["开玩笑","kāiwánxiào","nói đùa"],["地","dì","(trợ từ trạng ngữ)"],["说","shuō","nói"],["："],["“"],["如果","rúguǒ","nếu"],["我","wǒ","tôi"],["是","shì","là"],["你","nǐ","bạn"],["，"],["我","wǒ","tôi"],["一定","yídìng","nhất định, chắc chắn"],["会","huì","sẽ; biết"],["很","hěn","rất"],["高兴","gāoxìng","vui"],["！"],["”"]]
    },
    {
     "zh": "“为什么呢？”",
     "vi": "“Tại sao vậy?”",
     "tokens": [["“"],["为什么","wèishénme","tại sao"],["呢","ne","nhỉ, thế (trợ từ)"],["？"],["”"]]
    },
    {
     "zh": "“因为你想想看，从今天开始，你的孩子不会再退步了，他一定不会落到第四十一名呀！”我说。",
     "vi": "“Vì chị thử nghĩ xem, bắt đầu từ hôm nay, con chị sẽ không thể tụt hạng nữa, chắc chắn cháu sẽ không rơi xuống hạng bốn mươi mốt đâu!” Tôi nói.",
     "tokens": [["“"],["因为","yīnwèi","bởi vì"],["你","nǐ","bạn"],["想想看","xiǎngxiǎngkàn","thử nghĩ xem"],["，"],["从","cóng","từ"],["今天","jīntiān","hôm nay"],["开始","kāishǐ","bắt đầu"],["，"],["你","nǐ","bạn"],["的","de","của (trợ từ)"],["孩子","háizi","đứa trẻ, con"],["不会","búhuì","sẽ không"],["再","zài","lại, nữa"],["退步","tuìbù","Thụt lùi, sa sút"],["了","le","rồi (trợ từ)"],["，"],["他","tā","anh ấy, ông ấy"],["一定","yídìng","nhất định, chắc chắn"],["不会","búhuì","sẽ không"],["落到","luòdào","rơi xuống"],["第四十一","dìsìshíyī","thứ bốn mươi mốt"],["名","míng","tên; người (lượng từ)"],["呀","ya","à, nhé (trợ từ)"],["！"],["”"],["我","wǒ","tôi"],["说","shuō","nói"],["。"]]
    },
    {
     "zh": "妇人听了笑了。",
     "vi": "Người phụ nữ nghe xong thì bật cười.",
     "tokens": [["妇人","fùrén","người phụ nữ"],["听","tīng","nghe"],["了","le","rồi (trợ từ)"],["笑","xiào","cười"],["了","le","rồi (trợ từ)"],["。"]]
    },
    {
     "zh": "我继续说：“这就好像爬山一样，你的孩子现在是在山的最低点，他只有一条路，就是往上走，只要你停止烦恼，鼓励他，和他一起走，他一定会走出来。”",
     "vi": "Tôi nói tiếp: “Điều này cũng giống như leo núi vậy, con chị bây giờ đang ở điểm thấp nhất của ngọn núi, cháu chỉ có một con đường, đó là đi lên. Chỉ cần chị thôi phiền muộn, động viên cháu, cùng đi với cháu, cháu nhất định sẽ bước ra được.”",
     "tokens": [["我","wǒ","tôi"],["继续","jìxù","tiếp tục"],["说","shuō","nói"],["："],["“"],["这","zhè","này"],["就","jiù","thì, liền"],["好像","hǎoxiàng","hình như"],["爬山","páshān","leo núi"],["一样","yīyàng","giống nhau"],["，"],["你","nǐ","bạn"],["的","de","của (trợ từ)"],["孩子","háizi","đứa trẻ, con"],["现在","xiànzài","bây giờ"],["是","shì","là"],["在","zài","ở, đang"],["山","shān","núi"],["的","de","của (trợ từ)"],["最低点","zuìdīdiǎn","điểm thấp nhất"],["，"],["他","tā","anh ấy, ông ấy"],["只有","zhǐyǒu","chỉ có"],["一条","yītiáo","một con, một tuyến"],["路","lù","đường"],["，"],["就是","jiùshì","chính là"],["往上走","wǎngshàngzǒu","đi lên"],["，"],["只要","zhǐyào","chỉ cần"],["你","nǐ","bạn"],["停止","tíngzhǐ","ngừng, dừng"],["烦恼","fánnǎo","phiền muộn"],["，"],["鼓励","gǔlì","Cổ vũ, khuyến khích"],["他","tā","anh ấy, ông ấy"],["，"],["和","hé","và; hòa"],["他","tā","anh ấy, ông ấy"],["一起","yìqǐ","cùng nhau"],["走","zǒu","đi; đi (cờ)"],["，"],["他","tā","anh ấy, ông ấy"],["一定","yídìng","nhất định, chắc chắn"],["会","huì","sẽ; biết"],["走","zǒu","đi; đi (cờ)"],["出来","chūlái","ra, xuất hiện"],["。"],["”"]]
    },
    {
     "zh": "过了不久，妇人打电话给我，向我表示感谢，他的孩子果然成绩不断往上升。",
     "vi": "Không lâu sau, người phụ nữ gọi điện cho tôi, bày tỏ lòng cảm ơn, con bà quả nhiên thành tích không ngừng đi lên.",
     "tokens": [["过","guò","qua; sống, đón"],["了","le","rồi (trợ từ)"],["不久","bùjiǔ","không lâu"],["，"],["妇人","fùrén","người phụ nữ"],["打电话","dǎdiànhuà","gọi điện thoại"],["给","gěi","cho"],["我","wǒ","tôi"],["，"],["向","xiàng","hướng về, với"],["我","wǒ","tôi"],["表示感谢","biǎoshìgǎnxiè","bày tỏ cảm ơn"],["，"],["他","tā","anh ấy, ông ấy"],["的","de","của (trợ từ)"],["孩子","háizi","đứa trẻ, con"],["果然","guǒrán","Quả nhiên"],["成绩","chéngjì","thành tích"],["不断","bùduàn","không ngừng"],["往上升","wǎngshàngshēng","đi lên"],["。"]]
    },
    {
     "zh": "我想到，最容易被人忘记的是，山的最低点正是山的起点，许多走进山里的人之所以走不出来，正是因为他们停住双脚，蹲在山谷烦恼哭泣的缘故。",
     "vi": "Tôi nghĩ, điều dễ bị người ta quên nhất chính là: điểm thấp nhất của ngọn núi cũng chính là điểm khởi đầu của ngọn núi. Nhiều người đi vào núi mà không ra được, chính là vì họ dừng chân lại, ngồi xổm trong thung lũng mà phiền muộn khóc lóc.",
     "tokens": [["我","wǒ","tôi"],["想到","xiǎngdào","nghĩ đến"],["，"],["最","zuì","nhất"],["容易","róngyì","dễ"],["被","bèi","bị, được"],["人","rén","người"],["忘记","wàngjì","quên"],["的","de","của (trợ từ)"],["是","shì","là"],["，"],["山","shān","núi"],["的","de","của (trợ từ)"],["最低点","zuìdīdiǎn","điểm thấp nhất"],["正是","zhèngshì","chính là"],["山","shān","núi"],["的","de","của (trợ từ)"],["起点","qǐdiǎn","điểm khởi đầu"],["，"],["许多","xǔduō","nhiều"],["走进","zǒujìn","bước vào"],["山里","shānlǐ","trong núi"],["的","de","của (trợ từ)"],["人","rén","người"],["之所以","zhīsuǒyǐ","sở dĩ"],["走","zǒu","đi; đi (cờ)"],["不","bù","không"],["出来","chūlái","ra, xuất hiện"],["，"],["正是","zhèngshì","chính là"],["因为","yīnwèi","bởi vì"],["他们","tāmen","họ"],["停住","tíngzhù","dừng lại"],["双脚","shuāngjiǎo","đôi chân"],["，"],["蹲","dūn","Ngồi xổm"],["在","zài","ở, đang"],["山谷","shāngǔ","Sơn cốc, thung lũng"],["烦恼","fánnǎo","phiền muộn"],["哭泣","kūqì","Khóc lóc"],["的","de","của (trợ từ)"],["缘故","yuángù","Duyên cớ, nguyên do"],["。"]]
    }
   ],
   "questions": [
    {
     "q": "那位母亲为什么烦恼？",
     "options": ["孩子生病了","孩子考试考了全班最后一名","孩子不愿意上学","孩子找不到工作"],
     "answer": 1,
     "explain": "Con bà thi hạng 40 trong một lớp chỉ có 40 học sinh, tức là đứng cuối lớp."
    },
    {
     "q": "作者为什么说“如果我是你，我一定会很高兴”？",
     "options": ["因为孩子考得很好","因为孩子不会再退步了","因为孩子换了班","因为老师很喜欢孩子"],
     "answer": 1,
     "explain": "Đã ở hạng cuối thì không thể tụt thêm, chỉ còn con đường đi lên."
    },
    {
     "q": "作者认为，很多人走不出山谷的原因是什么？",
     "options": ["山太高了","没有路","停住双脚，蹲在山谷烦恼哭泣","没有人帮助他们"],
     "answer": 2,
     "explain": "Đoạn cuối: vì họ dừng chân, ngồi xổm trong thung lũng phiền muộn khóc lóc."
    }
   ],
   "fills": [{"sentence":"我想到，最容易被人忘记的是，山的最低点正是山的起点，许多走进山里的人之所以走不出来，正是因为他们停住双脚，蹲在_______烦恼哭泣的缘故。","answer":"山谷","options":["升","鼓励","退步","山谷"]},{"sentence":"”“因为你想想看，从今天开始，你的孩子不会再_______了，他一定不会落到第四十一名呀！","answer":"退步","options":["缘故","退步","升","哭泣"]},{"sentence":"我继续说：“这就好像爬山一样，你的孩子现在是在山的最低点，他只有一条路，就是往上走，只要你停止烦恼，_______他，和他一起走，他一定会走出来。","answer":"鼓励","options":["哭泣","鼓励","果然","缘故"]},{"sentence":"”过了不久，妇人打电话给我，向我表示感谢，他的孩子_______成绩不断往上升。","answer":"果然","options":["退步","山谷","鼓励","果然"]},{"sentence":"”过了不久，妇人打电话给我，向我表示感谢，他的孩子果然成绩不断往上_______。","answer":"升","options":["哭泣","升","缘故","山谷"]}]
  },
  {
   "id": "u1t2",
   "unit": 1,
   "no": 2,
   "titleZh": "活珍珠",
   "titleVi": "Ngọc trai sống",
   "note": "",
   "vocab": [
    {
     "hanzi": "夏威夷",
     "pinyin": "Xiàwēiyí",
     "pos": "Tên riêng",
     "meaning": "Hawaii",
     "exZh": "夏威夷夜市",
     "exVi": "Chợ đêm Hawaii"
    },
    {
     "hanzi": "夜市",
     "pinyin": "yèshì",
     "pos": "Danh từ",
     "meaning": "Chợ đêm",
     "exZh": "逛夜市",
     "exVi": "Đi dạo chợ đêm"
    },
    {
     "hanzi": "珍珠",
     "pinyin": "zhēnzhū",
     "pos": "Danh từ",
     "meaning": "Ngọc trai",
     "exZh": "活珍珠",
     "exVi": "Ngọc trai sống"
    },
    {
     "hanzi": "摊子",
     "pinyin": "tānzi",
     "pos": "Danh từ",
     "meaning": "Sạp, quầy hàng",
     "exZh": "卖珍珠的摊子",
     "exVi": "Sạp bán ngọc trai"
    },
    {
     "hanzi": "桶",
     "pinyin": "tǒng",
     "pos": "Danh từ",
     "meaning": "Thùng",
     "exZh": "水桶",
     "exVi": "Thùng nước"
    },
    {
     "hanzi": "珍珠贝",
     "pinyin": "zhēnzhūbèi",
     "pos": "Danh từ",
     "meaning": "Con trai ngọc",
     "exZh": "挑选珍珠贝",
     "exVi": "Chọn lựa trai ngọc"
    },
    {
     "hanzi": "挑选",
     "pinyin": "tiāoxuǎn",
     "pos": "Động từ",
     "meaning": "Chọn lựa",
     "exZh": "自己挑选",
     "exVi": "Tự mình chọn lựa"
    },
    {
     "hanzi": "小贩",
     "pinyin": "xiǎofàn",
     "pos": "Danh từ",
     "meaning": "Người bán hàng",
     "exZh": "小贩打开贝",
     "exVi": "Người bán hàng mở con trai ra"
    },
    {
     "hanzi": "鼓掌",
     "pinyin": "gǔzhǎng",
     "pos": "Động từ",
     "meaning": "Vỗ tay",
     "exZh": "热烈地鼓掌",
     "exVi": "Vỗ tay nhiệt liệt"
    },
    {
     "hanzi": "死亡",
     "pinyin": "sǐwáng",
     "pos": "Danh từ",
     "meaning": "Tử vong, cái chết",
     "exZh": "死亡的脚步",
     "exVi": "Bước chân của cái chết"
    }
   ],
   "grammar": [
    {
     "name": "Một mặt... Mặt khác...",
     "struct": "有的······有的······",
     "explain": "Liệt kê các trạng thái/đối tượng khác nhau.",
     "exZh": "有的很大，有的很小，有的很圆。",
     "exVi": "Có viên rất to, có viên rất nhỏ, có viên rất tròn."
    }
   ],
   "text": [
    {
     "zh": "在夏威夷的夜市场，有一些卖活珍珠的摊子。摊子上放一个水桶，桶中有水，水里都是珍珠贝，每个珍珠贝卖15元，客人们可以自己挑选。",
     "vi": "Ở chợ đêm Hawaii có một số sạp bán ngọc trai sống. Trên sạp đặt một thùng nước, trong thùng có nước, dưới nước toàn là trai ngọc, mỗi con trai bán 15 đồng, khách có thể tự mình chọn lựa.",
     "tokens": [["在","zài","ở, đang"],["夏威夷","Xiàwēiyí","Hawaii"],["的","de","của (trợ từ)"],["夜市","yèshì","Chợ đêm"],["场","chǎng","trận, bộ (phim)"],["，"],["有","yǒu","có"],["一些","yīxiē","một số, một vài"],["卖","mài","bán"],["活珍珠","huózhēnzhū","ngọc trai sống"],["的","de","của (trợ từ)"],["摊子","tānzi","Sạp, quầy hàng"],["。"],["摊子","tānzi","Sạp, quầy hàng"],["上","shàng","trên; lên"],["放","fàng","đặt, để"],["一个","yígè","một (cái, người)"],["水桶","shuǐtǒng","thùng nước"],["，"],["桶","tǒng","Thùng"],["中","zhōng","trong, giữa"],["有","yǒu","có"],["水","shuǐ","nước"],["，"],["水","shuǐ","nước"],["里","lǐ","trong; dặm"],["都","dōu","đều"],["是","shì","là"],["珍珠贝","zhēnzhūbèi","Con trai ngọc"],["，"],["每个","měigè","mỗi (cái)"],["珍珠贝","zhēnzhūbèi","Con trai ngọc"],["卖","mài","bán"],["15"],["元","yuán","đồng, tệ"],["，"],["客人","kèrén","khách"],["们","men","(hậu tố số nhiều)"],["可以","kěyǐ","có thể"],["自己","zìjǐ","bản thân"],["挑选","tiāoxuǎn","Chọn lựa"],["。"]]
    },
    {
     "zh": "珍珠贝选好后，小贩把珍珠贝打开，从里面拿出一粒珍珠，幸运的话，会得到很大的珍珠，旁边的人就会热烈地鼓掌。小贩说，这些珍珠都是同一时间种在海里的，但有的很大，有的很小，有的很圆，有的很难看，连种珍珠的人，也不知道原因是什么。由于挖活珍珠贝实在让人看着不忍心，我很快就离开了。",
     "vi": "Chọn xong trai ngọc, người bán hàng mở con trai ra, lấy ra từ bên trong một viên ngọc. Nếu may mắn thì sẽ được viên ngọc rất to, người đứng bên cạnh sẽ vỗ tay nhiệt liệt. Người bán nói, những viên ngọc này đều được nuôi dưới biển cùng một thời điểm, nhưng có viên rất to, có viên rất nhỏ, có viên rất tròn, có viên rất xấu, đến cả người nuôi ngọc cũng không biết nguyên nhân là gì. Vì cảnh mổ trai ngọc sống thật khiến người ta nhìn không đành lòng, nên tôi đã nhanh chóng rời đi.",
     "tokens": [["珍珠贝","zhēnzhūbèi","Con trai ngọc"],["选","xuǎn","chọn"],["好","hǎo","tốt; rất"],["后","hòu","sau"],["，"],["小贩","xiǎofàn","Người bán hàng"],["把","bǎ","(giới từ đưa tân ngữ lên trước)"],["珍珠贝","zhēnzhūbèi","Con trai ngọc"],["打开","dǎkāi","mở ra"],["，"],["从","cóng","từ"],["里面","lǐmiàn","bên trong"],["拿出","náchū","lấy ra"],["一粒","yīlì","một viên, một hạt"],["珍珠","zhēnzhū","Ngọc trai"],["，"],["幸运","xìngyùn","may mắn"],["的话","dehuà","nếu ... thì"],["，"],["会","huì","sẽ; biết"],["得到","dédào","nhận được"],["很大","hěndà","rất lớn"],["的","de","của (trợ từ)"],["珍珠","zhēnzhū","Ngọc trai"],["，"],["旁边","pángbiān","bên cạnh"],["的","de","của (trợ từ)"],["人","rén","người"],["就","jiù","thì, liền"],["会","huì","sẽ; biết"],["热烈","rèliè","nhiệt liệt"],["地","dì","(trợ từ trạng ngữ)"],["鼓掌","gǔzhǎng","Vỗ tay"],["。"],["小贩","xiǎofàn","Người bán hàng"],["说","shuō","nói"],["，"],["这些","zhèxiē","những ... này"],["珍珠","zhēnzhū","Ngọc trai"],["都","dōu","đều"],["是","shì","là"],["同一时间","tóngyīshíjiān","cùng một thời điểm"],["种","zhǒng","loại; trồng, nuôi"],["在","zài","ở, đang"],["海里","hǎilǐ","dưới biển"],["的","de","của (trợ từ)"],["，"],["但","dàn","nhưng"],["有","yǒu","có"],["的","de","của (trợ từ)"],["很大","hěndà","rất lớn"],["，"],["有","yǒu","có"],["的","de","của (trợ từ)"],["很小","hěnxiǎo","rất nhỏ"],["，"],["有","yǒu","có"],["的","de","của (trợ từ)"],["很","hěn","rất"],["圆","yuán","tròn"],["，"],["有","yǒu","có"],["的","de","của (trợ từ)"],["很","hěn","rất"],["难看","nánkàn","xấu"],["，"],["连","lián","thậm chí, đến cả; liền"],["种","zhǒng","loại; trồng, nuôi"],["珍珠","zhēnzhū","Ngọc trai"],["的","de","của (trợ từ)"],["人","rén","người"],["，"],["也","yě","cũng"],["不","bù","không"],["知道","zhīdào","biết"],["原因","yuányīn","nguyên nhân"],["是","shì","là"],["什么","shénme","cái gì"],["。"],["由于","yóuyú","do, vì"],["挖","wā","đào, moi"],["活","huó","sống"],["珍珠贝","zhēnzhūbèi","Con trai ngọc"],["实在","shízài","thật sự"],["让","ràng","để, bảo, khiến"],["人","rén","người"],["看着","kànzhe","nhìn"],["不忍心","bùrěnxīn","không nỡ, không đành lòng"],["，"],["我","wǒ","tôi"],["很快","hěnkuài","rất nhanh"],["就","jiù","thì, liền"],["离开","líkāi","rời đi"],["了","le","rồi (trợ từ)"],["。"]]
    },
    {
     "zh": "种在珍珠贝里的小石子，会长出不同的珍珠，多么好的结果！人的生活也是一样，同样受伤， 总有一些“贝”能长出最美、最大的珍珠。所以人也要像珍珠贝一样，要会自己帮助自己，转变生命的伤口，使它变成美丽的珍珠。人生的伤痛就是活的珍珠，能适应，就能发出美丽的光；不能适应，就加快了死亡的脚步。",
     "vi": "Những viên sỏi nhỏ cấy trong trai ngọc sẽ lớn lên thành những viên ngọc khác nhau, thật là một kết quả tốt đẹp biết bao! Cuộc sống con người cũng vậy, cùng bị tổn thương như nhau, nhưng luôn có một số “con trai” có thể nuôi thành viên ngọc đẹp nhất, to nhất. Vì vậy con người cũng phải giống như trai ngọc, phải biết tự giúp lấy mình, biến đổi vết thương của cuộc đời, khiến nó trở thành viên ngọc đẹp đẽ. Nỗi đau trong đời người chính là viên ngọc sống, thích nghi được thì có thể tỏa ra ánh sáng đẹp đẽ; không thích nghi được thì sẽ đẩy nhanh bước chân của cái chết.",
     "tokens": [["种","zhǒng","loại; trồng, nuôi"],["在","zài","ở, đang"],["珍珠贝","zhēnzhūbèi","Con trai ngọc"],["里","lǐ","trong; dặm"],["的","de","của (trợ từ)"],["小石子","xiǎoshízǐ","viên sỏi nhỏ"],["，"],["会长","huìzhǎng","hội trưởng"],["出","chū","ra"],["不同","bùtóng","khác nhau"],["的","de","của (trợ từ)"],["珍珠","zhēnzhū","Ngọc trai"],["，"],["多么","duōme","biết bao"],["好","hǎo","tốt; rất"],["的","de","của (trợ từ)"],["结果","jiéguǒ","kết quả"],["！"],["人","rén","người"],["的","de","của (trợ từ)"],["生活","shēnghuó","cuộc sống"],["也","yě","cũng"],["是","shì","là"],["一样","yīyàng","giống nhau"],["，"],["同样","tóngyàng","giống nhau, tương tự"],["受伤","shòushāng","bị thương"],["，"],[" "],["总","zǒng","luôn; tổng"],["有","yǒu","có"],["一些","yīxiē","một số, một vài"],["“"],["贝","bèi","con trai (sò)"],["”"],["能","néng","có thể"],["长","zhǎng","dài; lớn lên"],["出","chū","ra"],["最美","zuìměi","đẹp nhất"],["、"],["最大","zuìdà","lớn nhất"],["的","de","của (trợ từ)"],["珍珠","zhēnzhū","Ngọc trai"],["。"],["所以","suǒyǐ","cho nên"],["人","rén","người"],["也","yě","cũng"],["要","yào","muốn; phải"],["像","xiàng","giống như"],["珍珠贝","zhēnzhūbèi","Con trai ngọc"],["一样","yīyàng","giống nhau"],["，"],["要","yào","muốn; phải"],["会","huì","sẽ; biết"],["自己","zìjǐ","bản thân"],["帮助","bāngzhù","giúp đỡ"],["自己","zìjǐ","bản thân"],["，"],["转变","zhuǎnbiàn","biến đổi"],["生命","shēngmìng","sinh mệnh, sự sống"],["的","de","của (trợ từ)"],["伤口","shāngkǒu","vết thương"],["，"],["使","shǐ","khiến, làm cho"],["它","tā","nó"],["变成","biànchéng","biến thành"],["美丽","měilì","xinh đẹp"],["的","de","của (trợ từ)"],["珍珠","zhēnzhū","Ngọc trai"],["。"],["人生","rénshēng","đời người"],["的","de","của (trợ từ)"],["伤痛","shāngtòng","nỗi đau"],["就是","jiùshì","chính là"],["活","huó","sống"],["的","de","của (trợ từ)"],["珍珠","zhēnzhū","Ngọc trai"],["，"],["能","néng","có thể"],["适应","shìyìng","thích nghi"],["，"],["就","jiù","thì, liền"],["能","néng","có thể"],["发出","fāchū","phát ra"],["美丽","měilì","xinh đẹp"],["的","de","của (trợ từ)"],["光","guāng","ánh sáng"],["；"],["不能","bùnéng","không thể"],["适应","shìyìng","thích nghi"],["，"],["就","jiù","thì, liền"],["加快","jiākuài","đẩy nhanh"],["了","le","rồi (trợ từ)"],["死亡","sǐwáng","Tử vong, cái chết"],["的","de","của (trợ từ)"],["脚步","jiǎobù","bước chân"],["。"]]
    }
   ],
   "questions": [
    {
     "q": "在夏威夷的夜市，客人怎样买活珍珠？",
     "options": ["小贩帮客人挑选","客人自己从水桶里挑选珍珠贝","客人到海里去挖","客人在网上买"],
     "answer": 1,
     "explain": "Bài viết: mỗi con trai 15 đồng, khách có thể tự mình chọn lựa (客人们可以自己挑选)."
    },
    {
     "q": "为什么同一时间种的珍珠大小不一样？",
     "options": ["因为海水不一样","因为小贩不一样","连种珍珠的人也不知道原因","因为客人的运气不好"],
     "answer": 2,
     "explain": "Người bán nói: đến cả người nuôi ngọc cũng không biết nguyên nhân."
    },
    {
     "q": "作者认为人应该像珍珠贝一样做什么？",
     "options": ["自己帮助自己，把伤口变成美丽的珍珠","住在海里","多赚钱","不要受伤"],
     "answer": 0,
     "explain": "Con người phải biết tự giúp mình, biến vết thương của cuộc đời thành viên ngọc đẹp."
    }
   ],
   "fills": [{"sentence":"在_______的夜市场，有一些卖活珍珠的摊子。","answer":"夏威夷","options":["挑选","小贩","死亡","夏威夷"]},{"sentence":"在夏威夷的_______场，有一些卖活珍珠的摊子。","answer":"夜市","options":["夜市","挑选","桶","死亡"]},{"sentence":"在夏威夷的夜市场，有一些卖活_______的摊子。","answer":"珍珠","options":["桶","小贩","鼓掌","珍珠"]},{"sentence":"在夏威夷的夜市场，有一些卖活珍珠的_______。","answer":"摊子","options":["桶","摊子","死亡","珍珠贝"]},{"sentence":"摊子上放一个水_______，桶中有水，水里都是珍珠贝，每个珍珠贝卖15元，客人们可以自己挑选。","answer":"桶","options":["桶","夜市","死亡","小贩"]}]
  },
  {
   "id": "u1t3",
   "unit": 1,
   "no": 3,
   "titleZh": "换了一个位置",
   "titleVi": "Đổi một vị trí",
   "note": "",
   "vocab": [
    {
     "hanzi": "除夕",
     "pinyin": "chúxī",
     "pos": "Danh từ",
     "meaning": "Đêm Giao thừa",
     "exZh": "除夕之夜",
     "exVi": "Đêm giao thừa"
    },
    {
     "hanzi": "绊",
     "pinyin": "bàn",
     "pos": "Động từ",
     "meaning": "Vấp, vướng",
     "exZh": "被东西绊了一下",
     "exVi": "Bị vấp phải đồ vật"
    },
    {
     "hanzi": "背",
     "pinyin": "bēi",
     "pos": "Động từ",
     "meaning": "Cõng, gánh",
     "exZh": "背着母亲",
     "exVi": "Cõng mẹ"
    },
    {
     "hanzi": "宽厚",
     "pinyin": "kuānhòu",
     "pos": "Tính từ",
     "meaning": "Rộng dày, nở nang",
     "exZh": "宽厚的肩膀",
     "exVi": "Bờ vai rộng dày"
    },
    {
     "hanzi": "摇晃",
     "pinyin": "yáohuang",
     "pos": "Động từ",
     "meaning": "Đu đưa, rung lắc",
     "exZh": "没有出租车的摇晃",
     "exVi": "Không có sự lắc lư của taxi"
    },
    {
     "hanzi": "来来往往",
     "pinyin": "láilái wǎngwǎng",
     "pos": "Thành ngữ",
     "meaning": "Qua lại nhộn nhịp",
     "exZh": "来来往往的车",
     "exVi": "Xe cộ qua lại tấp nập"
    }
   ],
   "grammar": [
    {
     "name": "Mặc dù... nhưng...",
     "struct": "虽然······但是······",
     "explain": "Biểu thị quan hệ nhượng bộ/chuyển ngoặt.",
     "exZh": "虽然是除夕，但是儿子并没有叫车。",
     "exVi": "Tuy là đêm giao thừa, nhưng người con không gọi xe."
    },
    {
     "name": "Không phải... mà là...",
     "struct": "不是······而是······",
     "explain": "Nhấn mạnh hành động thay thế.",
     "exZh": "不是叫出租车，而是小心地将母亲背在背上。",
     "exVi": "Không phải gọi taxi, mà là cẩn thận cõng mẹ trên lưng."
    }
   ],
   "text": [
    {
     "zh": "除夕，老人在家准备面包和饺子。去厨房拿面盆时，老人一不小心，被脚下的东西绊了一下，腿断了。等到儿子把她送到医院，处理完腿伤后，已是深夜。可是，老人不愿意待在医院，一定要回家过年。儿子知道母亲的性格，点头答应。",
     "vi": "Đêm giao thừa, bà cụ ở nhà chuẩn bị bánh mì và sủi cảo. Lúc vào bếp lấy chậu bột, bà cụ không cẩn thận, vấp phải đồ vật dưới chân, bị gãy chân. Đến khi con trai đưa bà tới bệnh viện, xử lý xong vết thương ở chân thì đã là nửa đêm. Thế nhưng bà cụ không muốn ở lại bệnh viện, nhất định đòi về nhà ăn Tết. Con trai hiểu tính mẹ nên gật đầu đồng ý.",
     "tokens": [["除夕","chúxī","Đêm Giao thừa"],["，"],["老人","lǎorén","người già"],["在家","zàijiā","ở nhà"],["准备","zhǔnbèi","chuẩn bị"],["面包","miànbāo","bánh mì"],["和","hé","và; hòa"],["饺子","jiǎozi","sủi cảo"],["。"],["去","qù","đi"],["厨房","chúfáng","nhà bếp"],["拿","ná","cầm, lấy"],["面盆","miànpén","chậu bột"],["时","shí","lúc, khi"],["，"],["老人","lǎorén","người già"],["一不小心","yíbùxiǎoxīn","lỡ không cẩn thận"],["，"],["被","bèi","bị, được"],["脚下","jiǎoxià","dưới chân"],["的","de","của (trợ từ)"],["东西","dōngxī","đồ vật"],["绊","bàn","Vấp, vướng"],["了","le","rồi (trợ từ)"],["一下","yīxià","một chút, một cái"],["，"],["腿","tuǐ","chân"],["断","duàn","gãy"],["了","le","rồi (trợ từ)"],["。"],["等到","děngdào","đợi đến khi"],["儿子","érzi","con trai"],["把","bǎ","(giới từ đưa tân ngữ lên trước)"],["她","tā","cô ấy, bà ấy"],["送到","sòngdào","đưa đến"],["医院","yīyuàn","bệnh viện"],["，"],["处理","chǔlǐ","xử lý"],["完","wán","xong"],["腿伤","tuǐshāng","vết thương ở chân"],["后","hòu","sau"],["，"],["已","yǐ","đã"],["是","shì","là"],["深夜","shēnyè","nửa đêm"],["。"],["可是","kěshì","nhưng"],["，"],["老人","lǎorén","người già"],["不","bù","không"],["愿意","yuànyì","bằng lòng, muốn"],["待","dài","ở lại; đợi"],["在","zài","ở, đang"],["医院","yīyuàn","bệnh viện"],["，"],["一定","yídìng","nhất định, chắc chắn"],["要","yào","muốn; phải"],["回家","huíjiā","về nhà"],["过年","guònián","ăn Tết"],["。"],["儿子","érzi","con trai"],["知道","zhīdào","biết"],["母亲","mǔqīn","mẹ"],["的","de","của (trợ từ)"],["性格","xìnggé","tính cách"],["，"],["点头","diǎntóu","gật đầu"],["答应","dāyìng","đồng ý"],["。"]]
    },
    {
     "zh": "虽然是除夕，街上来来往往的出租车仍有很多，但是儿子并没有叫车，而是小心地将母亲背在背上。儿子的背宽厚温热，一点儿也没有出租车的摇晃。",
     "vi": "Tuy là đêm giao thừa nhưng ngoài phố taxi qua lại vẫn còn rất nhiều, thế mà người con trai không gọi xe, mà cẩn thận cõng mẹ trên lưng. Tấm lưng của con rộng dày và ấm áp, không hề có chút lắc lư nào như đi taxi.",
     "tokens": [["虽然","suīrán","tuy"],["是","shì","là"],["除夕","chúxī","Đêm Giao thừa"],["，"],["街上","jiēshàng","trên phố"],["来来往往","láilái wǎngwǎng","Qua lại nhộn nhịp"],["的","de","của (trợ từ)"],["出租车","chūzūchē","taxi"],["仍","réng","vẫn"],["有","yǒu","có"],["很多","hěnduō","rất nhiều"],["，"],["但是","dànshì","nhưng"],["儿子","érzi","con trai"],["并","bìng","lại (nhấn mạnh phủ định); và"],["没有","méiyǒu","không có"],["叫","jiào","gọi; bảo"],["车","chē","xe"],["，"],["而是","érshì","mà là"],["小心","xiǎoxīn","cẩn thận"],["地","dì","(trợ từ trạng ngữ)"],["将","jiāng","sẽ; đem"],["母亲","mǔqīn","mẹ"],["背","bēi","Cõng, gánh"],["在","zài","ở, đang"],["背上","bèishàng","trên lưng"],["。"],["儿子","érzi","con trai"],["的","de","của (trợ từ)"],["背","bēi","Cõng, gánh"],["宽厚","kuānhòu","Rộng dày, nở nang"],["温热","wēnrè","ấm áp"],["，"],["一点儿","yìdiǎnér","một chút"],["也","yě","cũng"],["没有","méiyǒu","không có"],["出租车","chūzūchē","taxi"],["的","de","của (trợ từ)"],["摇晃","yáohuang","Đu đưa, rung lắc"],["。"]]
    },
    {
     "zh": "一路上，母子说说笑笑。快到家时，儿子笑着对母亲说：“妈，小时候我生病时，你背着我去看医生。还记得你当时问过我一个问题吗？你问我，如果有一天你老了，走不动了，我会不会背你？妈，现在我正背着你呢。”",
     "vi": "Suốt dọc đường, hai mẹ con vừa đi vừa nói cười. Khi sắp về đến nhà, người con cười nói với mẹ: “Mẹ ơi, hồi nhỏ mỗi lần con ốm, mẹ đều cõng con đi khám bác sĩ. Mẹ còn nhớ lúc đó mẹ từng hỏi con một câu không? Mẹ hỏi con, nếu một ngày nào đó mẹ già rồi, không đi nổi nữa, con có cõng mẹ không? Mẹ à, bây giờ con đang cõng mẹ đây.”",
     "tokens": [["一路上","yīlùshàng","suốt dọc đường"],["，"],["母子","mǔzi","mẹ con"],["说说笑笑","shuōshuōxiàoxiào","nói nói cười cười"],["。"],["快","kuài","nhanh; sắp"],["到","dào","đến"],["家","jiā","nhà"],["时","shí","lúc, khi"],["，"],["儿子","érzi","con trai"],["笑","xiào","cười"],["着","zhe","đang (trợ từ)"],["对","duì","đối với; đúng"],["母亲","mǔqīn","mẹ"],["说","shuō","nói"],["："],["“"],["妈","mā","mẹ"],["，"],["小时候","xiǎoshíhòu","hồi nhỏ"],["我","wǒ","tôi"],["生病","shēngbìng","bị ốm"],["时","shí","lúc, khi"],["，"],["你","nǐ","bạn"],["背","bēi","Cõng, gánh"],["着","zhe","đang (trợ từ)"],["我","wǒ","tôi"],["去","qù","đi"],["看","kàn","xem, nhìn"],["医生","yīshēng","bác sĩ"],["。"],["还","hái","còn, vẫn"],["记得","jìde","nhớ"],["你","nǐ","bạn"],["当时","dāngshí","lúc đó"],["问","wèn","hỏi"],["过","guò","qua; sống, đón"],["我","wǒ","tôi"],["一个","yígè","một (cái, người)"],["问题","wèntí","vấn đề, câu hỏi"],["吗","ma","không? (trợ từ hỏi)"],["？"],["你","nǐ","bạn"],["问","wèn","hỏi"],["我","wǒ","tôi"],["，"],["如果","rúguǒ","nếu"],["有","yǒu","có"],["一天","yītiān","một ngày"],["你老","nǐlǎo","ngươi cứ (luôn)"],["了","le","rồi (trợ từ)"],["，"],["走不动","zǒubùdòng","không đi nổi"],["了","le","rồi (trợ từ)"],["，"],["我会","wǒhuì","tôi sẽ"],["不会","búhuì","sẽ không"],["背","bēi","Cõng, gánh"],["你","nǐ","bạn"],["？"],["妈","mā","mẹ"],["，"],["现在","xiànzài","bây giờ"],["我","wǒ","tôi"],["正","zhèng","đang; đúng"],["背","bēi","Cõng, gánh"],["着","zhe","đang (trợ từ)"],["你","nǐ","bạn"],["呢","ne","nhỉ, thế (trợ từ)"],["。"],["”"]]
    },
    {
     "zh": "听了这些话，老人幸福得眼泪差点儿掉下来。几十年前与孩子说的一句玩笑话，自己早就忘得干干净净，没想到儿子还一直记在心里。",
     "vi": "Nghe những lời này, bà cụ hạnh phúc đến mức suýt nữa rơi nước mắt. Một câu nói đùa với con mấy chục năm trước, bản thân bà đã quên sạch từ lâu, không ngờ con trai vẫn luôn ghi nhớ trong lòng.",
     "tokens": [["听","tīng","nghe"],["了","le","rồi (trợ từ)"],["这些","zhèxiē","những ... này"],["话","huà","lời nói"],["，"],["老人","lǎorén","người già"],["幸福","xìngfú","hạnh phúc"],["得","dé","được; (trợ từ bổ ngữ)"],["眼泪","yǎnlèi","nước mắt"],["差点儿","chàdiǎnér","suýt nữa"],["掉下来","diàoxiàlái","rơi xuống"],["。"],["几十年","jǐshínián","mấy chục năm"],["前","qián","trước"],["与","yǔ","và, với"],["孩子","háizi","đứa trẻ, con"],["说","shuō","nói"],["的","de","của (trợ từ)"],["一句","yījù","một câu"],["玩笑话","wánxiàohuà","lời nói đùa"],["，"],["自己","zìjǐ","bản thân"],["早就","zǎojiù","từ lâu"],["忘","wàng","quên"],["得","dé","được; (trợ từ bổ ngữ)"],["干干净净","gāngānjìngjìng","sạch sẽ"],["，"],["没想到","méixiǎngdào","không ngờ"],["儿子","érzi","con trai"],["还","hái","còn, vẫn"],["一直","yìzhí","luôn luôn, suốt"],["记","jì","ghi nhớ"],["在","zài","ở, đang"],["心里","xīnlǐ","trong lòng"],["。"]]
    },
    {
     "zh": "背与被背，只是换了一个位置，而母亲和儿子之间的亲情是永远不变的。",
     "vi": "Cõng và được cõng, chỉ là đổi một vị trí, còn tình thân giữa mẹ và con thì mãi mãi không thay đổi.",
     "tokens": [["背","bēi","Cõng, gánh"],["与","yǔ","và, với"],["被","bèi","bị, được"],["背","bēi","Cõng, gánh"],["，"],["只是","zhǐshì","chỉ là"],["换","huàn","đổi"],["了","le","rồi (trợ từ)"],["一个","yígè","một (cái, người)"],["位置","wèizhì","vị trí"],["，"],["而","ér","mà, còn"],["母亲","mǔqīn","mẹ"],["和","hé","và; hòa"],["儿子","érzi","con trai"],["之间","zhījiān","giữa"],["的","de","của (trợ từ)"],["亲情","qīnqíng","tình thân"],["是","shì","là"],["永远","yǒngyuǎn","mãi mãi"],["不变","bùbiàn","không thay đổi"],["的","de","của (trợ từ)"],["。"]]
    }
   ],
   "questions": [
    {
     "q": "老人的腿是怎么断的？",
     "options": ["在街上被车撞了","去厨房拿面盆时被东西绊了一下","爬山时摔倒了","在医院里摔倒了"],
     "answer": 1,
     "explain": "Bà cụ vào bếp lấy chậu bột, vấp phải đồ vật dưới chân nên bị gãy chân."
    },
    {
     "q": "儿子是怎么把母亲送回家的？",
     "options": ["叫了出租车","坐公共汽车","把母亲背在背上","骑自行车"],
     "answer": 2,
     "explain": "Người con không gọi xe mà cẩn thận cõng mẹ trên lưng."
    },
    {
     "q": "老人为什么幸福得差点儿掉眼泪？",
     "options": ["因为过年了","因为腿不疼了","因为儿子还记得几十年前她说的一句话","因为医生说她没事"],
     "answer": 2,
     "explain": "Câu nói đùa từ mấy chục năm trước bà đã quên, nhưng con trai vẫn luôn nhớ."
    }
   ],
   "fills": [{"sentence":"_______，老人在家准备面包和饺子。","answer":"除夕","options":["除夕","摇晃","宽厚","背"]},{"sentence":"去厨房拿面盆时，老人一不小心，被脚下的东西_______了一下，腿断了。","answer":"绊","options":["背","除夕","宽厚","绊"]},{"sentence":"妈，现在我正_______着你呢。","answer":"背","options":["背","绊","宽厚","来来往往"]},{"sentence":"儿子的背_______温热，一点儿也没有出租车的摇晃。","answer":"宽厚","options":["来来往往","绊","除夕","宽厚"]},{"sentence":"儿子的背宽厚温热，一点儿也没有出租车的_______。","answer":"摇晃","options":["绊","来来往往","摇晃","除夕"]}]
  },
  {
   "id": "u1t4",
   "unit": 1,
   "no": 4,
   "titleZh": "自行车文化",
   "titleVi": "Văn hóa xe đạp",
   "note": "",
   "vocab": [
    {
     "hanzi": "统计",
     "pinyin": "tǒngjì",
     "pos": "Động từ/Danh từ",
     "meaning": "Thống kê",
     "exZh": "据统计",
     "exVi": "Theo thống kê"
    },
    {
     "hanzi": "城区",
     "pinyin": "chéngqū",
     "pos": "Danh từ",
     "meaning": "Nội thành",
     "exZh": "主要城区",
     "exVi": "Khu nội thành chính"
    },
    {
     "hanzi": "电动车",
     "pinyin": "diàndòngchē",
     "pos": "Danh từ",
     "meaning": "Xe điện",
     "exZh": "骑电动车",
     "exVi": "Đi xe điện"
    },
    {
     "hanzi": "占",
     "pinyin": "zhàn",
     "pos": "Động từ",
     "meaning": "Chiếm",
     "exZh": "占20%的交通量",
     "exVi": "Chiếm 20% lưu lượng giao thông"
    },
    {
     "hanzi": "污染",
     "pinyin": "wūrǎn",
     "pos": "Động từ/Danh từ",
     "meaning": "Ô ô nhiễm",
     "exZh": "没有污染",
     "exVi": "Không gây ô nhiễm"
    },
    {
     "hanzi": "悠久",
     "pinyin": "yōujiǔ",
     "pos": "Tính từ",
     "meaning": "Lâu đời",
     "exZh": "历史悠久",
     "exVi": "Lịch sử lâu đời"
    }
   ],
   "grammar": [],
   "text": [
    {
     "zh": "武汉将成为中国第一个拥有自行车专用道的大城市。武汉市计划花5536万元建设自行车专用道112条，总长度164.6公里，同时，新建464个公共自行车停车场。",
     "vi": "Vũ Hán sắp trở thành thành phố lớn đầu tiên của Trung Quốc có làn đường dành riêng cho xe đạp. Thành phố Vũ Hán dự định chi 55,36 triệu tệ xây dựng 112 tuyến đường dành riêng cho xe đạp, tổng chiều dài 164,6 km, đồng thời xây mới 464 bãi đỗ xe đạp công cộng.",
     "tokens": [["武汉","wǔhàn","Vũ Hán"],["将","jiāng","sẽ; đem"],["成为","chéngwéi","trở thành"],["中国","zhōngguó","Trung Quốc"],["第一个","dìyígè","đầu tiên"],["拥有","yōngyǒu","có, sở hữu"],["自行车专用道","zì xíng chē zhuān yòng dào","đường dành riêng cho xe đạp"],["的","de","của (trợ từ)"],["大城市","dàchéngshì","thành phố lớn"],["。"],["武汉市","wǔhànshì","thành phố Vũ Hán"],["计划","jìhuà","kế hoạch, dự định"],["花","huā","tiêu (tiền); hoa"],["5536"],["万元","wànyuán","vạn tệ"],["建设","jiànshè","xây dựng"],["自行车专用道","zì xíng chē zhuān yòng dào","đường dành riêng cho xe đạp"],["112"],["条","tiáo","tuyến, con"],["，"],["总长度","zǒngzhǎngdù","tổng chiều dài"],["164"],["."],["6"],["公里","gōnglǐ","ki-lô-mét"],["，"],["同时","tóngshí","đồng thời"],["，"],["新建","xīnjiàn","xây mới"],["464"],["个","gè","cái (lượng từ)"],["公共","gōnggòng","công cộng"],["自行车","zìxíngchē","xe đạp"],["停车场","tíngchēchǎng","bãi đỗ xe"],["。"]]
    },
    {
     "zh": "据统计，武汉主要城区有自行车110多万辆，电动自行车50多万辆，每天骑自行车出行的有300万人次，占20.2%的交通量，大大高于其他城市。随着自行车专用道的建成使用，骑车将更加安全，出行会更方便、快捷。",
     "vi": "Theo thống kê, các khu nội thành chính của Vũ Hán có hơn 1,1 triệu xe đạp, hơn 500 nghìn xe đạp điện, mỗi ngày có 3 triệu lượt người đi lại bằng xe đạp, chiếm 20,2% lưu lượng giao thông, cao hơn hẳn các thành phố khác. Cùng với việc các làn đường dành riêng cho xe đạp được xây xong và đưa vào sử dụng, đi xe đạp sẽ an toàn hơn, đi lại sẽ thuận tiện và nhanh chóng hơn.",
     "tokens": [["据","jù","theo"],["统计","tǒngjì","Thống kê"],["，"],["武汉","wǔhàn","Vũ Hán"],["主要","zhǔyào","chủ yếu"],["城区","chéngqū","Nội thành"],["有","yǒu","có"],["自行车","zìxíngchē","xe đạp"],["110"],["多万辆","duōwànliàng","hơn ... vạn chiếc"],["，"],["电动自行车","diàn dòng zì xíng chē","xe đạp điện"],["50"],["多万辆","duōwànliàng","hơn ... vạn chiếc"],["，"],["每天","měitiān","mỗi ngày"],["骑","qí","cưỡi, đi (xe)"],["自行车","zìxíngchē","xe đạp"],["出行","chūxíng","đi lại"],["的","de","của (trợ từ)"],["有","yǒu","có"],["300"],["万人次","wànréncì","vạn lượt người"],["，"],["占","zhàn","Chiếm"],["20"],["."],["2"],["%"],["的","de","của (trợ từ)"],["交通量","jiāotōngliàng","lưu lượng giao thông"],["，"],["大大","dàdà","rất nhiều, hẳn"],["高于","gāoyú","cao hơn"],["其他","qítā","khác"],["城市","chéngshì","thành phố"],["。"],["随着","suízhe","cùng với, theo"],["自行车专用道","zì xíng chē zhuān yòng dào","đường dành riêng cho xe đạp"],["的","de","của (trợ từ)"],["建成","jiànchéng","xây xong"],["使用","shǐyòng","sử dụng"],["，"],["骑车","qíchē","đi xe đạp"],["将","jiāng","sẽ; đem"],["更加","gèngjiā","càng thêm"],["安全","ānquán","an toàn"],["，"],["出行","chūxíng","đi lại"],["会","huì","sẽ; biết"],["更","gèng","càng, hơn"],["方便","fāngbiàn","thuận tiện"],["、"],["快捷","kuàijié","nhanh chóng"],["。"]]
    },
    {
     "zh": "这让我想起另一则新闻。北欧的丹麦，全国500万人口，拥有400多万辆自行车，首都哥本哈根60%的市民每天骑自行车出行。哥本哈根用了20多年时间，修建了总长度300多公里的自行车专用道，其中，市中心到火车站的自行车快速道，没有一个红灯，每天3万多骑人，通过这条快速道上下班。为了骑车人安全，政府不允许汽车进入自行车专用道。同时，公务员会使用公务自行车，到同城内办公事，尽可能减少汽车的使用。",
     "vi": "Điều này khiến tôi nhớ đến một tin tức khác. Đan Mạch ở Bắc Âu, cả nước có 5 triệu dân nhưng có hơn 4 triệu chiếc xe đạp, 60% người dân thủ đô Copenhagen mỗi ngày đi lại bằng xe đạp. Copenhagen đã mất hơn 20 năm để xây dựng hơn 300 km đường dành riêng cho xe đạp, trong đó tuyến đường xe đạp tốc hành từ trung tâm thành phố đến ga tàu không có một đèn đỏ nào, mỗi ngày có hơn 3 vạn người đi xe qua tuyến này để đi làm và tan làm. Để đảm bảo an toàn cho người đi xe đạp, chính phủ không cho phép ô tô đi vào làn đường xe đạp. Đồng thời, công chức sẽ dùng xe đạp công vụ để đi làm việc trong nội thành, hạn chế tối đa việc sử dụng ô tô.",
     "tokens": [["这","zhè","này"],["让","ràng","để, bảo, khiến"],["我","wǒ","tôi"],["想起","xiǎngqǐ","nhớ ra"],["另一则","lìngyīzé","một (tin) khác"],["新闻","xīnwén","tin tức"],["。"],["北欧","běiōu","Bắc Âu"],["的","de","của (trợ từ)"],["丹麦","dānmài","Đan Mạch"],["，"],["全国","quánguó","cả nước"],["500"],["万","wàn","vạn, mười nghìn"],["人口","rénkǒu","dân số"],["，"],["拥有","yōngyǒu","có, sở hữu"],["400"],["多万辆","duōwànliàng","hơn ... vạn chiếc"],["自行车","zìxíngchē","xe đạp"],["，"],["首都","shǒudū","thủ đô"],["哥本哈根","gēběnhāgēn","Copenhagen"],["60"],["%"],["的","de","của (trợ từ)"],["市民","shìmín","người dân thành phố"],["每天","měitiān","mỗi ngày"],["骑","qí","cưỡi, đi (xe)"],["自行车","zìxíngchē","xe đạp"],["出行","chūxíng","đi lại"],["。"],["哥本哈根","gēběnhāgēn","Copenhagen"],["用","yòng","dùng"],["了","le","rồi (trợ từ)"],["20"],["多年","duōnián","nhiều năm"],["时间","shíjiān","thời gian"],["，"],["修建","xiūjiàn","xây dựng"],["了","le","rồi (trợ từ)"],["总长度","zǒngzhǎngdù","tổng chiều dài"],["300"],["多公里","duōgōnglǐ","hơn ... km"],["的","de","của (trợ từ)"],["自行车专用道","zì xíng chē zhuān yòng dào","đường dành riêng cho xe đạp"],["，"],["其中","qízhōng","trong đó"],["，"],["市中心","shìzhōngxīn","trung tâm thành phố"],["到","dào","đến"],["火车站","huǒchēzhàn","ga tàu"],["的","de","của (trợ từ)"],["自行车","zìxíngchē","xe đạp"],["快速","kuàisù","nhanh chóng"],["道","dào","đường; đạo"],["，"],["没有","méiyǒu","không có"],["一个","yígè","một (cái, người)"],["红灯","hóngdēng","đèn đỏ"],["，"],["每天","měitiān","mỗi ngày"],["3"],["万多","wànduō","hơn vạn"],["骑","qí","cưỡi, đi (xe)"],["人","rén","người"],["，"],["通过","tōngguò","thông qua, vượt qua"],["这","zhè","này"],["条","tiáo","tuyến, con"],["快速","kuàisù","nhanh chóng"],["道","dào","đường; đạo"],["上下班","shàngxiàbān","đi làm và tan làm"],["。"],["为了","wèile","để, vì"],["骑车人","qíchērén","người đi xe đạp"],["安全","ānquán","an toàn"],["，"],["政府","zhèngfǔ","chính phủ"],["不","bù","không"],["允许","yǔnxǔ","cho phép"],["汽车","qìchē","ô tô"],["进入","jìnrù","bước vào"],["自行车专用道","zì xíng chē zhuān yòng dào","đường dành riêng cho xe đạp"],["。"],["同时","tóngshí","đồng thời"],["，"],["公务员","gōngwùyuán","công chức"],["会","huì","sẽ; biết"],["使用","shǐyòng","sử dụng"],["公务","gōngwù","công vụ"],["自行车","zìxíngchē","xe đạp"],["，"],["到","dào","đến"],["同","tóng","cùng"],["城内","chéngnèi","trong thành"],["办公","bàngōng","làm việc (công)"],["事","shì","việc"],["，"],["尽可能减少","jǐn kě néng jiǎn shǎo","giảm tối đa"],["汽车","qìchē","ô tô"],["的","de","của (trợ từ)"],["使用","shǐyòng","sử dụng"],["。"]]
    },
    {
     "zh": "中国曾是自行车王国，但正在走西方的老路，城市交通几乎都以汽车为主，很多人不愿意骑自行车了。",
     "vi": "Trung Quốc từng là vương quốc xe đạp, nhưng đang đi lại con đường cũ của phương Tây, giao thông đô thị gần như lấy ô tô làm chủ, rất nhiều người không muốn đi xe đạp nữa.",
     "tokens": [["中国","zhōngguó","Trung Quốc"],["曾","céng","từng"],["是","shì","là"],["自行车","zìxíngchē","xe đạp"],["王国","wángguó","vương quốc"],["，"],["但","dàn","nhưng"],["正在","zhèngzài","đang"],["走","zǒu","đi; đi (cờ)"],["西方","xīfāng","phương Tây"],["的","de","của (trợ từ)"],["老路","lǎolù","con đường cũ"],["，"],["城市交通","chéngshìjiāotōng","giao thông đô thị"],["几乎","jīhū","gần như"],["都","dōu","đều"],["以","yǐ","lấy, dùng; với"],["汽车","qìchē","ô tô"],["为主","wéizhǔ","làm chủ yếu"],["，"],["很多","hěnduō","rất nhiều"],["人","rén","người"],["不","bù","không"],["愿意","yuànyì","bằng lòng, muốn"],["骑","qí","cưỡi, đi (xe)"],["自行车","zìxíngchē","xe đạp"],["了","le","rồi (trợ từ)"],["。"]]
    },
    {
     "zh": "其实，骑自行车没有污染，是绿色文化；骑车可以健身，是体育文化；骑车省钱，是经济文化；自行车比汽车历史悠久，更是传统文化。",
     "vi": "Thật ra, đi xe đạp không gây ô nhiễm, đó là văn hóa xanh; đi xe đạp có thể rèn luyện sức khỏe, đó là văn hóa thể thao; đi xe đạp tiết kiệm tiền, đó là văn hóa kinh tế; xe đạp có lịch sử lâu đời hơn ô tô, càng là văn hóa truyền thống.",
     "tokens": [["其实","qíshí","thực ra"],["，"],["骑","qí","cưỡi, đi (xe)"],["自行车","zìxíngchē","xe đạp"],["没有","méiyǒu","không có"],["污染","wūrǎn","Ô ô nhiễm"],["，"],["是","shì","là"],["绿色","lǜsè","màu xanh, xanh (sạch)"],["文化","wénhuà","văn hóa"],["；"],["骑车","qíchē","đi xe đạp"],["可以","kěyǐ","có thể"],["健身","jiànshēn","rèn luyện sức khỏe"],["，"],["是","shì","là"],["体育","tǐyù","thể thao"],["文化","wénhuà","văn hóa"],["；"],["骑车","qíchē","đi xe đạp"],["省钱","shěngqián","tiết kiệm tiền"],["，"],["是","shì","là"],["经济","jīngjì","kinh tế"],["文化","wénhuà","văn hóa"],["；"],["自行车","zìxíngchē","xe đạp"],["比","bǐ","so với"],["汽车","qìchē","ô tô"],["历史","lìshǐ","lịch sử"],["悠久","yōujiǔ","Lâu đời"],["，"],["更是","gèngshì","càng là"],["传统","chuántǒng","truyền thống"],["文化","wénhuà","văn hóa"],["。"]]
    }
   ],
   "questions": [
    {
     "q": "武汉将成为中国第一个拥有什么的大城市？",
     "options": ["地铁","自行车专用道","电动车工厂","飞机场"],
     "answer": 1,
     "explain": "Câu đầu tiên: Vũ Hán sẽ là thành phố lớn đầu tiên có làn đường dành riêng cho xe đạp."
    },
    {
     "q": "在哥本哈根，为了骑车人的安全，政府怎么做？",
     "options": ["不允许汽车进入自行车专用道","让骑车人戴帽子","不让人骑车上班","每条路都有红灯"],
     "answer": 0,
     "explain": "Chính phủ không cho phép ô tô đi vào làn đường dành riêng cho xe đạp."
    },
    {
     "q": "作者认为骑自行车是一种什么文化？",
     "options": ["只是体育文化","只是经济文化","绿色、体育、经济和传统文化","西方文化"],
     "answer": 2,
     "explain": "Đoạn cuối: văn hóa xanh, văn hóa thể thao, văn hóa kinh tế và văn hóa truyền thống."
    }
   ],
   "fills": [{"sentence":"据_______，武汉主要城区有自行车110多万辆，电动自行车50多万辆，每天骑自行车出行的有300万人次，占20.2%的交通量，大大高于其他城市。","answer":"统计","options":["统计","电动车","污染","悠久"]},{"sentence":"据统计，武汉主要_______有自行车110多万辆，电动自行车50多万辆，每天骑自行车出行的有300万人次，占20.2%的交通量，大大高于其他城市。","answer":"城区","options":["城区","电动车","污染","悠久"]},{"sentence":"据统计，武汉主要城区有自行车110多万辆，电动自行车50多万辆，每天骑自行车出行的有300万人次，_______20.2%的交通量，大大高于其他城市。","answer":"占","options":["占","污染","悠久","电动车"]},{"sentence":"其实，骑自行车没有_______，是绿色文化；","answer":"污染","options":["悠久","城区","污染","统计"]},{"sentence":"自行车比汽车历史_______，更是传统文化。","answer":"悠久","options":["电动车","统计","占","悠久"]}]
  },
  {
   "id": "u2t1",
   "unit": 2,
   "no": 1,
   "titleZh": "找工作的故事",
   "titleVi": "Câu chuyện tìm việc",
   "note": "",
   "vocab": [
    {
     "hanzi": "不慌不忙",
     "pinyin": "bùhuāng bùmáng",
     "pos": "Thành ngữ",
     "meaning": "Thong thả, không vội vàng",
     "exZh": "不慌不忙地回答",
     "exVi": "Thong thả trả lời"
    },
    {
     "hanzi": "考官",
     "pinyin": "kǎoguān",
     "pos": "Danh từ",
     "meaning": "Giám khảo",
     "exZh": "主考官",
     "exVi": "Giám khảo chính"
    },
    {
     "hanzi": "向",
     "pinyin": "xiàng",
     "pos": "Giới từ",
     "meaning": "Hướng về",
     "exZh": "向爸爸报告",
     "exVi": "Báo cáo với bố"
    },
    {
     "hanzi": "拍",
     "pinyin": "pāi",
     "pos": "Động từ",
     "meaning": "Vỗ, đập",
     "exZh": "拍拍肩膀",
     "exVi": "Vỗ vỗ vai"
    },
    {
     "hanzi": "肩膀",
     "pinyin": "jiānbǎng",
     "pos": "Danh từ",
     "meaning": "Vai",
     "exZh": "拍肩膀",
     "exVi": "Vỗ vai"
    },
    {
     "hanzi": "胆小鬼",
     "pinyin": "dǎnxiǎoguǐ",
     "pos": "Danh từ",
     "meaning": "Kẻ nhát gan",
     "exZh": "不敢要的胆小鬼",
     "exVi": "Kẻ nhát gan không dám đòi hỏi"
    }
   ],
   "grammar": [
    {
     "name": "Lại, nhưng lại...",
     "struct": "却",
     "explain": "Biểu thị sự đối lập nhẹ nhàng hoặc bất ngờ.",
     "exZh": "如果我取得好成绩，你们却不要我。",
     "exVi": "Nếu tôi đạt được thành tích tốt mà các ông lại không nhận tôi."
    }
   ],
   "text": [
    {
     "zh": "快要毕业的弟弟，决定考国家公务员。考的人很多，因为有能力，弟弟顺利通过笔试，成绩在2000名考生中排名第八。",
     "vi": "Cậu em trai sắp tốt nghiệp quyết định thi công chức nhà nước. Người thi rất đông, vì có năng lực nên em trai đã thuận lợi vượt qua vòng thi viết, thành tích xếp thứ tám trong số 2000 thí sinh.",
     "tokens": [["快要","kuàiyào","sắp"],["毕业","bìyè","tốt nghiệp"],["的","de","của (trợ từ)"],["弟弟","dìdi","em trai"],["，"],["决定","juédìng","quyết định"],["考","kǎo","thi"],["国家","guójiā","đất nước, nhà nước"],["公务员","gōngwùyuán","công chức"],["。"],["考","kǎo","thi"],["的","de","của (trợ từ)"],["人","rén","người"],["很多","hěnduō","rất nhiều"],["，"],["因为","yīnwèi","bởi vì"],["有","yǒu","có"],["能力","nénglì","năng lực"],["，"],["弟弟","dìdi","em trai"],["顺利","shùnlì","thuận lợi"],["通过","tōngguò","thông qua, vượt qua"],["笔试","bǐshì","thi viết"],["，"],["成绩","chéngjì","thành tích"],["在","zài","ở, đang"],["2000"],["名","míng","tên; người (lượng từ)"],["考生","kǎoshēng","thí sinh"],["中","zhōng","trong, giữa"],["排名","páimíng","xếp hạng"],["第八","dìbā","thứ tám"],["。"]]
    },
    {
     "zh": "60名考试成绩优秀者，接着进行面试，弟弟不慌不忙地回答问题，考官微笑着，不断点头，第三题是“说说你最生气的一件事”。弟弟低头想了一会儿，说：“我最生气的事情是，如果我取得好成绩，你们却不要我。”",
     "vi": "60 thí sinh có thành tích xuất sắc tiếp tục vào vòng phỏng vấn. Em trai thong thả trả lời các câu hỏi, giám khảo mỉm cười, không ngừng gật đầu. Câu hỏi thứ ba là “Hãy nói về một chuyện khiến bạn tức giận nhất”. Em trai cúi đầu nghĩ một lát rồi nói: “Chuyện khiến tôi tức giận nhất là, nếu tôi đạt được thành tích tốt mà các ông lại không nhận tôi.”",
     "tokens": [["60"],["名","míng","tên; người (lượng từ)"],["考试成绩","kǎoshìchéngjì","điểm thi"],["优秀者","yōuxiùzhě","người xuất sắc"],["，"],["接着","jiēzhe","tiếp theo"],["进行","jìnxíng","tiến hành"],["面试","miànshì","phỏng vấn"],["，"],["弟弟","dìdi","em trai"],["不慌不忙","bùhuāng bùmáng","Thong thả, không vội vàng"],["地","dì","(trợ từ trạng ngữ)"],["回答","huídá","trả lời"],["问题","wèntí","vấn đề, câu hỏi"],["，"],["考官","kǎoguān","Giám khảo"],["微笑","wēixiào","mỉm cười"],["着","zhe","đang (trợ từ)"],["，"],["不断","bùduàn","không ngừng"],["点头","diǎntóu","gật đầu"],["，"],["第三","dìsān","thứ ba"],["题","tí","câu hỏi"],["是","shì","là"],["“"],["说","shuō","nói"],["说","shuō","nói"],["你","nǐ","bạn"],["最","zuì","nhất"],["生气","shēngqì","tức giận"],["的","de","của (trợ từ)"],["一件","yījiàn","một (việc, chiếc)"],["事","shì","việc"],["”"],["。"],["弟弟","dìdi","em trai"],["低头","dītóu","cúi đầu"],["想","xiǎng","nghĩ; muốn"],["了","le","rồi (trợ từ)"],["一会儿","yīhuìer","một lát"],["，"],["说","shuō","nói"],["："],["“"],["我","wǒ","tôi"],["最","zuì","nhất"],["生气","shēngqì","tức giận"],["的","de","của (trợ từ)"],["事情","shìqíng","sự việc, chuyện"],["是","shì","là"],["，"],["如果","rúguǒ","nếu"],["我","wǒ","tôi"],["取得","qǔdé","đạt được"],["好","hǎo","tốt; rất"],["成绩","chéngjì","thành tích"],["，"],["你们","nǐmen","các bạn"],["却","què","lại, nhưng lại"],["不要","búyào","đừng; không cần"],["我","wǒ","tôi"],["。"],["”"]]
    },
    {
     "zh": "回家后，弟弟向急等消息的爸爸报告情况。说到第三题的回答，爸爸摇摇头，说：“回答得不好，怎么能那么说话？结果可能不会太好。”",
     "vi": "Về nhà, em trai báo cáo tình hình với bố, người đang sốt ruột chờ tin. Nói đến câu trả lời cho câu hỏi thứ ba, bố lắc đầu nói: “Trả lời không hay, sao có thể nói như thế được? Kết quả có lẽ sẽ không tốt lắm.”",
     "tokens": [["回家","huíjiā","về nhà"],["后","hòu","sau"],["，"],["弟弟","dìdi","em trai"],["向","xiàng","Hướng về"],["急","jí","sốt ruột, vội"],["等","děng","đợi; vân vân"],["消息","xiāoxī","tin tức"],["的","de","của (trợ từ)"],["爸爸","bàbà","bố"],["报告","bàogào","báo cáo"],["情况","qíngkuàng","tình hình"],["。"],["说","shuō","nói"],["到","dào","đến"],["第三","dìsān","thứ ba"],["题","tí","câu hỏi"],["的","de","của (trợ từ)"],["回答","huídá","trả lời"],["，"],["爸爸","bàbà","bố"],["摇摇头","yáoyáotóu","lắc lắc đầu"],["，"],["说","shuō","nói"],["："],["“"],["回答","huídá","trả lời"],["得","dé","được; (trợ từ bổ ngữ)"],["不好","bùhǎo","không tốt"],["，"],["怎么","zěnme","thế nào"],["能","néng","có thể"],["那么","nàme","như thế; vậy thì"],["说话","shuōhuà","nói chuyện"],["？"],["结果","jiéguǒ","kết quả"],["可能","kěnéng","có thể"],["不会","búhuì","sẽ không"],["太","tài","quá"],["好","hǎo","tốt; rất"],["。"],["”"]]
    },
    {
     "zh": "结果出来了，我们全家终于等到了好消息---有6名考生被录用，弟弟名列第五。",
     "vi": "Kết quả đã có, cả nhà chúng tôi cuối cùng cũng đợi được tin vui — có 6 thí sinh được tuyển dụng, em trai xếp thứ năm.",
     "tokens": [["结果","jiéguǒ","kết quả"],["出来","chūlái","ra, xuất hiện"],["了","le","rồi (trợ từ)"],["，"],["我们","wǒmen","chúng tôi"],["全家","quánjiā","cả nhà"],["终于","zhōngyú","cuối cùng"],["等到","děngdào","đợi đến khi"],["了","le","rồi (trợ từ)"],["好消息","hǎoxiāoxī","tin vui"],["-"],["-"],["-"],["有","yǒu","có"],["6"],["名","míng","tên; người (lượng từ)"],["考生","kǎoshēng","thí sinh"],["被","bèi","bị, được"],["录用","lùyòng","tuyển dụng"],["，"],["弟弟","dìdi","em trai"],["名列","míngliè","xếp hạng"],["第五","dìwǔ","thứ năm"],["。"]]
    },
    {
     "zh": "弟弟很高兴，但他很想知道，考官对自己第三题的回答是怎么想的。再次见面的时候，弟弟问考官先生：“我第三题的回答，您还记得吗？不知您觉得怎么样？”",
     "vi": "Em trai rất vui, nhưng cậu rất muốn biết giám khảo nghĩ thế nào về câu trả lời thứ ba của mình. Lần gặp lại, em trai hỏi ông giám khảo: “Câu trả lời thứ ba của tôi, ông còn nhớ không ạ? Không biết ông thấy thế nào?”",
     "tokens": [["弟弟","dìdi","em trai"],["很","hěn","rất"],["高兴","gāoxìng","vui"],["，"],["但","dàn","nhưng"],["他","tā","anh ấy, ông ấy"],["很","hěn","rất"],["想","xiǎng","nghĩ; muốn"],["知道","zhīdào","biết"],["，"],["考官","kǎoguān","Giám khảo"],["对","duì","đối với; đúng"],["自己","zìjǐ","bản thân"],["第三","dìsān","thứ ba"],["题","tí","câu hỏi"],["的","de","của (trợ từ)"],["回答","huídá","trả lời"],["是","shì","là"],["怎么","zěnme","thế nào"],["想","xiǎng","nghĩ; muốn"],["的","de","của (trợ từ)"],["。"],["再次","zàicì","lần nữa"],["见面","jiànmiàn","gặp mặt"],["的","de","của (trợ từ)"],["时候","shíhòu","lúc, khi"],["，"],["弟弟","dìdi","em trai"],["问","wèn","hỏi"],["考官","kǎoguān","Giám khảo"],["先生","xiānshēng","ông, tiên sinh; chồng"],["："],["“"],["我","wǒ","tôi"],["第三","dìsān","thứ ba"],["题","tí","câu hỏi"],["的","de","của (trợ từ)"],["回答","huídá","trả lời"],["，"],["您","nín","ông/bà (kính trọng)"],["还","hái","còn, vẫn"],["记得","jìde","nhớ"],["吗","ma","không? (trợ từ hỏi)"],["？"],["不知","bùzhī","không biết"],["您","nín","ông/bà (kính trọng)"],["觉得","juéde","cảm thấy"],["怎么样","zěnmeyàng","thế nào"],["？"],["”"]]
    },
    {
     "zh": "考官拍拍弟弟的肩膀这样说：“你说，一个连自己的权利都不敢要的胆小鬼，如果是你的话，你愿意要这样的人为你工作吗？这样的人能为别人、为国家做些什么呢？”",
     "vi": "Giám khảo vỗ vỗ vai em trai và nói thế này: “Cậu nói xem, một kẻ nhát gan đến quyền lợi của bản thân cũng không dám đòi, nếu là cậu, cậu có muốn người như vậy làm việc cho mình không? Người như vậy có thể làm được gì cho người khác, cho đất nước chứ?”",
     "tokens": [["考官","kǎoguān","Giám khảo"],["拍拍","pāipāi","vỗ vỗ"],["弟弟","dìdi","em trai"],["的","de","của (trợ từ)"],["肩膀","jiānbǎng","Vai"],["这样","zhèyàng","như vậy"],["说","shuō","nói"],["："],["“"],["你","nǐ","bạn"],["说","shuō","nói"],["，"],["一个","yígè","một (cái, người)"],["连","lián","thậm chí, đến cả; liền"],["自己","zìjǐ","bản thân"],["的","de","của (trợ từ)"],["权利","quánlì","quyền lợi"],["都","dōu","đều"],["不敢","bùgǎn","không dám"],["要","yào","muốn; phải"],["的","de","của (trợ từ)"],["胆小鬼","dǎnxiǎoguǐ","Kẻ nhát gan"],["，"],["如果","rúguǒ","nếu"],["是","shì","là"],["你","nǐ","bạn"],["的话","dehuà","nếu ... thì"],["，"],["你","nǐ","bạn"],["愿意","yuànyì","bằng lòng, muốn"],["要","yào","muốn; phải"],["这样","zhèyàng","như vậy"],["的","de","của (trợ từ)"],["人为","rénwéi","con người làm"],["你","nǐ","bạn"],["工作","gōngzuò","công việc, làm việc"],["吗","ma","không? (trợ từ hỏi)"],["？"],["这样","zhèyàng","như vậy"],["的","de","của (trợ từ)"],["人","rén","người"],["能","néng","có thể"],["为","wèi","vì, cho; là"],["别人","biérén","người khác"],["、"],["为","wèi","vì, cho; là"],["国家","guójiā","đất nước, nhà nước"],["做","zuò","làm"],["些","xiē","một số"],["什么","shénme","cái gì"],["呢","ne","nhỉ, thế (trợ từ)"],["？"],["”"]]
    },
    {
     "zh": "弟弟说，这是一个对他影响很深，让他很难忘记的回答。",
     "vi": "Em trai nói, đây là một câu trả lời ảnh hưởng rất sâu sắc đến cậu, khiến cậu khó lòng quên được.",
     "tokens": [["弟弟","dìdi","em trai"],["说","shuō","nói"],["，"],["这","zhè","này"],["是","shì","là"],["一个","yígè","một (cái, người)"],["对","duì","đối với; đúng"],["他","tā","anh ấy, ông ấy"],["影响","yǐngxiǎng","ảnh hưởng"],["很","hěn","rất"],["深","shēn","sâu"],["，"],["让","ràng","để, bảo, khiến"],["他","tā","anh ấy, ông ấy"],["很","hěn","rất"],["难","nán","khó"],["忘记","wàngjì","quên"],["的","de","của (trợ từ)"],["回答","huídá","trả lời"],["。"]]
    }
   ],
   "questions": [
    {
     "q": "弟弟笔试的成绩怎么样？",
     "options": ["在2000名考生中排名第八","考了第一名","没有通过","排名第五十"],
     "answer": 0,
     "explain": "Em trai xếp thứ tám trong số 2000 thí sinh ở vòng thi viết."
    },
    {
     "q": "爸爸听了弟弟第三题的回答以后，觉得怎么样？",
     "options": ["回答得非常好","回答得不好，结果可能不会太好","考官一定会喜欢","没有什么问题"],
     "answer": 1,
     "explain": "Bố lắc đầu, cho rằng trả lời không hay, kết quả có lẽ không tốt."
    },
    {
     "q": "考官为什么喜欢弟弟的回答？",
     "options": ["因为弟弟很会开玩笑","因为弟弟敢要自己的权利，不是胆小鬼","因为弟弟的爸爸认识考官","因为弟弟说话很客气"],
     "answer": 1,
     "explain": "Giám khảo cho rằng người không dám đòi quyền lợi của mình là kẻ nhát gan, không làm được gì cho người khác và đất nước."
    }
   ],
   "fills": [{"sentence":"60名考试成绩优秀者，接着进行面试，弟弟_______地回答问题，考官微笑着，不断点头，第三题是“说说你最生气的一件事”。","answer":"不慌不忙","options":["不慌不忙","向","拍","胆小鬼"]},{"sentence":"弟弟很高兴，但他很想知道，_______对自己第三题的回答是怎么想的。","answer":"考官","options":["考官","向","肩膀","不慌不忙"]},{"sentence":"”回家后，弟弟_______急等消息的爸爸报告情况。","answer":"向","options":["向","拍","不慌不忙","考官"]},{"sentence":"”考官_______拍弟弟的肩膀这样说：“你说，一个连自己的权利都不敢要的胆小鬼，如果是你的话，你愿意要这样的人为你工作吗？","answer":"拍","options":["不慌不忙","愣","向","拍"]},{"sentence":"”考官拍拍弟弟的_______这样说：“你说，一个连自己的权利都不敢要的胆小鬼，如果是你的话，你愿意要这样的人为你工作吗？","answer":"肩膀","options":["肩膀","不慌不忙","向","招"]}]
  },
  {
   "id": "u2t2",
   "unit": 2,
   "no": 2,
   "titleZh": "带父母去旅行",
   "titleVi": "Đưa bố mẹ đi du lịch",
   "note": "",
   "vocab": [
    {
     "hanzi": "专门",
     "pinyin": "zhuānmén",
     "pos": "Phó từ/Tính từ",
     "meaning": "Chuyên môn, đặc biệt",
     "exZh": "专门带父母去",
     "exVi": "Đặc biệt đưa bố mẹ đi"
    },
    {
     "hanzi": "便",
     "pinyin": "biàn",
     "pos": "Phó từ",
     "meaning": "Thì, liền, bèn",
     "exZh": "父亲便去世了",
     "exVi": "Bố liền qua đời"
    },
    {
     "hanzi": "遗憾",
     "pinyin": "yíhàn",
     "pos": "Danh từ/Tính từ",
     "meaning": "Đáng tiếc, hối tiếc",
     "exZh": "永远的遗憾",
     "exVi": "Nỗi tiếc nuối mãi mãi"
    },
    {
     "hanzi": "陪伴",
     "pinyin": "péibàn",
     "pos": "Động từ",
     "meaning": "Đồng hành, bên cạnh",
     "exZh": "有儿子陪伴",
     "exVi": "Có con trai ở bên"
    },
    {
     "hanzi": "在乎",
     "pinyin": "zàihu",
     "pos": "Động từ",
     "meaning": "Để ý, quan tâm",
     "exZh": "并不在乎看了什么",
     "exVi": "Không để tâm đã xem những gì"
    }
   ],
   "grammar": [
    {
     "name": "Con muốn phụng dưỡng nhưng cha mẹ chẳng còn",
     "struct": "子欲养而亲不待",
     "explain": "Trích dẫn cổ ngữ nói về sự hối tiếc khi không kịp phụng dưỡng cha mẹ.",
     "exZh": "“子欲养而亲不待”，这成了我心中永远的遗憾。",
     "exVi": "“Con muốn phụng dưỡng mà cha mẹ chẳng đợi”, điều này trở thành nỗi tiếc nuối mãi mãi trong lòng tôi."
    }
   ],
   "text": [
    {
     "zh": "一位高中的同学跟我讲，过几天要带父母去北京旅行。他自己去过北京多次，这次是专门带父母去的。我对他说，带父母去旅行，是做孩子最快乐的事。他很同意我的观点。",
     "vi": "Một người bạn học cấp ba kể với tôi, mấy hôm nữa sẽ đưa bố mẹ đi du lịch Bắc Kinh. Bản thân anh ấy đã đến Bắc Kinh nhiều lần, lần này là đặc biệt đưa bố mẹ đi. Tôi nói với anh ấy, đưa bố mẹ đi du lịch là việc vui nhất của người làm con. Anh ấy rất đồng ý với quan điểm của tôi.",
     "tokens": [["一位","yīwèi","một vị, một người"],["高中","gāozhōng","cấp ba"],["的","de","của (trợ từ)"],["同学","tóngxué","bạn học"],["跟","gēn","với; theo"],["我","wǒ","tôi"],["讲","jiǎng","nói, kể"],["，"],["过","guò","qua; sống, đón"],["几天","jǐtiān","vài ngày"],["要","yào","muốn; phải"],["带","dài","mang, dẫn"],["父母","fùmǔ","bố mẹ"],["去","qù","đi"],["北京","běijīng","Bắc Kinh"],["旅行","lǚxíng","du lịch"],["。"],["他","tā","anh ấy, ông ấy"],["自己","zìjǐ","bản thân"],["去过","qùguò","đã đi"],["北京","běijīng","Bắc Kinh"],["多次","duōcì","nhiều lần"],["，"],["这次","zhècì","lần này"],["是","shì","là"],["专门","zhuānmén","Chuyên môn, đặc biệt"],["带","dài","mang, dẫn"],["父母","fùmǔ","bố mẹ"],["去","qù","đi"],["的","de","của (trợ từ)"],["。"],["我","wǒ","tôi"],["对","duì","đối với; đúng"],["他","tā","anh ấy, ông ấy"],["说","shuō","nói"],["，"],["带","dài","mang, dẫn"],["父母","fùmǔ","bố mẹ"],["去","qù","đi"],["旅行","lǚxíng","du lịch"],["，"],["是","shì","là"],["做","zuò","làm"],["孩子","háizi","đứa trẻ, con"],["最","zuì","nhất"],["快乐","kuàilè","vui vẻ"],["的","de","của (trợ từ)"],["事","shì","việc"],["。"],["他","tā","anh ấy, ông ấy"],["很","hěn","rất"],["同意","tóngyì","đồng ý"],["我","wǒ","tôi"],["的","de","của (trợ từ)"],["观点","guāndiǎn","quan điểm"],["。"]]
    },
    {
     "zh": "带父母去旅行，我曾经也有过这样的想法。前年，我的父亲发现有病，我才认真地提出，可是还没有等我去做，父亲就病倒了，后来做了手术，还没有完全好过来，父亲便去世了。“子欲养而亲不待”，这成了我心中永远的遗憾、永远的痛。",
     "vi": "Đưa bố mẹ đi du lịch, tôi cũng từng có suy nghĩ như vậy. Năm kia, bố tôi phát hiện bị bệnh, tôi mới nghiêm túc đề xuất, nhưng tôi chưa kịp làm thì bố đã ngã bệnh, sau đó phải phẫu thuật, còn chưa khỏi hẳn thì bố đã qua đời. “Con muốn phụng dưỡng mà cha mẹ chẳng đợi”, điều này đã trở thành nỗi tiếc nuối mãi mãi, nỗi đau mãi mãi trong lòng tôi.",
     "tokens": [["带","dài","mang, dẫn"],["父母","fùmǔ","bố mẹ"],["去","qù","đi"],["旅行","lǚxíng","du lịch"],["，"],["我","wǒ","tôi"],["曾经","céngjīng","đã từng"],["也","yě","cũng"],["有","yǒu","có"],["过","guò","qua; sống, đón"],["这样","zhèyàng","như vậy"],["的","de","của (trợ từ)"],["想法","xiǎngfǎ","suy nghĩ"],["。"],["前年","qiánnián","năm kia"],["，"],["我","wǒ","tôi"],["的","de","của (trợ từ)"],["父亲","fùqīn","bố"],["发现","fāxiàn","phát hiện"],["有","yǒu","có"],["病","bìng","bệnh"],["，"],["我","wǒ","tôi"],["才","cái","mới"],["认真","rènzhēn","nghiêm túc"],["地","dì","(trợ từ trạng ngữ)"],["提出","tíchū","đề xuất"],["，"],["可是","kěshì","nhưng"],["还","hái","còn, vẫn"],["没有","méiyǒu","không có"],["等","děng","đợi; vân vân"],["我","wǒ","tôi"],["去","qù","đi"],["做","zuò","làm"],["，"],["父亲","fùqīn","bố"],["就","jiù","thì, liền"],["病倒","bìngdào","ngã bệnh"],["了","le","rồi (trợ từ)"],["，"],["后来","hòulái","sau đó"],["做","zuò","làm"],["了","le","rồi (trợ từ)"],["手术","shǒushù","phẫu thuật"],["，"],["还","hái","còn, vẫn"],["没有","méiyǒu","không có"],["完全","wánquán","hoàn toàn"],["好","hǎo","tốt; rất"],["过来","guòlái","lại, sang"],["，"],["父亲","fùqīn","bố"],["便","biàn","Thì, liền, bèn"],["去世","qùshì","qua đời"],["了","le","rồi (trợ từ)"],["。"],["“"],["子欲养而亲不待","zi yù yǎng ér qīn bù dài","con muốn phụng dưỡng mà cha mẹ chẳng đợi"],["”"],["，"],["这","zhè","này"],["成","chéng","thành"],["了","le","rồi (trợ từ)"],["我","wǒ","tôi"],["心中","xīnzhōng","trong lòng"],["永远","yǒngyuǎn","mãi mãi"],["的","de","của (trợ từ)"],["遗憾","yíhàn","Đáng tiếc, hối tiếc"],["、"],["永远的痛","yǒngyuǎndetòng","nỗi đau mãi mãi"],["。"]]
    },
    {
     "zh": "第二年夏天，我便带母亲去了昆明。母亲第一次坐了飞机，第一次在儿子的陪伴下，去了很远的地方。那些日子，我陪着母亲在昆明周围旅行，去看石林、民族园、世博园……母亲其实并不在乎看了什么，也并不一定能喜欢多少风景，在她的眼里，风景也许并不重要，重要的是有儿子陪伴着。那段日子，母亲一定很开心，我也很开心。",
     "vi": "Mùa hè năm sau, tôi liền đưa mẹ đi Côn Minh. Mẹ lần đầu tiên đi máy bay, lần đầu tiên có con trai đi cùng, đến một nơi rất xa. Những ngày đó, tôi cùng mẹ du lịch quanh Côn Minh, đi xem Thạch Lâm, Công viên Dân tộc, Công viên Triển lãm Thế giới... Thật ra mẹ không để tâm đã xem những gì, cũng chưa chắc đã thích bao nhiêu cảnh đẹp, trong mắt mẹ, phong cảnh có lẽ không quan trọng, quan trọng là có con trai ở bên. Những ngày đó, mẹ chắc chắn rất vui, tôi cũng rất vui.",
     "tokens": [["第二年","dìèrnián","năm sau"],["夏天","xiàtiān","mùa hè"],["，"],["我","wǒ","tôi"],["便","biàn","Thì, liền, bèn"],["带","dài","mang, dẫn"],["母亲","mǔqīn","mẹ"],["去","qù","đi"],["了","le","rồi (trợ từ)"],["昆明","kūnmíng","Côn Minh"],["。"],["母亲","mǔqīn","mẹ"],["第一次","dìyīcì","lần đầu tiên"],["坐","zuò","ngồi; đi (xe)"],["了","le","rồi (trợ từ)"],["飞机","fēijī","máy bay"],["，"],["第一次","dìyīcì","lần đầu tiên"],["在","zài","ở, đang"],["儿子","érzi","con trai"],["的","de","của (trợ từ)"],["陪伴","péibàn","Đồng hành, bên cạnh"],["下","xià","dưới; xuống"],["，"],["去","qù","đi"],["了","le","rồi (trợ từ)"],["很","hěn","rất"],["远","yuǎn","xa"],["的","de","của (trợ từ)"],["地方","dìfāng","nơi, chỗ"],["。"],["那些","nàxiē","những ... đó"],["日子","rìzi","ngày tháng, cuộc sống"],["，"],["我","wǒ","tôi"],["陪","péi","đi cùng"],["着","zhe","đang (trợ từ)"],["母亲","mǔqīn","mẹ"],["在","zài","ở, đang"],["昆明","kūnmíng","Côn Minh"],["周围","zhōuwéi","xung quanh"],["旅行","lǚxíng","du lịch"],["，"],["去","qù","đi"],["看","kàn","xem, nhìn"],["石林","shílín","Thạch Lâm"],["、"],["民族园","mínzúyuán","Công viên Dân tộc"],["、"],["世博园","shìbóyuán","Công viên Triển lãm Thế giới"],["…"],["…"],["母亲","mǔqīn","mẹ"],["其实","qíshí","thực ra"],["并","bìng","lại (nhấn mạnh phủ định); và"],["不","bù","không"],["在乎","zàihu","Để ý, quan tâm"],["看","kàn","xem, nhìn"],["了","le","rồi (trợ từ)"],["什么","shénme","cái gì"],["，"],["也","yě","cũng"],["并不一定","bìngbùyídìng","chưa chắc"],["能","néng","có thể"],["喜欢","xǐhuān","thích"],["多少","duōshǎo","bao nhiêu"],["风景","fēngjǐng","phong cảnh"],["，"],["在","zài","ở, đang"],["她","tā","cô ấy, bà ấy"],["的","de","của (trợ từ)"],["眼里","yǎnlǐ","trong mắt"],["，"],["风景","fēngjǐng","phong cảnh"],["也许","yěxǔ","có lẽ"],["并","bìng","lại (nhấn mạnh phủ định); và"],["不","bù","không"],["重要","zhòngyào","quan trọng"],["，"],["重要","zhòngyào","quan trọng"],["的","de","của (trợ từ)"],["是","shì","là"],["有","yǒu","có"],["儿子","érzi","con trai"],["陪伴","péibàn","Đồng hành, bên cạnh"],["着","zhe","đang (trợ từ)"],["。"],["那段","nàduàn","quãng (thời gian) đó"],["日子","rìzi","ngày tháng, cuộc sống"],["，"],["母亲","mǔqīn","mẹ"],["一定","yídìng","nhất định, chắc chắn"],["很","hěn","rất"],["开心","kāixīn","vui vẻ"],["，"],["我","wǒ","tôi"],["也","yě","cũng"],["很","hěn","rất"],["开心","kāixīn","vui vẻ"],["。"]]
    },
    {
     "zh": "带父母去旅行吧，在他们还健康的时候。对老年人来说，时间不多了，病痛随时会到来，不要等待了。",
     "vi": "Hãy đưa bố mẹ đi du lịch, khi họ vẫn còn khỏe mạnh. Đối với người già, thời gian không còn nhiều nữa, bệnh tật có thể đến bất cứ lúc nào, đừng chờ đợi nữa.",
     "tokens": [["带","dài","mang, dẫn"],["父母","fùmǔ","bố mẹ"],["去","qù","đi"],["旅行","lǚxíng","du lịch"],["吧","ba","nhé, đi (trợ từ)"],["，"],["在","zài","ở, đang"],["他们","tāmen","họ"],["还","hái","còn, vẫn"],["健康","jiànkāng","khỏe mạnh"],["的","de","của (trợ từ)"],["时候","shíhòu","lúc, khi"],["。"],["对","duì","đối với; đúng"],["老年人","lǎoniánrén","người già"],["来说","láishuō","mà nói"],["，"],["时间","shíjiān","thời gian"],["不","bù","không"],["多","duō","nhiều; hơn"],["了","le","rồi (trợ từ)"],["，"],["病痛","bìngtòng","bệnh tật"],["随时","suíshí","bất cứ lúc nào"],["会","huì","sẽ; biết"],["到来","dàolái","đến"],["，"],["不要","búyào","đừng; không cần"],["等待","děngdài","chờ đợi"],["了","le","rồi (trợ từ)"],["。"]]
    },
    {
     "zh": "带父母去旅行吧，其实他们想要的，不一定是风景，只要孩子心中对他们有一点爱心，他们会格外高兴的。",
     "vi": "Hãy đưa bố mẹ đi du lịch, thật ra điều họ muốn chưa chắc là phong cảnh, chỉ cần trong lòng con cái có chút tình yêu thương dành cho họ, họ sẽ vui mừng vô cùng.",
     "tokens": [["带","dài","mang, dẫn"],["父母","fùmǔ","bố mẹ"],["去","qù","đi"],["旅行","lǚxíng","du lịch"],["吧","ba","nhé, đi (trợ từ)"],["，"],["其实","qíshí","thực ra"],["他们","tāmen","họ"],["想要","xiǎngyào","muốn"],["的","de","của (trợ từ)"],["，"],["不","bù","không"],["一定","yídìng","nhất định, chắc chắn"],["是","shì","là"],["风景","fēngjǐng","phong cảnh"],["，"],["只要","zhǐyào","chỉ cần"],["孩子","háizi","đứa trẻ, con"],["心中","xīnzhōng","trong lòng"],["对","duì","đối với; đúng"],["他们","tāmen","họ"],["有","yǒu","có"],["一点","yìdiǎn","một chút"],["爱心","àixīn","tình yêu thương"],["，"],["他们","tāmen","họ"],["会","huì","sẽ; biết"],["格外","géwài","đặc biệt, vô cùng"],["高兴","gāoxìng","vui"],["的","de","của (trợ từ)"],["。"]]
    },
    {
     "zh": "带父母去旅行吧，那是孩子的责任，也是人生最大的幸福。",
     "vi": "Hãy đưa bố mẹ đi du lịch, đó là trách nhiệm của con cái, cũng là hạnh phúc lớn nhất của đời người.",
     "tokens": [["带","dài","mang, dẫn"],["父母","fùmǔ","bố mẹ"],["去","qù","đi"],["旅行","lǚxíng","du lịch"],["吧","ba","nhé, đi (trợ từ)"],["，"],["那","nà","kia, đó"],["是","shì","là"],["孩子","háizi","đứa trẻ, con"],["的","de","của (trợ từ)"],["责任","zérèn","trách nhiệm"],["，"],["也","yě","cũng"],["是","shì","là"],["人生","rénshēng","đời người"],["最大","zuìdà","lớn nhất"],["的","de","của (trợ từ)"],["幸福","xìngfú","hạnh phúc"],["。"]]
    }
   ],
   "questions": [
    {
     "q": "作者心中永远的遗憾是什么？",
     "options": ["没有考上大学","没来得及带父亲去旅行，父亲就去世了","没有去过北京","没有坐过飞机"],
     "answer": 1,
     "explain": "Tác giả chưa kịp đưa bố đi du lịch thì bố đã qua đời: 子欲养而亲不待."
    },
    {
     "q": "在昆明旅行时，母亲最在乎的是什么？",
     "options": ["看了很多风景","坐飞机","有儿子陪伴着","买了很多东西"],
     "answer": 2,
     "explain": "Trong mắt mẹ, phong cảnh không quan trọng, quan trọng là có con trai ở bên."
    },
    {
     "q": "作者为什么说要在父母还健康的时候带他们去旅行？",
     "options": ["因为那时候机票便宜","因为老年人时间不多了，病痛随时会到来","因为父母喜欢运动","因为孩子没有时间"],
     "answer": 1,
     "explain": "Với người già, thời gian không còn nhiều, bệnh tật có thể đến bất cứ lúc nào."
    }
   ],
   "fills": [{"sentence":"他自己去过北京多次，这次是_______带父母去的。","answer":"专门","options":["便","遗憾","在乎","专门"]},{"sentence":"第二年夏天，我_______带母亲去了昆明。","answer":"便","options":["专门","在乎","遗憾","便"]},{"sentence":"“子欲养而亲不待”，这成了我心中永远的_______、永远的痛。","answer":"遗憾","options":["在乎","遗憾","陪伴","专门"]},{"sentence":"母亲第一次坐了飞机，第一次在儿子的_______下，去了很远的地方。","answer":"陪伴","options":["便","陪伴","在乎","专门"]}]
  },
  {
   "id": "u2t3",
   "unit": 2,
   "no": 3,
   "titleZh": "并非童话",
   "titleVi": "Không phải truyện cổ tích",
   "note": "",
   "vocab": [
    {
     "hanzi": "皱",
     "pinyin": "zhòu",
     "pos": "Động từ",
     "meaning": "Cau, nhăn",
     "exZh": "皱了皱眉头",
     "exVi": "Cau cau mày"
    },
    {
     "hanzi": "眉头",
     "pinyin": "méitóu",
     "pos": "Danh từ",
     "meaning": "Chân mày",
     "exZh": "皱眉头",
     "exVi": "Cau mày"
    },
    {
     "hanzi": "招",
     "pinyin": "zhāo",
     "pos": "Danh từ",
     "meaning": "Chiêu thức, ngón đòn",
     "exZh": "第二招",
     "exVi": "Chiêu thứ hai"
    },
    {
     "hanzi": "愣",
     "pinyin": "lèng",
     "pos": "Động từ",
     "meaning": "Sững sờ, ngẩn người",
     "exZh": "大灰狼愣了一下",
     "exVi": "Sói Xám sững người một lúc"
    }
   ],
   "grammar": [
    {
     "name": "Nếu như...",
     "struct": "要是······ / 如果······",
     "explain": "Biểu thị giả thiết. 要是 thiên về văn nói hơn 如果.",
     "exZh": "要是它找来肥的，你就说你要瘦的。",
     "exVi": "Nếu nó mang thịt mỡ đến, ngươi nói ngươi muốn thịt nạc."
    }
   ],
   "text": [
    {
     "zh": "小白兔一大早高高兴兴地出门了。走着走着，遇到了大灰狼，大灰狼一把抓住小白兔，“啪啪！”抽了它两个大嘴巴，然后说：“我叫你不戴帽子！”",
     "vi": "Sáng sớm, Thỏ Trắng vui vẻ ra khỏi nhà. Đi mãi đi mãi thì gặp Sói Xám, Sói Xám tóm lấy Thỏ Trắng, “Bốp bốp!” tát nó hai cái rồi nói: “Ai bảo mày không đội mũ!”",
     "tokens": [["小白兔","xiǎobáitù","Thỏ Trắng"],["一大早","yīdàzǎo","sáng sớm tinh mơ"],["高高兴兴","gāogāoxìngxìng","vui vui vẻ vẻ"],["地","dì","(trợ từ trạng ngữ)"],["出门","chūmén","ra khỏi nhà"],["了","le","rồi (trợ từ)"],["。"],["走","zǒu","đi; đi (cờ)"],["着","zhe","đang (trợ từ)"],["走","zǒu","đi; đi (cờ)"],["着","zhe","đang (trợ từ)"],["，"],["遇到","yùdào","gặp phải"],["了","le","rồi (trợ từ)"],["大灰狼","dàhuīláng","Sói Xám"],["，"],["大灰狼","dàhuīláng","Sói Xám"],["一把","yībǎ","một cái (nắm, tóm)"],["抓住","zhuāzhù","tóm lấy"],["小白兔","xiǎobáitù","Thỏ Trắng"],["，"],["“"],["啪啪","pāpā","bốp bốp"],["！"],["”"],["抽","chōu","tát, quất"],["了","le","rồi (trợ từ)"],["它","tā","nó"],["两个","liǎnggè","hai (cái)"],["大嘴巴","dàzuǐbā","cái tát"],["，"],["然后","ránhòu","sau đó"],["说","shuō","nói"],["："],["“"],["我","wǒ","tôi"],["叫","jiào","gọi; bảo"],["你","nǐ","bạn"],["不","bù","không"],["戴帽子","dàimàozi","đội mũ"],["！"],["”"]]
    },
    {
     "zh": "第二天，小白兔戴上帽子又出门了，走着走着，又遇见了大灰狼，大灰狼又一把抓过小白兔，“啪啪！”抽了它两个大嘴巴，然后说：“我叫你戴帽子!”",
     "vi": "Ngày hôm sau, Thỏ Trắng đội mũ rồi lại ra khỏi nhà, đi mãi đi mãi, lại gặp Sói Xám, Sói Xám lại tóm lấy Thỏ Trắng, “Bốp bốp!” tát nó hai cái rồi nói: “Ai bảo mày đội mũ!”",
     "tokens": [["第二天","dìèrtiān","ngày hôm sau"],["，"],["小白兔","xiǎobáitù","Thỏ Trắng"],["戴","dài","đội, đeo"],["上","shàng","trên; lên"],["帽子","màozi","mũ"],["又","yòu","lại"],["出门","chūmén","ra khỏi nhà"],["了","le","rồi (trợ từ)"],["，"],["走","zǒu","đi; đi (cờ)"],["着","zhe","đang (trợ từ)"],["走","zǒu","đi; đi (cờ)"],["着","zhe","đang (trợ từ)"],["，"],["又","yòu","lại"],["遇见","yùjiàn","gặp"],["了","le","rồi (trợ từ)"],["大灰狼","dàhuīláng","Sói Xám"],["，"],["大灰狼","dàhuīláng","Sói Xám"],["又","yòu","lại"],["一把抓","yībǎzhuā","tóm gọn"],["过","guò","qua; sống, đón"],["小白兔","xiǎobáitù","Thỏ Trắng"],["，"],["“"],["啪啪","pāpā","bốp bốp"],["！"],["”"],["抽","chōu","tát, quất"],["了","le","rồi (trợ từ)"],["它","tā","nó"],["两个","liǎnggè","hai (cái)"],["大嘴巴","dàzuǐbā","cái tát"],["，"],["然后","ránhòu","sau đó"],["说","shuō","nói"],["："],["“"],["我","wǒ","tôi"],["叫","jiào","gọi; bảo"],["你","nǐ","bạn"],["戴帽子","dàimàozi","đội mũ"],["!"],["”"]]
    },
    {
     "zh": "小白兔非常生气，就跑到老虎那里去，老虎听了小白兔的话，说，你放心好了，我会帮助你的。",
     "vi": "Thỏ Trắng vô cùng tức giận, liền chạy đến chỗ Hổ. Hổ nghe Thỏ Trắng kể xong thì nói: “Cứ yên tâm, ta sẽ giúp ngươi.”",
     "tokens": [["小白兔","xiǎobáitù","Thỏ Trắng"],["非常","fēicháng","vô cùng"],["生气","shēngqì","tức giận"],["，"],["就","jiù","thì, liền"],["跑","pǎo","chạy"],["到","dào","đến"],["老虎","lǎohǔ","con hổ"],["那里","nàlǐ","ở đó"],["去","qù","đi"],["，"],["老虎","lǎohǔ","con hổ"],["听","tīng","nghe"],["了","le","rồi (trợ từ)"],["小白兔","xiǎobáitù","Thỏ Trắng"],["的话","dehuà","nếu ... thì"],["，"],["说","shuō","nói"],["，"],["你","nǐ","bạn"],["放心好了","fàngxīnhǎole","cứ yên tâm"],["，"],["我会","wǒhuì","tôi sẽ"],["帮助","bāngzhù","giúp đỡ"],["你","nǐ","bạn"],["的","de","của (trợ từ)"],["。"]]
    },
    {
     "zh": "老虎找来了大灰狼，对他说：“老狼，咱俩是多年的好朋友了，今天上午小白兔来，说你老是欺负它，你看你能不能换个理由打它，比如你可以说，兔子，你去给我找块肉来！要是它找来肥的，你就说你要瘦的，要是它找来瘦的，你就说你要肥的，这样你不就又可以打它了吗？",
     "vi": "Hổ gọi Sói Xám đến, nói với nó: “Sói già, hai ta là bạn tốt nhiều năm rồi, sáng nay Thỏ Trắng đến, nói ngươi cứ bắt nạt nó, ngươi xem có thể đổi lý do khác để đánh nó không. Ví dụ ngươi có thể nói: Thỏ kia, đi tìm cho ta miếng thịt! Nếu nó mang thịt mỡ đến, ngươi nói ngươi muốn thịt nạc; nếu nó mang thịt nạc đến, ngươi nói ngươi muốn thịt mỡ, như vậy chẳng phải ngươi lại có thể đánh nó sao?",
     "tokens": [["老虎","lǎohǔ","con hổ"],["找","zhǎo","tìm"],["来","lái","đến"],["了","le","rồi (trợ từ)"],["大灰狼","dàhuīláng","Sói Xám"],["，"],["对","duì","đối với; đúng"],["他","tā","anh ấy, ông ấy"],["说","shuō","nói"],["："],["“"],["老狼","lǎoláng","sói già"],["，"],["咱俩","zánliǎ","hai ta"],["是","shì","là"],["多年","duōnián","nhiều năm"],["的","de","của (trợ từ)"],["好","hǎo","tốt; rất"],["朋友","péngyǒu","bạn bè"],["了","le","rồi (trợ từ)"],["，"],["今天上午","jīntiānshàngwǔ","sáng nay"],["小白兔","xiǎobáitù","Thỏ Trắng"],["来","lái","đến"],["，"],["说","shuō","nói"],["你老","nǐlǎo","ngươi cứ (luôn)"],["是","shì","là"],["欺负","qīfù","bắt nạt"],["它","tā","nó"],["，"],["你","nǐ","bạn"],["看","kàn","xem, nhìn"],["你","nǐ","bạn"],["能","néng","có thể"],["不能","bùnéng","không thể"],["换","huàn","đổi"],["个","gè","cái (lượng từ)"],["理由","lǐyóu","lý do"],["打","dǎ","đánh; gọi (điện)"],["它","tā","nó"],["，"],["比如","bǐrú","ví dụ"],["你","nǐ","bạn"],["可以","kěyǐ","có thể"],["说","shuō","nói"],["，"],["兔子","tùzi","con thỏ"],["，"],["你","nǐ","bạn"],["去","qù","đi"],["给","gěi","cho"],["我","wǒ","tôi"],["找","zhǎo","tìm"],["块","kuài","tảng, miếng"],["肉","ròu","thịt"],["来","lái","đến"],["！"],["要是","yàoshì","nếu"],["它","tā","nó"],["找","zhǎo","tìm"],["来","lái","đến"],["肥","féi","mỡ, béo"],["的","de","của (trợ từ)"],["，"],["你","nǐ","bạn"],["就","jiù","thì, liền"],["说","shuō","nói"],["你","nǐ","bạn"],["要","yào","muốn; phải"],["瘦","shòu","gầy; nạc"],["的","de","của (trợ từ)"],["，"],["要是","yàoshì","nếu"],["它","tā","nó"],["找","zhǎo","tìm"],["来","lái","đến"],["瘦","shòu","gầy; nạc"],["的","de","của (trợ từ)"],["，"],["你","nǐ","bạn"],["就","jiù","thì, liền"],["说","shuō","nói"],["你","nǐ","bạn"],["要","yào","muốn; phải"],["肥","féi","mỡ, béo"],["的","de","của (trợ từ)"],["，"],["这样","zhèyàng","như vậy"],["你","nǐ","bạn"],["不","bù","không"],["就","jiù","thì, liền"],["又","yòu","lại"],["可以","kěyǐ","có thể"],["打","dǎ","đánh; gọi (điện)"],["它","tā","nó"],["了","le","rồi (trợ từ)"],["吗","ma","không? (trợ từ hỏi)"],["？"]]
    },
    {
     "zh": "要不你就让它帮你找母兔子，它要找了胖的，你就说你喜欢瘦的，它要找了瘦的，你就说你喜欢胖的！再不然，你就让它替你考文凭，它考TOEFL，你就说你要HSK，它考HSK，你就说你要TOEFL。",
     "vi": "Hoặc ngươi bảo nó tìm giúp ngươi một cô thỏ, nó tìm con béo, ngươi nói ngươi thích con gầy; nó tìm con gầy, ngươi nói ngươi thích con béo! Nếu không nữa thì ngươi bảo nó thi lấy bằng thay ngươi, nó thi TOEFL, ngươi nói ngươi cần HSK; nó thi HSK, ngươi nói ngươi cần TOEFL.”",
     "tokens": [["要","yào","muốn; phải"],["不","bù","không"],["你","nǐ","bạn"],["就让","jiùràng","thì để"],["它","tā","nó"],["帮","bāng","giúp"],["你","nǐ","bạn"],["找","zhǎo","tìm"],["母","mǔ","mẹ; mái (cái)"],["兔子","tùzi","con thỏ"],["，"],["它","tā","nó"],["要","yào","muốn; phải"],["找","zhǎo","tìm"],["了","le","rồi (trợ từ)"],["胖","pàng","béo"],["的","de","của (trợ từ)"],["，"],["你","nǐ","bạn"],["就","jiù","thì, liền"],["说","shuō","nói"],["你","nǐ","bạn"],["喜欢","xǐhuān","thích"],["瘦","shòu","gầy; nạc"],["的","de","của (trợ từ)"],["，"],["它","tā","nó"],["要","yào","muốn; phải"],["找","zhǎo","tìm"],["了","le","rồi (trợ từ)"],["瘦","shòu","gầy; nạc"],["的","de","của (trợ từ)"],["，"],["你","nǐ","bạn"],["就","jiù","thì, liền"],["说","shuō","nói"],["你","nǐ","bạn"],["喜欢","xǐhuān","thích"],["胖","pàng","béo"],["的","de","của (trợ từ)"],["！"],["再不然","zàibùrán","nếu không nữa thì"],["，"],["你","nǐ","bạn"],["就让","jiùràng","thì để"],["它","tā","nó"],["替","tì","thay cho"],["你","nǐ","bạn"],["考","kǎo","thi"],["文凭","wénpíng","bằng cấp"],["，"],["它","tā","nó"],["考","kǎo","thi"],["TOEFL"],["，"],["你","nǐ","bạn"],["就","jiù","thì, liền"],["说","shuō","nói"],["你","nǐ","bạn"],["要","yào","muốn; phải"],["HSK"],["，"],["它","tā","nó"],["考","kǎo","thi"],["HSK"],["，"],["你","nǐ","bạn"],["就","jiù","thì, liền"],["说","shuō","nói"],["你","nǐ","bạn"],["要","yào","muốn; phải"],["TOEFL"],["。"]]
    },
    {
     "zh": "老狼听了以后十分高兴，夸老虎聪明。可是他们的话被在房子外面种菜的小白兔听见了，小白兔快要气死了！",
     "vi": "Sói già nghe xong vô cùng vui mừng, khen Hổ thông minh. Nhưng cuộc nói chuyện của chúng đã bị Thỏ Trắng đang trồng rau bên ngoài nhà nghe thấy, Thỏ Trắng tức gần chết!",
     "tokens": [["老狼","lǎoláng","sói già"],["听","tīng","nghe"],["了","le","rồi (trợ từ)"],["以后","yǐhòu","sau này, sau khi"],["十分高兴","shífēngāoxìng","vô cùng vui mừng"],["，"],["夸","kuā","khen"],["老虎","lǎohǔ","con hổ"],["聪明","cōngmíng","thông minh"],["。"],["可是","kěshì","nhưng"],["他们","tāmen","họ"],["的话","dehuà","nếu ... thì"],["被","bèi","bị, được"],["在","zài","ở, đang"],["房子","fángzi","ngôi nhà"],["外面","wàimiàn","bên ngoài"],["种菜","zhòngcài","trồng rau"],["的","de","của (trợ từ)"],["小白兔","xiǎobáitù","Thỏ Trắng"],["听见","tīngjiàn","nghe thấy"],["了","le","rồi (trợ từ)"],["，"],["小白兔","xiǎobáitù","Thỏ Trắng"],["快要","kuàiyào","sắp"],["气死","qìsǐ","tức chết"],["了","le","rồi (trợ từ)"],["！"]]
    },
    {
     "zh": "第三天，小白兔又出门了，果然，在半路上遇见了大灰狼，大灰狼说：“兔子，你去给我找块肉来！”小白兔说：“你要肥的还是瘦的？”大灰狼皱了皱眉头，心想，还好还有第二招：“算了算了，不要肉了，你去给我找个母兔子来。”小白兔说：“你喜欢胖的，还是喜欢瘦的？”",
     "vi": "Ngày thứ ba, Thỏ Trắng lại ra khỏi nhà, quả nhiên giữa đường gặp Sói Xám. Sói Xám nói: “Thỏ kia, đi tìm cho ta miếng thịt!” Thỏ Trắng nói: “Ông muốn thịt mỡ hay thịt nạc?” Sói Xám cau mày, nghĩ bụng: may mà còn chiêu thứ hai: “Thôi thôi, không cần thịt nữa, mày đi tìm cho tao một cô thỏ.” Thỏ Trắng nói: “Ông thích béo hay thích gầy?”",
     "tokens": [["第三天","dìsāntiān","ngày thứ ba"],["，"],["小白兔","xiǎobáitù","Thỏ Trắng"],["又","yòu","lại"],["出门","chūmén","ra khỏi nhà"],["了","le","rồi (trợ từ)"],["，"],["果然","guǒrán","quả nhiên"],["，"],["在","zài","ở, đang"],["半路上","bànlùshàng","giữa đường"],["遇见","yùjiàn","gặp"],["了","le","rồi (trợ từ)"],["大灰狼","dàhuīláng","Sói Xám"],["，"],["大灰狼","dàhuīláng","Sói Xám"],["说","shuō","nói"],["："],["“"],["兔子","tùzi","con thỏ"],["，"],["你","nǐ","bạn"],["去","qù","đi"],["给","gěi","cho"],["我","wǒ","tôi"],["找","zhǎo","tìm"],["块","kuài","tảng, miếng"],["肉","ròu","thịt"],["来","lái","đến"],["！"],["”"],["小白兔","xiǎobáitù","Thỏ Trắng"],["说","shuō","nói"],["："],["“"],["你","nǐ","bạn"],["要","yào","muốn; phải"],["肥","féi","mỡ, béo"],["的","de","của (trợ từ)"],["还是","háishì","hay là; vẫn"],["瘦","shòu","gầy; nạc"],["的","de","của (trợ từ)"],["？"],["”"],["大灰狼","dàhuīláng","Sói Xám"],["皱","zhòu","Cau, nhăn"],["了","le","rồi (trợ từ)"],["皱","zhòu","Cau, nhăn"],["眉头","méitóu","Chân mày"],["，"],["心想","xīnxiǎng","nghĩ bụng"],["，"],["还好","háihǎo","may mà"],["还有","háiyǒu","còn có"],["第二招","dìèrzhāo","chiêu thứ hai"],["："],["“"],["算了算","suànlesuàn","thôi bỏ đi"],["了","le","rồi (trợ từ)"],["，"],["不要","búyào","đừng; không cần"],["肉","ròu","thịt"],["了","le","rồi (trợ từ)"],["，"],["你","nǐ","bạn"],["去","qù","đi"],["给","gěi","cho"],["我","wǒ","tôi"],["找","zhǎo","tìm"],["个","gè","cái (lượng từ)"],["母","mǔ","mẹ; mái (cái)"],["兔子","tùzi","con thỏ"],["来","lái","đến"],["。"],["”"],["小白兔","xiǎobáitù","Thỏ Trắng"],["说","shuō","nói"],["："],["“"],["你","nǐ","bạn"],["喜欢","xǐhuān","thích"],["胖","pàng","béo"],["的","de","của (trợ từ)"],["，"],["还是","háishì","hay là; vẫn"],["喜欢","xǐhuān","thích"],["瘦","shòu","gầy; nạc"],["的","de","của (trợ từ)"],["？"],["”"]]
    },
    {
     "zh": "大灰狼又皱了皱眉头，笑了笑，心想，还好还有第三招：“算了算了，不要兔子了，你去帮我考试去吧。”小白兔说：“你是要考TOEFL还是HSK?”",
     "vi": "Sói Xám lại cau mày, cười một cái, nghĩ bụng: may mà còn chiêu thứ ba: “Thôi thôi, không cần thỏ nữa, mày đi thi giúp tao.” Thỏ Trắng nói: “Ông muốn thi TOEFL hay HSK?”",
     "tokens": [["大灰狼","dàhuīláng","Sói Xám"],["又","yòu","lại"],["皱","zhòu","Cau, nhăn"],["了","le","rồi (trợ từ)"],["皱","zhòu","Cau, nhăn"],["眉头","méitóu","Chân mày"],["，"],["笑了笑","xiàolexiào","cười cười"],["，"],["心想","xīnxiǎng","nghĩ bụng"],["，"],["还好","háihǎo","may mà"],["还有","háiyǒu","còn có"],["第三招","dìsānzhāo","chiêu thứ ba"],["："],["“"],["算了算","suànlesuàn","thôi bỏ đi"],["了","le","rồi (trợ từ)"],["，"],["不要","búyào","đừng; không cần"],["兔子","tùzi","con thỏ"],["了","le","rồi (trợ từ)"],["，"],["你","nǐ","bạn"],["去","qù","đi"],["帮","bāng","giúp"],["我","wǒ","tôi"],["考试","kǎoshì","thi cử"],["去","qù","đi"],["吧","ba","nhé, đi (trợ từ)"],["。"],["”"],["小白兔","xiǎobáitù","Thỏ Trắng"],["说","shuō","nói"],["："],["“"],["你","nǐ","bạn"],["是","shì","là"],["要","yào","muốn; phải"],["考","kǎo","thi"],["TOEFL"],["还是","háishì","hay là; vẫn"],["HSK"],["?"],["”"]]
    },
    {
     "zh": "大灰狼愣了一下，“啪啪！”抽了兔子两个大嘴巴：“我叫你不戴帽子!”",
     "vi": "Sói Xám sững người một lúc, “Bốp bốp!” tát thỏ hai cái: “Ai bảo mày không đội mũ!”",
     "tokens": [["大灰狼","dàhuīláng","Sói Xám"],["愣","lèng","Sững sờ, ngẩn người"],["了","le","rồi (trợ từ)"],["一下","yīxià","một chút, một cái"],["，"],["“"],["啪啪","pāpā","bốp bốp"],["！"],["”"],["抽","chōu","tát, quất"],["了","le","rồi (trợ từ)"],["兔子","tùzi","con thỏ"],["两个","liǎnggè","hai (cái)"],["大嘴巴","dàzuǐbā","cái tát"],["："],["“"],["我","wǒ","tôi"],["叫","jiào","gọi; bảo"],["你","nǐ","bạn"],["不","bù","không"],["戴帽子","dàimàozi","đội mũ"],["!"],["”"]]
    }
   ],
   "questions": [
    {
     "q": "第一天，大灰狼为什么打小白兔？",
     "options": ["因为小白兔戴了帽子","因为小白兔没戴帽子","因为小白兔没找到肉","因为小白兔考试不好"],
     "answer": 1,
     "explain": "Ngày đầu Sói nói: 我叫你不戴帽子! (Ai bảo mày không đội mũ)."
    },
    {
     "q": "小白兔是怎么知道老虎和大灰狼的计划的？",
     "options": ["老虎告诉它的","在房子外面种菜时听见的","大灰狼告诉它的","看报纸知道的"],
     "answer": 1,
     "explain": "Cuộc nói chuyện bị Thỏ Trắng đang trồng rau bên ngoài nhà nghe thấy."
    },
    {
     "q": "这个故事最后说明了什么？",
     "options": ["大灰狼很聪明","想欺负别人的人总能找到理由","小白兔应该戴帽子","老虎是小白兔的好朋友"],
     "answer": 1,
     "explain": "Dù Thỏ đã chuẩn bị sẵn, Sói vẫn quay lại lý do ban đầu để đánh — kẻ muốn bắt nạt luôn tìm được cớ. Vì thế tên bài là “Không phải truyện cổ tích”."
    }
   ],
   "fills": [{"sentence":"”大灰狼_______了皱眉头，心想，还好还有第二招：“算了算了，不要肉了，你去给我找个母兔子来。","answer":"皱","options":["有益","皱","愣","考官"]},{"sentence":"”大灰狼皱了皱_______，心想，还好还有第二招：“算了算了，不要肉了，你去给我找个母兔子来。","answer":"眉头","options":["肩膀","在乎","愣","眉头"]},{"sentence":"”大灰狼皱了皱眉头，心想，还好还有第二_______：“算了算了，不要肉了，你去给我找个母兔子来。","answer":"招","options":["新鲜","招","愣","有益"]},{"sentence":"”大灰狼_______了一下，“啪啪！","answer":"愣","options":["招","皱","愣","眉头"]}]
  },
  {
   "id": "u2t4",
   "unit": 2,
   "no": 4,
   "titleZh": "登山去香山",
   "titleVi": "Leo núi Hương Sơn",
   "note": "",
   "vocab": [
    {
     "hanzi": "野外活动",
     "pinyin": "yěwài huódòng",
     "pos": "Cụm từ",
     "meaning": "Hoạt động dã ngoại",
     "exZh": "适合野外活动",
     "exVi": "Thích hợp cho hoạt động ngoài trời"
    },
    {
     "hanzi": "有益",
     "pinyin": "yǒuyì",
     "pos": "Tính từ",
     "meaning": "Có ích, có lợi",
     "exZh": "有益身心健康",
     "exVi": "Có lợi cho sức khỏe thể chất và tinh thần"
    },
    {
     "hanzi": "扶手",
     "pinyin": "fúshou",
     "pos": "Danh từ",
     "meaning": "Tay vịn, lan can",
     "exZh": "有扶手",
     "exVi": "Có tay vịn"
    },
    {
     "hanzi": "新鲜",
     "pinyin": "xīnxiān",
     "pos": "Tính từ",
     "meaning": "Tươi mới, trong lành",
     "exZh": "空气新鲜",
     "exVi": "Không khí trong lành"
    },
    {
     "hanzi": "增减",
     "pinyin": "zēngjiǎn",
     "pos": "Động từ",
     "meaning": "Tăng giảm, thêm bớt",
     "exZh": "适当增减衣服",
     "exVi": "Thêm bớt quần áo cho phù hợp"
    }
   ],
   "grammar": [
    {
     "name": "Thanh thản, lên (xu hướng)",
     "struct": "······起来",
     "explain": "Bổ ngữ xu hướng mở rộng biểu thị sự bắt đầu và tiếp diễn.",
     "exZh": "天气也慢慢变得凉快起来。",
     "exVi": "Thời tiết cũng dần trở nên mát mẻ."
    }
   ],
   "text": [
    {
     "zh": "进入秋天，阳光充足、鲜花开放，天气也慢慢变得凉快起来。宜人的气候最适合人们到野外活动，登山就是其中一项有益身心健康的运动，不但锻炼了身体，而且放松了心情，真是一件好事情。",
     "vi": "Bước vào mùa thu, nắng chan hòa, hoa tươi nở rộ, thời tiết cũng dần trở nên mát mẻ. Khí hậu dễ chịu thích hợp nhất để mọi người ra ngoài trời hoạt động, leo núi chính là một trong những môn vận động có lợi cho sức khỏe thể chất và tinh thần, không những rèn luyện thân thể mà còn thư giãn tâm trạng, thật là một việc tốt.",
     "tokens": [["进入","jìnrù","bước vào"],["秋天","qiūtiān","mùa thu"],["，"],["阳光充足","yángguāngchōngzú","nắng chan hòa"],["、"],["鲜花","xiānhuā","hoa tươi"],["开放","kāifàng","nở; mở cửa"],["，"],["天气","tiānqì","thời tiết"],["也","yě","cũng"],["慢慢","mànmàn","từ từ"],["变得","biàndé","trở nên"],["凉快","liángkuài","mát mẻ"],["起来","qǐlái","lên (xu hướng)"],["。"],["宜人","yírén","dễ chịu"],["的","de","của (trợ từ)"],["气候","qìhòu","khí hậu"],["最","zuì","nhất"],["适合","shìhé","thích hợp"],["人们","rénmen","mọi người"],["到","dào","đến"],["野外活动","yěwài huódòng","Hoạt động dã ngoại"],["，"],["登山","dēngshān","leo núi"],["就是","jiùshì","chính là"],["其中","qízhōng","trong đó"],["一项","yīxiàng","một hạng mục, một môn"],["有益","yǒuyì","Có ích, có lợi"],["身心健康","shēnxīnjiànkāng","sức khỏe thể chất và tinh thần"],["的","de","của (trợ từ)"],["运动","yùndòng","vận động"],["，"],["不但","bùdàn","không những"],["锻炼","duànliàn","rèn luyện"],["了","le","rồi (trợ từ)"],["身体","shēntǐ","cơ thể"],["，"],["而且","érqiě","hơn nữa"],["放松","fàngsōng","thư giãn"],["了","le","rồi (trợ từ)"],["心情","xīnqíng","tâm trạng"],["，"],["真是","zhēnshì","thật là"],["一件","yījiàn","một (việc, chiếc)"],["好","hǎo","tốt; rất"],["事情","shìqíng","sự việc, chuyện"],["。"]]
    },
    {
     "zh": "北京西边的香山，是一座名山，最高的地方是香炉峰，有557米高，有很多条山路到达山顶。一步一个台阶，有的地方还有扶手，大人孩子上山、下山时都很安全。",
     "vi": "Hương Sơn ở phía tây Bắc Kinh là một ngọn núi nổi tiếng, nơi cao nhất là đỉnh Hương Lô, cao 557 mét, có rất nhiều đường núi lên tới đỉnh. Mỗi bước là một bậc thang, có chỗ còn có tay vịn, người lớn và trẻ em lên núi, xuống núi đều rất an toàn.",
     "tokens": [["北京","běijīng","Bắc Kinh"],["西边","xībiān","phía tây"],["的","de","của (trợ từ)"],["香山","xiāngshān","Hương Sơn"],["，"],["是","shì","là"],["一座","yīzuò","một ngọn, một tòa"],["名山","míngshān","núi nổi tiếng"],["，"],["最高","zuìgāo","cao nhất"],["的","de","của (trợ từ)"],["地方","dìfāng","nơi, chỗ"],["是","shì","là"],["香炉峰","xiānglúfēng","đỉnh Hương Lô"],["，"],["有","yǒu","có"],["557"],["米","mǐ","mét"],["高","gāo","cao"],["，"],["有","yǒu","có"],["很多","hěnduō","rất nhiều"],["条","tiáo","tuyến, con"],["山路","shānlù","đường núi"],["到达","dàodá","đến nơi"],["山顶","shāndǐng","đỉnh núi"],["。"],["一步","yībù","một bước"],["一个","yígè","một (cái, người)"],["台阶","táijiē","bậc thang"],["，"],["有","yǒu","có"],["的","de","của (trợ từ)"],["地方","dìfāng","nơi, chỗ"],["还有","háiyǒu","còn có"],["扶手","fúshou","Tay vịn, lan can"],["，"],["大人","dàrén","người lớn"],["孩子","háizi","đứa trẻ, con"],["上山","shàngshān","lên núi"],["、"],["下山","xiàshān","xuống núi"],["时","shí","lúc, khi"],["都","dōu","đều"],["很","hěn","rất"],["安全","ānquán","an toàn"],["。"]]
    },
    {
     "zh": "香山公园内有各种树木，绿树、花草成片。这里是北京空气最新鲜的地方之一，因此，每天有成千上万人到香山锻炼和游玩。",
     "vi": "Trong công viên Hương Sơn có đủ loại cây cối, cây xanh, hoa cỏ mọc thành từng mảng. Đây là một trong những nơi có không khí trong lành nhất Bắc Kinh, vì vậy mỗi ngày có hàng nghìn hàng vạn người đến Hương Sơn rèn luyện và vui chơi.",
     "tokens": [["香山","xiāngshān","Hương Sơn"],["公园","gōngyuán","công viên"],["内","nèi","bên trong"],["有","yǒu","có"],["各种","gèzhǒng","các loại"],["树木","shùmù","cây cối"],["，"],["绿树","lǜshù","cây xanh"],["、"],["花草","huācǎo","hoa cỏ"],["成片","chéngpiàn","thành từng mảng"],["。"],["这里","zhèlǐ","ở đây"],["是","shì","là"],["北京","běijīng","Bắc Kinh"],["空气","kōngqì","không khí"],["最","zuì","nhất"],["新鲜","xīnxiān","Tươi mới, trong lành"],["的","de","của (trợ từ)"],["地方","dìfāng","nơi, chỗ"],["之一","zhīyī","một trong"],["，"],["因此","yīncǐ","vì vậy"],["，"],["每天","měitiān","mỗi ngày"],["有","yǒu","có"],["成千上万","chéngqiānshàngwàn","hàng nghìn hàng vạn"],["人","rén","người"],["到","dào","đến"],["香山","xiāngshān","Hương Sơn"],["锻炼","duànliàn","rèn luyện"],["和","hé","và; hòa"],["游玩","yóuwán","vui chơi"],["。"]]
    },
    {
     "zh": "登山很容易，但是有以下几点需要注意：",
     "vi": "Leo núi rất dễ, nhưng có mấy điểm sau đây cần chú ý:",
     "tokens": [["登山","dēngshān","leo núi"],["很","hěn","rất"],["容易","róngyì","dễ"],["，"],["但是","dànshì","nhưng"],["有","yǒu","có"],["以下几点","yǐxiàjǐdiǎn","mấy điểm sau đây"],["需要","xūyào","cần"],["注意","zhùyì","chú ý"],["："]]
    },
    {
     "zh": "选择一双合适的运动鞋，走起路来更轻松一些；衣服应多穿几件，在登山过程中，根据气温变化和身体情况可适当增减。",
     "vi": "Chọn một đôi giày thể thao phù hợp, đi lại sẽ nhẹ nhàng hơn; nên mặc nhiều lớp áo, trong quá trình leo núi có thể thêm bớt cho phù hợp tùy theo sự thay đổi nhiệt độ và tình trạng cơ thể.",
     "tokens": [["选择","xuǎnzé","lựa chọn"],["一双","yīshuāng","một đôi"],["合适","héshì","phù hợp"],["的","de","của (trợ từ)"],["运动鞋","yùndòngxié","giày thể thao"],["，"],["走起路来","zǒuqǐlùlái","khi đi đường"],["更","gèng","càng, hơn"],["轻松","qīngsōng","nhẹ nhàng"],["一些","yīxiē","một số, một vài"],["；"],["衣服","yīfú","quần áo"],["应","yīng","nên"],["多","duō","nhiều; hơn"],["穿","chuān","mặc"],["几件","jǐjiàn","vài chiếc"],["，"],["在","zài","ở, đang"],["登山","dēngshān","leo núi"],["过程","guòchéng","quá trình"],["中","zhōng","trong, giữa"],["，"],["根据","gēnjù","căn cứ vào"],["气温","qìwēn","nhiệt độ"],["变化","biànhuà","thay đổi"],["和","hé","và; hòa"],["身体","shēntǐ","cơ thể"],["情况","qíngkuàng","tình hình"],["可","kě","có thể; nhưng"],["适当","shìdàng","phù hợp"],["增减","zēngjiǎn","Tăng giảm, thêm bớt"],["。"]]
    },
    {
     "zh": "登山的时间和运动速度也很重要，不要走得太急。登山过程中不要休息，感到累可以慢一点儿。",
     "vi": "Thời gian leo núi và tốc độ vận động cũng rất quan trọng, đừng đi quá vội. Trong quá trình leo núi đừng nghỉ, thấy mệt thì có thể đi chậm lại một chút.",
     "tokens": [["登山","dēngshān","leo núi"],["的","de","của (trợ từ)"],["时间","shíjiān","thời gian"],["和","hé","và; hòa"],["运动","yùndòng","vận động"],["速度","sùdù","tốc độ"],["也","yě","cũng"],["很","hěn","rất"],["重要","zhòngyào","quan trọng"],["，"],["不要","búyào","đừng; không cần"],["走","zǒu","đi; đi (cờ)"],["得","dé","được; (trợ từ bổ ngữ)"],["太","tài","quá"],["急","jí","sốt ruột, vội"],["。"],["登山","dēngshān","leo núi"],["过程","guòchéng","quá trình"],["中","zhōng","trong, giữa"],["不要","búyào","đừng; không cần"],["休息","xiūxī","nghỉ ngơi"],["，"],["感到","gǎndào","cảm thấy"],["累","lèi","mệt"],["可以","kěyǐ","có thể"],["慢","màn","chậm"],["一点儿","yìdiǎnér","một chút"],["。"]]
    },
    {
     "zh": "雨天不影响登山，空气格外新鲜，锻炼效果更好。但要注意安全，小心路滑。",
     "vi": "Trời mưa không ảnh hưởng đến việc leo núi, không khí đặc biệt trong lành, hiệu quả rèn luyện càng tốt. Nhưng phải chú ý an toàn, cẩn thận đường trơn.",
     "tokens": [["雨天","yǔtiān","ngày mưa"],["不","bù","không"],["影响","yǐngxiǎng","ảnh hưởng"],["登山","dēngshān","leo núi"],["，"],["空气","kōngqì","không khí"],["格外","géwài","đặc biệt, vô cùng"],["新鲜","xīnxiān","Tươi mới, trong lành"],["，"],["锻炼","duànliàn","rèn luyện"],["效果","xiàoguǒ","hiệu quả"],["更好","gènghǎo","tốt hơn"],["。"],["但","dàn","nhưng"],["要","yào","muốn; phải"],["注意安全","zhùyìānquán","chú ý an toàn"],["，"],["小心","xiǎoxīn","cẩn thận"],["路","lù","đường"],["滑","huá","trơn"],["。"]]
    },
    {
     "zh": "在登山前，对自己身体要了解。如有心、脑疾病时不要参加。老人登山，有伙伴更好，可以相互照顾。",
     "vi": "Trước khi leo núi phải hiểu rõ cơ thể mình. Nếu có bệnh tim, bệnh não thì đừng tham gia. Người già leo núi có bạn đồng hành thì tốt hơn, có thể chăm sóc lẫn nhau.",
     "tokens": [["在","zài","ở, đang"],["登山","dēngshān","leo núi"],["前","qián","trước"],["，"],["对","duì","đối với; đúng"],["自己","zìjǐ","bản thân"],["身体","shēntǐ","cơ thể"],["要","yào","muốn; phải"],["了解","liǎojiě","tìm hiểu, hiểu rõ"],["。"],["如","rú","như; nếu"],["有心","yǒuxīn","có lòng"],["、"],["脑","nǎo","não"],["疾病","jíbìng","bệnh tật"],["时","shí","lúc, khi"],["不要","búyào","đừng; không cần"],["参加","cānjiā","tham gia"],["。"],["老人","lǎorén","người già"],["登山","dēngshān","leo núi"],["，"],["有","yǒu","có"],["伙伴","huǒbàn","bạn đồng hành"],["更好","gènghǎo","tốt hơn"],["，"],["可以","kěyǐ","có thể"],["相互","xiānghù","lẫn nhau"],["照顾","zhàogù","chăm sóc"],["。"]]
    },
    {
     "zh": "总之，登山可以健身，但安全最重要。",
     "vi": "Tóm lại, leo núi có thể rèn luyện sức khỏe, nhưng an toàn là quan trọng nhất.",
     "tokens": [["总之","zǒngzhī","tóm lại"],["，"],["登山","dēngshān","leo núi"],["可以","kěyǐ","có thể"],["健身","jiànshēn","rèn luyện sức khỏe"],["，"],["但","dàn","nhưng"],["安全","ānquán","an toàn"],["最","zuì","nhất"],["重要","zhòngyào","quan trọng"],["。"]]
    }
   ],
   "questions": [
    {
     "q": "为什么秋天最适合登山？",
     "options": ["因为山上人少","因为阳光充足、天气凉快，气候宜人","因为秋天不下雨","因为学校放假"],
     "answer": 1,
     "explain": "Mùa thu nắng chan hòa, trời mát mẻ, khí hậu dễ chịu thích hợp hoạt động ngoài trời."
    },
    {
     "q": "关于香山，下面哪一项是对的？",
     "options": ["在北京东边","最高的地方是香炉峰，有557米高","只有一条山路","孩子不能上山"],
     "answer": 1,
     "explain": "Đỉnh Hương Lô cao 557 mét, Hương Sơn ở phía tây Bắc Kinh, có nhiều đường lên đỉnh."
    },
    {
     "q": "根据文章，下面哪种人不应该去登山？",
     "options": ["老人","孩子","有心、脑疾病的人","第一次登山的人"],
     "answer": 2,
     "explain": "Nếu có bệnh tim, bệnh não thì không nên tham gia."
    }
   ],
   "fills": [{"sentence":"宜人的气候最适合人们到_______，登山就是其中一项有益身心健康的运动，不但锻炼了身体，而且放松了心情，真是一件好事情。","answer":"野外活动","options":["野外活动","扶手","新鲜","增减"]},{"sentence":"宜人的气候最适合人们到野外活动，登山就是其中一项_______身心健康的运动，不但锻炼了身体，而且放松了心情，真是一件好事情。","answer":"有益","options":["增减","有益","新鲜","扶手"]},{"sentence":"一步一个台阶，有的地方还有_______，大人孩子上山、下山时都很安全。","answer":"扶手","options":["新鲜","扶手","增减","有益"]},{"sentence":"雨天不影响登山，空气格外_______，锻炼效果更好。","answer":"新鲜","options":["增减","新鲜","野外活动","扶手"]},{"sentence":"衣服应多穿几件，在登山过程中，根据气温变化和身体情况可适当_______。","answer":"增减","options":["新鲜","有益","增减","野外活动"]}]
  },
  {
   "id": "u3t1",
   "unit": 3,
   "no": 1,
   "titleZh": "大爱农民",
   "titleVi": "Người nông dân có tình yêu lớn",
   "note": "",
   "vocab": [
    {
     "hanzi": "咳嗽",
     "pinyin": "késou",
     "pos": "Động từ",
     "meaning": "Ho",
     "exZh": "发烧咳嗽",
     "exVi": "Sốt và ho"
    },
    {
     "hanzi": "传染病",
     "pinyin": "chuánrǎnbìng",
     "pos": "Danh từ",
     "meaning": "Bệnh truyền nhiễm",
     "exZh": "治不了的传染病",
     "exVi": "Bệnh truyền nhiễm không chữa được"
    },
    {
     "hanzi": "跪",
     "pinyin": "guì",
     "pos": "Động từ",
     "meaning": "Quỳ",
     "exZh": "跪下",
     "exVi": "Quỳ xuống"
    },
    {
     "hanzi": "朝",
     "pinyin": "cháo",
     "pos": "Giới từ",
     "meaning": "Hướng về",
     "exZh": "朝老父亲磕头",
     "exVi": "Dập đầu hướng về phía cha già"
    },
    {
     "hanzi": "磕",
     "pinyin": "kē",
     "pos": "Động từ",
     "meaning": "Dập (đầu)",
     "exZh": "磕头",
     "exVi": "Dập đầu"
    }
   ],
   "grammar": [
    {
     "name": "Hướng về",
     "struct": "朝 vs 向 vs 往",
     "explain": "Phân biệt giới từ chỉ phương hướng: 朝 chỉ hướng động tác; 向 chỉ hướng/đối tượng; 往 chỉ hướng di chuyển.",
     "exZh": "跪下朝老父亲磕了一个头。",
     "exVi": "Quỳ xuống, dập đầu lạy về phía cha già một cái."
    }
   ],
   "text": [
    {
     "zh": "一位农民在外地工作，乘车回自己的老家。到了离家50多里的地方，他突然感到自己身体病了，发烧、咳嗽。从新闻中，他看到过，这可能是一种不能治的传染病，心里便是一惊。",
     "vi": "Một người nông dân làm việc ở nơi khác, đi xe về quê. Đến chỗ cách nhà hơn 50 dặm, anh đột nhiên cảm thấy mình bị ốm, sốt, ho. Anh từng xem trên tin tức rằng đây có thể là một loại bệnh truyền nhiễm không chữa được, trong lòng liền giật mình.",
     "tokens": [["一位","yīwèi","một vị, một người"],["农民","nóngmín","nông dân"],["在","zài","ở, đang"],["外地","wàidì","nơi khác"],["工作","gōngzuò","công việc, làm việc"],["，"],["乘车","chéngchē","đi xe"],["回","huí","về"],["自己","zìjǐ","bản thân"],["的","de","của (trợ từ)"],["老家","lǎojiā","quê nhà"],["。"],["到","dào","đến"],["了","le","rồi (trợ từ)"],["离家","líjiā","cách nhà"],["50"],["多","duō","nhiều; hơn"],["里","lǐ","trong; dặm"],["的","de","của (trợ từ)"],["地方","dìfāng","nơi, chỗ"],["，"],["他","tā","anh ấy, ông ấy"],["突然","tūrán","đột nhiên"],["感到","gǎndào","cảm thấy"],["自己","zìjǐ","bản thân"],["身体","shēntǐ","cơ thể"],["病","bìng","bệnh"],["了","le","rồi (trợ từ)"],["，"],["发烧","fāshāo","sốt"],["、"],["咳嗽","késou","Ho"],["。"],["从","cóng","từ"],["新闻","xīnwén","tin tức"],["中","zhōng","trong, giữa"],["，"],["他","tā","anh ấy, ông ấy"],["看到","kàndào","nhìn thấy"],["过","guò","qua; sống, đón"],["，"],["这","zhè","này"],["可能","kěnéng","có thể"],["是","shì","là"],["一种","yīzhǒng","một loại"],["不能","bùnéng","không thể"],["治","zhì","chữa"],["的","de","của (trợ từ)"],["传染病","chuánrǎnbìng","Bệnh truyền nhiễm"],["，"],["心里","xīnlǐ","trong lòng"],["便是","biànshì","liền là"],["一","yī","một"],["惊","jīng","giật mình"],["。"]]
    },
    {
     "zh": "他想，如果真是那种病，那么一车人就会被感染。他让司机把车停下来，自己走下车，慢慢走回家。",
     "vi": "Anh nghĩ, nếu đúng là bệnh đó thì cả xe người sẽ bị lây. Anh bảo tài xế dừng xe lại, tự mình xuống xe, chậm rãi đi bộ về nhà.",
     "tokens": [["他","tā","anh ấy, ông ấy"],["想","xiǎng","nghĩ; muốn"],["，"],["如果","rúguǒ","nếu"],["真是","zhēnshì","thật là"],["那种","nàzhǒng","loại đó"],["病","bìng","bệnh"],["，"],["那么","nàme","như thế; vậy thì"],["一车","yīchē","cả một xe"],["人","rén","người"],["就","jiù","thì, liền"],["会","huì","sẽ; biết"],["被","bèi","bị, được"],["感染","gǎnrǎn","lây nhiễm"],["。"],["他","tā","anh ấy, ông ấy"],["让","ràng","để, bảo, khiến"],["司机","sījī","tài xế"],["把","bǎ","(giới từ đưa tân ngữ lên trước)"],["车","chē","xe"],["停下来","tíngxiàlái","dừng lại"],["，"],["自己","zìjǐ","bản thân"],["走","zǒu","đi; đi (cờ)"],["下车","xiàchē","xuống xe"],["，"],["慢慢","mànmàn","từ từ"],["走","zǒu","đi; đi (cờ)"],["回家","huíjiā","về nhà"],["。"]]
    },
    {
     "zh": "那几十里路，他走了很长时间。到了村口，真想回家喝一碗凉茶，马上见到他的妻子和老父亲。但他却停止了脚步。他怕自己的病，传给亲人和乡里人。",
     "vi": "Mấy chục dặm đường đó, anh đi rất lâu. Đến đầu làng, anh rất muốn về nhà uống một bát trà mát, lập tức gặp vợ và người cha già. Nhưng anh lại dừng bước. Anh sợ bệnh của mình lây cho người thân và bà con trong làng.",
     "tokens": [["那","nà","kia, đó"],["几十里","jǐshílǐ","mấy chục dặm"],["路","lù","đường"],["，"],["他","tā","anh ấy, ông ấy"],["走","zǒu","đi; đi (cờ)"],["了","le","rồi (trợ từ)"],["很","hěn","rất"],["长时间","zhǎngshíjiān","thời gian dài"],["。"],["到","dào","đến"],["了","le","rồi (trợ từ)"],["村口","cūnkǒu","đầu làng"],["，"],["真","zhēn","thật"],["想","xiǎng","nghĩ; muốn"],["回家","huíjiā","về nhà"],["喝","hē","uống"],["一碗","yīwǎn","một bát"],["凉茶","liángchá","trà mát"],["，"],["马上","mǎshàng","lập tức"],["见到","jiàndào","gặp được"],["他","tā","anh ấy, ông ấy"],["的","de","của (trợ từ)"],["妻子","qīzǐ","vợ"],["和","hé","và; hòa"],["老父亲","lǎofùqīn","cha già"],["。"],["但他却","dàntāquè","nhưng anh ấy lại"],["停止","tíngzhǐ","ngừng, dừng"],["了","le","rồi (trợ từ)"],["脚步","jiǎobù","bước chân"],["。"],["他","tā","anh ấy, ông ấy"],["怕","pà","sợ"],["自己","zìjǐ","bản thân"],["的","de","của (trợ từ)"],["病","bìng","bệnh"],["，"],["传给","chuángěi","truyền cho, lây cho"],["亲人","qīnrén","người thân"],["和","hé","và; hòa"],["乡里","xiānglǐ","làng xóm, bà con"],["人","rén","người"],["。"]]
    },
    {
     "zh": "他就站在村口，大声叫着妻子的名字。他的妻子听到，来了。他让妻子给他一碗水，放在村口的一块大石头上，然后让妻子走远些，不要离自己太近。",
     "vi": "Anh đứng ở đầu làng, gọi to tên vợ. Vợ anh nghe thấy liền đến. Anh bảo vợ đưa cho mình một bát nước, đặt lên một tảng đá lớn ở đầu làng, rồi bảo vợ đi xa ra một chút, đừng đến quá gần mình.",
     "tokens": [["他","tā","anh ấy, ông ấy"],["就","jiù","thì, liền"],["站","zhàn","đứng"],["在","zài","ở, đang"],["村口","cūnkǒu","đầu làng"],["，"],["大声","dàshēng","lớn tiếng"],["叫","jiào","gọi; bảo"],["着","zhe","đang (trợ từ)"],["妻子","qīzǐ","vợ"],["的","de","của (trợ từ)"],["名字","míngzì","tên"],["。"],["他","tā","anh ấy, ông ấy"],["的","de","của (trợ từ)"],["妻子","qīzǐ","vợ"],["听到","tīngdào","nghe thấy"],["，"],["来","lái","đến"],["了","le","rồi (trợ từ)"],["。"],["他","tā","anh ấy, ông ấy"],["让","ràng","để, bảo, khiến"],["妻子","qīzǐ","vợ"],["给","gěi","cho"],["他","tā","anh ấy, ông ấy"],["一碗水","yīwǎnshuǐ","một bát nước"],["，"],["放在","fàngzài","đặt ở"],["村口","cūnkǒu","đầu làng"],["的","de","của (trợ từ)"],["一块","yīkuài","một tảng, một miếng"],["大石头","dàshítou","tảng đá lớn"],["上","shàng","trên; lên"],["，"],["然后","ránhòu","sau đó"],["让","ràng","để, bảo, khiến"],["妻子","qīzǐ","vợ"],["走","zǒu","đi; đi (cờ)"],["远","yuǎn","xa"],["些","xiē","một số"],["，"],["不要","búyào","đừng; không cần"],["离","lí","cách"],["自己","zìjǐ","bản thân"],["太","tài","quá"],["近","jìn","gần"],["。"]]
    },
    {
     "zh": "水喝完了，他对妻子说：“把父亲叫来。”妻子就把他的老父亲叫来了。他跪下朝老父亲磕了一个头，说：“孩儿可能得了不好的病，这就上医院去，您老人家多保重。”说完，他在老父亲和妻子的眼泪中独自去了医院。",
     "vi": "Uống nước xong, anh nói với vợ: “Gọi bố đến đây.” Vợ liền gọi người cha già đến. Anh quỳ xuống dập đầu lạy cha một cái, nói: “Con có thể đã mắc bệnh không tốt, giờ con đi bệnh viện đây, cha ở nhà giữ gìn sức khỏe.” Nói xong, anh một mình đi đến bệnh viện trong nước mắt của cha già và vợ.",
     "tokens": [["水","shuǐ","nước"],["喝完","hēwán","uống xong"],["了","le","rồi (trợ từ)"],["，"],["他","tā","anh ấy, ông ấy"],["对","duì","đối với; đúng"],["妻子","qīzǐ","vợ"],["说","shuō","nói"],["："],["“"],["把","bǎ","(giới từ đưa tân ngữ lên trước)"],["父亲","fùqīn","bố"],["叫","jiào","gọi; bảo"],["来","lái","đến"],["。"],["”"],["妻子","qīzǐ","vợ"],["就","jiù","thì, liền"],["把","bǎ","(giới từ đưa tân ngữ lên trước)"],["他","tā","anh ấy, ông ấy"],["的","de","của (trợ từ)"],["老父亲","lǎofùqīn","cha già"],["叫","jiào","gọi; bảo"],["来","lái","đến"],["了","le","rồi (trợ từ)"],["。"],["他","tā","anh ấy, ông ấy"],["跪下","guìxià","quỳ xuống"],["朝","cháo","Hướng về"],["老父亲","lǎofùqīn","cha già"],["磕","kē","Dập (đầu)"],["了","le","rồi (trợ từ)"],["一个头","yígètóu","một cái (dập đầu)"],["，"],["说","shuō","nói"],["："],["“"],["孩儿","háiér","con (tự xưng)"],["可能","kěnéng","có thể"],["得","dé","được; (trợ từ bổ ngữ)"],["了","le","rồi (trợ từ)"],["不好","bùhǎo","không tốt"],["的","de","của (trợ từ)"],["病","bìng","bệnh"],["，"],["这","zhè","này"],["就","jiù","thì, liền"],["上","shàng","trên; lên"],["医院","yīyuàn","bệnh viện"],["去","qù","đi"],["，"],["您","nín","ông/bà (kính trọng)"],["老人家","lǎorénjiā","cụ, ông bà (kính trọng)"],["多","duō","nhiều; hơn"],["保重","bǎozhòng","giữ gìn sức khỏe"],["。"],["”"],["说完","shuōwán","nói xong"],["，"],["他","tā","anh ấy, ông ấy"],["在","zài","ở, đang"],["老父亲","lǎofùqīn","cha già"],["和","hé","và; hòa"],["妻子","qīzǐ","vợ"],["的","de","của (trợ từ)"],["眼泪","yǎnlèi","nước mắt"],["中","zhōng","trong, giữa"],["独自","dúzì","một mình"],["去","qù","đi"],["了","le","rồi (trợ từ)"],["医院","yīyuàn","bệnh viện"],["。"]]
    },
    {
     "zh": "幸运的是，他得的不是不能治的传染病。",
     "vi": "May mắn là anh mắc không phải bệnh truyền nhiễm không chữa được.",
     "tokens": [["幸运","xìngyùn","may mắn"],["的","de","của (trợ từ)"],["是","shì","là"],["，"],["他","tā","anh ấy, ông ấy"],["得","dé","được; (trợ từ bổ ngữ)"],["的","de","của (trợ từ)"],["不是","búshì","không phải"],["不能","bùnéng","không thể"],["治","zhì","chữa"],["的","de","của (trợ từ)"],["传染病","chuánrǎnbìng","Bệnh truyền nhiễm"],["。"]]
    },
    {
     "zh": "这是一个真实的故事，发生在江苏丰县。人们听到这个故事后，很受感动，称赞这位名叫张元俊的农民是个懂得大爱的人。",
     "vi": "Đây là một câu chuyện có thật, xảy ra ở huyện Phong, tỉnh Giang Tô. Mọi người nghe câu chuyện này đều rất cảm động, khen ngợi người nông dân tên là Trương Nguyên Tuấn này là một người hiểu thế nào là tình yêu lớn.",
     "tokens": [["这","zhè","này"],["是","shì","là"],["一个","yígè","một (cái, người)"],["真实","zhēnshí","có thật"],["的","de","của (trợ từ)"],["故事","gùshì","câu chuyện"],["，"],["发生","fāshēng","xảy ra"],["在","zài","ở, đang"],["江苏","jiāngsū","Giang Tô"],["丰县","fēngxiàn","huyện Phong"],["。"],["人们","rénmen","mọi người"],["听到","tīngdào","nghe thấy"],["这个","zhège","cái này"],["故事","gùshì","câu chuyện"],["后","hòu","sau"],["，"],["很","hěn","rất"],["受","shòu","bị, chịu"],["感动","gǎndòng","cảm động"],["，"],["称赞","chēngzàn","khen ngợi"],["这位","zhèwèi","vị này"],["名叫","míngjiào","tên là"],["张元俊","zhāngyuánjùn","Trương Nguyên Tuấn (tên người)"],["的","de","của (trợ từ)"],["农民","nóngmín","nông dân"],["是","shì","là"],["个","gè","cái (lượng từ)"],["懂得","dǒngde","hiểu"],["大","dà","to, lớn"],["爱","ài","yêu; hay (làm gì)"],["的","de","của (trợ từ)"],["人","rén","người"],["。"]]
    },
    {
     "zh": "一滴水可以看见大海，许多河流可以形成大湖。人间的大爱，也是一样啊。",
     "vi": "Một giọt nước có thể thấy được biển cả, nhiều dòng sông có thể tạo thành hồ lớn. Tình yêu lớn ở nhân gian cũng như vậy.",
     "tokens": [["一滴水","yīdīshuǐ","một giọt nước"],["可以","kěyǐ","có thể"],["看见","kànjiàn","nhìn thấy"],["大海","dàhǎi","biển cả"],["，"],["许多","xǔduō","nhiều"],["河流","héliú","sông ngòi"],["可以","kěyǐ","có thể"],["形成","xíngchéng","hình thành"],["大湖","dàhú","hồ lớn"],["。"],["人间","rénjiān","nhân gian, cõi đời"],["的","de","của (trợ từ)"],["大","dà","to, lớn"],["爱","ài","yêu; hay (làm gì)"],["，"],["也","yě","cũng"],["是","shì","là"],["一样","yīyàng","giống nhau"],["啊","a","à, nhé (trợ từ)"],["。"]]
    }
   ],
   "questions": [
    {
     "q": "农民为什么让司机把车停下来？",
     "options": ["因为他到家了","因为他怕自己的病传染给一车人","因为他想喝水","因为车坏了"],
     "answer": 1,
     "explain": "Anh nghĩ nếu đúng là bệnh truyền nhiễm thì cả xe sẽ bị lây."
    },
    {
     "q": "到了村口，农民为什么不回家？",
     "options": ["家里没有人","他怕把病传给亲人和乡里人","他忘了路","妻子不让他回家"],
     "answer": 1,
     "explain": "Anh sợ bệnh của mình lây cho người thân và bà con trong làng."
    },
    {
     "q": "最后，农民得的是什么病？",
     "options": ["不能治的传染病","不是不能治的传染病","心脏病","文章没有说"],
     "answer": 1,
     "explain": "May mắn là anh không mắc bệnh truyền nhiễm không chữa được."
    }
   ],
   "fills": [{"sentence":"到了离家50多里的地方，他突然感到自己身体病了，发烧、_______。","answer":"咳嗽","options":["朝","咳嗽","跪","传染病"]},{"sentence":"幸运的是，他得的不是不能治的_______。","answer":"传染病","options":["朝","磕","跪","传染病"]},{"sentence":"他_______下朝老父亲磕了一个头，说：“孩儿可能得了不好的病，这就上医院去，您老人家多保重。","answer":"跪","options":["咳嗽","传染病","适当","跪"]},{"sentence":"他跪下_______老父亲磕了一个头，说：“孩儿可能得了不好的病，这就上医院去，您老人家多保重。","answer":"朝","options":["朝","传染病","咳嗽","相处"]},{"sentence":"他跪下朝老父亲_______了一个头，说：“孩儿可能得了不好的病，这就上医院去，您老人家多保重。","answer":"磕","options":["资源","磕","咳嗽","传染病"]}]
  },
  {
   "id": "u3t2",
   "unit": 3,
   "no": 2,
   "titleZh": "学会赞美别人",
   "titleVi": "Học cách khen ngợi người khác",
   "note": "",
   "vocab": [
    {
     "hanzi": "搞关系",
     "pinyin": "gǎo guānxi",
     "pos": "Cụm từ",
     "meaning": "Tạo quan hệ",
     "exZh": "搞好关系",
     "exVi": "Giữ quan hệ tốt"
    },
    {
     "hanzi": "赞美",
     "pinyin": "zànměi",
     "pos": "Động từ",
     "meaning": "Khen ngợi",
     "exZh": "学会赞美别人",
     "exVi": "Học cách khen ngợi người khác"
    },
    {
     "hanzi": "相处",
     "pinyin": "xiāngchǔ",
     "pos": "Động từ",
     "meaning": "Sống chung, cư xử",
     "exZh": "与人相处",
     "exVi": "Cư xử với mọi người"
    },
    {
     "hanzi": "受欢迎",
     "pinyin": "shòu huānyíng",
     "pos": "Cụm từ",
     "meaning": "Được hoan nghênh",
     "exZh": "不受欢迎的人",
     "exVi": "Người không được hoan nghênh"
    },
    {
     "hanzi": "适当",
     "pinyin": "shìdàng",
     "pos": "Tính từ",
     "meaning": "Thích hợp",
     "exZh": "适当地赞美",
     "exVi": "Khen ngợi một cách phù hợp"
    },
    {
     "hanzi": "善于",
     "pinyin": "shànyú",
     "pos": "Động từ",
     "meaning": "Giỏi về...",
     "exZh": "善于发现优点",
     "exVi": "Giỏi phát hiện ưu điểm"
    },
    {
     "hanzi": "过分",
     "pinyin": "guòfèn",
     "pos": "Tính từ",
     "meaning": "Quá đáng, thái quá",
     "exZh": "赞美千万不能过分",
     "exVi": "Khen ngợi tuyệt đối không được quá đà"
    }
   ],
   "grammar": [
    {
     "name": "Giỏi về...",
     "struct": "善于······",
     "explain": "Biểu thị sở trường trong việc làm gì đó.",
     "exZh": "一个善于发现别人优点而且经常赞美别人的人。",
     "exVi": "Một người giỏi phát hiện ưu điểm của người khác và thường xuyên khen ngợi người khác."
    }
   ],
   "text": [
    {
     "zh": "中国人常说：多一个朋友多一条路。怎样才能交更多的朋友？怎样才能和别人搞好关系？怎样才能每天有一个好心情？有一个最好的办法，就是学会赞美别人。",
     "vi": "Người Trung Quốc thường nói: thêm một người bạn là thêm một con đường. Làm thế nào để kết giao được nhiều bạn hơn? Làm thế nào để giữ quan hệ tốt với người khác? Làm thế nào để ngày nào cũng có tâm trạng tốt? Có một cách hay nhất, đó là học cách khen ngợi người khác.",
     "tokens": [["中国","zhōngguó","Trung Quốc"],["人","rén","người"],["常","cháng","thường"],["说","shuō","nói"],["："],["多","duō","nhiều; hơn"],["一个","yígè","một (cái, người)"],["朋友","péngyǒu","bạn bè"],["多","duō","nhiều; hơn"],["一条","yītiáo","một con, một tuyến"],["路","lù","đường"],["。"],["怎样才能","zěnyàngcáinéng","làm sao mới có thể"],["交","jiāo","kết (bạn), giao"],["更","gèng","càng, hơn"],["多","duō","nhiều; hơn"],["的","de","của (trợ từ)"],["朋友","péngyǒu","bạn bè"],["？"],["怎样才能","zěnyàngcáinéng","làm sao mới có thể"],["和","hé","và; hòa"],["别人","biérén","người khác"],["搞好关系","gǎohǎoguānxì","giữ quan hệ tốt"],["？"],["怎样才能","zěnyàngcáinéng","làm sao mới có thể"],["每天","měitiān","mỗi ngày"],["有","yǒu","có"],["一个","yígè","một (cái, người)"],["好","hǎo","tốt; rất"],["心情","xīnqíng","tâm trạng"],["？"],["有","yǒu","có"],["一个","yígè","một (cái, người)"],["最好","zuìhǎo","tốt nhất"],["的","de","của (trợ từ)"],["办法","bànfǎ","cách, biện pháp"],["，"],["就是","jiùshì","chính là"],["学会","xuéhuì","học được, biết"],["赞美","zànměi","Khen ngợi"],["别人","biérén","người khác"],["。"]]
    },
    {
     "zh": "在生活中，有些人朋友很少，主要原因不是大家不喜欢他们，而是他们在与人相处时，总是对别人要求太高，在他们眼里，别人这个也不好，那个也不好，最后，所有的人都觉得他不好，没有人愿意和他交朋友，他成了一个不受欢迎的人。",
     "vi": "Trong cuộc sống, có những người rất ít bạn, nguyên nhân chủ yếu không phải là mọi người không thích họ, mà là khi cư xử với người khác, họ luôn đòi hỏi người khác quá cao. Trong mắt họ, người khác cái này cũng không tốt, cái kia cũng không tốt, cuối cùng tất cả mọi người đều thấy anh ta không tốt, không ai muốn kết bạn với anh ta, anh ta trở thành một người không được hoan nghênh.",
     "tokens": [["在生活中","zàishēnghuózhōng","trong cuộc sống"],["，"],["有些","yǒuxiē","có một số"],["人","rén","người"],["朋友","péngyǒu","bạn bè"],["很少","hěnshǎo","rất ít"],["，"],["主要","zhǔyào","chủ yếu"],["原因","yuányīn","nguyên nhân"],["不是","búshì","không phải"],["大家","dàjiā","mọi người"],["不","bù","không"],["喜欢","xǐhuān","thích"],["他们","tāmen","họ"],["，"],["而是","érshì","mà là"],["他们","tāmen","họ"],["在","zài","ở, đang"],["与","yǔ","và, với"],["人","rén","người"],["相处","xiāngchǔ","Sống chung, cư xử"],["时","shí","lúc, khi"],["，"],["总是","zǒngshì","luôn luôn"],["对","duì","đối với; đúng"],["别人","biérén","người khác"],["要求","yāoqiú","yêu cầu"],["太","tài","quá"],["高","gāo","cao"],["，"],["在","zài","ở, đang"],["他们","tāmen","họ"],["眼里","yǎnlǐ","trong mắt"],["，"],["别人","biérén","người khác"],["这个","zhège","cái này"],["也","yě","cũng"],["不好","bùhǎo","không tốt"],["，"],["那个","nàge","cái đó"],["也","yě","cũng"],["不好","bùhǎo","không tốt"],["，"],["最后","zuìhòu","cuối cùng"],["，"],["所有","suǒyǒu","tất cả"],["的","de","của (trợ từ)"],["人","rén","người"],["都","dōu","đều"],["觉得","juéde","cảm thấy"],["他","tā","anh ấy, ông ấy"],["不好","bùhǎo","không tốt"],["，"],["没有","méiyǒu","không có"],["人","rén","người"],["愿意","yuànyì","bằng lòng, muốn"],["和","hé","và; hòa"],["他","tā","anh ấy, ông ấy"],["交朋友","jiāopéngyǒu","kết bạn"],["，"],["他","tā","anh ấy, ông ấy"],["成","chéng","thành"],["了","le","rồi (trợ từ)"],["一个","yígè","một (cái, người)"],["不","bù","không"],["受欢迎","shòu huānyíng","Được hoan nghênh"],["的","de","của (trợ từ)"],["人","rén","người"],["。"]]
    },
    {
     "zh": "有的人很喜欢说话，但是不懂得说话的方法，那就是不会说话。因为他说的话不好听，别人不容易接受，这样的人也会让别人讨厌，即使有朋友，也会慢慢减少。最后还是一个不受欢迎的人。",
     "vi": "Có người rất thích nói, nhưng không hiểu cách nói chuyện, đó chính là không biết nói chuyện. Vì lời anh ta nói không dễ nghe, người khác khó chấp nhận, người như vậy cũng sẽ khiến người khác ghét, dù có bạn bè thì cũng sẽ dần ít đi. Cuối cùng vẫn là một người không được hoan nghênh.",
     "tokens": [["有","yǒu","có"],["的","de","của (trợ từ)"],["人","rén","người"],["很","hěn","rất"],["喜欢","xǐhuān","thích"],["说话","shuōhuà","nói chuyện"],["，"],["但是","dànshì","nhưng"],["不","bù","không"],["懂得","dǒngde","hiểu"],["说话","shuōhuà","nói chuyện"],["的","de","của (trợ từ)"],["方法","fāngfǎ","phương pháp"],["，"],["那","nà","kia, đó"],["就是","jiùshì","chính là"],["不会","búhuì","sẽ không"],["说话","shuōhuà","nói chuyện"],["。"],["因为","yīnwèi","bởi vì"],["他","tā","anh ấy, ông ấy"],["说","shuō","nói"],["的话","dehuà","nếu ... thì"],["不好","bùhǎo","không tốt"],["听","tīng","nghe"],["，"],["别人","biérén","người khác"],["不","bù","không"],["容易接受","róngyìjiēshòu","dễ chấp nhận"],["，"],["这样","zhèyàng","như vậy"],["的","de","của (trợ từ)"],["人","rén","người"],["也","yě","cũng"],["会","huì","sẽ; biết"],["让","ràng","để, bảo, khiến"],["别人","biérén","người khác"],["讨厌","tǎoyàn","ghét, khó chịu"],["，"],["即使","jíshǐ","cho dù"],["有","yǒu","có"],["朋友","péngyǒu","bạn bè"],["，"],["也","yě","cũng"],["会","huì","sẽ; biết"],["慢慢","mànmàn","từ từ"],["减少","jiǎnshǎo","giảm bớt"],["。"],["最后","zuìhòu","cuối cùng"],["还是","háishì","hay là; vẫn"],["一个","yígè","một (cái, người)"],["不","bù","không"],["受欢迎","shòu huānyíng","Được hoan nghênh"],["的","de","của (trợ từ)"],["人","rén","người"],["。"]]
    },
    {
     "zh": "如果你想成为一个被人喜欢的人，就必须学会赞美别人。因为，每个人都希望得到赞美，这是人人都需要的。",
     "vi": "Nếu bạn muốn trở thành một người được mọi người yêu mến thì nhất định phải học cách khen ngợi người khác. Bởi vì ai cũng mong được khen ngợi, đây là điều mọi người đều cần.",
     "tokens": [["如果","rúguǒ","nếu"],["你","nǐ","bạn"],["想","xiǎng","nghĩ; muốn"],["成为","chéngwéi","trở thành"],["一个","yígè","một (cái, người)"],["被","bèi","bị, được"],["人","rén","người"],["喜欢","xǐhuān","thích"],["的","de","của (trợ từ)"],["人","rén","người"],["，"],["就","jiù","thì, liền"],["必须","bìxū","bắt buộc phải"],["学会","xuéhuì","học được, biết"],["赞美","zànměi","Khen ngợi"],["别人","biérén","người khác"],["。"],["因为","yīnwèi","bởi vì"],["，"],["每个","měigè","mỗi (cái)"],["人","rén","người"],["都","dōu","đều"],["希望","xīwàng","hy vọng"],["得到","dédào","nhận được"],["赞美","zànměi","Khen ngợi"],["，"],["这","zhè","này"],["是","shì","là"],["人人","rénrén","mọi người"],["都","dōu","đều"],["需要","xūyào","cần"],["的","de","của (trợ từ)"],["。"]]
    },
    {
     "zh": "赞美有很多的好处：老板对员工赞美，能使员工更加努力，取得更大成果；同学对同学、朋友对朋友赞美，能使关系更亲密；父母适当地赞美子女，可使他们更进步，学习成绩更好。",
     "vi": "Khen ngợi có rất nhiều lợi ích: ông chủ khen nhân viên có thể khiến nhân viên nỗ lực hơn, đạt được thành quả lớn hơn; bạn học khen bạn học, bạn bè khen bạn bè có thể khiến quan hệ thân thiết hơn; cha mẹ khen con cái một cách phù hợp có thể giúp chúng tiến bộ hơn, thành tích học tập tốt hơn.",
     "tokens": [["赞美","zànměi","Khen ngợi"],["有","yǒu","có"],["很多","hěnduō","rất nhiều"],["的","de","của (trợ từ)"],["好处","hǎochù","lợi ích"],["："],["老板","lǎobǎn","ông chủ"],["对","duì","đối với; đúng"],["员工","yuángōng","nhân viên"],["赞美","zànměi","Khen ngợi"],["，"],["能","néng","có thể"],["使","shǐ","khiến, làm cho"],["员工","yuángōng","nhân viên"],["更加","gèngjiā","càng thêm"],["努力","nǔlì","nỗ lực"],["，"],["取得","qǔdé","đạt được"],["更","gèng","càng, hơn"],["大","dà","to, lớn"],["成果","chéngguǒ","thành quả"],["；"],["同学","tóngxué","bạn học"],["对","duì","đối với; đúng"],["同学","tóngxué","bạn học"],["、"],["朋友","péngyǒu","bạn bè"],["对","duì","đối với; đúng"],["朋友","péngyǒu","bạn bè"],["赞美","zànměi","Khen ngợi"],["，"],["能","néng","có thể"],["使","shǐ","khiến, làm cho"],["关系","guānxì","quan hệ"],["更","gèng","càng, hơn"],["亲密","qīnmì","thân mật"],["；"],["父母","fùmǔ","bố mẹ"],["适当","shìdàng","Thích hợp"],["地","dì","(trợ từ trạng ngữ)"],["赞美","zànměi","Khen ngợi"],["子女","zǐnǚ","con cái"],["，"],["可","kě","có thể; nhưng"],["使","shǐ","khiến, làm cho"],["他们","tāmen","họ"],["更","gèng","càng, hơn"],["进步","jìnbù","tiến bộ"],["，"],["学习成绩","xuéxíchéngjì","thành tích học tập"],["更好","gènghǎo","tốt hơn"],["。"]]
    },
    {
     "zh": "一个善于发现别人优点而且经常赞美别人的人，一定会受到别人的尊敬。",
     "vi": "Một người giỏi phát hiện ưu điểm của người khác và thường xuyên khen ngợi người khác nhất định sẽ được người khác tôn trọng.",
     "tokens": [["一个","yígè","một (cái, người)"],["善于","shànyú","Giỏi về..."],["发现","fāxiàn","phát hiện"],["别人","biérén","người khác"],["优点","yōudiǎn","ưu điểm"],["而且","érqiě","hơn nữa"],["经常","jīngcháng","thường xuyên"],["赞美","zànměi","Khen ngợi"],["别人","biérén","người khác"],["的","de","của (trợ từ)"],["人","rén","người"],["，"],["一定","yídìng","nhất định, chắc chắn"],["会","huì","sẽ; biết"],["受到","shòudào","nhận được, bị"],["别人","biérén","người khác"],["的","de","của (trợ từ)"],["尊敬","zūnjìng","tôn kính"],["。"]]
    },
    {
     "zh": "不过，要注意的是，赞美别人千万不能太过分，如果赞美过分，别人会认为你不是个真诚的人。",
     "vi": "Tuy nhiên, cần chú ý là khen người khác tuyệt đối không được quá đà, nếu khen quá mức, người khác sẽ cho rằng bạn không phải người chân thành.",
     "tokens": [["不过","bùguò","tuy nhiên; chỉ, không quá"],["，"],["要","yào","muốn; phải"],["注意","zhùyì","chú ý"],["的","de","của (trợ từ)"],["是","shì","là"],["，"],["赞美","zànměi","Khen ngợi"],["别人","biérén","người khác"],["千万","qiānwàn","tuyệt đối; hàng nghìn vạn"],["不能","bùnéng","không thể"],["太","tài","quá"],["过分","guòfèn","Quá đáng, thái quá"],["，"],["如果","rúguǒ","nếu"],["赞美","zànměi","Khen ngợi"],["过分","guòfèn","Quá đáng, thái quá"],["，"],["别人","biérén","người khác"],["会","huì","sẽ; biết"],["认为","rènwéi","cho rằng"],["你","nǐ","bạn"],["不是","búshì","không phải"],["个","gè","cái (lượng từ)"],["真诚","zhēnchéng","chân thành"],["的","de","của (trợ từ)"],["人","rén","người"],["。"]]
    }
   ],
   "questions": [
    {
     "q": "根据文章，有些人朋友很少的主要原因是什么？",
     "options": ["大家不喜欢他们","他们对别人要求太高","他们不爱说话","他们没有钱"],
     "answer": 1,
     "explain": "Nguyên nhân chủ yếu không phải mọi người không thích họ, mà là họ đòi hỏi người khác quá cao."
    },
    {
     "q": "父母适当地赞美子女，有什么好处？",
     "options": ["子女会更进步，学习成绩更好","子女会更有钱","子女会交更多朋友","子女会更听话"],
     "answer": 0,
     "explain": "Cha mẹ khen con phù hợp giúp con tiến bộ hơn, thành tích học tập tốt hơn."
    },
    {
     "q": "赞美别人时要注意什么？",
     "options": ["要多说","不能太过分","只赞美朋友","只赞美老板"],
     "answer": 1,
     "explain": "Khen quá mức thì người khác sẽ cho rằng bạn không chân thành."
    }
   ],
   "fills": [{"sentence":"有一个最好的办法，就是学会_______别人。","answer":"赞美","options":["赞美","受欢迎","过分","搞关系"]},{"sentence":"最后还是一个不_______的人。","answer":"受欢迎","options":["适当","受欢迎","善于","赞美"]},{"sentence":"父母_______地赞美子女，可使他们更进步，学习成绩更好。","answer":"适当","options":["搞关系","相处","过分","适当"]},{"sentence":"一个_______发现别人优点而且经常赞美别人的人，一定会受到别人的尊敬。","answer":"善于","options":["受欢迎","适当","相处","善于"]},{"sentence":"不过，要注意的是，赞美别人千万不能太_______，如果赞美过分，别人会认为你不是个真诚的人。","answer":"过分","options":["善于","搞关系","过分","受欢迎"]}]
  },
  {
   "id": "u3t3",
   "unit": 3,
   "no": 3,
   "titleZh": "中国汉语网正式开通",
   "titleVi": "Mạng Hán ngữ Trung Quốc chính thức ra mắt",
   "note": "",
   "vocab": [
    {
     "hanzi": "记者",
     "pinyin": "jìzhě",
     "pos": "Danh từ",
     "meaning": "Phóng viên, ký giả",
     "exZh": "新华社记者",
     "exVi": "Phóng viên Tân Hoa xã"
    },
    {
     "hanzi": "正式",
     "pinyin": "zhèngshì",
     "pos": "Tính từ/Trạng từ",
     "meaning": "Chính thức",
     "exZh": "正式开通",
     "exVi": "Chính thức ra mắt"
    },
    {
     "hanzi": "资源",
     "pinyin": "zīyuán",
     "pos": "Danh từ",
     "meaning": "Tài nguyên",
     "exZh": "文化资源",
     "exVi": "Tài nguyên văn hóa"
    },
    {
     "hanzi": "互动",
     "pinyin": "hùdòng",
     "pos": "Động từ/Danh từ",
     "meaning": "Tương tác",
     "exZh": "学习的互动",
     "exVi": "Sự tương tác trong học tập"
    },
    {
     "hanzi": "社区",
     "pinyin": "shèqū",
     "pos": "Danh từ",
     "meaning": "Cộng đồng, khu dân cư",
     "exZh": "网络社区",
     "exVi": "Cộng đồng mạng"
    },
    {
     "hanzi": "博客",
     "pinyin": "bókè",
     "pos": "Danh từ",
     "meaning": "Blog",
     "exZh": "通过博客",
     "exVi": "Thông qua blog"
    }
   ],
   "grammar": [],
   "text": [
    {
     "zh": "新华网北京7月8日电（记者郭丽琨）中国汉语网8日正式开通，它是为全世界正在快速增长的汉语学习者服务的。汉语网站为人们提供网上汉语教学，上面有丰富的汉语学习知识和中国文化资源。",
     "vi": "Tân Hoa xã, Bắc Kinh ngày 8 tháng 7 (phóng viên Quách Lệ Côn): Mạng Hán ngữ Trung Quốc chính thức ra mắt ngày 8, phục vụ những người học tiếng Hán đang tăng nhanh trên toàn thế giới. Trang web cung cấp dịch vụ dạy tiếng Hán trực tuyến, trên đó có kiến thức học tiếng Hán và tài nguyên văn hóa Trung Quốc phong phú.",
     "tokens": [["新华网","xīnhuáwǎng","Tân Hoa xã (trang mạng)"],["北京","běijīng","Bắc Kinh"],["7"],["月","yuè","trăng; tháng"],["8"],["日电","rìdiàn","điện ngày (bản tin)"],["（"],["记者","jìzhě","Phóng viên, ký giả"],["郭丽琨","guōlìkūn","Quách Lệ Côn (tên người)"],["）"],["中国","zhōngguó","Trung Quốc"],["汉语","hànyǔ","tiếng Hán"],["网","wǎng","mạng"],["8"],["日","rì","ngày; mặt trời"],["正式","zhèngshì","Chính thức"],["开通","kāitōng","khai trương, ra mắt"],["，"],["它","tā","nó"],["是","shì","là"],["为","wèi","vì, cho; là"],["全世界","quánshìjiè","toàn thế giới"],["正在","zhèngzài","đang"],["快速增长","kuàisùzēngzhǎng","tăng nhanh"],["的","de","của (trợ từ)"],["汉语","hànyǔ","tiếng Hán"],["学习者","xuéxízhě","người học"],["服务","fúwù","phục vụ"],["的","de","của (trợ từ)"],["。"],["汉语","hànyǔ","tiếng Hán"],["网站","wǎngzhàn","trang web"],["为","wèi","vì, cho; là"],["人们","rénmen","mọi người"],["提供","tígōng","cung cấp"],["网上","wǎngshàng","trên mạng"],["汉语","hànyǔ","tiếng Hán"],["教学","jiàoxué","giảng dạy"],["，"],["上面","shàngmiàn","phía trên"],["有","yǒu","có"],["丰富","fēngfù","phong phú"],["的","de","của (trợ từ)"],["汉语","hànyǔ","tiếng Hán"],["学习","xuéxí","học tập"],["知识","zhīshí","kiến thức"],["和","hé","và; hòa"],["中国","zhōngguó","Trung Quốc"],["文化","wénhuà","văn hóa"],["资源","zīyuán","Tài nguyên"],["。"]]
    },
    {
     "zh": "中国汉语网工作人员说：“语言是学会的，不是教会的。中国汉语网的最大特点是学习的互动。”",
     "vi": "Nhân viên của Mạng Hán ngữ Trung Quốc cho biết: “Ngôn ngữ là do tự học mà biết, không phải do dạy mà biết. Đặc điểm lớn nhất của Mạng Hán ngữ Trung Quốc là sự tương tác trong học tập.”",
     "tokens": [["中国","zhōngguó","Trung Quốc"],["汉语","hànyǔ","tiếng Hán"],["网","wǎng","mạng"],["工作人员","gōngzuòrényuán","nhân viên"],["说","shuō","nói"],["："],["“"],["语言","yǔyán","ngôn ngữ"],["是","shì","là"],["学会","xuéhuì","học được, biết"],["的","de","của (trợ từ)"],["，"],["不是","búshì","không phải"],["教会","jiàohuì","dạy cho biết"],["的","de","của (trợ từ)"],["。"],["中国","zhōngguó","Trung Quốc"],["汉语","hànyǔ","tiếng Hán"],["网","wǎng","mạng"],["的","de","của (trợ từ)"],["最大","zuìdà","lớn nhất"],["特点","tèdiǎn","đặc điểm"],["是","shì","là"],["学习","xuéxí","học tập"],["的","de","của (trợ từ)"],["互动","hùdòng","Tương tác"],["。"],["”"]]
    },
    {
     "zh": "因此，互动教室、网络社区、博客成为这个网络的亮点。据介绍，中国汉语网使用最新的互联网技术、MP4视频、MP3音频技术，在学习中，可以连接世界各国的汉语学习者，可以与中国的汉语教师进行互动教学。同时，还通过博客、播客等方法，提供交流的平台。",
     "vi": "Vì vậy, lớp học tương tác, cộng đồng mạng, blog trở thành những điểm nổi bật của trang mạng này. Theo giới thiệu, Mạng Hán ngữ Trung Quốc sử dụng công nghệ internet mới nhất, công nghệ video MP4, âm thanh MP3; trong quá trình học có thể kết nối với người học tiếng Hán ở các nước trên thế giới, có thể học tương tác với giáo viên tiếng Hán của Trung Quốc. Đồng thời, còn thông qua blog, podcast... để cung cấp nền tảng giao lưu.",
     "tokens": [["因此","yīncǐ","vì vậy"],["，"],["互动","hùdòng","Tương tác"],["教室","jiàoshì","lớp học"],["、"],["网络","wǎngluò","mạng"],["社区","shèqū","Cộng đồng, khu dân cư"],["、"],["博客","bókè","Blog"],["成为","chéngwéi","trở thành"],["这个","zhège","cái này"],["网络","wǎngluò","mạng"],["的","de","của (trợ từ)"],["亮点","liàngdiǎn","điểm nổi bật"],["。"],["据介绍","jùjièshào","theo giới thiệu"],["，"],["中国","zhōngguó","Trung Quốc"],["汉语","hànyǔ","tiếng Hán"],["网","wǎng","mạng"],["使用","shǐyòng","sử dụng"],["最新","zuìxīn","mới nhất"],["的","de","của (trợ từ)"],["互联网","hùliánwǎng","internet"],["技术","jìshù","công nghệ, kỹ thuật"],["、"],["MP4"],["视频","shìpín","video"],["、"],["MP3"],["音频","yīnpín","âm thanh (audio)"],["技术","jìshù","công nghệ, kỹ thuật"],["，"],["在","zài","ở, đang"],["学习","xuéxí","học tập"],["中","zhōng","trong, giữa"],["，"],["可以","kěyǐ","có thể"],["连接","liánjiē","kết nối"],["世界","shìjiè","thế giới"],["各国","gèguó","các nước"],["的","de","của (trợ từ)"],["汉语","hànyǔ","tiếng Hán"],["学习者","xuéxízhě","người học"],["，"],["可以","kěyǐ","có thể"],["与","yǔ","và, với"],["中国","zhōngguó","Trung Quốc"],["的","de","của (trợ từ)"],["汉语","hànyǔ","tiếng Hán"],["教师","jiàoshī","giáo viên"],["进行","jìnxíng","tiến hành"],["互动","hùdòng","Tương tác"],["教学","jiàoxué","giảng dạy"],["。"],["同时","tóngshí","đồng thời"],["，"],["还","hái","còn, vẫn"],["通过","tōngguò","thông qua, vượt qua"],["博客","bókè","Blog"],["、"],["播客","bōkè","podcast"],["等","děng","đợi; vân vân"],["方法","fāngfǎ","phương pháp"],["，"],["提供","tígōng","cung cấp"],["交流","jiāoliú","giao lưu"],["的","de","của (trợ từ)"],["平台","píngtái","nền tảng"],["。"]]
    },
    {
     "zh": "汉语学习者进入网络社区---北京四合院，可以通过游戏的方式，了解北京的建筑、居民的生活情况，同时，又学习了汉语。今后，中国汉语网还会有颐和园、故宫、西藏布达拉宫等网上社区。",
     "vi": "Người học tiếng Hán khi vào cộng đồng mạng “Tứ hợp viện Bắc Kinh” có thể thông qua hình thức trò chơi để tìm hiểu kiến trúc Bắc Kinh, tình hình sinh hoạt của cư dân, đồng thời lại học được tiếng Hán. Sau này, Mạng Hán ngữ Trung Quốc còn sẽ có các cộng đồng trực tuyến như Di Hòa Viên, Cố Cung, cung Potala ở Tây Tạng.",
     "tokens": [["汉语","hànyǔ","tiếng Hán"],["学习者","xuéxízhě","người học"],["进入","jìnrù","bước vào"],["网络","wǎngluò","mạng"],["社区","shèqū","Cộng đồng, khu dân cư"],["-"],["-"],["-"],["北京","běijīng","Bắc Kinh"],["四合院","sìhéyuàn","tứ hợp viện"],["，"],["可以","kěyǐ","có thể"],["通过","tōngguò","thông qua, vượt qua"],["游戏","yóuxì","trò chơi"],["的","de","của (trợ từ)"],["方式","fāngshì","cách thức"],["，"],["了解","liǎojiě","tìm hiểu, hiểu rõ"],["北京","běijīng","Bắc Kinh"],["的","de","của (trợ từ)"],["建筑","jiànzhù","kiến trúc"],["、"],["居民","jūmín","cư dân"],["的","de","của (trợ từ)"],["生活","shēnghuó","cuộc sống"],["情况","qíngkuàng","tình hình"],["，"],["同时","tóngshí","đồng thời"],["，"],["又","yòu","lại"],["学习","xuéxí","học tập"],["了","le","rồi (trợ từ)"],["汉语","hànyǔ","tiếng Hán"],["。"],["今后","jīnhòu","sau này"],["，"],["中国","zhōngguó","Trung Quốc"],["汉语","hànyǔ","tiếng Hán"],["网","wǎng","mạng"],["还","hái","còn, vẫn"],["会","huì","sẽ; biết"],["有","yǒu","có"],["颐和园","yíhéyuán","Di Hòa Viên"],["、"],["故宫","gùgōng","Cố Cung"],["、"],["西藏","xīzàng","Tây Tạng"],["布达拉宫","bùdálāgōng","cung Potala"],["等","děng","đợi; vân vân"],["网上","wǎngshàng","trên mạng"],["社区","shèqū","Cộng đồng, khu dân cư"],["。"]]
    },
    {
     "zh": "中国汉语网连接着世界各地的孔子学院。虽然，中国汉语网现在只有中英文两个版本，但是，在不久的将来，中国汉语网将有更多语言的版本出来，方便世界各地的朋友学习汉语。",
     "vi": "Mạng Hán ngữ Trung Quốc kết nối với các Học viện Khổng Tử trên khắp thế giới. Tuy hiện nay Mạng Hán ngữ Trung Quốc chỉ có hai phiên bản tiếng Trung và tiếng Anh, nhưng trong tương lai không xa sẽ có phiên bản bằng nhiều ngôn ngữ hơn, thuận tiện cho bạn bè khắp nơi trên thế giới học tiếng Hán.",
     "tokens": [["中国","zhōngguó","Trung Quốc"],["汉语","hànyǔ","tiếng Hán"],["网","wǎng","mạng"],["连接","liánjiē","kết nối"],["着","zhe","đang (trợ từ)"],["世界各地","shìjiègèdì","khắp nơi trên thế giới"],["的","de","của (trợ từ)"],["孔子学院","kǒngzixuéyuàn","Học viện Khổng Tử"],["。"],["虽然","suīrán","tuy"],["，"],["中国","zhōngguó","Trung Quốc"],["汉语","hànyǔ","tiếng Hán"],["网","wǎng","mạng"],["现在","xiànzài","bây giờ"],["只有","zhǐyǒu","chỉ có"],["中英文","zhōngyīngwén","tiếng Trung và tiếng Anh"],["两个","liǎnggè","hai (cái)"],["版本","bǎnběn","phiên bản"],["，"],["但是","dànshì","nhưng"],["，"],["在","zài","ở, đang"],["不久","bùjiǔ","không lâu"],["的","de","của (trợ từ)"],["将来","jiānglái","tương lai"],["，"],["中国","zhōngguó","Trung Quốc"],["汉语","hànyǔ","tiếng Hán"],["网","wǎng","mạng"],["将","jiāng","sẽ; đem"],["有","yǒu","có"],["更","gèng","càng, hơn"],["多","duō","nhiều; hơn"],["语言","yǔyán","ngôn ngữ"],["的","de","của (trợ từ)"],["版本","bǎnběn","phiên bản"],["出来","chūlái","ra, xuất hiện"],["，"],["方便","fāngbiàn","thuận tiện"],["世界各地","shìjiègèdì","khắp nơi trên thế giới"],["的","de","của (trợ từ)"],["朋友","péngyǒu","bạn bè"],["学习","xuéxí","học tập"],["汉语","hànyǔ","tiếng Hán"],["。"]]
    }
   ],
   "questions": [
    {
     "q": "这篇文章是什么体裁？",
     "options": ["童话故事","求职信","新闻消息","诗歌"],
     "answer": 2,
     "explain": "Bài mở đầu bằng 新华网北京7月8日电（记者…）— đúng thể thức một bản tin."
    },
    {
     "q": "中国汉语网的最大特点是什么？",
     "options": ["学习的互动","卖汉语书","只有中文版本","免费旅游"],
     "answer": 0,
     "explain": "Nhân viên nói: đặc điểm lớn nhất là sự tương tác trong học tập."
    },
    {
     "q": "在网络社区“北京四合院”里，学习者可以做什么？",
     "options": ["买房子","通过游戏了解北京的建筑和居民生活，同时学习汉语","参加HSK考试","和孔子聊天"],
     "answer": 1,
     "explain": "Qua trò chơi, người học tìm hiểu kiến trúc Bắc Kinh, đời sống cư dân, đồng thời học tiếng Hán."
    }
   ],
   "fills": [{"sentence":"新华网北京7月8日电（_______郭丽琨）中国汉语网8日正式开通，它是为全世界正在快速增长的汉语学习者服务的。","answer":"记者","options":["博客","资源","互动","记者"]},{"sentence":"新华网北京7月8日电（记者郭丽琨）中国汉语网8日_______开通，它是为全世界正在快速增长的汉语学习者服务的。","answer":"正式","options":["社区","资源","互动","正式"]},{"sentence":"汉语网站为人们提供网上汉语教学，上面有丰富的汉语学习知识和中国文化_______。","answer":"资源","options":["社区","博客","正式","资源"]},{"sentence":"中国汉语网的最大特点是学习的_______。","answer":"互动","options":["博客","互动","正式","资源"]},{"sentence":"”因此，互动教室、网络_______、博客成为这个网络的亮点。","answer":"社区","options":["资源","正式","记者","社区"]}]
  },
  {
   "id": "u3t4",
   "unit": 3,
   "no": 4,
   "titleZh": "天津“杨柳青”年画",
   "titleVi": "Tranh Tết “Dương Liễu Thanh” Thiên Tân",
   "note": "",
   "vocab": [
    {
     "hanzi": "喜气洋洋",
     "pinyin": "xǐqì yángyáng",
     "pos": "Thành ngữ",
     "meaning": "Vui mừng hớn hở",
     "exZh": "喜气洋洋的年画",
     "exVi": "Bức tranh Tết rộn ràng vui tươi"
    },
    {
     "hanzi": "年画",
     "pinyin": "niánhuà",
     "pos": "Danh từ",
     "meaning": "Tranh Tết (Niên họa)",
     "exZh": "买几张年画",
     "exVi": "Mua vài bức tranh Tết"
    },
    {
     "hanzi": "杨柳青",
     "pinyin": "Yángliǔqīng",
     "pos": "Địa danh",
     "meaning": "Dương Liễu Thanh",
     "exZh": "天津杨柳青",
     "exVi": "Dương Liễu Thanh ở Thiên Tân"
    },
    {
     "hanzi": "莲花",
     "pinyin": "liánhuā",
     "pos": "Danh từ",
     "meaning": "Hoa sen",
     "exZh": "粉红色的大莲花",
     "exVi": "Bông sen lớn màu hồng phấn"
    },
    {
     "hanzi": "鲤鱼",
     "pinyin": "lǐyú",
     "pos": "Danh từ",
     "meaning": "Cá chép",
     "exZh": "抱着一条鲤鱼",
     "exVi": "Ôm một con cá chép"
    },
    {
     "hanzi": "喜庆",
     "pinyin": "xǐqìng",
     "pos": "Tính từ",
     "meaning": "Vui mừng, ăn mừng",
     "exZh": "充满喜庆欢乐",
     "exVi": "Tràn ngập niềm vui hân hoan"
    }
   ],
   "grammar": [
    {
     "name": "Nói về sự hài hòa / Biểu tượng",
     "struct": "以······最为出名",
     "explain": "Đấy cái gì làm nổi tiếng nhất.",
     "exZh": "中国的年画，以杨柳青最为出名。",
     "exVi": "Tranh Tết của Trung Quốc nổi tiếng nhất là tranh Dương Liễu Thanh."
    },
    {
     "name": "Chơi chữ đồng âm (Hài âm)",
     "struct": "莲年有余 (连年有余)",
     "explain": "Dùng từ đồng âm để gửi gắm ước nguyện tốt đẹp (Liên tục có dư dả).",
     "exZh": "莲花 (莲 - 连) 和 鲤鱼 (余) 代表“连年有余”。",
     "exVi": "Hoa sen (莲 lián đồng âm với 连 lián) và cá chép (鲤鱼, 鱼 yú đồng âm với 余 yú) tượng trưng cho “năm nào cũng dư dả”."
    }
   ],
   "text": [
    {
     "zh": "过去，中国人在过年的时候，总喜欢买几张喜气洋洋的年画。中国的年画，以杨柳青最为出名。杨柳青是一个地名，距离天津市中心16公里，离天津机场30公里。",
     "vi": "Ngày xưa, người Trung Quốc vào dịp Tết luôn thích mua vài bức tranh Tết rộn ràng không khí vui tươi. Tranh Tết của Trung Quốc nổi tiếng nhất là tranh Dương Liễu Thanh. Dương Liễu Thanh là một địa danh, cách trung tâm thành phố Thiên Tân 16 km, cách sân bay Thiên Tân 30 km.",
     "tokens": [["过去","guòqù","trước đây; trôi qua"],["，"],["中国","zhōngguó","Trung Quốc"],["人","rén","người"],["在","zài","ở, đang"],["过年","guònián","ăn Tết"],["的","de","của (trợ từ)"],["时候","shíhòu","lúc, khi"],["，"],["总","zǒng","luôn; tổng"],["喜欢","xǐhuān","thích"],["买","mǎi","mua"],["几张","jǐzhāng","vài tấm"],["喜气洋洋","xǐqì yángyáng","Vui mừng hớn hở"],["的","de","của (trợ từ)"],["年画","niánhuà","Tranh Tết (Niên họa)"],["。"],["中国","zhōngguó","Trung Quốc"],["的","de","của (trợ từ)"],["年画","niánhuà","Tranh Tết (Niên họa)"],["，"],["以","yǐ","lấy, dùng; với"],["杨柳青","Yángliǔqīng","Dương Liễu Thanh"],["最为","zuìwèi","nhất"],["出名","chūmíng","nổi tiếng"],["。"],["杨柳青","Yángliǔqīng","Dương Liễu Thanh"],["是","shì","là"],["一个","yígè","một (cái, người)"],["地名","dìmíng","địa danh"],["，"],["距离","jùlí","cách"],["天津市","tiānjīnshì","thành phố Thiên Tân"],["中心","zhōngxīn","trung tâm"],["16"],["公里","gōnglǐ","ki-lô-mét"],["，"],["离","lí","cách"],["天津","tiānjīn","Thiên Tân"],["机场","jīchǎng","sân bay"],["30"],["公里","gōnglǐ","ki-lô-mét"],["。"]]
    },
    {
     "zh": "这里的年画，历史很长，画的笔法很细，人物很美，色彩很鲜艳，内容也十分丰富，在中国北方地区很出名。",
     "vi": "Tranh Tết ở đây có lịch sử rất lâu đời, nét vẽ rất tinh tế, nhân vật rất đẹp, màu sắc rất tươi tắn, nội dung cũng vô cùng phong phú, rất nổi tiếng ở khu vực miền Bắc Trung Quốc.",
     "tokens": [["这里","zhèlǐ","ở đây"],["的","de","của (trợ từ)"],["年画","niánhuà","Tranh Tết (Niên họa)"],["，"],["历史","lìshǐ","lịch sử"],["很","hěn","rất"],["长","zhǎng","dài; lớn lên"],["，"],["画","huà","tranh; vẽ"],["的","de","của (trợ từ)"],["笔法","bǐfǎ","nét vẽ, bút pháp"],["很","hěn","rất"],["细","xì","tinh tế, mảnh"],["，"],["人物","rénwù","nhân vật"],["很","hěn","rất"],["美","měi","đẹp; Mỹ"],["，"],["色彩","sècǎi","màu sắc"],["很","hěn","rất"],["鲜艳","xiānyàn","tươi tắn"],["，"],["内容","nèiróng","nội dung"],["也","yě","cũng"],["十分","shífēn","vô cùng"],["丰富","fēngfù","phong phú"],["，"],["在","zài","ở, đang"],["中国北方地区","zhōng guó běi fāng dì qū","khu vực miền Bắc Trung Quốc"],["很","hěn","rất"],["出名","chūmíng","nổi tiếng"],["。"]]
    },
    {
     "zh": "“杨柳青”年画的内容，大部分是娃娃。你看，上面这一张，一个活泼可爱的大胖娃娃，脸蛋红红的，笑呵呵的，非常让人喜爱。他手里拿着一朵粉红色的大莲花，还有一片绿油油的莲叶。怀里抱着一条几乎跟他一样大的鲤鱼，上面还有四个字：“莲年有余”。意思是，希望日子过得越来越富，一年一年，东西吃不完、用不完。这表达了中国人对新的一年的美好愿望，整个画充满了喜庆欢乐。",
     "vi": "Nội dung tranh Tết “Dương Liễu Thanh” phần lớn là những em bé. Bạn xem, bức tranh trên đây vẽ một em bé bụ bẫm hoạt bát đáng yêu, má đỏ hồng, cười tươi tắn, vô cùng đáng yêu. Trên tay em cầm một bông sen lớn màu hồng phấn, còn có một chiếc lá sen xanh mướt. Trong lòng em ôm một con cá chép to gần bằng người em, phía trên còn có bốn chữ: “Liên niên hữu dư”. Ý nghĩa là mong ngày tháng ngày càng sung túc, năm này qua năm khác, đồ vật ăn không hết, dùng không hết. Điều này thể hiện mong ước tốt đẹp của người Trung Quốc đối với năm mới, cả bức tranh tràn ngập niềm vui hân hoan.",
     "tokens": [["“"],["杨柳青","Yángliǔqīng","Dương Liễu Thanh"],["”"],["年画","niánhuà","Tranh Tết (Niên họa)"],["的","de","của (trợ từ)"],["内容","nèiróng","nội dung"],["，"],["大部分","dàbùfèn","phần lớn"],["是","shì","là"],["娃娃","wáwá","em bé"],["。"],["你","nǐ","bạn"],["看","kàn","xem, nhìn"],["，"],["上面","shàngmiàn","phía trên"],["这","zhè","này"],["一张","yīzhāng","một tấm, một tờ"],["，"],["一个","yígè","một (cái, người)"],["活泼可爱","huópōkěài","hoạt bát đáng yêu"],["的","de","của (trợ từ)"],["大","dà","to, lớn"],["胖","pàng","béo"],["娃娃","wáwá","em bé"],["，"],["脸蛋","liǎndàn","má"],["红红的","hónghóngde","đỏ hồng"],["，"],["笑呵呵","xiàohēhē","cười hớn hở"],["的","de","của (trợ từ)"],["，"],["非常","fēicháng","vô cùng"],["让","ràng","để, bảo, khiến"],["人","rén","người"],["喜爱","xǐài","yêu thích"],["。"],["他","tā","anh ấy, ông ấy"],["手里","shǒulǐ","trong tay"],["拿","ná","cầm, lấy"],["着","zhe","đang (trợ từ)"],["一朵","yīduǒ","một bông"],["粉红色","fěnhóngsè","màu hồng phấn"],["的","de","của (trợ từ)"],["大","dà","to, lớn"],["莲花","liánhuā","Hoa sen"],["，"],["还有","háiyǒu","còn có"],["一片","yīpiàn","một chiếc (lá), một mảng"],["绿油油","lǜyóuyóu","xanh mướt"],["的","de","của (trợ từ)"],["莲叶","liányè","lá sen"],["。"],["怀里","huáilǐ","trong lòng (ôm)"],["抱","bào","ôm"],["着","zhe","đang (trợ từ)"],["一条","yītiáo","một con, một tuyến"],["几乎","jīhū","gần như"],["跟","gēn","với; theo"],["他","tā","anh ấy, ông ấy"],["一样","yīyàng","giống nhau"],["大","dà","to, lớn"],["的","de","của (trợ từ)"],["鲤鱼","lǐyú","Cá chép"],["，"],["上面","shàngmiàn","phía trên"],["还有","háiyǒu","còn có"],["四个","sìgè","bốn (cái)"],["字","zì","chữ"],["："],["“"],["莲","lián","sen"],["年","nián","năm"],["有余","yǒuyú","có dư"],["”"],["。"],["意思","yìsi","ý nghĩa"],["是","shì","là"],["，"],["希望","xīwàng","hy vọng"],["日子","rìzi","ngày tháng, cuộc sống"],["过","guò","qua; sống, đón"],["得","dé","được; (trợ từ bổ ngữ)"],["越来越","yuèláiyuè","ngày càng"],["富","fù","giàu"],["，"],["一年","yīnián","một năm"],["一年","yīnián","một năm"],["，"],["东西","dōngxī","đồ vật"],["吃不完","chībùwán","ăn không hết"],["、"],["用不完","yòngbùwán","dùng không hết"],["。"],["这","zhè","này"],["表达","biǎodá","thể hiện"],["了","le","rồi (trợ từ)"],["中国","zhōngguó","Trung Quốc"],["人","rén","người"],["对","duì","đối với; đúng"],["新","xīn","mới"],["的","de","của (trợ từ)"],["一年","yīnián","một năm"],["的","de","của (trợ từ)"],["美好愿望","měihǎoyuànwàng","mong ước tốt đẹp"],["，"],["整个","zhěnggè","cả, toàn bộ"],["画","huà","tranh; vẽ"],["充满","chōngmǎn","tràn đầy"],["了","le","rồi (trợ từ)"],["喜庆","xǐqìng","Vui mừng, ăn mừng"],["欢乐","huānlè","vui vẻ, hân hoan"],["。"]]
    }
   ],
   "questions": [
    {
     "q": "杨柳青是什么？",
     "options": ["一个人的名字","一个地名","一种树","一种鱼"],
     "answer": 1,
     "explain": "Bài viết: 杨柳青是一个地名, cách trung tâm Thiên Tân 16 km."
    },
    {
     "q": "“杨柳青”年画的内容大部分是什么？",
     "options": ["山水","娃娃","动物","花草"],
     "answer": 1,
     "explain": "Nội dung tranh Dương Liễu Thanh phần lớn là những em bé (娃娃)."
    },
    {
     "q": "“莲年有余”表达了什么意思？",
     "options": ["希望日子越来越富，东西吃不完、用不完","希望多种莲花","希望多吃鱼","希望孩子长得胖"],
     "answer": 0,
     "explain": "Ý nghĩa là mong ngày tháng ngày càng sung túc, năm nào cũng ăn không hết, dùng không hết."
    }
   ],
   "fills": [{"sentence":"过去，中国人在过年的时候，总喜欢买几张_______的年画。","answer":"喜气洋洋","options":["喜气洋洋","莲花","喜庆","鲤鱼"]},{"sentence":"中国的_______，以杨柳青最为出名。","answer":"年画","options":["年画","鲤鱼","喜庆","喜气洋洋"]},{"sentence":"中国的年画，以_______最为出名。","answer":"杨柳青","options":["鲤鱼","喜庆","莲花","杨柳青"]},{"sentence":"他手里拿着一朵粉红色的大_______，还有一片绿油油的莲叶。","answer":"莲花","options":["喜气洋洋","杨柳青","年画","莲花"]},{"sentence":"怀里抱着一条几乎跟他一样大的_______，上面还有四个字：“莲年有余”。","answer":"鲤鱼","options":["年画","杨柳青","鲤鱼","喜气洋洋"]}]
  },
  {
   "id": "u4t1",
   "unit": 4,
   "no": 1,
   "titleZh": "买牙膏",
   "titleVi": "Mua kem đánh răng",
   "note": "",
   "vocab": [
    {
     "hanzi": "角落",
     "pinyin": "jiǎoluò",
     "pos": "Danh từ",
     "meaning": "Góc, hẻm",
     "exZh": "带到一个角落",
     "exVi": "Dẫn đến một góc"
    },
    {
     "hanzi": "用途",
     "pinyin": "yòngtú",
     "pos": "Danh từ",
     "meaning": "Công dụng",
     "exZh": "多用途牙膏",
     "exVi": "Kem đánh răng đa công dụng"
    },
    {
     "hanzi": "柜台",
     "pinyin": "guìtái",
     "pos": "Danh từ",
     "meaning": "Quầy hàng",
     "exZh": "带到柜台前",
     "exVi": "Dẫn đến trước quầy hàng"
    },
    {
     "hanzi": "伸",
     "pinyin": "shēn",
     "pos": "Động từ",
     "meaning": "Duỗi, vươn",
     "exZh": "手伸向牙膏",
     "exVi": "Đưa tay về phía tuýp kem"
    },
    {
     "hanzi": "后退",
     "pinyin": "hòutuì",
     "pos": "Động từ",
     "meaning": "Lùi lại",
     "exZh": "后退两步",
     "exVi": "Lùi lại hai bước"
    },
    {
     "hanzi": "货架",
     "pinyin": "huòjià",
     "pos": "Danh từ",
     "meaning": "Giá để hàng",
     "exZh": "取下牙膏",
     "exVi": "Lấy kem đánh răng xuống"
    }
   ],
   "grammar": [],
   "text": [
    {
     "zh": "一般是我的妻子为全家人买牙膏。可是现在，我一个人旅行在外，正好没牙膏。我去旅馆附近的一家商店。",
     "vi": "Thường thì vợ tôi là người mua kem đánh răng cho cả nhà. Nhưng lúc này, tôi đang đi du lịch một mình, vừa hay hết kem đánh răng. Tôi đến một cửa hàng gần khách sạn.",
     "tokens": [["一般","yìbān","thông thường, bình thường"],["是","shì","là"],["我","wǒ","tôi"],["的","de","của (trợ từ)"],["妻子","qīzǐ","vợ"],["为","wèi","vì, cho; là"],["全家人","quánjiārén","cả nhà"],["买","mǎi","mua"],["牙膏","yágāo","kem đánh răng"],["。"],["可是","kěshì","nhưng"],["现在","xiànzài","bây giờ"],["，"],["我","wǒ","tôi"],["一个","yígè","một (cái, người)"],["人","rén","người"],["旅行","lǚxíng","du lịch"],["在外","zàiwài","ở bên ngoài"],["，"],["正好","zhènghǎo","vừa hay"],["没","méi","không, chưa"],["牙膏","yágāo","kem đánh răng"],["。"],["我","wǒ","tôi"],["去","qù","đi"],["旅馆","lǚguǎn","khách sạn"],["附近","fùjìn","gần đây"],["的","de","của (trợ từ)"],["一家","yījiā","một (cửa hàng, gia đình)"],["商店","shāngdiàn","cửa hàng"],["。"]]
    },
    {
     "zh": "当我走进商店，一个年轻的先生问我，需要什么。听了我的回答，他想了一想。“请跟我来，”他低声说，把我带到一个角落“是您自己用的吗？”“是的，”我说，“当然，我的妻子和孩子们都能使用。”",
     "vi": "Khi tôi bước vào cửa hàng, một anh thanh niên hỏi tôi cần gì. Nghe tôi trả lời xong, anh ta nghĩ một lúc. “Mời ông đi theo tôi,” anh ta nói nhỏ, rồi dẫn tôi đến một góc. “Là ông tự dùng ạ?” “Đúng vậy,” tôi nói, “đương nhiên vợ và các con tôi cũng có thể dùng.”",
     "tokens": [["当","dāng","khi; làm"],["我","wǒ","tôi"],["走进","zǒujìn","bước vào"],["商店","shāngdiàn","cửa hàng"],["，"],["一个","yígè","một (cái, người)"],["年轻","niánqīng","trẻ"],["的","de","của (trợ từ)"],["先生","xiānshēng","ông, tiên sinh; chồng"],["问","wèn","hỏi"],["我","wǒ","tôi"],["，"],["需要","xūyào","cần"],["什么","shénme","cái gì"],["。"],["听","tīng","nghe"],["了","le","rồi (trợ từ)"],["我","wǒ","tôi"],["的","de","của (trợ từ)"],["回答","huídá","trả lời"],["，"],["他","tā","anh ấy, ông ấy"],["想","xiǎng","nghĩ; muốn"],["了","le","rồi (trợ từ)"],["一","yī","một"],["想","xiǎng","nghĩ; muốn"],["。"],["“"],["请","qǐng","mời"],["跟我来","gēnwǒlái","đi theo tôi"],["，"],["”"],["他","tā","anh ấy, ông ấy"],["低声","dīshēng","nói nhỏ"],["说","shuō","nói"],["，"],["把","bǎ","(giới từ đưa tân ngữ lên trước)"],["我","wǒ","tôi"],["带到","dàidào","đưa đến"],["一个","yígè","một (cái, người)"],["角落","jiǎoluò","Góc, hẻm"],["“"],["是","shì","là"],["您","nín","ông/bà (kính trọng)"],["自己","zìjǐ","bản thân"],["用","yòng","dùng"],["的","de","của (trợ từ)"],["吗","ma","không? (trợ từ hỏi)"],["？"],["”"],["“"],["是","shì","là"],["的","de","của (trợ từ)"],["，"],["”"],["我","wǒ","tôi"],["说","shuō","nói"],["，"],["“"],["当然","dāngrán","đương nhiên"],["，"],["我","wǒ","tôi"],["的","de","của (trợ từ)"],["妻子","qīzǐ","vợ"],["和","hé","và; hòa"],["孩子","háizi","đứa trẻ, con"],["们","men","(hậu tố số nhiều)"],["都","dōu","đều"],["能","néng","có thể"],["使用","shǐyòng","sử dụng"],["。"],["”"]]
    },
    {
     "zh": "“啊！您需要一支多用途牙膏!”“并不完全这样，”我反对说，“我只需要一管用于刷牙的牙膏。”",
     "vi": "“À! Ông cần một tuýp kem đánh răng đa công dụng!” “Không hẳn như vậy,” tôi phản đối, “tôi chỉ cần một tuýp kem dùng để đánh răng thôi.”",
     "tokens": [["“"],["啊","a","à, nhé (trợ từ)"],["！"],["您","nín","ông/bà (kính trọng)"],["需要","xūyào","cần"],["一支","yīzhī","một tuýp, một cây"],["多","duō","nhiều; hơn"],["用途","yòngtú","Công dụng"],["牙膏","yágāo","kem đánh răng"],["!"],["”"],["“"],["并","bìng","lại (nhấn mạnh phủ định); và"],["不","bù","không"],["完全","wánquán","hoàn toàn"],["这样","zhèyàng","như vậy"],["，"],["”"],["我","wǒ","tôi"],["反对","fǎnduì","phản đối"],["说","shuō","nói"],["，"],["“"],["我","wǒ","tôi"],["只","zhǐ","chỉ; con"],["需要","xūyào","cần"],["一","yī","một"],["管","guǎn","tuýp; quản"],["用于","yòngyú","dùng cho"],["刷牙","shuāyá","đánh răng"],["的","de","của (trợ từ)"],["牙膏","yágāo","kem đánh răng"],["。"],["”"]]
    },
    {
     "zh": "他不听我的话，继续说：“好吧，请看，这里有45种多用途家庭用牙膏，他停了一下，看着我，“您用的是电动牙刷还是手动牙刷？”",
     "vi": "Anh ta không nghe tôi nói, tiếp tục: “Được thôi, mời ông xem, ở đây có 45 loại kem đánh răng gia đình đa công dụng.” Anh ta dừng lại một chút, nhìn tôi: “Ông dùng bàn chải điện hay bàn chải tay?”",
     "tokens": [["他","tā","anh ấy, ông ấy"],["不","bù","không"],["听","tīng","nghe"],["我","wǒ","tôi"],["的话","dehuà","nếu ... thì"],["，"],["继续","jìxù","tiếp tục"],["说","shuō","nói"],["："],["“"],["好","hǎo","tốt; rất"],["吧","ba","nhé, đi (trợ từ)"],["，"],["请","qǐng","mời"],["看","kàn","xem, nhìn"],["，"],["这里","zhèlǐ","ở đây"],["有","yǒu","có"],["45"],["种","zhǒng","loại; trồng, nuôi"],["多","duō","nhiều; hơn"],["用途","yòngtú","Công dụng"],["家庭","jiātíng","gia đình"],["用","yòng","dùng"],["牙膏","yágāo","kem đánh răng"],["，"],["他","tā","anh ấy, ông ấy"],["停","tíng","dừng"],["了","le","rồi (trợ từ)"],["一下","yīxià","một chút, một cái"],["，"],["看着","kànzhe","nhìn"],["我","wǒ","tôi"],["，"],["“"],["您","nín","ông/bà (kính trọng)"],["用","yòng","dùng"],["的","de","của (trợ từ)"],["是","shì","là"],["电动牙刷","diàndòngyáshuā","bàn chải điện"],["还是","háishì","hay là; vẫn"],["手动","shǒudòng","bằng tay"],["牙刷","yáshuā","bàn chải đánh răng"],["？"],["”"]]
    },
    {
     "zh": "“老式手动牙刷。”年轻人把我带到柜台前。“这是用于手动牙刷的32种牙膏。",
     "vi": "“Bàn chải tay kiểu cũ.” Anh thanh niên dẫn tôi đến trước quầy hàng. “Đây là 32 loại kem đánh răng dùng cho bàn chải tay.”",
     "tokens": [["“"],["老式","lǎoshì","kiểu cũ"],["手动","shǒudòng","bằng tay"],["牙刷","yáshuā","bàn chải đánh răng"],["。"],["”"],["年轻人","niánqīngrén","người trẻ"],["把","bǎ","(giới từ đưa tân ngữ lên trước)"],["我","wǒ","tôi"],["带到","dàidào","đưa đến"],["柜台","guìtái","Quầy hàng"],["前","qián","trước"],["。"],["“"],["这","zhè","này"],["是","shì","là"],["用于","yòngyú","dùng cho"],["手动","shǒudòng","bằng tay"],["牙刷","yáshuā","bàn chải đánh răng"],["的","de","của (trợ từ)"],["32"],["种","zhǒng","loại; trồng, nuôi"],["牙膏","yágāo","kem đánh răng"],["。"]]
    },
    {
     "zh": "“随便给一只吧。”我赶紧说。",
     "vi": "“Đưa tôi đại một tuýp đi.” Tôi vội nói.",
     "tokens": [["“"],["随便","suíbiàn","tùy ý"],["给","gěi","cho"],["一只","yīzhī","một con, một chiếc"],["吧","ba","nhé, đi (trợ từ)"],["。"],["”"],["我","wǒ","tôi"],["赶紧","gǎnjǐn","vội vàng"],["说","shuō","nói"],["。"]]
    },
    {
     "zh": "他拿着一支牙膏问道：“您一定是想买一种又好用、又好闻的牙膏吧？”“正是这样。”我回答，同时手伸向了牙膏。",
     "vi": "Anh ta cầm một tuýp kem đánh răng hỏi: “Chắc hẳn ông muốn mua một loại kem vừa dễ dùng, vừa thơm phải không?” “Đúng là như vậy.” Tôi trả lời, đồng thời đưa tay về phía tuýp kem.",
     "tokens": [["他","tā","anh ấy, ông ấy"],["拿","ná","cầm, lấy"],["着","zhe","đang (trợ từ)"],["一支","yīzhī","một tuýp, một cây"],["牙膏","yágāo","kem đánh răng"],["问道","wèndào","hỏi"],["："],["“"],["您","nín","ông/bà (kính trọng)"],["一定","yídìng","nhất định, chắc chắn"],["是","shì","là"],["想","xiǎng","nghĩ; muốn"],["买","mǎi","mua"],["一种","yīzhǒng","một loại"],["又","yòu","lại"],["好","hǎo","tốt; rất"],["用","yòng","dùng"],["、"],["又","yòu","lại"],["好闻","hǎowén","thơm"],["的","de","của (trợ từ)"],["牙膏","yágāo","kem đánh răng"],["吧","ba","nhé, đi (trợ từ)"],["？"],["”"],["“"],["正是","zhèngshì","chính là"],["这样","zhèyàng","như vậy"],["。"],["”"],["我","wǒ","tôi"],["回答","huídá","trả lời"],["，"],["同时","tóngshí","đồng thời"],["手","shǒu","tay"],["伸","shēn","Duỗi, vươn"],["向","xiàng","hướng về, với"],["了","le","rồi (trợ từ)"],["牙膏","yágāo","kem đánh răng"],["。"]]
    },
    {
     "zh": "可是他马上把牙膏藏在背后。“这种牙膏对您不合适！”我说：“为什么？”",
     "vi": "Nhưng anh ta lập tức giấu tuýp kem ra sau lưng. “Loại kem này không hợp với ông!” Tôi hỏi: “Tại sao?”",
     "tokens": [["可是","kěshì","nhưng"],["他","tā","anh ấy, ông ấy"],["马上","mǎshàng","lập tức"],["把","bǎ","(giới từ đưa tân ngữ lên trước)"],["牙膏","yágāo","kem đánh răng"],["藏","cáng","giấu, ẩn chứa"],["在","zài","ở, đang"],["背后","bèihòu","sau lưng"],["。"],["“"],["这种","zhèzhǒng","loại này"],["牙膏","yágāo","kem đánh răng"],["对","duì","đối với; đúng"],["您","nín","ông/bà (kính trọng)"],["不","bù","không"],["合适","héshì","phù hợp"],["！"],["”"],["我","wǒ","tôi"],["说","shuō","nói"],["："],["“"],["为什么","wèishénme","tại sao"],["？"],["”"]]
    },
    {
     "zh": "他后退两步对我说：“您很瘦，我建议您用这种。”“好吧，给我一支。” 我叹了一口气。",
     "vi": "Anh ta lùi lại hai bước nói với tôi: “Ông rất gầy, tôi khuyên ông dùng loại này.” “Được thôi, cho tôi một tuýp.” Tôi thở dài một hơi.",
     "tokens": [["他","tā","anh ấy, ông ấy"],["后退","hòutuì","Lùi lại"],["两步","liǎngbù","hai bước"],["对","duì","đối với; đúng"],["我","wǒ","tôi"],["说","shuō","nói"],["："],["“"],["您","nín","ông/bà (kính trọng)"],["很瘦","hěnshòu","rất gầy"],["，"],["我","wǒ","tôi"],["建议您","jiànyìnín","khuyên ông"],["用","yòng","dùng"],["这种","zhèzhǒng","loại này"],["。"],["”"],["“"],["好","hǎo","tốt; rất"],["吧","ba","nhé, đi (trợ từ)"],["，"],["给","gěi","cho"],["我","wǒ","tôi"],["一支","yīzhī","một tuýp, một cây"],["。"],["”"],[" "],["我","wǒ","tôi"],["叹","tàn","thở dài"],["了","le","rồi (trợ từ)"],["一口气","yìkǒuqì","một hơi"],["。"]]
    },
    {
     "zh": "“但我们不能忘记您的夫人也要用这种牙膏，”他说，“请告诉我您夫人头发的颜色？”“黑色。”“那么，我建议您买这种。”我同意了。",
     "vi": "“Nhưng chúng ta không thể quên là phu nhân của ông cũng dùng loại kem này,” anh ta nói, “xin ông cho biết tóc của phu nhân màu gì?” “Màu đen.” “Vậy thì tôi khuyên ông mua loại này.” Tôi đồng ý.",
     "tokens": [["“"],["但","dàn","nhưng"],["我们","wǒmen","chúng tôi"],["不能","bùnéng","không thể"],["忘记","wàngjì","quên"],["您","nín","ông/bà (kính trọng)"],["的","de","của (trợ từ)"],["夫人","fūrén","phu nhân"],["也","yě","cũng"],["要","yào","muốn; phải"],["用","yòng","dùng"],["这种","zhèzhǒng","loại này"],["牙膏","yágāo","kem đánh răng"],["，"],["”"],["他","tā","anh ấy, ông ấy"],["说","shuō","nói"],["，"],["“"],["请","qǐng","mời"],["告诉","gàosù","nói cho biết"],["我","wǒ","tôi"],["您","nín","ông/bà (kính trọng)"],["夫人","fūrén","phu nhân"],["头发","tóufà","tóc"],["的","de","của (trợ từ)"],["颜色","yánsè","màu sắc"],["？"],["”"],["“"],["黑色","hēisè","màu đen"],["。"],["”"],["“"],["那么","nàme","như thế; vậy thì"],["，"],["我","wǒ","tôi"],["建议您","jiànyìnín","khuyên ông"],["买","mǎi","mua"],["这种","zhèzhǒng","loại này"],["。"],["”"],["我","wǒ","tôi"],["同意","tóngyì","đồng ý"],["了","le","rồi (trợ từ)"],["。"]]
    },
    {
     "zh": "“这里有4种价格的牙膏。”他又说。“随便给我一支吧。”我回答。他转过身，从货架上取下了6支牙膏。",
     "vi": "“Ở đây có kem đánh răng với 4 mức giá.” Anh ta lại nói. “Đưa đại tôi một tuýp đi.” Tôi trả lời. Anh ta quay người, lấy xuống 6 tuýp kem đánh răng từ trên giá hàng.",
     "tokens": [["“"],["这里","zhèlǐ","ở đây"],["有","yǒu","có"],["4"],["种","zhǒng","loại; trồng, nuôi"],["价格","jiàgé","giá cả"],["的","de","của (trợ từ)"],["牙膏","yágāo","kem đánh răng"],["。"],["”"],["他","tā","anh ấy, ông ấy"],["又","yòu","lại"],["说","shuō","nói"],["。"],["“"],["随便","suíbiàn","tùy ý"],["给","gěi","cho"],["我","wǒ","tôi"],["一支","yīzhī","một tuýp, một cây"],["吧","ba","nhé, đi (trợ từ)"],["。"],["”"],["我","wǒ","tôi"],["回答","huídá","trả lời"],["。"],["他","tā","anh ấy, ông ấy"],["转过身","zhuǎnguòshēn","quay người"],["，"],["从","cóng","từ"],["货架","huòjià","Giá để hàng"],["上","shàng","trên; lên"],["取","qǔ","lấy"],["下","xià","dưới; xuống"],["了","le","rồi (trợ từ)"],["6"],["支","zhī","tuýp, cây"],["牙膏","yágāo","kem đánh răng"],["。"]]
    },
    {
     "zh": "我一下子冲出门外，我听见他还在问：“您能告诉我，您想要多少钱的？因为我们有……”",
     "vi": "Tôi lập tức lao ra khỏi cửa, vẫn còn nghe thấy anh ta hỏi: “Ông có thể cho tôi biết ông muốn loại giá bao nhiêu không? Vì chúng tôi có...”",
     "tokens": [["我","wǒ","tôi"],["一下子","yīxiàzi","lập tức, bỗng chốc"],["冲出","chōngchū","lao ra"],["门外","ménwài","ngoài cửa"],["，"],["我","wǒ","tôi"],["听见","tīngjiàn","nghe thấy"],["他","tā","anh ấy, ông ấy"],["还","hái","còn, vẫn"],["在","zài","ở, đang"],["问","wèn","hỏi"],["："],["“"],["您","nín","ông/bà (kính trọng)"],["能","néng","có thể"],["告诉","gàosù","nói cho biết"],["我","wǒ","tôi"],["，"],["您","nín","ông/bà (kính trọng)"],["想要","xiǎngyào","muốn"],["多少钱","duōshǎoqián","bao nhiêu tiền"],["的","de","của (trợ từ)"],["？"],["因为","yīnwèi","bởi vì"],["我们","wǒmen","chúng tôi"],["有","yǒu","có"],["…"],["…"],["”"]]
    }
   ],
   "questions": [
    {
     "q": "“我”为什么要自己去买牙膏？",
     "options": ["妻子生病了","一个人在外旅行，正好没牙膏了","想买新的牌子","商店打折"],
     "answer": 1,
     "explain": "Tác giả đang đi du lịch một mình và vừa hay hết kem đánh răng."
    },
    {
     "q": "年轻的先生为什么建议“我”用一种牙膏？",
     "options": ["因为“我”很瘦","因为“我”很胖","因为“我”的牙不好","因为“我”喜欢甜的"],
     "answer": 0,
     "explain": "Anh ta lùi lại hai bước rồi nói: 您很瘦，我建议您用这种."
    },
    {
     "q": "最后“我”为什么冲出了商店？",
     "options": ["牙膏太贵了","售货员问得太多，太麻烦了","商店要关门了","“我”忘了带钱"],
     "answer": 1,
     "explain": "Người bán hỏi đi hỏi lại quá nhiều chi tiết không cần thiết, khiến tác giả không chịu nổi."
    }
   ],
   "fills": [{"sentence":"“请跟我来，”他低声说，把我带到一个_______“是您自己用的吗？","answer":"角落","options":["用途","伸","后退","角落"]},{"sentence":"您需要一支多_______牙膏!","answer":"用途","options":["货架","后退","柜台","用途"]},{"sentence":"”年轻人把我带到_______前。","answer":"柜台","options":["后退","用途","柜台","角落"]},{"sentence":"”我回答，同时手_______向了牙膏。","answer":"伸","options":["后退","柜台","角落","伸"]},{"sentence":"”他_______两步对我说：“您很瘦，我建议您用这种。","answer":"后退","options":["角落","用途","后退","伸"]}]
  },
  {
   "id": "u4t2",
   "unit": 4,
   "no": 2,
   "titleZh": "一封求职信",
   "titleVi": "Một bức thư xin việc",
   "note": "",
   "vocab": [
    {
     "hanzi": "审阅",
     "pinyin": "shěnyuè",
     "pos": "Động từ",
     "meaning": "Thẩm duyệt, xem xét",
     "exZh": "审阅我的材料",
     "exVi": "Xem xét hồ sơ của tôi"
    },
    {
     "hanzi": "应届",
     "pinyin": "yīngjiè",
     "pos": "Tính từ",
     "meaning": "Khóa này / Mới tốt nghiệp",
     "exZh": "应届毕业生",
     "exVi": "Sinh viên tốt nghiệp năm nay"
    },
    {
     "hanzi": "即将",
     "pinyin": "jíjiāng",
     "pos": "Phó từ",
     "meaning": "Sắp, chuẩn bị",
     "exZh": "即将完成课程",
     "exVi": "Sắp hoàn thành chương trình học"
    },
    {
     "hanzi": "实践",
     "pinyin": "shíjiàn",
     "pos": "Danh từ/Động từ",
     "meaning": "Thực tiễn",
     "exZh": "课外实践",
     "exVi": "Hoạt động thực tiễn ngoại khóa"
    },
    {
     "hanzi": "义务",
     "pinyin": "yìwù",
     "pos": "Danh từ/Tính từ",
     "meaning": "Nghĩa vụ, tình nguyện",
     "exZh": "义务宣传",
     "exVi": "Tuyên truyền tình nguyện"
    },
    {
     "hanzi": "格言",
     "pinyin": "géyán",
     "pos": "Danh từ",
     "meaning": "Châm ngôn",
     "exZh": "人生格言",
     "exVi": "Châm ngôn sống"
    }
   ],
   "grammar": [
    {
     "name": "Càng... càng...",
     "struct": "活到老，学到老",
     "explain": "Châm ngôn diễn tả việc học tập suốt đời.",
     "exZh": "一个人应该“活到老，学到老”。",
     "exVi": "Một người nên “sống đến già, học đến già”."
    }
   ],
   "text": [
    {
     "zh": "尊敬的王先生：",
     "vi": "Kính gửi ông Vương:",
     "tokens": [["尊敬","zūnjìng","tôn kính"],["的","de","của (trợ từ)"],["王先生","wángxiānshēng","ông Vương"],["："]]
    },
    {
     "zh": "您好！感谢您在百忙之中审阅我的材料。",
     "vi": "Chào ông! Cảm ơn ông đã dành thời gian quý báu xem xét hồ sơ của tôi.",
     "tokens": [["您好","nínhǎo","xin chào"],["！"],["感谢您","gǎnxiènín","cảm ơn ông"],["在","zài","ở, đang"],["百忙之中","bǎimángzhīzhōng","giữa lúc bận rộn"],["审阅","shěnyuè","Thẩm duyệt, xem xét"],["我","wǒ","tôi"],["的","de","của (trợ từ)"],["材料","cáiliào","hồ sơ, tài liệu"],["。"]]
    },
    {
     "zh": "我是北京大学生物工程系的应届毕业生，即将完成大学课程。",
     "vi": "Tôi là sinh viên năm cuối khoa Kỹ thuật Sinh học của Đại học Bắc Kinh, sắp hoàn thành chương trình đại học.",
     "tokens": [["我","wǒ","tôi"],["是","shì","là"],["北京大学","běijīngdàxué","Đại học Bắc Kinh"],["生物","shēngwù","sinh vật; sinh học"],["工程系","gōngchéngxì","khoa kỹ thuật"],["的","de","của (trợ từ)"],["应届","yīngjiè","Khóa này / Mới tốt nghiệp"],["毕业生","bìyèshēng","sinh viên tốt nghiệp"],["，"],["即将","jíjiāng","Sắp, chuẩn bị"],["完成","wánchéng","hoàn thành"],["大学","dàxué","đại học"],["课程","kèchéng","chương trình học"],["。"]]
    },
    {
     "zh": "四年前，我考入了北京大学，我一直努力使自己成为一名高水平的、具有多方面知识的人。",
     "vi": "Bốn năm trước, tôi thi đỗ vào Đại học Bắc Kinh, tôi luôn nỗ lực để bản thân trở thành một người có trình độ cao, có kiến thức về nhiều mặt.",
     "tokens": [["四年","sìnián","bốn năm"],["前","qián","trước"],["，"],["我","wǒ","tôi"],["考入","kǎorù","thi đỗ vào"],["了","le","rồi (trợ từ)"],["北京大学","běijīngdàxué","Đại học Bắc Kinh"],["，"],["我","wǒ","tôi"],["一直","yìzhí","luôn luôn, suốt"],["努力","nǔlì","nỗ lực"],["使","shǐ","khiến, làm cho"],["自己","zìjǐ","bản thân"],["成为","chéngwéi","trở thành"],["一名","yīmíng","một (người)"],["高水平","gāoshuǐpíng","trình độ cao"],["的","de","của (trợ từ)"],["、"],["具有","jùyǒu","có"],["多方面","duōfāngmiàn","nhiều mặt"],["知识","zhīshí","kiến thức"],["的","de","của (trợ từ)"],["人","rén","người"],["。"]]
    },
    {
     "zh": "在校期间，除了认真学习专业课程之外，我还积极参加各种课外实践活动。我曾经担任过本系学生会干部、学校排球协会的主要负责人，多次组织并参加了社会义务宣传活动。这些经历不仅锻炼了我的社会适应能力，而且培养了我与人合作的精神和坚定的意志。",
     "vi": "Trong thời gian học ở trường, ngoài việc chăm chỉ học các môn chuyên ngành, tôi còn tích cực tham gia các hoạt động thực tiễn ngoại khóa. Tôi từng làm cán bộ hội sinh viên của khoa, người phụ trách chính của câu lạc bộ bóng chuyền của trường, nhiều lần tổ chức và tham gia các hoạt động tuyên truyền tình nguyện xã hội. Những trải nghiệm này không chỉ rèn luyện khả năng thích ứng với xã hội của tôi, mà còn bồi dưỡng tinh thần hợp tác với người khác và ý chí kiên định của tôi.",
     "tokens": [["在校","zàixiào","ở trường"],["期间","qījiān","trong thời gian"],["，"],["除了","chúle","ngoài ... ra"],["认真学习","rènzhēnxuéxí","chăm chỉ học"],["专业课程","zhuānyèkèchéng","môn chuyên ngành"],["之外","zhīwài","ngoài ra"],["，"],["我","wǒ","tôi"],["还","hái","còn, vẫn"],["积极","jījí","tích cực"],["参加","cānjiā","tham gia"],["各种","gèzhǒng","các loại"],["课外","kèwài","ngoại khóa"],["实践","shíjiàn","Thực tiễn"],["活动","huódòng","hoạt động"],["。"],["我","wǒ","tôi"],["曾经","céngjīng","đã từng"],["担任","dānrèn","đảm nhiệm"],["过","guò","qua; sống, đón"],["本","běn","vốn; quyển"],["系","xì","khoa"],["学生会","xuéshēnghuì","hội sinh viên"],["干部","gànbù","cán bộ"],["、"],["学校","xuéxiào","trường học"],["排球","páiqiú","bóng chuyền"],["协会","xiéhuì","hiệp hội, câu lạc bộ"],["的","de","của (trợ từ)"],["主要","zhǔyào","chủ yếu"],["负责人","fùzérén","người phụ trách"],["，"],["多次","duōcì","nhiều lần"],["组织","zǔzhī","tổ chức"],["并","bìng","lại (nhấn mạnh phủ định); và"],["参加","cānjiā","tham gia"],["了","le","rồi (trợ từ)"],["社会","shèhuì","xã hội"],["义务","yìwù","Nghĩa vụ, tình nguyện"],["宣传","xuānchuán","tuyên truyền"],["活动","huódòng","hoạt động"],["。"],["这些","zhèxiē","những ... này"],["经历","jīnglì","trải qua"],["不仅","bùjǐn","không chỉ"],["锻炼","duànliàn","rèn luyện"],["了","le","rồi (trợ từ)"],["我","wǒ","tôi"],["的","de","của (trợ từ)"],["社会","shèhuì","xã hội"],["适应能力","shìyìngnénglì","khả năng thích ứng"],["，"],["而且","érqiě","hơn nữa"],["培养","péiyǎng","bồi dưỡng"],["了","le","rồi (trợ từ)"],["我","wǒ","tôi"],["与","yǔ","và, với"],["人","rén","người"],["合作","hézuò","hợp tác"],["的","de","của (trợ từ)"],["精神","jīngshén","tinh thần"],["和","hé","và; hòa"],["坚定","jiāndìng","kiên định"],["的","de","của (trợ từ)"],["意志","yìzhì","ý chí"],["。"]]
    },
    {
     "zh": "我很年轻，经验不足，但我相信，我会不断进步。我知道，一个人应该“活到老，学到老”，因为“学到老，学不了”。这是我的人生格言。",
     "vi": "Tôi còn trẻ, kinh nghiệm chưa nhiều, nhưng tôi tin rằng tôi sẽ không ngừng tiến bộ. Tôi biết, một người nên “sống đến già, học đến già”, bởi vì “học đến già vẫn học chưa hết”. Đây là châm ngôn sống của tôi.",
     "tokens": [["我","wǒ","tôi"],["很","hěn","rất"],["年轻","niánqīng","trẻ"],["，"],["经验不足","jīngyànbùzú","thiếu kinh nghiệm"],["，"],["但","dàn","nhưng"],["我","wǒ","tôi"],["相信","xiāngxìn","tin tưởng"],["，"],["我会","wǒhuì","tôi sẽ"],["不断进步","bùduànjìnbù","không ngừng tiến bộ"],["。"],["我","wǒ","tôi"],["知道","zhīdào","biết"],["，"],["一个","yígè","một (cái, người)"],["人","rén","người"],["应该","yīnggāi","nên"],["“"],["活到老","huódàolǎo","sống đến già"],["，"],["学到老","xuédàolǎo","học đến già"],["”"],["，"],["因为","yīnwèi","bởi vì"],["“"],["学到老","xuédàolǎo","học đến già"],["，"],["学","xué","học"],["不了","bùliǎo","không hết, không xong"],["”"],["。"],["这","zhè","này"],["是","shì","là"],["我","wǒ","tôi"],["的","de","của (trợ từ)"],["人生","rénshēng","đời người"],["格言","géyán","Châm ngôn"],["。"]]
    },
    {
     "zh": "请您给我一个机会。谢谢您！",
     "vi": "Xin ông cho tôi một cơ hội. Cảm ơn ông!",
     "tokens": [["请","qǐng","mời"],["您","nín","ông/bà (kính trọng)"],["给","gěi","cho"],["我","wǒ","tôi"],["一个","yígè","một (cái, người)"],["机会","jīhuì","cơ hội"],["。"],["谢谢您","xièxiènín","cảm ơn ông"],["！"]]
    },
    {
     "zh": "此致",
     "vi": "Trân trọng",
     "tokens": [["此致","cǐzhì","trân trọng (cuối thư)"]]
    },
    {
     "zh": "敬礼!",
     "vi": "Kính chào!",
     "tokens": [["敬礼","jìnglǐ","kính chào"],["!"]]
    },
    {
     "zh": "叶飞",
     "vi": "Diệp Phi",
     "tokens": [["叶飞","yèfēi","Diệp Phi (tên người)"]]
    },
    {
     "zh": "2011年3月27日",
     "vi": "Ngày 27 tháng 3 năm 2011",
     "tokens": [["2011"],["年","nián","năm"],["3"],["月","yuè","trăng; tháng"],["27"],["日","rì","ngày; mặt trời"]]
    }
   ],
   "questions": [
    {
     "q": "写这封信的人是谁？",
     "options": ["北京大学的老师","北京大学生物工程系的应届毕业生","一家公司的经理","王先生的儿子"],
     "answer": 1,
     "explain": "Người viết là sinh viên năm cuối khoa Kỹ thuật Sinh học, Đại học Bắc Kinh."
    },
    {
     "q": "在校期间，写信人参加过哪些活动？",
     "options": ["担任学生会干部、排球协会负责人，组织义务宣传活动","只认真学习专业课","在公司打工","去外国留学"],
     "answer": 0,
     "explain": "Từng làm cán bộ hội sinh viên, phụ trách CLB bóng chuyền, tổ chức hoạt động tuyên truyền tình nguyện."
    },
    {
     "q": "写信人的人生格言是什么？",
     "options": ["多一个朋友多一条路","活到老，学到老","该哭就哭","塞翁失马，安知非福"],
     "answer": 1,
     "explain": "Châm ngôn của người viết: 活到老，学到老 (sống đến già, học đến già)."
    }
   ],
   "fills": [{"sentence":"感谢您在百忙之中_______我的材料。","answer":"审阅","options":["格言","实践","义务","审阅"]},{"sentence":"我是北京大学生物工程系的_______毕业生，即将完成大学课程。","answer":"应届","options":["义务","审阅","格言","应届"]},{"sentence":"我是北京大学生物工程系的应届毕业生，_______完成大学课程。","answer":"即将","options":["审阅","义务","即将","格言"]},{"sentence":"在校期间，除了认真学习专业课程之外，我还积极参加各种课外_______活动。","answer":"实践","options":["实践","格言","义务","审阅"]},{"sentence":"我曾经担任过本系学生会干部、学校排球协会的主要负责人，多次组织并参加了社会_______宣传活动。","answer":"义务","options":["实践","格言","审阅","义务"]}]
  },
  {
   "id": "u4t3",
   "unit": 4,
   "no": 3,
   "titleZh": "该哭就哭",
   "titleVi": "Nên khóc thì cứ khóc",
   "note": "",
   "vocab": [
    {
     "hanzi": "情绪",
     "pinyin": "qíngxù",
     "pos": "Danh từ",
     "meaning": "Tâm trạng, cảm xúc",
     "exZh": "伤心的情绪",
     "exVi": "Cảm xúc đau buồn"
    },
    {
     "hanzi": "积累",
     "pinyin": "jīlěi",
     "pos": "Động từ/Danh từ",
     "meaning": "Tích lũy",
     "exZh": "积累多了",
     "exVi": "Tích tụ nhiều rồi"
    },
    {
     "hanzi": "疾病",
     "pinyin": "jíbìng",
     "pos": "Danh từ",
     "meaning": "Bệnh tật",
     "exZh": "疾病就会来到",
     "exVi": "Bệnh tật sẽ tìm đến"
    },
    {
     "hanzi": "败",
     "pinyin": "bài",
     "pos": "Động từ",
     "meaning": "Thua, thất bại",
     "exZh": "胜了还是败了",
     "exVi": "Thắng hay thua"
    }
   ],
   "grammar": [
    {
     "name": "Nên... thì...",
     "struct": "该······就······",
     "explain": "Biểu thị sự thuận theo tự nhiên, nên làm gì thì cứ làm.",
     "exZh": "为了快乐和健康，我们应当学会：该哭就哭。",
     "exVi": "Vì niềm vui và sức khỏe, chúng ta nên học cách: nên khóc thì cứ khóc."
    }
   ],
   "text": [
    {
     "zh": "一位大学教授告诉我，他每次遇到压力和困难，就放开一切，去看场电影，“我选择一部特别伤感的片子，大哭一场。”",
     "vi": "Một vị giáo sư đại học nói với tôi, mỗi lần gặp áp lực và khó khăn, ông lại gác lại mọi thứ, đi xem một bộ phim, “Tôi chọn một bộ phim đặc biệt buồn, khóc một trận thật to.”",
     "tokens": [["一位","yīwèi","một vị, một người"],["大学教授","dàxuéjiàoshòu","giáo sư đại học"],["告诉","gàosù","nói cho biết"],["我","wǒ","tôi"],["，"],["他","tā","anh ấy, ông ấy"],["每次","měicì","mỗi lần"],["遇到","yùdào","gặp phải"],["压力","yālì","áp lực"],["和","hé","và; hòa"],["困难","kùnnán","khó khăn"],["，"],["就","jiù","thì, liền"],["放开","fàngkāi","buông thả; gác lại"],["一切","yīqiè","tất cả, mọi thứ"],["，"],["去","qù","đi"],["看场","kànchǎng","xem một bộ"],["电影","diànyǐng","phim"],["，"],["“"],["我","wǒ","tôi"],["选择","xuǎnzé","lựa chọn"],["一部","yībù","một bộ (phim)"],["特别","tèbié","đặc biệt"],["伤感","shānggǎn","buồn thương, cảm động"],["的","de","của (trợ từ)"],["片子","piānzi","bộ phim"],["，"],["大哭","dàkū","khóc to"],["一场","yīcháng","một trận, một bộ"],["。"],["”"]]
    },
    {
     "zh": "一位有三个孩子的年轻母亲，也用同样的办法。每当孩子太吵闹，或者家里没钱，不能再买一件孩子的冬衣时，她就把孩子们送到奶奶家去玩，她自己留在家里，听听音乐，哭一场。",
     "vi": "Một người mẹ trẻ có ba con cũng dùng cách tương tự. Mỗi khi con cái quá ồn ào, hoặc nhà không có tiền, không thể mua thêm một chiếc áo mùa đông cho con, cô lại gửi các con sang nhà bà nội chơi, còn mình ở nhà nghe nhạc, khóc một trận.",
     "tokens": [["一位","yīwèi","một vị, một người"],["有","yǒu","có"],["三个","sāngè","ba (cái, người)"],["孩子","háizi","đứa trẻ, con"],["的","de","của (trợ từ)"],["年轻","niánqīng","trẻ"],["母亲","mǔqīn","mẹ"],["，"],["也","yě","cũng"],["用","yòng","dùng"],["同样","tóngyàng","giống nhau, tương tự"],["的","de","của (trợ từ)"],["办法","bànfǎ","cách, biện pháp"],["。"],["每当","měidāng","mỗi khi"],["孩子","háizi","đứa trẻ, con"],["太","tài","quá"],["吵闹","chǎonào","ồn ào"],["，"],["或者","huòzhě","hoặc"],["家里","jiālǐ","trong nhà"],["没","méi","không, chưa"],["钱","qián","tiền"],["，"],["不能","bùnéng","không thể"],["再","zài","lại, nữa"],["买","mǎi","mua"],["一件","yījiàn","một (việc, chiếc)"],["孩子","háizi","đứa trẻ, con"],["的","de","của (trợ từ)"],["冬衣","dōngyī","áo mùa đông"],["时","shí","lúc, khi"],["，"],["她","tā","cô ấy, bà ấy"],["就","jiù","thì, liền"],["把","bǎ","(giới từ đưa tân ngữ lên trước)"],["孩子","háizi","đứa trẻ, con"],["们","men","(hậu tố số nhiều)"],["送到","sòngdào","đưa đến"],["奶奶家","nǎinǎijiā","nhà bà nội"],["去","qù","đi"],["玩","wán","chơi"],["，"],["她","tā","cô ấy, bà ấy"],["自己","zìjǐ","bản thân"],["留在","liúzài","ở lại"],["家里","jiālǐ","trong nhà"],["，"],["听听","tīngtīng","nghe một chút"],["音乐","yīnyuè","âm nhạc"],["，"],["哭","kū","khóc"],["一场","yīcháng","một trận, một bộ"],["。"]]
    },
    {
     "zh": "你可能说，这是无能的表现。我以为，这些人找到了有用的方法，它可以避免伤害自己的身体。",
     "vi": "Bạn có thể nói đây là biểu hiện của sự bất lực. Tôi lại cho rằng những người này đã tìm ra một cách hữu ích, nó có thể tránh làm tổn hại đến cơ thể mình.",
     "tokens": [["你","nǐ","bạn"],["可能","kěnéng","có thể"],["说","shuō","nói"],["，"],["这","zhè","này"],["是","shì","là"],["无能","wúnéng","bất lực"],["的","de","của (trợ từ)"],["表现","biǎoxiàn","biểu hiện, thể hiện"],["。"],["我","wǒ","tôi"],["以为","yǐwéi","tưởng rằng, cho rằng"],["，"],["这些","zhèxiē","những ... này"],["人","rén","người"],["找到","zhǎodào","tìm thấy"],["了","le","rồi (trợ từ)"],["有用","yǒuyòng","có ích"],["的","de","của (trợ từ)"],["方法","fāngfǎ","phương pháp"],["，"],["它","tā","nó"],["可以","kěyǐ","có thể"],["避免","bìmiǎn","tránh"],["伤害","shānghài","làm tổn thương"],["自己","zìjǐ","bản thân"],["的","de","của (trợ từ)"],["身体","shēntǐ","cơ thể"],["。"]]
    },
    {
     "zh": "许多人都认为，眼泪一定是特别伤心的表现。有时，一个人伤心的情绪，是一点一点增加的，时间长了，积累多了，结果就会哭。一个人如果伤心，可是不能哭，疾病就会来到。",
     "vi": "Nhiều người cho rằng nước mắt nhất định là biểu hiện của sự đau lòng tột độ. Có khi, cảm xúc buồn của một người tăng lên từng chút một, lâu dần, tích tụ nhiều rồi, kết quả là sẽ khóc. Một người nếu buồn mà không thể khóc thì bệnh tật sẽ tìm đến.",
     "tokens": [["许多","xǔduō","nhiều"],["人","rén","người"],["都","dōu","đều"],["认为","rènwéi","cho rằng"],["，"],["眼泪","yǎnlèi","nước mắt"],["一定","yídìng","nhất định, chắc chắn"],["是","shì","là"],["特别","tèbié","đặc biệt"],["伤心","shāngxīn","đau lòng, buồn"],["的","de","của (trợ từ)"],["表现","biǎoxiàn","biểu hiện, thể hiện"],["。"],["有时","yǒushí","có lúc"],["，"],["一个","yígè","một (cái, người)"],["人","rén","người"],["伤心","shāngxīn","đau lòng, buồn"],["的","de","của (trợ từ)"],["情绪","qíngxù","Tâm trạng, cảm xúc"],["，"],["是","shì","là"],["一点一点","yìdiǎnyìdiǎn","từng chút một"],["增加","zēngjiā","tăng thêm"],["的","de","của (trợ từ)"],["，"],["时间","shíjiān","thời gian"],["长","zhǎng","dài; lớn lên"],["了","le","rồi (trợ từ)"],["，"],["积累","jīlěi","Tích lũy"],["多","duō","nhiều; hơn"],["了","le","rồi (trợ từ)"],["，"],["结果","jiéguǒ","kết quả"],["就","jiù","thì, liền"],["会","huì","sẽ; biết"],["哭","kū","khóc"],["。"],["一个","yígè","một (cái, người)"],["人","rén","người"],["如果","rúguǒ","nếu"],["伤心","shāngxīn","đau lòng, buồn"],["，"],["可是","kěshì","nhưng"],["不能","bùnéng","không thể"],["哭","kū","khóc"],["，"],["疾病","jíbìng","Bệnh tật"],["就","jiù","thì, liền"],["会","huì","sẽ; biết"],["来到","láidào","đến"],["。"]]
    },
    {
     "zh": "哭是很自然的事，但好像并不那么容易。小孩子，可以随便哭，但是爱哭的孩子总是让人讨厌的；女人，哭的时候比较多。伤心可以哭，高兴极了，也可以哭；男人，却不能随便哭泣，否则，就不像个男人。",
     "vi": "Khóc là chuyện rất tự nhiên, nhưng dường như không dễ dàng như vậy. Trẻ con có thể khóc tùy ý, nhưng đứa trẻ hay khóc luôn khiến người ta khó chịu; phụ nữ thì khóc nhiều hơn, buồn có thể khóc, vui quá cũng có thể khóc; còn đàn ông lại không thể tùy tiện khóc lóc, nếu không thì chẳng ra dáng đàn ông.",
     "tokens": [["哭","kū","khóc"],["是","shì","là"],["很","hěn","rất"],["自然","zìrán","tự nhiên"],["的","de","của (trợ từ)"],["事","shì","việc"],["，"],["但","dàn","nhưng"],["好像","hǎoxiàng","hình như"],["并","bìng","lại (nhấn mạnh phủ định); và"],["不","bù","không"],["那么","nàme","như thế; vậy thì"],["容易","róngyì","dễ"],["。"],["小孩子","xiǎoháizi","trẻ con"],["，"],["可以","kěyǐ","có thể"],["随便","suíbiàn","tùy ý"],["哭","kū","khóc"],["，"],["但是","dànshì","nhưng"],["爱哭","àikū","hay khóc"],["的","de","của (trợ từ)"],["孩子","háizi","đứa trẻ, con"],["总是","zǒngshì","luôn luôn"],["让","ràng","để, bảo, khiến"],["人","rén","người"],["讨厌","tǎoyàn","ghét, khó chịu"],["的","de","của (trợ từ)"],["；"],["女人","nǚrén","phụ nữ"],["，"],["哭","kū","khóc"],["的","de","của (trợ từ)"],["时候","shíhòu","lúc, khi"],["比较","bǐjiào","tương đối"],["多","duō","nhiều; hơn"],["。"],["伤心","shāngxīn","đau lòng, buồn"],["可以","kěyǐ","có thể"],["哭","kū","khóc"],["，"],["高兴","gāoxìng","vui"],["极了","jíle","cực kỳ"],["，"],["也","yě","cũng"],["可以","kěyǐ","có thể"],["哭","kū","khóc"],["；"],["男人","nánrén","đàn ông"],["，"],["却","què","lại, nhưng lại"],["不能","bùnéng","không thể"],["随便","suíbiàn","tùy ý"],["哭泣","kūqì","khóc lóc"],["，"],["否则","fǒuzé","nếu không thì"],["，"],["就","jiù","thì, liền"],["不","bù","không"],["像","xiàng","giống như"],["个","gè","cái (lượng từ)"],["男人","nánrén","đàn ông"],["。"]]
    },
    {
     "zh": "大多数的人，会哭，也哭过，却不愿意承认。最有男人味的人，会在特别紧张或努力后流泪。足球队员在比赛完后，不管胜了还是败了，常常有人哭泣。一位飞机试飞员说，他在试飞后，有时忍不住流泪，就坐在飞机上哭一场。",
     "vi": "Đa số mọi người đều biết khóc, cũng đã từng khóc, nhưng lại không muốn thừa nhận. Người đàn ông nam tính nhất sẽ rơi nước mắt sau khi đặc biệt căng thẳng hoặc nỗ lực. Các cầu thủ bóng đá sau trận đấu, dù thắng hay thua, thường có người khóc. Một phi công bay thử nói rằng, sau khi bay thử, có lúc anh không kìm được nước mắt, liền ngồi trên máy bay khóc một trận.",
     "tokens": [["大多数","dàduōshù","đa số"],["的","de","của (trợ từ)"],["人","rén","người"],["，"],["会","huì","sẽ; biết"],["哭","kū","khóc"],["，"],["也","yě","cũng"],["哭","kū","khóc"],["过","guò","qua; sống, đón"],["，"],["却","què","lại, nhưng lại"],["不","bù","không"],["愿意","yuànyì","bằng lòng, muốn"],["承认","chéngrèn","thừa nhận"],["。"],["最","zuì","nhất"],["有","yǒu","có"],["男人味","nánrénwèi","nam tính"],["的","de","của (trợ từ)"],["人","rén","người"],["，"],["会","huì","sẽ; biết"],["在","zài","ở, đang"],["特别","tèbié","đặc biệt"],["紧张","jǐnzhāng","căng thẳng"],["或","huò","hoặc"],["努力","nǔlì","nỗ lực"],["后","hòu","sau"],["流泪","liúlèi","rơi nước mắt"],["。"],["足球","zúqiú","bóng đá"],["队员","duìyuán","cầu thủ, đội viên"],["在","zài","ở, đang"],["比赛","bǐsài","thi đấu"],["完","wán","xong"],["后","hòu","sau"],["，"],["不管","bùguǎn","bất kể, dù"],["胜","shèng","thắng"],["了","le","rồi (trợ từ)"],["还是","háishì","hay là; vẫn"],["败","bài","Thua, thất bại"],["了","le","rồi (trợ từ)"],["，"],["常常","chángcháng","thường xuyên"],["有人","yǒurén","có người"],["哭泣","kūqì","khóc lóc"],["。"],["一位","yīwèi","một vị, một người"],["飞机","fēijī","máy bay"],["试飞员","shìfēiyuán","phi công bay thử"],["说","shuō","nói"],["，"],["他","tā","anh ấy, ông ấy"],["在","zài","ở, đang"],["试飞","shìfēi","bay thử"],["后","hòu","sau"],["，"],["有时","yǒushí","có lúc"],["忍不住","rěnbúzhù","không kìm được"],["流泪","liúlèi","rơi nước mắt"],["，"],["就","jiù","thì, liền"],["坐在","zuòzài","ngồi ở"],["飞机","fēijī","máy bay"],["上","shàng","trên; lên"],["哭","kū","khóc"],["一场","yīcháng","một trận, một bộ"],["。"]]
    },
    {
     "zh": "为了快乐和健康，我们应当学会：该哭就哭。",
     "vi": "Vì niềm vui và sức khỏe, chúng ta nên học cách: nên khóc thì cứ khóc.",
     "tokens": [["为了","wèile","để, vì"],["快乐","kuàilè","vui vẻ"],["和","hé","và; hòa"],["健康","jiànkāng","khỏe mạnh"],["，"],["我们","wǒmen","chúng tôi"],["应当","yīngdāng","nên"],["学会","xuéhuì","học được, biết"],["："],["该","gāi","nên; (trang) này"],["哭","kū","khóc"],["就","jiù","thì, liền"],["哭","kū","khóc"],["。"]]
    },
    {
     "zh": "当然哭不是唯一的。",
     "vi": "Đương nhiên, khóc không phải là cách duy nhất.",
     "tokens": [["当然","dāngrán","đương nhiên"],["哭","kū","khóc"],["不是","búshì","không phải"],["唯一","wéiyī","duy nhất"],["的","de","của (trợ từ)"],["。"]]
    }
   ],
   "questions": [
    {
     "q": "那位大学教授遇到压力时会怎么做？",
     "options": ["去爬山","去看一部伤感的电影，大哭一场","去喝酒","去找朋友聊天"],
     "answer": 1,
     "explain": "Ông chọn một bộ phim đặc biệt buồn và khóc một trận thật to."
    },
    {
     "q": "作者认为，一个人伤心却不能哭，会怎么样？",
     "options": ["会更快乐","疾病就会来到","会变得更聪明","没有什么影响"],
     "answer": 1,
     "explain": "Bài viết: 一个人如果伤心，可是不能哭，疾病就会来到."
    },
    {
     "q": "作者的主要观点是什么？",
     "options": ["哭是无能的表现","男人不能哭","为了快乐和健康，该哭就哭","只有孩子可以哭"],
     "answer": 2,
     "explain": "Kết luận: vì niềm vui và sức khỏe, nên khóc thì cứ khóc."
    }
   ],
   "fills": [{"sentence":"有时，一个人伤心的_______，是一点一点增加的，时间长了，积累多了，结果就会哭。","answer":"情绪","options":["情绪","疾病","即将","败"]},{"sentence":"有时，一个人伤心的情绪，是一点一点增加的，时间长了，_______多了，结果就会哭。","answer":"积累","options":["疾病","积累","败","角落"]},{"sentence":"一个人如果伤心，可是不能哭，_______就会来到。","answer":"疾病","options":["情绪","积累","败","疾病"]},{"sentence":"足球队员在比赛完后，不管胜了还是_______了，常常有人哭泣。","answer":"败","options":["败","情绪","积累","疾病"]}]
  },
  {
   "id": "u4t4",
   "unit": 4,
   "no": 4,
   "titleZh": "人为什么会老",
   "titleVi": "Tại sao con người lại già",
   "note": "",
   "vocab": [
    {
     "hanzi": "长寿",
     "pinyin": "chángshòu",
     "pos": "Tính từ/Danh từ",
     "meaning": "Trường thọ",
     "exZh": "比较长寿",
     "exVi": "Tương đối sống thọ"
    },
    {
     "hanzi": "寿命",
     "pinyin": "shòumìng",
     "pos": "Danh từ",
     "meaning": "Tuổi thọ",
     "exZh": "延长寿命",
     "exVi": "Kéo dài tuổi thọ"
    },
    {
     "hanzi": "长生不老",
     "pinyin": "chángshēng bùlǎo",
     "pos": "Thành ngữ",
     "meaning": "Trường sinh bất lão",
     "exZh": "不能长生不老",
     "exVi": "Không thể trường sinh bất lão"
    },
    {
     "hanzi": "细胞",
     "pinyin": "xìbāo",
     "pos": "Danh từ",
     "meaning": "Tế bào",
     "exZh": "生物的细胞",
     "exVi": "Tế bào của sinh vật"
    },
    {
     "hanzi": "线粒体",
     "pinyin": "xiànlìtǐ",
     "pos": "Danh từ",
     "meaning": "Ty thể",
     "exZh": "一种叫线粒体的东西",
     "exVi": "Một thứ gọi là ty thể"
    },
    {
     "hanzi": "自由基",
     "pinyin": "zìyóujī",
     "pos": "Danh từ",
     "meaning": "Gốc tự do",
     "exZh": "变成自由基",
     "exVi": "Biến thành gốc tự do"
    },
    {
     "hanzi": "衰老",
     "pinyin": "shuāilǎo",
     "pos": "Động từ/Tính từ",
     "meaning": "Già yếu, lão hóa",
     "exZh": "使我们慢慢衰老",
     "exVi": "Khiến chúng ta dần già đi"
    }
   ],
   "grammar": [
    {
     "name": "Đến cùng, rốt cuộc",
     "struct": "到底",
     "explain": "Phó từ nhấn mạnh kết quả hoặc câu hỏi truy vấn.",
     "exZh": "到底是什么原因使我们老去？",
     "exVi": "Rốt cuộc là nguyên nhân gì khiến chúng ta già đi?"
    },
    {
     "name": "Hóa ra...",
     "struct": "原来",
     "explain": "Biểu thị sự phát hiện ra sự thật.",
     "exZh": "原来，在线粒体里面，有些氧气变成自由基。",
     "exVi": "Thì ra, bên trong ty thể, có một phần oxy biến thành gốc tự do."
    }
   ],
   "text": [
    {
     "zh": "住在三楼、二楼和一楼的人，谁活得更长久？有人研究的结果是：住在二楼的人比较长寿。因为一楼的人，不需要走楼梯；三楼的人，需要坐电梯；而二楼的人，因为坐电梯太慢，常常爬楼梯。爬一层楼梯，不算什么，但每天爬一层楼梯，就有可能延长寿命。运动能让人变老的时间晚一点儿，但并不能使人长生不老。到底是什么原因，使我们慢慢老去，走向死亡？",
     "vi": "Người sống ở tầng ba, tầng hai và tầng một, ai sống lâu hơn? Kết quả nghiên cứu của một số người là: người sống ở tầng hai tương đối thọ hơn. Vì người ở tầng một không cần đi cầu thang; người ở tầng ba cần đi thang máy; còn người ở tầng hai, vì đi thang máy quá chậm nên thường leo cầu thang. Leo một tầng cầu thang chẳng đáng là bao, nhưng ngày nào cũng leo một tầng thì có thể kéo dài tuổi thọ. Vận động có thể khiến thời điểm con người già đi muộn hơn một chút, nhưng không thể khiến con người trường sinh bất lão. Rốt cuộc là nguyên nhân gì khiến chúng ta dần già đi, đi đến cái chết?",
     "tokens": [["住","zhù","ở, sống"],["在","zài","ở, đang"],["三","sān","ba"],["楼","lóu","tầng"],["、"],["二楼","èrlóu","tầng hai"],["和","hé","và; hòa"],["一楼","yīlóu","tầng một"],["的","de","của (trợ từ)"],["人","rén","người"],["，"],["谁","shuí","ai"],["活","huó","sống"],["得","dé","được; (trợ từ bổ ngữ)"],["更","gèng","càng, hơn"],["长久","chángjiǔ","lâu dài"],["？"],["有人","yǒurén","có người"],["研究","yánjiū","nghiên cứu"],["的","de","của (trợ từ)"],["结果","jiéguǒ","kết quả"],["是","shì","là"],["："],["住","zhù","ở, sống"],["在","zài","ở, đang"],["二楼","èrlóu","tầng hai"],["的","de","của (trợ từ)"],["人","rén","người"],["比较","bǐjiào","tương đối"],["长寿","chángshòu","Trường thọ"],["。"],["因为","yīnwèi","bởi vì"],["一楼","yīlóu","tầng một"],["的","de","của (trợ từ)"],["人","rén","người"],["，"],["不","bù","không"],["需要","xūyào","cần"],["走","zǒu","đi; đi (cờ)"],["楼梯","lóutī","cầu thang"],["；"],["三","sān","ba"],["楼","lóu","tầng"],["的","de","của (trợ từ)"],["人","rén","người"],["，"],["需要","xūyào","cần"],["坐电梯","zuòdiàntī","đi thang máy"],["；"],["而","ér","mà, còn"],["二楼","èrlóu","tầng hai"],["的","de","của (trợ từ)"],["人","rén","người"],["，"],["因为","yīnwèi","bởi vì"],["坐电梯","zuòdiàntī","đi thang máy"],["太慢","tàimàn","quá chậm"],["，"],["常常","chángcháng","thường xuyên"],["爬楼梯","pálóutī","leo cầu thang"],["。"],["爬","pá","leo"],["一层","yīcéng","một tầng"],["楼梯","lóutī","cầu thang"],["，"],["不算什么","bùsuànshénme","chẳng đáng là bao"],["，"],["但","dàn","nhưng"],["每天","měitiān","mỗi ngày"],["爬","pá","leo"],["一层","yīcéng","một tầng"],["楼梯","lóutī","cầu thang"],["，"],["就","jiù","thì, liền"],["有","yǒu","có"],["可能","kěnéng","có thể"],["延长","yáncháng","kéo dài"],["寿命","shòumìng","Tuổi thọ"],["。"],["运动","yùndòng","vận động"],["能","néng","có thể"],["让","ràng","để, bảo, khiến"],["人","rén","người"],["变","biàn","biến, thay đổi"],["老","lǎo","già; cứ, luôn"],["的","de","của (trợ từ)"],["时间","shíjiān","thời gian"],["晚","wǎn","muộn"],["一点儿","yìdiǎnér","một chút"],["，"],["但","dàn","nhưng"],["并","bìng","lại (nhấn mạnh phủ định); và"],["不能","bùnéng","không thể"],["使","shǐ","khiến, làm cho"],["人","rén","người"],["长生不老","chángshēng bùlǎo","Trường sinh bất lão"],["。"],["到底","dàodǐ","rốt cuộc"],["是","shì","là"],["什么","shénme","cái gì"],["原因","yuányīn","nguyên nhân"],["，"],["使","shǐ","khiến, làm cho"],["我们","wǒmen","chúng tôi"],["慢慢","mànmàn","từ từ"],["老","lǎo","già; cứ, luôn"],["去","qù","đi"],["，"],["走向","zǒuxiàng","đi tới"],["死亡","sǐwáng","cái chết"],["？"]]
    },
    {
     "zh": "在我们生活的这个地球上，一切生物的细胞里，都有一种叫线粒体的东西，是它们给我们生命的能量。",
     "vi": "Trên trái đất nơi chúng ta sinh sống, trong tế bào của mọi sinh vật đều có một thứ gọi là ty thể, chính chúng cung cấp năng lượng sống cho chúng ta.",
     "tokens": [["在","zài","ở, đang"],["我们","wǒmen","chúng tôi"],["生活","shēnghuó","cuộc sống"],["的","de","của (trợ từ)"],["这个","zhège","cái này"],["地球","dìqiú","trái đất"],["上","shàng","trên; lên"],["，"],["一切","yīqiè","tất cả, mọi thứ"],["生物","shēngwù","sinh vật; sinh học"],["的","de","của (trợ từ)"],["细胞","xìbāo","Tế bào"],["里","lǐ","trong; dặm"],["，"],["都","dōu","đều"],["有","yǒu","có"],["一种","yīzhǒng","một loại"],["叫","jiào","gọi; bảo"],["线粒体","xiànlìtǐ","Ty thể"],["的","de","của (trợ từ)"],["东西","dōngxī","đồ vật"],["，"],["是","shì","là"],["它们","tāmen","chúng nó"],["给","gěi","cho"],["我们","wǒmen","chúng tôi"],["生命","shēngmìng","sinh mệnh, sự sống"],["的","de","của (trợ từ)"],["能量","néngliàng","năng lượng"],["。"]]
    },
    {
     "zh": "人类的活动，都靠线粒体。我们的每次呼吸，都带给它们氧气。但是，我们每呼吸一次，就会衰老一点儿。给我们生命的氧气，也会慢慢地毁掉我们。这又是为什么呢？",
     "vi": "Mọi hoạt động của loài người đều dựa vào ty thể. Mỗi lần hít thở của chúng ta đều mang oxy đến cho chúng. Nhưng mỗi lần chúng ta hít thở, chúng ta lại già đi một chút. Oxy mang lại sự sống cho chúng ta cũng sẽ dần hủy hoại chúng ta. Đây lại là vì sao?",
     "tokens": [["人类","rénlèi","loài người"],["的","de","của (trợ từ)"],["活动","huódòng","hoạt động"],["，"],["都","dōu","đều"],["靠","kào","dựa vào"],["线粒体","xiànlìtǐ","Ty thể"],["。"],["我们","wǒmen","chúng tôi"],["的","de","của (trợ từ)"],["每次","měicì","mỗi lần"],["呼吸","hūxī","hít thở"],["，"],["都","dōu","đều"],["带给","dàigěi","mang đến cho"],["它们","tāmen","chúng nó"],["氧气","yǎngqì","oxy"],["。"],["但是","dànshì","nhưng"],["，"],["我们","wǒmen","chúng tôi"],["每","měi","mỗi"],["呼吸","hūxī","hít thở"],["一次","yīcì","một lần"],["，"],["就","jiù","thì, liền"],["会","huì","sẽ; biết"],["衰老","shuāilǎo","Già yếu, lão hóa"],["一点儿","yìdiǎnér","một chút"],["。"],["给","gěi","cho"],["我们","wǒmen","chúng tôi"],["生命","shēngmìng","sinh mệnh, sự sống"],["的","de","của (trợ từ)"],["氧气","yǎngqì","oxy"],["，"],["也","yě","cũng"],["会","huì","sẽ; biết"],["慢慢","mànmàn","từ từ"],["地","dì","(trợ từ trạng ngữ)"],["毁掉","huǐdiào","hủy hoại"],["我们","wǒmen","chúng tôi"],["。"],["这","zhè","này"],["又","yòu","lại"],["是","shì","là"],["为什么","wèishénme","tại sao"],["呢","ne","nhỉ, thế (trợ từ)"],["？"]]
    },
    {
     "zh": "原来，在线粒体里面，我们呼吸的氧气，大部分被变成生命的能量，但也有些氧气变成自由基。自由基只要产生出来，就会破坏身体内的细胞。最后，引起细胞的老化、死亡。这不是吓人的话，就是自由基，这种我们自己产生的东西，从身体内部使我们慢慢衰老。",
     "vi": "Thì ra, bên trong ty thể, phần lớn oxy chúng ta hít vào được biến thành năng lượng sống, nhưng cũng có một phần oxy biến thành gốc tự do. Gốc tự do hễ được sinh ra là sẽ phá hoại tế bào trong cơ thể. Cuối cùng gây ra sự lão hóa và chết của tế bào. Đây không phải lời dọa người, chính gốc tự do — thứ do chính chúng ta tạo ra — đã khiến chúng ta dần già đi từ bên trong cơ thể.",
     "tokens": [["原来","yuánlái","thì ra; ban đầu"],["，"],["在","zài","ở, đang"],["线粒体","xiànlìtǐ","Ty thể"],["里面","lǐmiàn","bên trong"],["，"],["我们","wǒmen","chúng tôi"],["呼吸","hūxī","hít thở"],["的","de","của (trợ từ)"],["氧气","yǎngqì","oxy"],["，"],["大部分","dàbùfèn","phần lớn"],["被","bèi","bị, được"],["变成","biànchéng","biến thành"],["生命","shēngmìng","sinh mệnh, sự sống"],["的","de","của (trợ từ)"],["能量","néngliàng","năng lượng"],["，"],["但","dàn","nhưng"],["也","yě","cũng"],["有些","yǒuxiē","có một số"],["氧气","yǎngqì","oxy"],["变成","biànchéng","biến thành"],["自由基","zìyóujī","Gốc tự do"],["。"],["自由基","zìyóujī","Gốc tự do"],["只要","zhǐyào","chỉ cần"],["产生","chǎnshēng","sinh ra, nảy sinh"],["出来","chūlái","ra, xuất hiện"],["，"],["就","jiù","thì, liền"],["会","huì","sẽ; biết"],["破坏","pòhuài","phá hoại"],["身体","shēntǐ","cơ thể"],["内","nèi","bên trong"],["的","de","của (trợ từ)"],["细胞","xìbāo","Tế bào"],["。"],["最后","zuìhòu","cuối cùng"],["，"],["引起","yǐnqǐ","gây ra"],["细胞","xìbāo","Tế bào"],["的","de","của (trợ từ)"],["老化","lǎohuà","lão hóa"],["、"],["死亡","sǐwáng","cái chết"],["。"],["这","zhè","này"],["不是","búshì","không phải"],["吓人","xiàrén","dọa người"],["的话","dehuà","nếu ... thì"],["，"],["就是","jiùshì","chính là"],["自由基","zìyóujī","Gốc tự do"],["，"],["这种","zhèzhǒng","loại này"],["我们","wǒmen","chúng tôi"],["自己","zìjǐ","bản thân"],["产生","chǎnshēng","sinh ra, nảy sinh"],["的","de","của (trợ từ)"],["东西","dōngxī","đồ vật"],["，"],["从","cóng","từ"],["身体","shēntǐ","cơ thể"],["内部","nèibù","bên trong"],["使","shǐ","khiến, làm cho"],["我们","wǒmen","chúng tôi"],["慢慢","mànmàn","từ từ"],["衰老","shuāilǎo","Già yếu, lão hóa"],["。"]]
    },
    {
     "zh": "年轻人的脑子里，有很多很多线粒体，所以年轻人头脑好，有活力。但随着时间的过去，大脑因为对氧气的不断需求，产生越来越多的自由基开始杀死线粒体。就像电池，一节接一节地失去作用，我们大脑的记忆力，也一天天变差，最后，思维开始混乱。",
     "vi": "Trong não của người trẻ tuổi có rất nhiều ty thể, vì vậy người trẻ đầu óc tốt, tràn đầy sức sống. Nhưng theo thời gian, vì não không ngừng cần oxy, sinh ra ngày càng nhiều gốc tự do, bắt đầu giết chết ty thể. Giống như pin, từng viên từng viên mất tác dụng, trí nhớ của não chúng ta cũng ngày một kém đi, cuối cùng tư duy bắt đầu hỗn loạn.",
     "tokens": [["年轻人","niánqīngrén","người trẻ"],["的","de","của (trợ từ)"],["脑子里","nǎozilǐ","trong não"],["，"],["有","yǒu","có"],["很多很多","hěnduōhěnduō","rất rất nhiều"],["线粒体","xiànlìtǐ","Ty thể"],["，"],["所以","suǒyǐ","cho nên"],["年轻人","niánqīngrén","người trẻ"],["头脑好","tóunǎohǎo","đầu óc tốt"],["，"],["有","yǒu","có"],["活力","huólì","sức sống"],["。"],["但","dàn","nhưng"],["随着","suízhe","cùng với, theo"],["时间","shíjiān","thời gian"],["的","de","của (trợ từ)"],["过去","guòqù","trước đây; trôi qua"],["，"],["大脑","dànǎo","não"],["因为","yīnwèi","bởi vì"],["对","duì","đối với; đúng"],["氧气","yǎngqì","oxy"],["的","de","của (trợ từ)"],["不断","bùduàn","không ngừng"],["需求","xūqiú","nhu cầu"],["，"],["产生","chǎnshēng","sinh ra, nảy sinh"],["越来越","yuèláiyuè","ngày càng"],["多","duō","nhiều; hơn"],["的","de","của (trợ từ)"],["自由基","zìyóujī","Gốc tự do"],["开始","kāishǐ","bắt đầu"],["杀死","shāsǐ","giết chết"],["线粒体","xiànlìtǐ","Ty thể"],["。"],["就","jiù","thì, liền"],["像","xiàng","giống như"],["电池","diànchí","pin"],["，"],["一节","yījié","một viên, một đốt"],["接","jiē","nối, tiếp"],["一节","yījié","một viên, một đốt"],["地","dì","(trợ từ trạng ngữ)"],["失去","shīqù","mất đi"],["作用","zuòyòng","tác dụng"],["，"],["我们","wǒmen","chúng tôi"],["大脑","dànǎo","não"],["的","de","của (trợ từ)"],["记忆力","jìyìlì","trí nhớ"],["，"],["也","yě","cũng"],["一天天","yītiāntiān","ngày một, từng ngày"],["变差","biànchà","kém đi"],["，"],["最后","zuìhòu","cuối cùng"],["，"],["思维","sīwéi","tư duy"],["开始","kāishǐ","bắt đầu"],["混乱","hùnluàn","hỗn loạn"],["。"]]
    }
   ],
   "questions": [
    {
     "q": "为什么住在二楼的人比较长寿？",
     "options": ["因为二楼空气好","因为他们常常爬楼梯","因为他们吃得少","因为他们坐电梯"],
     "answer": 1,
     "explain": "Người tầng hai thấy đi thang máy quá chậm nên thường leo cầu thang."
    },
    {
     "q": "给我们生命能量的是什么？",
     "options": ["自由基","线粒体","电池","电梯"],
     "answer": 1,
     "explain": "Trong tế bào có ty thể (线粒体), chính chúng cung cấp năng lượng sống."
    },
    {
     "q": "根据文章，使我们慢慢衰老的是什么？",
     "options": ["运动","爬楼梯","身体自己产生的自由基","年轻人"],
     "answer": 2,
     "explain": "Chính gốc tự do do cơ thể tự sinh ra khiến chúng ta già đi từ bên trong."
    }
   ],
   "fills": [{"sentence":"有人研究的结果是：住在二楼的人比较_______。","answer":"长寿","options":["寿命","线粒体","细胞","长寿"]},{"sentence":"爬一层楼梯，不算什么，但每天爬一层楼梯，就有可能延长_______。","answer":"寿命","options":["寿命","衰老","线粒体","自由基"]},{"sentence":"运动能让人变老的时间晚一点儿，但并不能使人_______。","answer":"长生不老","options":["长寿","寿命","长生不老","细胞"]},{"sentence":"最后，引起_______的老化、死亡。","answer":"细胞","options":["衰老","细胞","自由基","寿命"]},{"sentence":"人类的活动，都靠_______。","answer":"线粒体","options":["细胞","长生不老","线粒体","衰老"]}]
  },
  {
   "id": "u5t1",
   "unit": 5,
   "no": 1,
   "titleZh": "中秋“和”美",
   "titleVi": "Trung thu – vẻ đẹp của chữ “Hòa”",
   "note": "",
   "vocab": [
    {
     "hanzi": "和谐",
     "pinyin": "héxié",
     "pos": "Tính từ",
     "meaning": "Hài hòa",
     "exZh": "和谐社会",
     "exVi": "Xã hội hài hòa"
    },
    {
     "hanzi": "标志",
     "pinyin": "biāozhì",
     "pos": "Danh từ",
     "meaning": "Biểu tượng, dấu mốc",
     "exZh": "文化的标志",
     "exVi": "Biểu tượng của văn hóa"
    },
    {
     "hanzi": "抬头",
     "pinyin": "táitóu",
     "pos": "Động từ",
     "meaning": "Ngẩng đầu",
     "exZh": "抬头看月",
     "exVi": "Ngẩng đầu ngắm trăng"
    },
    {
     "hanzi": "低头",
     "pinyin": "dītóu",
     "pos": "Động từ",
     "meaning": "Cúi đầu",
     "exZh": "低头吃月饼",
     "exVi": "Cúi đầu ăn bánh trung thu"
    },
    {
     "hanzi": "思乡",
     "pinyin": "sīxiāng",
     "pos": "Động từ",
     "meaning": "Nhớ quê",
     "exZh": "让中国人思乡",
     "exVi": "Khiến người Trung Quốc nhớ quê"
    },
    {
     "hanzi": "藏",
     "pinyin": "cáng",
     "pos": "Động từ",
     "meaning": "Cất giữ, giấu",
     "exZh": "藏着最美感情",
     "exVi": "Ẩn chứa tình cảm đẹp nhất"
    },
    {
     "hanzi": "使",
     "pinyin": "shǐ",
     "pos": "Động từ",
     "meaning": "Khiến cho",
     "exZh": "使人想起亲人",
     "exVi": "Khiến người ta nhớ đến người thân"
    },
    {
     "hanzi": "农历",
     "pinyin": "nónglì",
     "pos": "Danh từ",
     "meaning": "Âm lịch",
     "exZh": "农历八月十五",
     "exVi": "Rằm tháng tám âm lịch"
    }
   ],
   "grammar": [
    {
     "name": "Khiến cho...",
     "struct": "使 vs 让",
     "explain": "使 dùng trong văn viết, nhượng thụ động; 让 dùng trong văn nói.",
     "exZh": "月的团圆，使人想起自己的亲人和家庭。",
     "exVi": "Trăng tròn đoàn viên khiến người ta nhớ đến người thân và gia đình của mình."
    },
    {
     "name": "Không chỉ...",
     "struct": "不仅仅",
     "explain": "Nhấn mạnh phạm vi rộng hơn.",
     "exZh": "看到的，不仅仅是圆圆的月亮。",
     "exVi": "Điều họ nhìn thấy không chỉ là vầng trăng tròn."
    }
   ],
   "text": [
    {
     "zh": "北京奥运会，让全世界认识了一个汉字：和。和谐、和美、和顺……“和”能组成一个个美好的词语。一个“和”字传达了一个国家、一个民族的心意。有人这样解释“和谐”：和，口中有禾也，意思是人人都有饭吃；谐，人皆可言也，意思是人人都能说话。做到了这两点，才算是和谐社会。",
     "vi": "Thế vận hội Bắc Kinh đã khiến cả thế giới biết đến một chữ Hán: chữ 和 (hòa). Hài hòa, hòa mỹ, hòa thuận... chữ “hòa” có thể ghép thành từng từ ngữ tốt đẹp. Một chữ “hòa” truyền tải tâm ý của cả một quốc gia, một dân tộc. Có người giải thích “hài hòa” như sau: 和 (hòa) là trong miệng (口) có lúa (禾), nghĩa là ai cũng có cơm ăn; 谐 (hài) là mọi người (皆) đều có thể nói (言), nghĩa là ai cũng có quyền được nói. Làm được hai điều này mới được coi là xã hội hài hòa.",
     "tokens": [["北京","běijīng","Bắc Kinh"],["奥运会","àoyùnhuì","Thế vận hội"],["，"],["让","ràng","để, bảo, khiến"],["全世界","quánshìjiè","toàn thế giới"],["认识","rènshí","quen biết, nhận biết"],["了","le","rồi (trợ từ)"],["一个","yígè","một (cái, người)"],["汉字","hànzì","chữ Hán"],["："],["和","hé","và; hòa"],["。"],["和谐","héxié","Hài hòa"],["、"],["和","hé","và; hòa"],["美","měi","đẹp; Mỹ"],["、"],["和顺","héshùn","hòa thuận"],["…"],["…"],["“"],["和","hé","và; hòa"],["”"],["能","néng","có thể"],["组成","zǔchéng","tạo thành"],["一个个","yígègè","từng cái một"],["美好","měihǎo","tốt đẹp"],["的","de","của (trợ từ)"],["词语","cíyǔ","từ ngữ"],["。"],["一个","yígè","một (cái, người)"],["“"],["和","hé","và; hòa"],["”"],["字","zì","chữ"],["传达","chuándá","truyền đạt"],["了","le","rồi (trợ từ)"],["一个","yígè","một (cái, người)"],["国家","guójiā","đất nước, nhà nước"],["、"],["一个","yígè","một (cái, người)"],["民族","mínzú","dân tộc"],["的","de","của (trợ từ)"],["心意","xīnyì","tâm ý"],["。"],["有人","yǒurén","có người"],["这样","zhèyàng","như vậy"],["解释","jiěshì","giải thích"],["“"],["和谐","héxié","Hài hòa"],["”"],["："],["和","hé","và; hòa"],["，"],["口中","kǒuzhōng","trong miệng"],["有","yǒu","có"],["禾","hé","lúa"],["也","yě","cũng"],["，"],["意思","yìsi","ý nghĩa"],["是","shì","là"],["人人","rénrén","mọi người"],["都","dōu","đều"],["有","yǒu","có"],["饭","fàn","cơm"],["吃","chī","ăn"],["；"],["谐","xié","hài (hòa)"],["，"],["人","rén","người"],["皆","jiē","đều"],["可言","kěyán","có thể nói"],["也","yě","cũng"],["，"],["意思","yìsi","ý nghĩa"],["是","shì","là"],["人人","rénrén","mọi người"],["都","dōu","đều"],["能","néng","có thể"],["说话","shuōhuà","nói chuyện"],["。"],["做到","zuòdào","làm được"],["了","le","rồi (trợ từ)"],["这两点","zhèliǎngdiǎn","hai điểm này"],["，"],["才","cái","mới"],["算是","suànshì","coi như là"],["和谐","héxié","Hài hòa"],["社会","shèhuì","xã hội"],["。"]]
    },
    {
     "zh": "农历8月15日是中秋节，在“中秋”所包含的文化含义中，“和”成为中国传统文化的一个标志。",
     "vi": "Ngày 15 tháng 8 âm lịch là Tết Trung thu. Trong những hàm nghĩa văn hóa mà “Trung thu” bao hàm, chữ “hòa” đã trở thành một biểu tượng của văn hóa truyền thống Trung Quốc.",
     "tokens": [["农历","nónglì","Âm lịch"],["8"],["月","yuè","trăng; tháng"],["15"],["日","rì","ngày; mặt trời"],["是","shì","là"],["中秋节","zhōngqiūjié","Tết Trung thu"],["，"],["在","zài","ở, đang"],["“"],["中秋","zhōngqiū","Trung thu"],["”"],["所","suǒ","ngôi (trường); cái mà"],["包含","bāohán","bao hàm"],["的","de","của (trợ từ)"],["文化","wénhuà","văn hóa"],["含义","hányì","hàm nghĩa"],["中","zhōng","trong, giữa"],["，"],["“"],["和","hé","và; hòa"],["”"],["成为","chéngwéi","trở thành"],["中国","zhōngguó","Trung Quốc"],["传统","chuántǒng","truyền thống"],["文化","wénhuà","văn hóa"],["的","de","của (trợ từ)"],["一个","yígè","một (cái, người)"],["标志","biāozhì","Biểu tượng, dấu mốc"],["。"]]
    },
    {
     "zh": "在人与自然的关系中，中华民族把大自然的完美时刻（八月十五月儿圆）作为自己的节日，把完满、和美，作为人生的最高目标，也把它作为亲人团圆的时刻。",
     "vi": "Trong mối quan hệ giữa con người và thiên nhiên, dân tộc Trung Hoa lấy khoảnh khắc hoàn mỹ của thiên nhiên (rằm tháng tám trăng tròn) làm ngày lễ của mình, lấy sự viên mãn, hòa mỹ làm mục tiêu cao nhất của đời người, cũng lấy đó làm khoảnh khắc người thân đoàn tụ.",
     "tokens": [["在","zài","ở, đang"],["人与自然","rényǔzìrán","con người và thiên nhiên"],["的","de","của (trợ từ)"],["关系","guānxì","quan hệ"],["中","zhōng","trong, giữa"],["，"],["中华民族","zhōnghuámínzú","dân tộc Trung Hoa"],["把","bǎ","(giới từ đưa tân ngữ lên trước)"],["大自然","dàzìrán","thiên nhiên"],["的","de","của (trợ từ)"],["完美","wánměi","hoàn mỹ"],["时刻","shíkè","thời khắc"],["（"],["八月","bāyuè","tháng tám"],["十五","shíwǔ","mười lăm"],["月儿圆","yuèéryuán","trăng tròn"],["）"],["作为","zuòwéi","với tư cách là"],["自己","zìjǐ","bản thân"],["的","de","của (trợ từ)"],["节日","jiérì","ngày lễ"],["，"],["把","bǎ","(giới từ đưa tân ngữ lên trước)"],["完满","wánmǎn","viên mãn"],["、"],["和","hé","và; hòa"],["美","měi","đẹp; Mỹ"],["，"],["作为","zuòwéi","với tư cách là"],["人生","rénshēng","đời người"],["的","de","của (trợ từ)"],["最高","zuìgāo","cao nhất"],["目标","mùbiāo","mục tiêu"],["，"],["也","yě","cũng"],["把","bǎ","(giới từ đưa tân ngữ lên trước)"],["它","tā","nó"],["作为","zuòwéi","với tư cách là"],["亲人","qīnrén","người thân"],["团圆","tuányuán","đoàn viên"],["的","de","của (trợ từ)"],["时刻","shíkè","thời khắc"],["。"]]
    },
    {
     "zh": "中秋的夜晚，中国人抬头看月、低头吃月饼，看到的，不仅仅是圆圆的月亮。月的团圆，使人想起自己的亲人和家庭。中秋的月下，千千万万的中国人走在回家的路上。",
     "vi": "Đêm Trung thu, người Trung Quốc ngẩng đầu ngắm trăng, cúi đầu ăn bánh trung thu, điều họ nhìn thấy không chỉ là vầng trăng tròn. Trăng tròn đoàn viên khiến người ta nhớ đến người thân và gia đình của mình. Dưới ánh trăng Trung thu, hàng nghìn hàng vạn người Trung Quốc đang trên đường về nhà.",
     "tokens": [["中秋","zhōngqiū","Trung thu"],["的","de","của (trợ từ)"],["夜晚","yèwǎn","ban đêm"],["，"],["中国","zhōngguó","Trung Quốc"],["人","rén","người"],["抬头","táitóu","Ngẩng đầu"],["看","kàn","xem, nhìn"],["月","yuè","trăng; tháng"],["、"],["低头","dītóu","Cúi đầu"],["吃","chī","ăn"],["月饼","yuèbǐng","bánh trung thu"],["，"],["看到","kàndào","nhìn thấy"],["的","de","của (trợ từ)"],["，"],["不仅仅","bùjǐnjǐn","không chỉ là"],["是","shì","là"],["圆圆的","yuányuánde","tròn tròn"],["月亮","yuèliàng","mặt trăng"],["。"],["月","yuè","trăng; tháng"],["的","de","của (trợ từ)"],["团圆","tuányuán","đoàn viên"],["，"],["使","shǐ","Khiến cho"],["人","rén","người"],["想起","xiǎngqǐ","nhớ ra"],["自己","zìjǐ","bản thân"],["的","de","của (trợ từ)"],["亲人","qīnrén","người thân"],["和","hé","và; hòa"],["家庭","jiātíng","gia đình"],["。"],["中秋","zhōngqiū","Trung thu"],["的","de","của (trợ từ)"],["月","yuè","trăng; tháng"],["下","xià","dưới; xuống"],["，"],["千千万万","qiānqiānwànwàn","hàng nghìn hàng vạn"],["的","de","của (trợ từ)"],["中国","zhōngguó","Trung Quốc"],["人","rén","người"],["走","zǒu","đi; đi (cờ)"],["在","zài","ở, đang"],["回家","huíjiā","về nhà"],["的","de","của (trợ từ)"],["路上","lùshàng","trên đường"],["。"]]
    },
    {
     "zh": "中秋的月亮，藏着中国人最美的感情，让天下的中国人思乡。中秋夜晚的明月，那美好的月圆时刻，有着多少中国人的梦想！",
     "vi": "Vầng trăng Trung thu ẩn chứa những tình cảm đẹp nhất của người Trung Quốc, khiến người Trung Quốc khắp thiên hạ nhớ quê. Vầng trăng sáng đêm Trung thu, khoảnh khắc trăng tròn tốt đẹp ấy, chứa đựng biết bao ước mơ của người Trung Quốc!",
     "tokens": [["中秋","zhōngqiū","Trung thu"],["的","de","của (trợ từ)"],["月亮","yuèliàng","mặt trăng"],["，"],["藏","cáng","Cất giữ, giấu"],["着","zhe","đang (trợ từ)"],["中国","zhōngguó","Trung Quốc"],["人","rén","người"],["最美","zuìměi","đẹp nhất"],["的","de","của (trợ từ)"],["感情","gǎnqíng","tình cảm"],["，"],["让","ràng","để, bảo, khiến"],["天下","tiānxià","thiên hạ, trên đời"],["的","de","của (trợ từ)"],["中国","zhōngguó","Trung Quốc"],["人","rén","người"],["思乡","sīxiāng","Nhớ quê"],["。"],["中秋","zhōngqiū","Trung thu"],["夜晚","yèwǎn","ban đêm"],["的","de","của (trợ từ)"],["明月","míngyuè","trăng sáng"],["，"],["那","nà","kia, đó"],["美好","měihǎo","tốt đẹp"],["的","de","của (trợ từ)"],["月","yuè","trăng; tháng"],["圆","yuán","tròn"],["时刻","shíkè","thời khắc"],["，"],["有着","yǒuzhe","có"],["多少","duōshǎo","bao nhiêu"],["中国","zhōngguó","Trung Quốc"],["人","rén","người"],["的","de","của (trợ từ)"],["梦想","mèngxiǎng","ước mơ"],["！"]]
    },
    {
     "zh": "中秋节是中国文化的一部分，传统节日给我们的感觉就是“和”，就是亲情，就是一条心。这些东西会一代一代传下去。",
     "vi": "Tết Trung thu là một phần của văn hóa Trung Quốc, cảm giác mà ngày lễ truyền thống mang lại cho chúng ta chính là “hòa”, chính là tình thân, chính là đồng lòng. Những điều này sẽ được truyền lại từ đời này sang đời khác.",
     "tokens": [["中秋节","zhōngqiūjié","Tết Trung thu"],["是","shì","là"],["中国","zhōngguó","Trung Quốc"],["文化","wénhuà","văn hóa"],["的","de","của (trợ từ)"],["一部分","yībùfèn","một phần"],["，"],["传统节日","chuántǒngjiérì","ngày lễ truyền thống"],["给","gěi","cho"],["我们","wǒmen","chúng tôi"],["的","de","của (trợ từ)"],["感觉","gǎnjué","cảm giác"],["就是","jiùshì","chính là"],["“"],["和","hé","và; hòa"],["”"],["，"],["就是","jiùshì","chính là"],["亲情","qīnqíng","tình thân"],["，"],["就是","jiùshì","chính là"],["一条心","yītiáoxīn","đồng lòng"],["。"],["这些","zhèxiē","những ... này"],["东西","dōngxī","đồ vật"],["会","huì","sẽ; biết"],["一代","yídài","một thế hệ"],["一代","yídài","một thế hệ"],["传下去","chuánxiàqù","truyền lại"],["。"]]
    }
   ],
   "questions": [
    {
     "q": "北京奥运会让全世界认识了哪个汉字？",
     "options": ["福","和","月","家"],
     "answer": 1,
     "explain": "Câu đầu: 北京奥运会，让全世界认识了一个汉字：和."
    },
    {
     "q": "有人怎样解释“和”字？",
     "options": ["口中有禾，人人都有饭吃","人人都能说话","月亮很圆","全家团圆"],
     "answer": 0,
     "explain": "和 = 口 + 禾: trong miệng có lúa, nghĩa là ai cũng có cơm ăn. (Còn 谐 mới là “ai cũng được nói”.)"
    },
    {
     "q": "中秋的月亮使中国人想起什么？",
     "options": ["工作","自己的亲人和家庭","奥运会","月饼的价格"],
     "answer": 1,
     "explain": "Trăng tròn đoàn viên khiến người ta nhớ đến người thân và gia đình."
    }
   ],
   "fills": [{"sentence":"做到了这两点，才算是_______社会。","answer":"和谐","options":["农历","藏","和谐","思乡"]},{"sentence":"农历8月15日是中秋节，在“中秋”所包含的文化含义中，“和”成为中国传统文化的一个_______。","answer":"标志","options":["标志","低头","抬头","使"]},{"sentence":"中秋的夜晚，中国人_______看月、低头吃月饼，看到的，不仅仅是圆圆的月亮。","answer":"抬头","options":["抬头","标志","使","农历"]},{"sentence":"中秋的夜晚，中国人抬头看月、_______吃月饼，看到的，不仅仅是圆圆的月亮。","answer":"低头","options":["思乡","低头","藏","使"]},{"sentence":"中秋的月亮，藏着中国人最美的感情，让天下的中国人_______。","answer":"思乡","options":["标志","使","思乡","抬头"]}]
  },
  {
   "id": "u5t2",
   "unit": 5,
   "no": 2,
   "titleZh": "女士也可以称“先生”",
   "titleVi": "Phụ nữ cũng có thể gọi là “tiên sinh”",
   "note": "",
   "vocab": [
    {
     "hanzi": "白眼",
     "pinyin": "báiyǎn",
     "pos": "Danh từ",
     "meaning": "Cái nhìn khinh bỉ",
     "exZh": "遭到白眼",
     "exVi": "Bị lườm nguýt"
    },
    {
     "hanzi": "尊称",
     "pinyin": "zūnchēng",
     "pos": "Danh từ/Động từ",
     "meaning": "Tôn xưng, kính称",
     "exZh": "对成年男子的尊称",
     "exVi": "Cách gọi tôn kính đối với nam giới trưởng thành"
    },
    {
     "hanzi": "领域",
     "pinyin": "lǐngyù",
     "pos": "Danh từ",
     "meaning": "Lĩnh vực",
     "exZh": "在社会领域中",
     "exVi": "Trong lĩnh vực xã hội"
    },
    {
     "hanzi": "原来",
     "pinyin": "yuánlái",
     "pos": "Phó từ",
     "meaning": "Hóa ra",
     "exZh": "原来意思这么多",
     "exVi": "Thì ra nghĩa nhiều như vậy"
    }
   ],
   "grammar": [],
   "text": [
    {
     "zh": "如果在街上，向一位姑娘问：“先生，请问到天安门怎么走？”很可能会遭到白眼。因为，一般人觉得，“先生”这个词，是对18岁以上男子的称呼，怎么可以用于女性？",
     "vi": "Nếu trên phố bạn hỏi một cô gái: “Thưa tiên sinh, xin hỏi đi đến Thiên An Môn thế nào?” thì rất có thể sẽ bị lườm nguýt. Bởi vì người bình thường cho rằng từ “tiên sinh” là cách xưng hô dành cho nam giới trên 18 tuổi, sao có thể dùng cho phụ nữ?",
     "tokens": [["如果","rúguǒ","nếu"],["在","zài","ở, đang"],["街上","jiēshàng","trên phố"],["，"],["向","xiàng","hướng về, với"],["一位","yīwèi","một vị, một người"],["姑娘","gūniáng","cô gái"],["问","wèn","hỏi"],["："],["“"],["先生","xiānshēng","ông, tiên sinh; chồng"],["，"],["请问","qǐngwèn","xin hỏi"],["到","dào","đến"],["天安门","tiānānmén","Thiên An Môn"],["怎么","zěnme","thế nào"],["走","zǒu","đi; đi (cờ)"],["？"],["”"],["很","hěn","rất"],["可能","kěnéng","có thể"],["会","huì","sẽ; biết"],["遭到","zāodào","gặp phải, bị"],["白眼","báiyǎn","Cái nhìn khinh bỉ"],["。"],["因为","yīnwèi","bởi vì"],["，"],["一般","yìbān","thông thường, bình thường"],["人","rén","người"],["觉得","juéde","cảm thấy"],["，"],["“"],["先生","xiānshēng","ông, tiên sinh; chồng"],["”"],["这个","zhège","cái này"],["词","cí","từ"],["，"],["是","shì","là"],["对","duì","đối với; đúng"],["18"],["岁","suì","tuổi"],["以上","yǐshàng","trở lên"],["男子","nánzi","nam giới"],["的","de","của (trợ từ)"],["称呼","chēnghū","cách xưng hô"],["，"],["怎么","zěnme","thế nào"],["可以","kěyǐ","có thể"],["用于","yòngyú","dùng cho"],["女性","nǚxìng","nữ giới"],["？"]]
    },
    {
     "zh": "读书时，读到“杨绛先生是钱钟书先生的夫人”、“梅志先生是胡风先生的夫人，也是一位儿童文学作家和传记作家……”时，也觉得很奇怪。“先生”怎么可能又是“夫人”呢？带着这些问题，我查了各种辞书，看到了对“先生”的解释：",
     "vi": "Khi đọc sách, đọc đến câu “Tiên sinh Dương Giáng là phu nhân của tiên sinh Tiền Chung Thư”, “Tiên sinh Mai Chí là phu nhân của tiên sinh Hồ Phong, cũng là một nhà văn viết văn học thiếu nhi và viết tiểu sử...”, tôi cũng thấy rất lạ. “Tiên sinh” sao có thể lại là “phu nhân” được? Mang theo những thắc mắc này, tôi đã tra các loại từ điển và thấy cách giải thích về “tiên sinh”:",
     "tokens": [["读书","dúshū","đọc sách, đi học"],["时","shí","lúc, khi"],["，"],["读","dú","đọc"],["到","dào","đến"],["“"],["杨绛","yángjiàng","Dương Giáng (nữ văn sĩ)"],["先生","xiānshēng","ông, tiên sinh; chồng"],["是","shì","là"],["钱钟书","qiánzhōngshū","Tiền Chung Thư"],["先生","xiānshēng","ông, tiên sinh; chồng"],["的","de","của (trợ từ)"],["夫人","fūrén","phu nhân"],["”"],["、"],["“"],["梅志","méizhì","Mai Chí (nữ văn sĩ)"],["先生","xiānshēng","ông, tiên sinh; chồng"],["是","shì","là"],["胡风","húfēng","Hồ Phong (nhà văn)"],["先生","xiānshēng","ông, tiên sinh; chồng"],["的","de","của (trợ từ)"],["夫人","fūrén","phu nhân"],["，"],["也","yě","cũng"],["是","shì","là"],["一位","yīwèi","một vị, một người"],["儿童文学","értóngwénxué","văn học thiếu nhi"],["作家","zuòjiā","nhà văn"],["和","hé","và; hòa"],["传记","zhuànjì","tiểu sử"],["作家","zuòjiā","nhà văn"],["…"],["…"],["”"],["时","shí","lúc, khi"],["，"],["也","yě","cũng"],["觉得","juéde","cảm thấy"],["很","hěn","rất"],["奇怪","qíguài","kỳ lạ"],["。"],["“"],["先生","xiānshēng","ông, tiên sinh; chồng"],["”"],["怎么","zěnme","thế nào"],["可能","kěnéng","có thể"],["又","yòu","lại"],["是","shì","là"],["“"],["夫人","fūrén","phu nhân"],["”"],["呢","ne","nhỉ, thế (trợ từ)"],["？"],["带","dài","mang, dẫn"],["着","zhe","đang (trợ từ)"],["这些","zhèxiē","những ... này"],["问题","wèntí","vấn đề, câu hỏi"],["，"],["我","wǒ","tôi"],["查","chá","tra"],["了","le","rồi (trợ từ)"],["各种","gèzhǒng","các loại"],["辞书","císhū","sách từ điển"],["，"],["看到","kàndào","nhìn thấy"],["了","le","rồi (trợ từ)"],["对","duì","đối với; đúng"],["“"],["先生","xiānshēng","ông, tiên sinh; chồng"],["”"],["的","de","của (trợ từ)"],["解释","jiěshì","giải thích"],["："]]
    },
    {
     "zh": "在《现代汉语词典》里：① 老师。② 对知识分子和有一定身份成年男子的尊称。③ 称别人的丈夫或对人称自己的丈夫。④ <方>医生。⑤ 旧时称管账的人。⑥ 旧时称以说书、相面、算命、看风水等为业的人。",
     "vi": "Trong “Từ điển Hán ngữ hiện đại”: ① Thầy giáo. ② Cách gọi tôn kính đối với trí thức và nam giới trưởng thành có địa vị nhất định. ③ Gọi chồng của người khác hoặc nói với người khác về chồng mình. ④ (Phương ngữ) Bác sĩ. ⑤ Thời xưa chỉ người giữ sổ sách. ⑥ Thời xưa chỉ người làm nghề kể chuyện, xem tướng, bói toán, xem phong thủy...",
     "tokens": [["在","zài","ở, đang"],["《"],["现代汉语","xiàndàihànyǔ","tiếng Hán hiện đại"],["词典","cídiǎn","từ điển"],["》"],["里","lǐ","trong; dặm"],["："],["①"],[" "],["老师","lǎoshī","thầy cô giáo"],["。"],["②"],[" "],["对","duì","đối với; đúng"],["知识分子","zhīshífènzǐ","trí thức"],["和","hé","và; hòa"],["有","yǒu","có"],["一定","yídìng","nhất định, chắc chắn"],["身份","shēnfèn","thân phận, địa vị"],["成年","chéngnián","trưởng thành"],["男子","nánzi","nam giới"],["的","de","của (trợ từ)"],["尊称","zūnchēng","Tôn xưng, kính称"],["。"],["③"],[" "],["称","chēng","gọi"],["别人","biérén","người khác"],["的","de","của (trợ từ)"],["丈夫","zhàngfū","chồng; trượng phu"],["或","huò","hoặc"],["对","duì","đối với; đúng"],["人称","rénchēng","người ta gọi"],["自己","zìjǐ","bản thân"],["的","de","của (trợ từ)"],["丈夫","zhàngfū","chồng; trượng phu"],["。"],["④"],[" "],["<"],["方","fāng","phương; nấm (mồ)"],[">"],["医生","yīshēng","bác sĩ"],["。"],["⑤"],[" "],["旧时","jiùshí","thời xưa"],["称","chēng","gọi"],["管账","guǎnzhàng","giữ sổ sách"],["的","de","của (trợ từ)"],["人","rén","người"],["。"],["⑥"],[" "],["旧时","jiùshí","thời xưa"],["称","chēng","gọi"],["以","yǐ","lấy, dùng; với"],["说书","shuōshū","kể chuyện (nghề)"],["、"],["相面","xiàngmiàn","xem tướng"],["、"],["算命","suànmìng","bói toán"],["、"],["看风水","kànfēngshuǐ","xem phong thủy"],["等","děng","đợi; vân vân"],["为","wèi","vì, cho; là"],["业","yè","nghề, nghiệp"],["的","de","của (trợ từ)"],["人","rén","người"],["。"]]
    },
    {
     "zh": "在更大的辞典《辞海》里：① 父兄。② 老师。③ 妇女称自己的丈夫或称别人的丈夫。④ 某些方言地区称先生为医生。⑤ 道士。",
     "vi": "Trong bộ từ điển lớn hơn là “Từ Hải”: ① Cha anh. ② Thầy giáo. ③ Phụ nữ gọi chồng mình hoặc chồng người khác. ④ Một số vùng phương ngữ gọi bác sĩ là tiên sinh. ⑤ Đạo sĩ.",
     "tokens": [["在","zài","ở, đang"],["更","gèng","càng, hơn"],["大","dà","to, lớn"],["的","de","của (trợ từ)"],["辞典","cídiǎn","từ điển"],["《"],["辞海","cíhǎi","Từ Hải"],["》"],["里","lǐ","trong; dặm"],["："],["①"],[" "],["父兄","fùxiōng","cha anh"],["。"],["②"],[" "],["老师","lǎoshī","thầy cô giáo"],["。"],["③"],[" "],["妇女","fùnǚ","phụ nữ"],["称","chēng","gọi"],["自己","zìjǐ","bản thân"],["的","de","của (trợ từ)"],["丈夫","zhàngfū","chồng; trượng phu"],["或","huò","hoặc"],["称","chēng","gọi"],["别人","biérén","người khác"],["的","de","của (trợ từ)"],["丈夫","zhàngfū","chồng; trượng phu"],["。"],["④"],[" "],["某些","mǒuxiē","một số"],["方言","fāngyán","phương ngữ"],["地区","dìqū","khu vực"],["称","chēng","gọi"],["先生","xiānshēng","ông, tiên sinh; chồng"],["为","wèi","vì, cho; là"],["医生","yīshēng","bác sĩ"],["。"],["⑤"],[" "],["道士","dàoshì","đạo sĩ"],["。"]]
    },
    {
     "zh": "在同样大的辞典《辞源》里：① 始生之子，犹今言头生。② 父兄。③ 年长有学问的人。④ 老师。⑤ 文人学者自称。⑥ 妻子称丈夫。",
     "vi": "Trong bộ từ điển lớn tương đương là “Từ Nguyên”: ① Người con sinh ra đầu tiên, như ngày nay gọi là con đầu lòng. ② Cha anh. ③ Người lớn tuổi có học vấn. ④ Thầy giáo. ⑤ Văn nhân, học giả tự xưng. ⑥ Vợ gọi chồng.",
     "tokens": [["在","zài","ở, đang"],["同样","tóngyàng","giống nhau, tương tự"],["大","dà","to, lớn"],["的","de","của (trợ từ)"],["辞典","cídiǎn","từ điển"],["《"],["辞源","cíyuán","Từ Nguyên"],["》"],["里","lǐ","trong; dặm"],["："],["①"],[" "],["始","shǐ","bắt đầu"],["生之子","shēngzhīzi","người con được sinh ra"],["，"],["犹","yóu","như, giống như"],["今","jīn","nay"],["言","yán","nói"],["头生","tóushēng","con đầu lòng"],["。"],["②"],[" "],["父兄","fùxiōng","cha anh"],["。"],["③"],[" "],["年长","niánzhǎng","lớn tuổi"],["有","yǒu","có"],["学问","xuéwèn","học vấn"],["的","de","của (trợ từ)"],["人","rén","người"],["。"],["④"],[" "],["老师","lǎoshī","thầy cô giáo"],["。"],["⑤"],[" "],["文人","wénrén","văn nhân"],["学者","xuézhě","học giả"],["自称","zìchēng","tự xưng"],["。"],["⑥"],[" "],["妻子","qīzǐ","vợ"],["称","chēng","gọi"],["丈夫","zhàngfū","chồng; trượng phu"],["。"]]
    },
    {
     "zh": "原来，“先生”的意思这么多！原来，早就有女士被称为“先生”：宋庆龄、冰心、杨绛、梅志……她们都是在一些社会领域中影响较大的人物，都是女中丈夫。我感到这几位女士能被称为“先生”，其实，是人们对她们的一种特别的尊敬。",
     "vi": "Thì ra, “tiên sinh” có nhiều nghĩa như vậy! Thì ra, từ lâu đã có phụ nữ được gọi là “tiên sinh”: Tống Khánh Linh, Băng Tâm, Dương Giáng, Mai Chí... họ đều là những nhân vật có ảnh hưởng khá lớn trong một số lĩnh vực xã hội, đều là bậc nữ trung trượng phu. Tôi cảm thấy những người phụ nữ này được gọi là “tiên sinh” thật ra là một sự tôn kính đặc biệt của mọi người dành cho họ.",
     "tokens": [["原来","yuánlái","Hóa ra"],["，"],["“"],["先生","xiānshēng","ông, tiên sinh; chồng"],["”"],["的","de","của (trợ từ)"],["意思","yìsi","ý nghĩa"],["这么","zhème","như thế này"],["多","duō","nhiều; hơn"],["！"],["原来","yuánlái","Hóa ra"],["，"],["早就","zǎojiù","từ lâu"],["有","yǒu","có"],["女士","nǚshì","quý bà, nữ sĩ"],["被","bèi","bị, được"],["称为","chēngwéi","gọi là"],["“"],["先生","xiānshēng","ông, tiên sinh; chồng"],["”"],["："],["宋庆龄","sòngqìnglíng","Tống Khánh Linh"],["、"],["冰心","bīngxīn","Băng Tâm (nhà văn)"],["、"],["杨绛","yángjiàng","Dương Giáng (nữ văn sĩ)"],["、"],["梅志","méizhì","Mai Chí (nữ văn sĩ)"],["…"],["…"],["她们","tāmen","các cô ấy"],["都","dōu","đều"],["是","shì","là"],["在","zài","ở, đang"],["一些","yīxiē","một số, một vài"],["社会","shèhuì","xã hội"],["领域","lǐngyù","Lĩnh vực"],["中","zhōng","trong, giữa"],["影响","yǐngxiǎng","ảnh hưởng"],["较大","jiàodà","khá lớn"],["的","de","của (trợ từ)"],["人物","rénwù","nhân vật"],["，"],["都","dōu","đều"],["是","shì","là"],["女中丈夫","nǚzhōngzhàngfū","nữ trung trượng phu"],["。"],["我","wǒ","tôi"],["感到","gǎndào","cảm thấy"],["这","zhè","này"],["几位","jǐwèi","vài vị"],["女士","nǚshì","quý bà, nữ sĩ"],["能","néng","có thể"],["被","bèi","bị, được"],["称为","chēngwéi","gọi là"],["“"],["先生","xiānshēng","ông, tiên sinh; chồng"],["”"],["，"],["其实","qíshí","thực ra"],["，"],["是","shì","là"],["人们","rénmen","mọi người"],["对","duì","đối với; đúng"],["她们","tāmen","các cô ấy"],["的","de","của (trợ từ)"],["一种","yīzhǒng","một loại"],["特别","tèbié","đặc biệt"],["的","de","của (trợ từ)"],["尊敬","zūnjìng","tôn kính"],["。"]]
    }
   ],
   "questions": [
    {
     "q": "为什么在街上叫一位姑娘“先生”会遭到白眼？",
     "options": ["因为一般人觉得“先生”是对成年男子的称呼","因为姑娘不认识路","因为说话太大声","因为姑娘不是老师"],
     "answer": 0,
     "explain": "Người bình thường cho rằng “tiên sinh” là cách gọi nam giới trên 18 tuổi."
    },
    {
     "q": "各种辞书对“先生”的解释都有的意义是：",
     "options": ["父兄","管账的人","老师","道士"],
     "answer": 2,
     "explain": "Cả 现代汉语词典, 辞海, 辞源 đều có nghĩa “老师” (thầy giáo)."
    },
    {
     "q": "“女中丈夫”这个词语的含义应该是：",
     "options": ["女人中的男人","女人的丈夫","女人的丈夫们","女人中能干的人"],
     "answer": 3,
     "explain": "女中丈夫 chỉ người phụ nữ tài giỏi, có bản lĩnh (女人中能干的人)."
    }
   ],
   "fills": [{"sentence":"”很可能会遭到_______。","answer":"白眼","options":["领域","白眼","尊称","原来"]},{"sentence":"② 对知识分子和有一定身份成年男子的_______。","answer":"尊称","options":["尊称","原来","领域","白眼"]},{"sentence":"原来，早就有女士被称为“先生”：宋庆龄、冰心、杨绛、梅志……她们都是在一些社会_______中影响较大的人物，都是女中丈夫。","answer":"领域","options":["领域","白眼","藏","尊称"]},{"sentence":"_______，“先生”的意思这么多！","answer":"原来","options":["原来","尊称","白眼","领域"]}]
  },
  {
   "id": "u5t3",
   "unit": 5,
   "no": 3,
   "titleZh": "“老寿星”与“寿比南山”的来历",
   "titleVi": "Nguồn gốc của “lão thọ tinh” và “thọ tỷ Nam Sơn”",
   "note": "",
   "vocab": [
    {
     "hanzi": "来历",
     "pinyin": "láilì",
     "pos": "Danh từ",
     "meaning": "Nguồn gốc, lai lịch",
     "exZh": "词语的来历",
     "exVi": "Nguồn gốc của từ ngữ"
    },
    {
     "hanzi": "老寿星",
     "pinyin": "lǎoshòuxing",
     "pos": "Danh từ",
     "meaning": "Ông Thọ",
     "exZh": "称为老寿星",
     "exVi": "Được gọi là lão thọ tinh"
    },
    {
     "hanzi": "星座",
     "pinyin": "xīngzuò",
     "pos": "Danh từ",
     "meaning": "Chòm sao",
     "exZh": "天上星座的名字",
     "exVi": "Tên của một chòm sao trên trời"
    },
    {
     "hanzi": "祝愿",
     "pinyin": "zhùyuàn",
     "pos": "Danh từ/Động từ",
     "meaning": "Chúc nguyện",
     "exZh": "常用的祝愿语",
     "exVi": "Lời chúc thường dùng"
    },
    {
     "hanzi": "相比",
     "pinyin": "xiāngbǐ",
     "pos": "Động từ",
     "meaning": "So sánh",
     "exZh": "与其他山相比",
     "exVi": "So với các ngọn núi khác"
    },
    {
     "hanzi": "明显",
     "pinyin": "míngxiǎn",
     "pos": "Tính từ",
     "meaning": "Rõ ràng",
     "exZh": "特别明显",
     "exVi": "Đặc biệt nổi bật"
    }
   ],
   "grammar": [
    {
     "name": "So sánh với...",
     "struct": "与······相比",
     "explain": "Biểu thị sự đối chiếu giữa hai đối tượng.",
     "exZh": "这座山与其他山相比，有很大不同。",
     "exVi": "Ngọn núi này so với các ngọn núi khác có điểm rất khác biệt."
    }
   ],
   "text": [
    {
     "zh": "在汉语中，很多词语都有自己的来历。",
     "vi": "Trong tiếng Hán, rất nhiều từ ngữ đều có nguồn gốc riêng của mình.",
     "tokens": [["在","zài","ở, đang"],["汉语","hànyǔ","tiếng Hán"],["中","zhōng","trong, giữa"],["，"],["很多","hěnduō","rất nhiều"],["词语","cíyǔ","từ ngữ"],["都","dōu","đều"],["有","yǒu","có"],["自己","zìjǐ","bản thân"],["的","de","của (trợ từ)"],["来历","láilì","Nguồn gốc, lai lịch"],["。"]]
    },
    {
     "zh": "“老寿星”这个词，是中国人对长寿老人的尊称。为什么叫老寿星？长寿跟寿星到底有什么关系呢？",
     "vi": "Từ “lão thọ tinh” là cách gọi tôn kính của người Trung Quốc dành cho người già sống thọ. Tại sao lại gọi là lão thọ tinh? Sống thọ và sao Thọ rốt cuộc có quan hệ gì?",
     "tokens": [["“"],["老寿星","lǎoshòuxing","Ông Thọ"],["”"],["这个","zhège","cái này"],["词","cí","từ"],["，"],["是","shì","là"],["中国","zhōngguó","Trung Quốc"],["人","rén","người"],["对","duì","đối với; đúng"],["长寿","chángshòu","trường thọ"],["老人","lǎorén","người già"],["的","de","của (trợ từ)"],["尊称","zūnchēng","cách gọi tôn kính"],["。"],["为什么","wèishénme","tại sao"],["叫","jiào","gọi; bảo"],["老寿星","lǎoshòuxing","Ông Thọ"],["？"],["长寿","chángshòu","trường thọ"],["跟","gēn","với; theo"],["寿星","shòuxīng","sao Thọ"],["到底","dàodǐ","rốt cuộc"],["有","yǒu","có"],["什么","shénme","cái gì"],["关系","guānxì","quan hệ"],["呢","ne","nhỉ, thế (trợ từ)"],["？"]]
    },
    {
     "zh": "原来，寿星是天上的一个星座的名字，又叫南极老人星。由于寿星这颗星的“寿”字和“长寿”的“寿”字一样，人们又认为日、月、星星永远存在，所以，人们就把长寿老人，包括上寿100岁，中寿80岁，下寿60岁的老人，都称为“老寿星”。",
     "vi": "Thì ra, Thọ tinh là tên của một chòm sao trên trời, còn gọi là sao Nam Cực Lão Nhân. Vì chữ “thọ” trong tên ngôi sao này giống với chữ “thọ” trong “trường thọ”, người ta lại cho rằng mặt trời, mặt trăng, các vì sao tồn tại mãi mãi, cho nên người ta gọi những người già sống thọ, bao gồm thượng thọ 100 tuổi, trung thọ 80 tuổi, hạ thọ 60 tuổi, đều là “lão thọ tinh”.",
     "tokens": [["原来","yuánlái","thì ra; ban đầu"],["，"],["寿星","shòuxīng","sao Thọ"],["是","shì","là"],["天上","tiānshàng","trên trời"],["的","de","của (trợ từ)"],["一个","yígè","một (cái, người)"],["星座","xīngzuò","Chòm sao"],["的","de","của (trợ từ)"],["名字","míngzì","tên"],["，"],["又","yòu","lại"],["叫","jiào","gọi; bảo"],["南极","nánjí","Nam Cực"],["老人星","lǎorénxīng","sao Lão Nhân"],["。"],["由于","yóuyú","do, vì"],["寿星","shòuxīng","sao Thọ"],["这","zhè","này"],["颗","kē","ngôi (sao)"],["星","xīng","sao"],["的","de","của (trợ từ)"],["“"],["寿","shòu","thọ"],["”"],["字","zì","chữ"],["和","hé","và; hòa"],["“"],["长寿","chángshòu","trường thọ"],["”"],["的","de","của (trợ từ)"],["“"],["寿","shòu","thọ"],["”"],["字","zì","chữ"],["一样","yīyàng","giống nhau"],["，"],["人们","rénmen","mọi người"],["又","yòu","lại"],["认为","rènwéi","cho rằng"],["日","rì","ngày; mặt trời"],["、"],["月","yuè","trăng; tháng"],["、"],["星星","xīngxīng","ngôi sao"],["永远","yǒngyuǎn","mãi mãi"],["存在","cúnzài","tồn tại"],["，"],["所以","suǒyǐ","cho nên"],["，"],["人们","rénmen","mọi người"],["就","jiù","thì, liền"],["把","bǎ","(giới từ đưa tân ngữ lên trước)"],["长寿","chángshòu","trường thọ"],["老人","lǎorén","người già"],["，"],["包括","bāokuò","bao gồm"],["上","shàng","trên; lên"],["寿","shòu","thọ"],["100"],["岁","suì","tuổi"],["，"],["中","zhōng","trong, giữa"],["寿","shòu","thọ"],["80"],["岁","suì","tuổi"],["，"],["下","xià","dưới; xuống"],["寿","shòu","thọ"],["60"],["岁","suì","tuổi"],["的","de","của (trợ từ)"],["老人","lǎorén","người già"],["，"],["都","dōu","đều"],["称为","chēngwéi","gọi là"],["“"],["老寿星","lǎoshòuxing","Ông Thọ"],["”"],["。"]]
    },
    {
     "zh": "“寿比南山”，是给老年人过生日时用的祝愿语。那么，“祝您寿比南山”这句话又是什么意思呢？南山和人的长寿又有什么关系？",
     "vi": "“Thọ tỷ Nam Sơn” là lời chúc dùng khi mừng sinh nhật người cao tuổi. Vậy câu “Chúc cụ thọ tỷ Nam Sơn” có nghĩa là gì? Nam Sơn và sự trường thọ của con người lại có liên quan gì?",
     "tokens": [["“"],["寿比南山","shòubǐnánshān","thọ tỷ Nam Sơn"],["”"],["，"],["是","shì","là"],["给","gěi","cho"],["老年人","lǎoniánrén","người già"],["过生日","guòshēngrì","mừng sinh nhật"],["时","shí","lúc, khi"],["用","yòng","dùng"],["的","de","của (trợ từ)"],["祝愿","zhùyuàn","Chúc nguyện"],["语","yǔ","lời, ngữ"],["。"],["那么","nàme","như thế; vậy thì"],["，"],["“"],["祝您","zhùnín","chúc ông/bà"],["寿比南山","shòubǐnánshān","thọ tỷ Nam Sơn"],["”"],["这","zhè","này"],["句","jù","câu"],["话","huà","lời nói"],["又","yòu","lại"],["是","shì","là"],["什么","shénme","cái gì"],["意思","yìsi","ý nghĩa"],["呢","ne","nhỉ, thế (trợ từ)"],["？"],["南山","nánshān","Nam Sơn"],["和","hé","và; hòa"],["人","rén","người"],["的","de","của (trợ từ)"],["长寿","chángshòu","trường thọ"],["又","yòu","lại"],["有","yǒu","có"],["什么","shénme","cái gì"],["关系","guānxì","quan hệ"],["？"]]
    },
    {
     "zh": "原来，南山是中国东部地区的云门山。这座山与其他山相比，有很大不同。因为，山上有一个大“寿”字，红红的颜色，特别明显。这是明代人写的。字高7.5米、宽3.7米。一个“寿”字，就是一座山！",
     "vi": "Thì ra, Nam Sơn chính là núi Vân Môn ở miền Đông Trung Quốc. Ngọn núi này so với các ngọn núi khác có điểm rất khác biệt. Bởi vì trên núi có một chữ “Thọ” rất lớn, màu đỏ rực, đặc biệt nổi bật. Chữ này do người thời Minh viết. Chữ cao 7,5 mét, rộng 3,7 mét. Một chữ “Thọ” chính là cả một ngọn núi!",
     "tokens": [["原来","yuánlái","thì ra; ban đầu"],["，"],["南山","nánshān","Nam Sơn"],["是","shì","là"],["中国","zhōngguó","Trung Quốc"],["东部","dōngbù","miền Đông"],["地区","dìqū","khu vực"],["的","de","của (trợ từ)"],["云门山","yúnménshān","núi Vân Môn"],["。"],["这","zhè","này"],["座","zuò","ngọn, tòa"],["山","shān","núi"],["与","yǔ","và, với"],["其他","qítā","khác"],["山","shān","núi"],["相比","xiāngbǐ","So sánh"],["，"],["有","yǒu","có"],["很大","hěndà","rất lớn"],["不同","bùtóng","khác nhau"],["。"],["因为","yīnwèi","bởi vì"],["，"],["山上","shānshàng","trên núi"],["有","yǒu","có"],["一个","yígè","một (cái, người)"],["大","dà","to, lớn"],["“"],["寿","shòu","thọ"],["”"],["字","zì","chữ"],["，"],["红红的","hónghóngde","đỏ hồng"],["颜色","yánsè","màu sắc"],["，"],["特别","tèbié","đặc biệt"],["明显","míngxiǎn","Rõ ràng"],["。"],["这","zhè","này"],["是","shì","là"],["明代","míngdài","thời Minh"],["人","rén","người"],["写","xiě","viết"],["的","de","của (trợ từ)"],["。"],["字","zì","chữ"],["高","gāo","cao"],["7"],["."],["5"],["米","mǐ","mét"],["、"],["宽","kuān","rộng"],["3"],["."],["7"],["米","mǐ","mét"],["。"],["一个","yígè","một (cái, người)"],["“"],["寿","shòu","thọ"],["”"],["字","zì","chữ"],["，"],["就是","jiùshì","chính là"],["一座","yīzuò","một ngọn, một tòa"],["山","shān","núi"],["！"]]
    },
    {
     "zh": "因为大山的生命长久，人们希望也像山一样长寿，所以，就有了“寿比南山”这句话。汉语里，这样的例子还有很多。",
     "vi": "Vì sinh mệnh của núi lớn rất lâu dài, người ta mong mình cũng sống thọ như núi, cho nên mới có câu “Thọ tỷ Nam Sơn”. Trong tiếng Hán, những ví dụ như thế này còn rất nhiều.",
     "tokens": [["因为","yīnwèi","bởi vì"],["大山","dàshān","núi lớn"],["的","de","của (trợ từ)"],["生命","shēngmìng","sinh mệnh, sự sống"],["长久","chángjiǔ","lâu dài"],["，"],["人们","rénmen","mọi người"],["希望","xīwàng","hy vọng"],["也","yě","cũng"],["像","xiàng","giống như"],["山","shān","núi"],["一样","yīyàng","giống nhau"],["长寿","chángshòu","trường thọ"],["，"],["所以","suǒyǐ","cho nên"],["，"],["就","jiù","thì, liền"],["有","yǒu","có"],["了","le","rồi (trợ từ)"],["“"],["寿比南山","shòubǐnánshān","thọ tỷ Nam Sơn"],["”"],["这","zhè","này"],["句","jù","câu"],["话","huà","lời nói"],["。"],["汉语","hànyǔ","tiếng Hán"],["里","lǐ","trong; dặm"],["，"],["这样","zhèyàng","như vậy"],["的","de","của (trợ từ)"],["例子","lìzi","ví dụ"],["还有","háiyǒu","còn có"],["很多","hěnduō","rất nhiều"],["。"]]
    }
   ],
   "questions": [
    {
     "q": "“寿星”原来是什么？",
     "options": ["一位老人的名字","天上一个星座的名字","一座山的名字","一种花的名字"],
     "answer": 1,
     "explain": "Thọ tinh là tên một chòm sao trên trời, còn gọi là sao Nam Cực Lão Nhân."
    },
    {
     "q": "“寿比南山”中的“南山”是哪座山？",
     "options": ["香山","中国东部地区的云门山","泰山","天津的山"],
     "answer": 1,
     "explain": "Nam Sơn là núi Vân Môn ở miền Đông Trung Quốc."
    },
    {
     "q": "“寿比南山”这句话一般在什么时候用？",
     "options": ["结婚的时候","给老年人过生日的时候","过春节的时候","毕业的时候"],
     "answer": 1,
     "explain": "Đây là lời chúc dùng khi mừng sinh nhật người cao tuổi."
    }
   ],
   "fills": [{"sentence":"在汉语中，很多词语都有自己的_______。","answer":"来历","options":["老寿星","祝愿","来历","明显"]},{"sentence":"为什么叫_______？","answer":"老寿星","options":["老寿星","明显","相比","祝愿"]},{"sentence":"原来，寿星是天上的一个_______的名字，又叫南极老人星。","answer":"星座","options":["来历","祝愿","星座","老寿星"]},{"sentence":"“寿比南山”，是给老年人过生日时用的_______语。","answer":"祝愿","options":["老寿星","祝愿","明显","相比"]},{"sentence":"这座山与其他山_______，有很大不同。","answer":"相比","options":["相比","星座","老寿星","明显"]}]
  },
  {
   "id": "u5t4",
   "unit": 5,
   "no": 4,
   "titleZh": "乡愁",
   "titleVi": "Nỗi nhớ quê (thơ Dư Quang Trung)",
   "note": "Thơ Dư Quang Trung",
   "vocab": [
    {
     "hanzi": "枚",
     "pinyin": "méi",
     "pos": "Lượng từ",
     "meaning": "Tấm, con (tem)",
     "exZh": "一枚小小的邮票",
     "exVi": "Một con tem nho nhỏ"
    },
    {
     "hanzi": "窄",
     "pinyin": "zhǎi",
     "pos": "Tính từ",
     "meaning": "Hẹp, mỏng",
     "exZh": "一张窄窄的船票",
     "exVi": "Một tấm vé tàu hẹp hẹp"
    },
    {
     "hanzi": "坟墓",
     "pinyin": "fénmù",
     "pos": "Danh từ",
     "meaning": "Nấm mồ, mộ phần",
     "exZh": "矮矮的坟墓",
     "exVi": "Nấm mồ thấp thấp"
    },
    {
     "hanzi": "海峡",
     "pinyin": "hǎixiá",
     "pos": "Danh từ",
     "meaning": "Eo biển",
     "exZh": "浅浅的海峡",
     "exVi": "Eo biển nông nông"
    },
    {
     "hanzi": "大陆",
     "pinyin": "dàlù",
     "pos": "Danh từ",
     "meaning": "Đại lục",
     "exZh": "大陆在那头",
     "exVi": "Đại lục ở đầu kia"
    }
   ],
   "grammar": [],
   "text": [
    {
     "zh": "小时候，",
     "vi": "Hồi còn nhỏ,",
     "tokens": [["小时候","xiǎoshíhòu","hồi nhỏ"],["，"]]
    },
    {
     "zh": "乡愁是一枚小小的邮票。",
     "vi": "nỗi nhớ quê là một con tem nho nhỏ.",
     "tokens": [["乡愁","xiāngchóu","nỗi nhớ quê"],["是","shì","là"],["一枚","yīméi","một con (tem)"],["小小的","xiǎoxiǎode","nho nhỏ"],["邮票","yóupiào","con tem"],["。"]]
    },
    {
     "zh": "我在这头，",
     "vi": "Tôi ở đầu này,",
     "tokens": [["我","wǒ","tôi"],["在","zài","ở, đang"],["这","zhè","này"],["头","tóu","đầu; đầu (bên)"],["，"]]
    },
    {
     "zh": "母亲在那头。",
     "vi": "mẹ ở đầu kia.",
     "tokens": [["母亲","mǔqīn","mẹ"],["在","zài","ở, đang"],["那","nà","kia, đó"],["头","tóu","đầu; đầu (bên)"],["。"]]
    },
    {
     "zh": "",
     "vi": "",
     "tokens": []
    },
    {
     "zh": "长大后，",
     "vi": "Khi lớn lên,",
     "tokens": [["长大","zhǎngdà","lớn lên"],["后","hòu","sau"],["，"]]
    },
    {
     "zh": "乡愁是一张窄窄的船票。",
     "vi": "nỗi nhớ quê là một tấm vé tàu hẹp hẹp.",
     "tokens": [["乡愁","xiāngchóu","nỗi nhớ quê"],["是","shì","là"],["一张","yīzhāng","một tấm, một tờ"],["窄窄的","zhǎizhǎide","hẹp hẹp"],["船票","chuánpiào","vé tàu"],["。"]]
    },
    {
     "zh": "我在这头，",
     "vi": "Tôi ở đầu này,",
     "tokens": [["我","wǒ","tôi"],["在","zài","ở, đang"],["这","zhè","này"],["头","tóu","đầu; đầu (bên)"],["，"]]
    },
    {
     "zh": "新娘在那头。",
     "vi": "cô dâu ở đầu kia.",
     "tokens": [["新娘","xīnniáng","cô dâu"],["在","zài","ở, đang"],["那","nà","kia, đó"],["头","tóu","đầu; đầu (bên)"],["。"]]
    },
    {
     "zh": "",
     "vi": "",
     "tokens": []
    },
    {
     "zh": "后来啊，",
     "vi": "Về sau,",
     "tokens": [["后来","hòulái","sau đó"],["啊","a","à, nhé (trợ từ)"],["，"]]
    },
    {
     "zh": "乡愁是一方矮矮的坟墓。",
     "vi": "nỗi nhớ quê là một nấm mồ thấp thấp.",
     "tokens": [["乡愁","xiāngchóu","nỗi nhớ quê"],["是","shì","là"],["一方","yīfāng","một nấm, một phương"],["矮矮的","ǎiǎide","thấp thấp"],["坟墓","fénmù","Nấm mồ, mộ phần"],["。"]]
    },
    {
     "zh": "我在外头，",
     "vi": "Tôi ở bên ngoài,",
     "tokens": [["我","wǒ","tôi"],["在","zài","ở, đang"],["外头","wàitou","bên ngoài"],["，"]]
    },
    {
     "zh": "母亲在里头。",
     "vi": "mẹ ở bên trong.",
     "tokens": [["母亲","mǔqīn","mẹ"],["在","zài","ở, đang"],["里头","lǐtou","bên trong"],["。"]]
    },
    {
     "zh": "",
     "vi": "",
     "tokens": []
    },
    {
     "zh": "而现在，",
     "vi": "Còn bây giờ,",
     "tokens": [["而","ér","mà, còn"],["现在","xiànzài","bây giờ"],["，"]]
    },
    {
     "zh": "乡愁是一湾浅浅的海峡。",
     "vi": "nỗi nhớ quê là một eo biển nông nông.",
     "tokens": [["乡愁","xiāngchóu","nỗi nhớ quê"],["是","shì","là"],["一","yī","một"],["湾","wān","eo (biển)"],["浅浅的","qiǎnqiǎnde","nông nông"],["海峡","hǎixiá","Eo biển"],["。"]]
    },
    {
     "zh": "我在这头，",
     "vi": "Tôi ở đầu này,",
     "tokens": [["我","wǒ","tôi"],["在","zài","ở, đang"],["这","zhè","này"],["头","tóu","đầu; đầu (bên)"],["，"]]
    },
    {
     "zh": "大陆在那头。",
     "vi": "đại lục ở đầu kia.",
     "tokens": [["大陆","dàlù","Đại lục"],["在","zài","ở, đang"],["那","nà","kia, đó"],["头","tóu","đầu; đầu (bên)"],["。"]]
    }
   ],
   "questions": [
    {
     "q": "诗中，“长大后”的乡愁是什么？",
     "options": ["一枚小小的邮票","一张窄窄的船票","一方矮矮的坟墓","一湾浅浅的海峡"],
     "answer": 1,
     "explain": "Khổ 2: 长大后，乡愁是一张窄窄的船票."
    },
    {
     "q": "“我在外头，母亲在里头”表达了什么？",
     "options": ["母亲在房子里","母亲已经去世了","母亲在学校","母亲在船上"],
     "answer": 1,
     "explain": "Khổ 3 nói về nấm mồ (坟墓): mẹ đã mất, nằm bên trong."
    },
    {
     "q": "这首诗中的“乡愁”在诗的最后变成了什么？",
     "options": ["对母亲的思念","对新娘的思念","对大陆和祖国的思念","对邮票的喜爱"],
     "answer": 2,
     "explain": "Khổ cuối: eo biển ngăn cách, “tôi ở đầu này, đại lục ở đầu kia” — nỗi nhớ quê hương đất nước."
    }
   ],
   "fills": [{"sentence":"小时候，乡愁是一_______小小的邮票。","answer":"枚","options":["枚","大陆","窄","坟墓"]},{"sentence":"长大后，乡愁是一张_______窄的船票。","answer":"窄","options":["枚","海峡","大陆","窄"]},{"sentence":"后来啊，乡愁是一方矮矮的_______。","answer":"坟墓","options":["海峡","坟墓","枚","窄"]},{"sentence":"而现在，乡愁是一湾浅浅的_______。","answer":"海峡","options":["海峡","坟墓","大陆","枚"]},{"sentence":"我在这头，_______在那头。","answer":"大陆","options":["窄","大陆","坟墓","海峡"]}]
  },
  {
   "id": "u6t1",
   "unit": 6,
   "no": 1,
   "titleZh": "塞翁失马的故事",
   "titleVi": "Câu chuyện Tái ông mất ngựa",
   "note": "",
   "vocab": [
    {
     "hanzi": "塞翁",
     "pinyin": "Sàiwēng",
     "pos": "Tên riêng",
     "meaning": "Tái Ông",
     "exZh": "塞翁失马",
     "exVi": "Tái ông mất ngựa"
    },
    {
     "hanzi": "智慧",
     "pinyin": "zhìhuì",
     "pos": "Danh từ/Tính từ",
     "meaning": "Trí tuệ",
     "exZh": "智慧的老人",
     "exVi": "Ông lão thông thái"
    },
    {
     "hanzi": "无缘无故",
     "pinyin": "wúyuán wúgù",
     "pos": "Thành ngữ",
     "meaning": "Vô duyên vô cớ",
     "exZh": "无缘无故跑了",
     "exVi": "Vô cớ bỏ chạy"
    },
    {
     "hanzi": "灾祸",
     "pinyin": "zāihuò",
     "pos": "Danh từ",
     "meaning": "Tai họa",
     "exZh": "一种灾祸",
     "exVi": "Một tai họa"
    },
    {
     "hanzi": "入侵",
     "pinyin": "rùqīn",
     "pos": "Động từ",
     "meaning": "Xâm lược",
     "exZh": "胡人入侵",
     "exVi": "Người Hồ xâm lược"
    },
    {
     "hanzi": "保全",
     "pinyin": "bǎoquán",
     "pos": "Động từ",
     "meaning": "Bảo toàn",
     "exZh": "保全了性命",
     "exVi": "Giữ được tính mạng"
    }
   ],
   "grammar": [
    {
     "name": "Trong cái rủi có cái may",
     "struct": "塞翁失马，安知非福",
     "explain": "Cổ ngữ châm ngôn về sự chuyển hóa giữa họa và phúc.",
     "exZh": "“塞翁失马，安知非福”，说的就是这个道理。",
     "exVi": "“Tái ông mất ngựa, biết đâu chẳng phải phúc”, chính là nói đạo lý này."
    },
    {
     "name": "Họa là chỗ dựa của phúc",
     "struct": "祸兮福所倚，福兮祸所伏",
     "explain": "Thành ngữ triết học Lão Tử.",
     "exZh": "老子说：祸兮福所倚，福兮祸所伏。",
     "exVi": "Lão Tử nói: Họa là chỗ dựa của phúc, phúc là chỗ ẩn náu của họa."
    }
   ],
   "text": [
    {
     "zh": "这是一个古老而有名的成语故事，叫做“塞翁失马，安知非福”，也简称“塞翁失马”。故事是这样的：在边远地方，住着一位智慧的老人。有一天，他的马无缘无故跑了，跑到了胡人的住地。家产受到很大损失。邻居们都来安慰他，劝他别太伤心了。谁知那老人却说：“你怎么知道这不是一种福气呢？对我来说，也许这是一件好事呢！”",
     "vi": "Đây là một câu chuyện thành ngữ cổ xưa và nổi tiếng, gọi là “Tái ông thất mã, an tri phi phúc” (ông già ở biên ải mất ngựa, biết đâu chẳng phải là phúc), cũng gọi tắt là “Tái ông thất mã”. Câu chuyện như sau: Ở vùng biên giới xa xôi có một ông lão rất thông thái. Một hôm, con ngựa của ông vô cớ bỏ chạy, chạy sang vùng đất của người Hồ. Gia sản bị tổn thất rất lớn. Hàng xóm đều đến an ủi, khuyên ông đừng quá buồn. Ai ngờ ông lão lại nói: “Sao các ông biết đây không phải là một điều phúc? Đối với tôi, có lẽ đây là một chuyện tốt đấy!”",
     "tokens": [["这","zhè","này"],["是","shì","là"],["一个","yígè","một (cái, người)"],["古老","gǔlǎo","cổ xưa"],["而","ér","mà, còn"],["有名","yǒumíng","nổi tiếng"],["的","de","của (trợ từ)"],["成语故事","chéngyǔgùshì","chuyện thành ngữ"],["，"],["叫做","jiàozuò","gọi là"],["“"],["塞翁失马","sàiwēngshīmǎ","tái ông mất ngựa"],["，"],["安知非福","ānzhīfēifú","biết đâu chẳng phải phúc"],["”"],["，"],["也","yě","cũng"],["简称","jiǎnchēng","gọi tắt"],["“"],["塞翁失马","sàiwēngshīmǎ","tái ông mất ngựa"],["”"],["。"],["故事","gùshì","câu chuyện"],["是","shì","là"],["这样","zhèyàng","như vậy"],["的","de","của (trợ từ)"],["："],["在","zài","ở, đang"],["边远","biānyuǎn","xa xôi hẻo lánh"],["地方","dìfāng","nơi, chỗ"],["，"],["住","zhù","ở, sống"],["着","zhe","đang (trợ từ)"],["一位","yīwèi","một vị, một người"],["智慧","zhìhuì","Trí tuệ"],["的","de","của (trợ từ)"],["老人","lǎorén","người già"],["。"],["有","yǒu","có"],["一天","yītiān","một ngày"],["，"],["他","tā","anh ấy, ông ấy"],["的","de","của (trợ từ)"],["马","mǎ","ngựa"],["无缘无故","wúyuán wúgù","Vô duyên vô cớ"],["跑","pǎo","chạy"],["了","le","rồi (trợ từ)"],["，"],["跑","pǎo","chạy"],["到","dào","đến"],["了","le","rồi (trợ từ)"],["胡人","húrén","người Hồ"],["的","de","của (trợ từ)"],["住","zhù","ở, sống"],["地","dì","(trợ từ trạng ngữ)"],["。"],["家产","jiāchǎn","gia sản"],["受到","shòudào","nhận được, bị"],["很大","hěndà","rất lớn"],["损失","sǔnshī","tổn thất"],["。"],["邻居们","línjūmen","hàng xóm"],["都","dōu","đều"],["来","lái","đến"],["安慰","ānwèi","an ủi"],["他","tā","anh ấy, ông ấy"],["，"],["劝","quàn","khuyên"],["他","tā","anh ấy, ông ấy"],["别","bié","đừng; khác"],["太","tài","quá"],["伤心","shāngxīn","đau lòng, buồn"],["了","le","rồi (trợ từ)"],["。"],["谁知","shuízhī","ai ngờ"],["那","nà","kia, đó"],["老人","lǎorén","người già"],["却说","quèshuō","lại nói"],["："],["“"],["你","nǐ","bạn"],["怎么","zěnme","thế nào"],["知道","zhīdào","biết"],["这","zhè","này"],["不是","búshì","không phải"],["一种","yīzhǒng","một loại"],["福气","fúqì","phúc"],["呢","ne","nhỉ, thế (trợ từ)"],["？"],["对","duì","đối với; đúng"],["我","wǒ","tôi"],["来说","láishuō","mà nói"],["，"],["也许","yěxǔ","có lẽ"],["这","zhè","này"],["是","shì","là"],["一件","yījiàn","một (việc, chiếc)"],["好事","hǎoshì","việc tốt"],["呢","ne","nhỉ, thế (trợ từ)"],["！"],["”"]]
    },
    {
     "zh": "过了几个月，那匹马带领着一大群胡人的好马回来了。邻居们觉得他发财了，都前来祝贺他。那老人又说：“谁知道这是不是一种灾祸呢？也许这并不是一件好事啊！”",
     "vi": "Mấy tháng sau, con ngựa đó dẫn theo cả một đàn ngựa tốt của người Hồ trở về. Hàng xóm cho rằng ông phát tài rồi, đều đến chúc mừng. Ông lão lại nói: “Ai biết đây có phải là một tai họa không? Có lẽ đây không phải là chuyện tốt đâu!”",
     "tokens": [["过","guò","qua; sống, đón"],["了","le","rồi (trợ từ)"],["几个","jǐgè","vài (cái)"],["月","yuè","trăng; tháng"],["，"],["那","nà","kia, đó"],["匹","pǐ","con (ngựa)"],["马","mǎ","ngựa"],["带领","dàilǐng","dẫn theo"],["着","zhe","đang (trợ từ)"],["一大群","yīdàqún","một đàn lớn"],["胡人","húrén","người Hồ"],["的","de","của (trợ từ)"],["好","hǎo","tốt; rất"],["马","mǎ","ngựa"],["回来","huílái","trở về"],["了","le","rồi (trợ từ)"],["。"],["邻居们","línjūmen","hàng xóm"],["觉得","juéde","cảm thấy"],["他","tā","anh ấy, ông ấy"],["发财","fācái","phát tài"],["了","le","rồi (trợ từ)"],["，"],["都","dōu","đều"],["前来","qiánlái","đến"],["祝贺","zhùhè","chúc mừng"],["他","tā","anh ấy, ông ấy"],["。"],["那","nà","kia, đó"],["老人","lǎorén","người già"],["又","yòu","lại"],["说","shuō","nói"],["："],["“"],["谁","shuí","ai"],["知道","zhīdào","biết"],["这","zhè","này"],["是不是","shìbúshì","có phải không"],["一种","yīzhǒng","một loại"],["灾祸","zāihuò","Tai họa"],["呢","ne","nhỉ, thế (trợ từ)"],["？"],["也许","yěxǔ","có lẽ"],["这","zhè","này"],["并","bìng","lại (nhấn mạnh phủ định); và"],["不是","búshì","không phải"],["一件","yījiàn","một (việc, chiếc)"],["好事","hǎoshì","việc tốt"],["啊","a","à, nhé (trợ từ)"],["！"],["”"]]
    },
    {
     "zh": "老人的家中有很多好马了，别人都很羡慕他家。他的儿子爱好骑马，可是一次不小心，从马上掉下来，摔断了大腿，从此只能一条腿走路了。邻居们以为老人一定特别烦恼，都来慰问他。可那老人说：“也许这又是一件好事呢！”",
     "vi": "Nhà ông lão có rất nhiều ngựa tốt, ai cũng ngưỡng mộ nhà ông. Con trai ông thích cưỡi ngựa, nhưng một lần không cẩn thận ngã từ trên ngựa xuống, gãy chân, từ đó chỉ có thể đi bằng một chân. Hàng xóm cho rằng ông lão chắc chắn rất buồn phiền, đều đến hỏi thăm. Nhưng ông lão lại nói: “Có lẽ đây lại là một chuyện tốt đấy!”",
     "tokens": [["老人","lǎorén","người già"],["的","de","của (trợ từ)"],["家中","jiāzhōng","trong nhà"],["有","yǒu","có"],["很多","hěnduō","rất nhiều"],["好","hǎo","tốt; rất"],["马","mǎ","ngựa"],["了","le","rồi (trợ từ)"],["，"],["别人","biérén","người khác"],["都","dōu","đều"],["很","hěn","rất"],["羡慕","xiànmù","ngưỡng mộ"],["他家","tājiā","nhà ông ấy"],["。"],["他","tā","anh ấy, ông ấy"],["的","de","của (trợ từ)"],["儿子","érzi","con trai"],["爱好","àihào","sở thích; yêu thích"],["骑马","qímǎ","cưỡi ngựa"],["，"],["可是","kěshì","nhưng"],["一次","yīcì","một lần"],["不","bù","không"],["小心","xiǎoxīn","cẩn thận"],["，"],["从","cóng","từ"],["马上","mǎshàng","lập tức"],["掉下来","diàoxiàlái","rơi xuống"],["，"],["摔断了","shuāiduànle","ngã gãy"],["大腿","dàtuǐ","đùi, chân"],["，"],["从此","cóngcǐ","từ đó"],["只能","zhǐnéng","chỉ có thể"],["一条","yītiáo","một con, một tuyến"],["腿走路","tuǐzǒulù","chân để đi"],["了","le","rồi (trợ từ)"],["。"],["邻居们","línjūmen","hàng xóm"],["以为","yǐwéi","tưởng rằng, cho rằng"],["老人","lǎorén","người già"],["一定","yídìng","nhất định, chắc chắn"],["特别","tèbié","đặc biệt"],["烦恼","fánnǎo","phiền muộn"],["，"],["都","dōu","đều"],["来","lái","đến"],["慰问","wèiwèn","hỏi thăm"],["他","tā","anh ấy, ông ấy"],["。"],["可","kě","có thể; nhưng"],["那","nà","kia, đó"],["老人","lǎorén","người già"],["说","shuō","nói"],["："],["“"],["也许","yěxǔ","có lẽ"],["这","zhè","này"],["又","yòu","lại"],["是","shì","là"],["一件","yījiàn","một (việc, chiếc)"],["好事","hǎoshì","việc tốt"],["呢","ne","nhỉ, thế (trợ từ)"],["！"],["”"]]
    },
    {
     "zh": "过了一年，胡人入侵边塞，健壮男子都拿起武器去作战。去打仗的人，大部分都死了。只有老人的儿子，因为只有一条腿，不能去打仗，保全了性命。",
     "vi": "Một năm sau, người Hồ xâm lược biên ải, trai tráng khỏe mạnh đều cầm vũ khí ra trận. Những người đi đánh trận phần lớn đều chết. Chỉ có con trai ông lão, vì chỉ có một chân nên không thể ra trận, đã giữ được tính mạng.",
     "tokens": [["过","guò","qua; sống, đón"],["了","le","rồi (trợ từ)"],["一年","yīnián","một năm"],["，"],["胡人","húrén","người Hồ"],["入侵","rùqīn","Xâm lược"],["边塞","biānsài","biên ải"],["，"],["健壮","jiànzhuàng","khỏe mạnh, cường tráng"],["男子","nánzi","nam giới"],["都","dōu","đều"],["拿","ná","cầm, lấy"],["起","qǐ","lên, dậy"],["武器","wǔqì","vũ khí"],["去","qù","đi"],["作战","zuòzhàn","chiến đấu"],["。"],["去","qù","đi"],["打仗","dǎzhàng","đánh trận"],["的","de","của (trợ từ)"],["人","rén","người"],["，"],["大部分","dàbùfèn","phần lớn"],["都","dōu","đều"],["死","sǐ","chết"],["了","le","rồi (trợ từ)"],["。"],["只有","zhǐyǒu","chỉ có"],["老人","lǎorén","người già"],["的","de","của (trợ từ)"],["儿子","érzi","con trai"],["，"],["因为","yīnwèi","bởi vì"],["只有","zhǐyǒu","chỉ có"],["一条","yītiáo","một con, một tuyến"],["腿","tuǐ","chân"],["，"],["不能","bùnéng","không thể"],["去","qù","đi"],["打仗","dǎzhàng","đánh trận"],["，"],["保全","bǎoquán","Bảo toàn"],["了","le","rồi (trợ từ)"],["性命","xìngmìng","tính mạng"],["。"]]
    },
    {
     "zh": "老子说：祸兮福所倚，福兮祸所伏，说的就是这个意思。",
     "vi": "Lão Tử nói: Họa là chỗ dựa của phúc, phúc là chỗ ẩn náu của họa, chính là nói ý nghĩa này.",
     "tokens": [["老子","lǎozi","Lão Tử"],["说","shuō","nói"],["："],["祸兮福所倚","huò xī fú suǒ yǐ","họa là chỗ dựa của phúc"],["，"],["福兮祸所伏","fú xī huò suǒ fú","phúc là chỗ ẩn của họa"],["，"],["说","shuō","nói"],["的","de","của (trợ từ)"],["就是","jiùshì","chính là"],["这个","zhège","cái này"],["意思","yìsi","ý nghĩa"],["。"]]
    }
   ],
   "questions": [
    {
     "q": "老人的马跑了以后，他是怎么说的？",
     "options": ["这是一件坏事","你怎么知道这不是一种福气呢","我要去找回来","我很伤心"],
     "answer": 1,
     "explain": "Ông lão nói: 你怎么知道这不是一种福气呢？"
    },
    {
     "q": "老人的儿子为什么没有去打仗？",
     "options": ["因为他年纪太小","因为他摔断了腿，只有一条腿","因为他去旅行了","因为他生病了"],
     "answer": 1,
     "explain": "Con trai ông ngã ngựa gãy chân, chỉ đi được một chân nên không phải ra trận."
    },
    {
     "q": "这个故事说明了什么道理？",
     "options": ["坏事和好事在一定条件下可以互相转化","骑马很危险","邻居都很好","不要养马"],
     "answer": 0,
     "explain": "祸兮福所倚，福兮祸所伏 — họa và phúc có thể chuyển hóa lẫn nhau."
    }
   ],
   "fills": [{"sentence":"这是一个古老而有名的成语故事，叫做“_______失马，安知非福”，也简称“塞翁失马”。","answer":"塞翁","options":["保全","入侵","灾祸","塞翁"]},{"sentence":"故事是这样的：在边远地方，住着一位_______的老人。","answer":"智慧","options":["入侵","智慧","灾祸","无缘无故"]},{"sentence":"有一天，他的马_______跑了，跑到了胡人的住地。","answer":"无缘无故","options":["塞翁","无缘无故","入侵","保全"]},{"sentence":"那老人又说：“谁知道这是不是一种_______呢？","answer":"灾祸","options":["入侵","灾祸","无缘无故","智慧"]},{"sentence":"”过了一年，胡人_______边塞，健壮男子都拿起武器去作战。","answer":"入侵","options":["入侵","智慧","无缘无故","灾祸"]}]
  },
  {
   "id": "u6t2",
   "unit": 6,
   "no": 2,
   "titleZh": "说说网上购物",
   "titleVi": "Bàn về mua sắm trực tuyến",
   "note": "",
   "vocab": [
    {
     "hanzi": "普及",
     "pinyin": "pǔjí",
     "pos": "Động từ/Tính từ",
     "meaning": "Phổ cập",
     "exZh": "互联网的普及",
     "exVi": "Sự phổ biến của internet"
    },
    {
     "hanzi": "转移",
     "pinyin": "zhuǎnyí",
     "pos": "Động từ",
     "meaning": "Chuyển dời",
     "exZh": "转移到了网上",
     "exVi": "Chuyển lên mạng"
    },
    {
     "hanzi": "浏览",
     "pinyin": "liúlǎn",
     "pos": "Động từ",
     "meaning": "Lướt xem",
     "exZh": "在网站上浏览",
     "exVi": "Lướt xem trên trang web"
    },
    {
     "hanzi": "鼠标",
     "pinyin": "shǔbiāo",
     "pos": "Danh từ",
     "meaning": "Chuột máy tính",
     "exZh": "点一下鼠标",
     "exVi": "Nhấp chuột một cái"
    },
    {
     "hanzi": "送货上门",
     "pinyin": "sònghuò shàngmén",
     "pos": "Cụm từ",
     "meaning": "Giao hàng tận nhà",
     "exZh": "送货上门",
     "exVi": "Giao hàng tận nhà"
    },
    {
     "hanzi": "的确",
     "pinyin": "díquè",
     "pos": "Phó từ",
     "meaning": "Quả thực",
     "exZh": "的确有很多优点",
     "exVi": "Quả thật có rất nhiều ưu điểm"
    }
   ],
   "grammar": [],
   "text": [
    {
     "zh": "随着网络技术的发展和互联网的普及，人们的消费习惯发生了很多的变化。很多人不再去商场买东西，而是把购物的地点转移到了网上。很多人每天在购物网站上浏览，看到喜欢的，就点一下鼠标，送货上门。这就是网上购物。",
     "vi": "Cùng với sự phát triển của công nghệ mạng và sự phổ biến của internet, thói quen tiêu dùng của con người đã có rất nhiều thay đổi. Nhiều người không còn đến trung tâm thương mại mua đồ nữa, mà chuyển địa điểm mua sắm lên mạng. Nhiều người mỗi ngày lướt xem trên các trang web mua sắm, thấy món nào thích thì nhấp chuột một cái là được giao hàng tận nhà. Đây chính là mua sắm trực tuyến.",
     "tokens": [["随着","suízhe","cùng với, theo"],["网络","wǎngluò","mạng"],["技术","jìshù","công nghệ, kỹ thuật"],["的","de","của (trợ từ)"],["发展","fāzhǎn","phát triển"],["和","hé","và; hòa"],["互联网","hùliánwǎng","internet"],["的","de","của (trợ từ)"],["普及","pǔjí","Phổ cập"],["，"],["人们","rénmen","mọi người"],["的","de","của (trợ từ)"],["消费","xiāofèi","tiêu dùng"],["习惯","xíguàn","thói quen"],["发生","fāshēng","xảy ra"],["了","le","rồi (trợ từ)"],["很多","hěnduō","rất nhiều"],["的","de","của (trợ từ)"],["变化","biànhuà","thay đổi"],["。"],["很多","hěnduō","rất nhiều"],["人","rén","người"],["不再","bùzài","không còn nữa"],["去","qù","đi"],["商场","shāngchǎng","trung tâm thương mại"],["买","mǎi","mua"],["东西","dōngxī","đồ vật"],["，"],["而是","érshì","mà là"],["把","bǎ","(giới từ đưa tân ngữ lên trước)"],["购物","gòuwù","mua sắm"],["的","de","của (trợ từ)"],["地点","dìdiǎn","địa điểm"],["转移","zhuǎnyí","Chuyển dời"],["到","dào","đến"],["了","le","rồi (trợ từ)"],["网上","wǎngshàng","trên mạng"],["。"],["很多","hěnduō","rất nhiều"],["人","rén","người"],["每天","měitiān","mỗi ngày"],["在","zài","ở, đang"],["购物","gòuwù","mua sắm"],["网站","wǎngzhàn","trang web"],["上","shàng","trên; lên"],["浏览","liúlǎn","Lướt xem"],["，"],["看到","kàndào","nhìn thấy"],["喜欢","xǐhuān","thích"],["的","de","của (trợ từ)"],["，"],["就","jiù","thì, liền"],["点","diǎn","nhấp; điểm; giờ"],["一下","yīxià","một chút, một cái"],["鼠标","shǔbiāo","Chuột máy tính"],["，"],["送货上门","sònghuò shàngmén","Giao hàng tận nhà"],["。"],["这","zhè","này"],["就是","jiùshì","chính là"],["网上","wǎngshàng","trên mạng"],["购物","gòuwù","mua sắm"],["。"]]
    },
    {
     "zh": "网上购物改变了人们的消费习惯，年轻人开始不愿意出门逛街了，他们觉得这样既节省时间，又节省精力。在网络世界里，买东西的人被称做“买家”，卖东西的则是“卖家”。许多买家认为自己喜欢网购有着充分的理由。有买家说：“方便、便宜，为什么不呢？”也有买家说：“网上商品丰富，还省去了到处跑、四处找的麻烦。”",
     "vi": "Mua sắm trực tuyến đã thay đổi thói quen tiêu dùng của con người, người trẻ bắt đầu không muốn ra ngoài dạo phố nữa, họ cảm thấy như vậy vừa tiết kiệm thời gian, vừa tiết kiệm sức lực. Trong thế giới mạng, người mua đồ được gọi là “người mua”, người bán đồ thì là “người bán”. Nhiều người mua cho rằng mình có đủ lý do để thích mua sắm trực tuyến. Có người mua nói: “Tiện lợi, rẻ, tại sao lại không chứ?” Cũng có người mua nói: “Hàng hóa trên mạng phong phú, lại còn đỡ phải chạy khắp nơi, tìm khắp chốn.”",
     "tokens": [["网上","wǎngshàng","trên mạng"],["购物","gòuwù","mua sắm"],["改变","gǎibiàn","thay đổi"],["了","le","rồi (trợ từ)"],["人们","rénmen","mọi người"],["的","de","của (trợ từ)"],["消费","xiāofèi","tiêu dùng"],["习惯","xíguàn","thói quen"],["，"],["年轻人","niánqīngrén","người trẻ"],["开始","kāishǐ","bắt đầu"],["不","bù","không"],["愿意","yuànyì","bằng lòng, muốn"],["出门","chūmén","ra khỏi nhà"],["逛街","guàngjiē","dạo phố"],["了","le","rồi (trợ từ)"],["，"],["他们","tāmen","họ"],["觉得","juéde","cảm thấy"],["这样","zhèyàng","như vậy"],["既","jì","vừa"],["节省时间","jiéshěngshíjiān","tiết kiệm thời gian"],["，"],["又","yòu","lại"],["节省","jiéshěng","tiết kiệm"],["精力","jīnglì","sức lực"],["。"],["在","zài","ở, đang"],["网络","wǎngluò","mạng"],["世界","shìjiè","thế giới"],["里","lǐ","trong; dặm"],["，"],["买","mǎi","mua"],["东西","dōngxī","đồ vật"],["的","de","của (trợ từ)"],["人","rén","người"],["被","bèi","bị, được"],["称做","chēngzuò","được gọi là"],["“"],["买家","mǎijiā","người mua"],["”"],["，"],["卖东西","màidōngxī","bán đồ"],["的","de","của (trợ từ)"],["则","zé","thì; mẩu (tin)"],["是","shì","là"],["“"],["卖家","màijiā","người bán"],["”"],["。"],["许多","xǔduō","nhiều"],["买家","mǎijiā","người mua"],["认为","rènwéi","cho rằng"],["自己","zìjǐ","bản thân"],["喜欢","xǐhuān","thích"],["网","wǎng","mạng"],["购","gòu","mua"],["有着","yǒuzhe","có"],["充分","chōngfèn","đầy đủ"],["的","de","của (trợ từ)"],["理由","lǐyóu","lý do"],["。"],["有","yǒu","có"],["买家","mǎijiā","người mua"],["说","shuō","nói"],["："],["“"],["方便","fāngbiàn","thuận tiện"],["、"],["便宜","piányi","rẻ"],["，"],["为什么","wèishénme","tại sao"],["不","bù","không"],["呢","ne","nhỉ, thế (trợ từ)"],["？"],["”"],["也","yě","cũng"],["有","yǒu","có"],["买家","mǎijiā","người mua"],["说","shuō","nói"],["："],["“"],["网上","wǎngshàng","trên mạng"],["商品","shāngpǐn","hàng hóa"],["丰富","fēngfù","phong phú"],["，"],["还","hái","còn, vẫn"],["省去","shěngqù","đỡ được"],["了","le","rồi (trợ từ)"],["到处跑","dàochùpǎo","chạy khắp nơi"],["、"],["四处","sìchù","khắp nơi"],["找","zhǎo","tìm"],["的","de","của (trợ từ)"],["麻烦","máfán","phiền phức"],["。"],["”"]]
    },
    {
     "zh": "的确，和传统购物方式相比，网络购物确实有很多优点：",
     "vi": "Quả thật, so với cách mua sắm truyền thống, mua sắm trực tuyến thực sự có rất nhiều ưu điểm:",
     "tokens": [["的确","díquè","Quả thực"],["，"],["和","hé","và; hòa"],["传统","chuántǒng","truyền thống"],["购物","gòuwù","mua sắm"],["方式","fāngshì","cách thức"],["相比","xiāngbǐ","so sánh"],["，"],["网络","wǎngluò","mạng"],["购物","gòuwù","mua sắm"],["确实","quèshí","thực sự"],["有","yǒu","có"],["很多","hěnduō","rất nhiều"],["优点","yōudiǎn","ưu điểm"],["："]]
    },
    {
     "zh": "第一、可以在家“逛商店”，不受时间和地点的限制。",
     "vi": "Thứ nhất, có thể “đi dạo cửa hàng” tại nhà, không bị giới hạn bởi thời gian và địa điểm.",
     "tokens": [["第一","dìyī","thứ nhất"],["、"],["可以","kěyǐ","có thể"],["在家","zàijiā","ở nhà"],["“"],["逛商店","guàngshāngdiàn","dạo cửa hàng"],["”"],["，"],["不","bù","không"],["受","shòu","bị, chịu"],["时间","shíjiān","thời gian"],["和","hé","và; hòa"],["地点","dìdiǎn","địa điểm"],["的","de","của (trợ từ)"],["限制","xiànzhì","hạn chế"],["。"]]
    },
    {
     "zh": "第二、能得到大量的商品信息，可以买到当地没有的商品。",
     "vi": "Thứ hai, có thể có được lượng lớn thông tin hàng hóa, có thể mua được những mặt hàng mà địa phương không có.",
     "tokens": [["第二","dìèr","thứ hai"],["、"],["能","néng","có thể"],["得到","dédào","nhận được"],["大量","dàliàng","lượng lớn"],["的","de","của (trợ từ)"],["商品信息","shāngpǐnxìnxī","thông tin hàng hóa"],["，"],["可以","kěyǐ","có thể"],["买","mǎi","mua"],["到","dào","đến"],["当地","dāngdì","địa phương"],["没有","méiyǒu","không có"],["的","de","của (trợ từ)"],["商品","shāngpǐn","hàng hóa"],["。"]]
    },
    {
     "zh": "第三、网上支付比拿现金支付更加安全方便。",
     "vi": "Thứ ba, thanh toán trực tuyến an toàn và thuận tiện hơn thanh toán bằng tiền mặt.",
     "tokens": [["第三","dìsān","thứ ba"],["、"],["网上支付","wǎngshàngzhīfù","thanh toán trực tuyến"],["比","bǐ","so với"],["拿","ná","cầm, lấy"],["现金支付","xiànjīnzhīfù","trả tiền mặt"],["更加","gèngjiā","càng thêm"],["安全","ānquán","an toàn"],["方便","fāngbiàn","thuận tiện"],["。"]]
    },
    {
     "zh": "第四、送货上门，不用自己跑到商场，既省时又省力。",
     "vi": "Thứ tư, giao hàng tận nhà, không cần tự mình đến trung tâm thương mại, vừa tiết kiệm thời gian vừa đỡ tốn sức.",
     "tokens": [["第四","dìsì","thứ tư"],["、"],["送货上门","sònghuò shàngmén","Giao hàng tận nhà"],["，"],["不用","bùyòng","không cần"],["自己","zìjǐ","bản thân"],["跑","pǎo","chạy"],["到","dào","đến"],["商场","shāngchǎng","trung tâm thương mại"],["，"],["既","jì","vừa"],["省","shěng","tiết kiệm"],["时","shí","lúc, khi"],["又","yòu","lại"],["省力","shěnglì","đỡ tốn sức"],["。"]]
    },
    {
     "zh": "第五、价格比一般商场的同类商品更便宜。",
     "vi": "Thứ năm, giá rẻ hơn so với hàng cùng loại ở các trung tâm thương mại thông thường.",
     "tokens": [["第五","dìwǔ","thứ năm"],["、"],["价格比","jiàgébǐ","giá so với"],["一般","yìbān","thông thường, bình thường"],["商场","shāngchǎng","trung tâm thương mại"],["的","de","của (trợ từ)"],["同类","tónglèi","cùng loại"],["商品","shāngpǐn","hàng hóa"],["更","gèng","càng, hơn"],["便宜","piányi","rẻ"],["。"]]
    }
   ],
   "questions": [
    {
     "q": "在网络世界里，卖东西的人被称做什么？",
     "options": ["买家","卖家","小贩","老板"],
     "answer": 1,
     "explain": "Người mua gọi là 买家, người bán gọi là 卖家."
    },
    {
     "q": "年轻人为什么不愿意出门逛街了？",
     "options": ["因为外面天气不好","因为网购既节省时间，又节省精力","因为商场太远","因为没有钱"],
     "answer": 1,
     "explain": "Họ thấy mua trực tuyến vừa tiết kiệm thời gian, vừa tiết kiệm sức lực."
    },
    {
     "q": "下面哪一项不是文中说的网上购物的优点？",
     "options": ["不受时间和地点的限制","送货上门","价格更便宜","可以和卖家面对面聊天"],
     "answer": 3,
     "explain": "Bài nêu 5 ưu điểm; không có ý “gặp mặt trò chuyện với người bán”."
    }
   ],
   "fills": [{"sentence":"随着网络技术的发展和互联网的_______，人们的消费习惯发生了很多的变化。","answer":"普及","options":["转移","鼠标","普及","的确"]},{"sentence":"很多人不再去商场买东西，而是把购物的地点_______到了网上。","answer":"转移","options":["转移","浏览","的确","送货上门"]},{"sentence":"很多人每天在购物网站上_______，看到喜欢的，就点一下鼠标，送货上门。","answer":"浏览","options":["浏览","普及","转移","的确"]},{"sentence":"很多人每天在购物网站上浏览，看到喜欢的，就点一下_______，送货上门。","answer":"鼠标","options":["普及","的确","鼠标","转移"]},{"sentence":"第四、_______，不用自己跑到商场，既省时又省力。","answer":"送货上门","options":["转移","的确","送货上门","普及"]}]
  },
  {
   "id": "u6t3",
   "unit": 6,
   "no": 3,
   "titleZh": "下棋",
   "titleVi": "Chơi cờ",
   "note": "",
   "vocab": [
    {
     "hanzi": "恰巧",
     "pinyin": "qiàqiǎo",
     "pos": "Phó từ",
     "meaning": "Vừa khéo, đúng lúc",
     "exZh": "恰巧两位大师来到",
     "exVi": "Đúng lúc có hai vị đại kiện tướng đến"
    },
    {
     "hanzi": "硬着头皮",
     "pinyin": "yìngzhe tóupí",
     "pos": "Cụm từ",
     "meaning": "Bấm bụng, đâm lao theo lao",
     "exZh": "硬着头皮应战",
     "exVi": "Cắn răng nhận lời thách đấu"
    },
    {
     "hanzi": "应战",
     "pinyin": "yìngzhàn",
     "pos": "Động từ",
     "meaning": "Ứng chiến",
     "exZh": "硬着头皮应战",
     "exVi": "Cắn răng nhận lời thách đấu"
    },
    {
     "hanzi": "思考",
     "pinyin": "sīkǎo",
     "pos": "Động từ",
     "meaning": "Suy nghĩ",
     "exZh": "思考一会儿",
     "exVi": "Suy nghĩ một lúc"
    },
    {
     "hanzi": "愣",
     "pinyin": "lèng",
     "pos": "Động từ",
     "meaning": "Sững sờ",
     "exZh": "A大师愣了一下",
     "exVi": "Đại kiện tướng A sững người một chút"
    }
   ],
   "grammar": [
    {
     "name": "Bấm bụng / Cắn răng làm",
     "struct": "硬着头皮······",
     "explain": "Làm một việc dù cảm thấy khó khăn, e ngại.",
     "exZh": "大家都等着，王石只好硬着头皮应战。",
     "exVi": "Mọi người đều đang chờ, Vương Thạch đành cắn răng nhận lời thách đấu."
    },
    {
     "name": "Bắt chước rập khuôn",
     "struct": "照葫芦画瓢",
     "explain": "Quán ngữ biểu thị việc sao chép lại nguyên văn/nguyên động tác của người khác.",
     "exZh": "王石回到A大师面前，照葫芦画瓢。",
     "exVi": "Vương Thạch quay lại trước mặt đại kiện tướng A, rập khuôn y hệt."
    }
   ],
   "text": [
    {
     "zh": "王石是个聪明的小伙子，他爱上了一个姑娘。像所有恋爱中的人一样，为了得到姑娘的芳心，拼命表现自己。好在他的努力没有白费，姑娘终于决定带他去见父母。",
     "vi": "Vương Thạch là một chàng trai thông minh, anh đem lòng yêu một cô gái. Giống như tất cả những người đang yêu, để chiếm được trái tim cô gái, anh ra sức thể hiện bản thân. May là nỗ lực của anh không uổng phí, cuối cùng cô gái quyết định đưa anh về ra mắt bố mẹ.",
     "tokens": [["王石","wángshí","Vương Thạch (tên người)"],["是","shì","là"],["个","gè","cái (lượng từ)"],["聪明","cōngmíng","thông minh"],["的","de","của (trợ từ)"],["小伙子","xiǎohuǒzi","chàng trai"],["，"],["他","tā","anh ấy, ông ấy"],["爱","ài","yêu; hay (làm gì)"],["上","shàng","trên; lên"],["了","le","rồi (trợ từ)"],["一个","yígè","một (cái, người)"],["姑娘","gūniáng","cô gái"],["。"],["像","xiàng","giống như"],["所有","suǒyǒu","tất cả"],["恋爱","liànài","yêu đương"],["中","zhōng","trong, giữa"],["的","de","của (trợ từ)"],["人","rén","người"],["一样","yīyàng","giống nhau"],["，"],["为了","wèile","để, vì"],["得到","dédào","nhận được"],["姑娘","gūniáng","cô gái"],["的","de","của (trợ từ)"],["芳心","fāngxīn","trái tim (người con gái)"],["，"],["拼命","pīnmìng","ra sức, liều mạng"],["表现","biǎoxiàn","biểu hiện, thể hiện"],["自己","zìjǐ","bản thân"],["。"],["好","hǎo","tốt; rất"],["在","zài","ở, đang"],["他","tā","anh ấy, ông ấy"],["的","de","của (trợ từ)"],["努力","nǔlì","nỗ lực"],["没有","méiyǒu","không có"],["白费","báifèi","uổng phí"],["，"],["姑娘","gūniáng","cô gái"],["终于","zhōngyú","cuối cùng"],["决定","juédìng","quyết định"],["带","dài","mang, dẫn"],["他","tā","anh ấy, ông ấy"],["去","qù","đi"],["见","jiàn","gặp"],["父母","fùmǔ","bố mẹ"],["。"]]
    },
    {
     "zh": "临行前，她对王石说：“我的父亲有个爱好，特别喜欢下国际象棋，如果你能让他知道你下棋很好，我想他会喜欢你的。”",
     "vi": "Trước khi đi, cô nói với Vương Thạch: “Bố em có một sở thích, đặc biệt thích chơi cờ vua, nếu anh có thể khiến bố biết anh chơi cờ rất giỏi, em nghĩ bố sẽ quý anh.”",
     "tokens": [["临行","línxíng","trước khi đi"],["前","qián","trước"],["，"],["她","tā","cô ấy, bà ấy"],["对","duì","đối với; đúng"],["王石","wángshí","Vương Thạch (tên người)"],["说","shuō","nói"],["："],["“"],["我","wǒ","tôi"],["的","de","của (trợ từ)"],["父亲","fùqīn","bố"],["有","yǒu","có"],["个","gè","cái (lượng từ)"],["爱好","àihào","sở thích; yêu thích"],["，"],["特别","tèbié","đặc biệt"],["喜欢","xǐhuān","thích"],["下","xià","dưới; xuống"],["国际象棋","guójìxiàngqí","cờ vua"],["，"],["如果","rúguǒ","nếu"],["你","nǐ","bạn"],["能","néng","có thể"],["让","ràng","để, bảo, khiến"],["他","tā","anh ấy, ông ấy"],["知道","zhīdào","biết"],["你","nǐ","bạn"],["下棋","xiàqí","chơi cờ"],["很","hěn","rất"],["好","hǎo","tốt; rất"],["，"],["我","wǒ","tôi"],["想","xiǎng","nghĩ; muốn"],["他","tā","anh ấy, ông ấy"],["会","huì","sẽ; biết"],["喜欢","xǐhuān","thích"],["你","nǐ","bạn"],["的","de","của (trợ từ)"],["。"],["”"]]
    },
    {
     "zh": "王石简直不敢相信自己的眼睛，天下还有这么巧的事情？他哪里知道恰巧这天两位大师因为一些私事，专门来看望姑娘的父亲。",
     "vi": "Vương Thạch quả thực không dám tin vào mắt mình, trên đời lại có chuyện trùng hợp như vậy sao? Anh nào biết đúng hôm ấy có hai vị đại kiện tướng vì chút việc riêng mà đặc biệt đến thăm bố cô gái.",
     "tokens": [["王石","wángshí","Vương Thạch (tên người)"],["简直","jiǎnzhí","quả thực, thật là"],["不敢相信","bùgǎnxiāngxìn","không dám tin"],["自己","zìjǐ","bản thân"],["的","de","của (trợ từ)"],["眼睛","yǎnjīng","mắt"],["，"],["天下","tiānxià","thiên hạ, trên đời"],["还有","háiyǒu","còn có"],["这么","zhème","như thế này"],["巧","qiǎo","trùng hợp"],["的","de","của (trợ từ)"],["事情","shìqíng","sự việc, chuyện"],["？"],["他","tā","anh ấy, ông ấy"],["哪里","nǎlǐ","ở đâu; đâu có"],["知道","zhīdào","biết"],["恰巧","qiàqiǎo","Vừa khéo, đúng lúc"],["这天","zhètiān","hôm đó"],["两位","liǎngwèi","hai vị"],["大师","dàshī","đại sư, kiện tướng"],["因为","yīnwèi","bởi vì"],["一些","yīxiē","một số, một vài"],["私事","sīshì","việc riêng"],["，"],["专门","zhuānmén","chuyên, đặc biệt"],["来","lái","đến"],["看望","kànwàng","thăm hỏi"],["姑娘","gūniáng","cô gái"],["的","de","của (trợ từ)"],["父亲","fùqīn","bố"],["。"]]
    },
    {
     "zh": "大家都等着，王石只好硬着头皮应战。他提了一个条件：在两间不同的屋子里，分别和两个人比赛。",
     "vi": "Mọi người đều đang chờ, Vương Thạch đành cắn răng nhận lời thách đấu. Anh đưa ra một điều kiện: thi đấu riêng với hai người ở hai phòng khác nhau.",
     "tokens": [["大家","dàjiā","mọi người"],["都","dōu","đều"],["等","děng","đợi; vân vân"],["着","zhe","đang (trợ từ)"],["，"],["王石","wángshí","Vương Thạch (tên người)"],["只好","zhǐhǎo","đành phải"],["硬着头皮","yìngzhe tóupí","Bấm bụng, đâm lao theo lao"],["应战","yìngzhàn","Ứng chiến"],["。"],["他","tā","anh ấy, ông ấy"],["提","tí","đưa ra"],["了","le","rồi (trợ từ)"],["一个","yígè","một (cái, người)"],["条件","tiáojiàn","điều kiện"],["："],["在","zài","ở, đang"],["两间","liǎngjiān","hai gian"],["不同","bùtóng","khác nhau"],["的","de","của (trợ từ)"],["屋子里","wūzilǐ","trong phòng"],["，"],["分别","fēnbié","riêng rẽ, lần lượt"],["和","hé","và; hòa"],["两个","liǎnggè","hai (cái)"],["人","rén","người"],["比赛","bǐsài","thi đấu"],["。"]]
    },
    {
     "zh": "跟A大师开局的时候，王石说：“您是大师级的人物，您先走吧。”",
     "vi": "Khi khai cuộc với đại kiện tướng A, Vương Thạch nói: “Ông là nhân vật tầm đại kiện tướng, mời ông đi trước.”",
     "tokens": [["跟","gēn","với; theo"],["A"],["大师","dàshī","đại sư, kiện tướng"],["开局","kāijú","khai cuộc"],["的","de","của (trợ từ)"],["时候","shíhòu","lúc, khi"],["，"],["王石","wángshí","Vương Thạch (tên người)"],["说","shuō","nói"],["："],["“"],["您","nín","ông/bà (kính trọng)"],["是","shì","là"],["大师级","dàshījí","tầm đại sư"],["的","de","của (trợ từ)"],["人物","rénwù","nhân vật"],["，"],["您","nín","ông/bà (kính trọng)"],["先","xiān","trước"],["走","zǒu","đi; đi (cờ)"],["吧","ba","nhé, đi (trợ từ)"],["。"],["”"]]
    },
    {
     "zh": "等到大师走了一步之后，王石马上跑到另一间屋子里，对B大师说：“我是个不出名的小人物，我先走吧！”随即便走出了A大师刚刚走的那步棋。",
     "vi": "Đợi đại kiện tướng đi một nước xong, Vương Thạch lập tức chạy sang phòng bên kia, nói với đại kiện tướng B: “Cháu là một nhân vật nhỏ bé vô danh, cháu xin đi trước!” Ngay sau đó anh đi đúng nước cờ mà đại kiện tướng A vừa đi.",
     "tokens": [["等到","děngdào","đợi đến khi"],["大师","dàshī","đại sư, kiện tướng"],["走","zǒu","đi; đi (cờ)"],["了","le","rồi (trợ từ)"],["一步","yībù","một bước"],["之后","zhīhòu","sau khi"],["，"],["王石","wángshí","Vương Thạch (tên người)"],["马上","mǎshàng","lập tức"],["跑","pǎo","chạy"],["到","dào","đến"],["另","lìng","khác"],["一间","yījiān","một gian (phòng)"],["屋子里","wūzilǐ","trong phòng"],["，"],["对","duì","đối với; đúng"],["B"],["大师","dàshī","đại sư, kiện tướng"],["说","shuō","nói"],["："],["“"],["我","wǒ","tôi"],["是","shì","là"],["个","gè","cái (lượng từ)"],["不","bù","không"],["出名","chūmíng","nổi tiếng"],["的","de","của (trợ từ)"],["小人物","xiǎorénwù","nhân vật nhỏ bé"],["，"],["我","wǒ","tôi"],["先","xiān","trước"],["走","zǒu","đi; đi (cờ)"],["吧","ba","nhé, đi (trợ từ)"],["！"],["”"],["随即","suíjí","ngay sau đó"],["便","biàn","liền, thì"],["走出","zǒuchū","bước ra"],["了","le","rồi (trợ từ)"],["A"],["大师","dàshī","đại sư, kiện tướng"],["刚刚","gānggāng","vừa mới"],["走","zǒu","đi; đi (cờ)"],["的","de","của (trợ từ)"],["那","nà","kia, đó"],["步棋","bùqí","nước cờ"],["。"]]
    },
    {
     "zh": "B大师思考一会儿，也走了一步棋。",
     "vi": "Đại kiện tướng B suy nghĩ một lúc, cũng đi một nước cờ.",
     "tokens": [["B"],["大师","dàshī","đại sư, kiện tướng"],["思考","sīkǎo","Suy nghĩ"],["一会儿","yīhuìer","một lát"],["，"],["也","yě","cũng"],["走","zǒu","đi; đi (cờ)"],["了","le","rồi (trợ từ)"],["一步棋","yībùqí","một nước cờ"],["。"]]
    },
    {
     "zh": "王石回到A大师面前，照葫芦画瓢，用B大师刚才的那步棋回应了A大师。A大师愣了一下，立即觉得这小伙子很不一般。琢磨了半天，才小心地又走出了一步棋。",
     "vi": "Vương Thạch quay lại trước mặt đại kiện tướng A, rập khuôn y hệt, dùng nước cờ vừa rồi của đại kiện tướng B để đáp lại đại kiện tướng A. Đại kiện tướng A sững người một chút, lập tức cảm thấy chàng trai này thật không tầm thường. Cân nhắc hồi lâu, ông mới cẩn thận đi tiếp một nước cờ.",
     "tokens": [["王石","wángshí","Vương Thạch (tên người)"],["回到","huídào","quay về"],["A"],["大师","dàshī","đại sư, kiện tướng"],["面前","miànqián","trước mặt"],["，"],["照葫芦画瓢","zhào hú lú huà piáo","rập khuôn y hệt"],["，"],["用","yòng","dùng"],["B"],["大师","dàshī","đại sư, kiện tướng"],["刚才","gāngcái","vừa rồi"],["的","de","của (trợ từ)"],["那","nà","kia, đó"],["步棋","bùqí","nước cờ"],["回应","huíyìng","đáp lại"],["了","le","rồi (trợ từ)"],["A"],["大师","dàshī","đại sư, kiện tướng"],["。"],["A"],["大师","dàshī","đại sư, kiện tướng"],["愣","lèng","Sững sờ"],["了","le","rồi (trợ từ)"],["一下","yīxià","một chút, một cái"],["，"],["立即","lìjí","lập tức"],["觉得","juéde","cảm thấy"],["这","zhè","này"],["小伙子","xiǎohuǒzi","chàng trai"],["很","hěn","rất"],["不","bù","không"],["一般","yìbān","thông thường, bình thường"],["。"],["琢磨","zhuómó","cân nhắc, nghiền ngẫm"],["了","le","rồi (trợ từ)"],["半天","bàntiān","nửa ngày, hồi lâu"],["，"],["才","cái","mới"],["小心","xiǎoxīn","cẩn thận"],["地","dì","(trợ từ trạng ngữ)"],["又","yòu","lại"],["走出","zǒuchū","bước ra"],["了","le","rồi (trợ từ)"],["一步棋","yībùqí","một nước cờ"],["。"]]
    },
    {
     "zh": "王石再次回到B大师面前，用A大师刚才的那步棋回应B大师……",
     "vi": "Vương Thạch lại quay về trước mặt đại kiện tướng B, dùng nước cờ vừa rồi của đại kiện tướng A để đáp lại đại kiện tướng B...",
     "tokens": [["王石","wángshí","Vương Thạch (tên người)"],["再次","zàicì","lần nữa"],["回到","huídào","quay về"],["B"],["大师","dàshī","đại sư, kiện tướng"],["面前","miànqián","trước mặt"],["，"],["用","yòng","dùng"],["A"],["大师","dàshī","đại sư, kiện tướng"],["刚才","gāngcái","vừa rồi"],["的","de","của (trợ từ)"],["那","nà","kia, đó"],["步棋","bùqí","nước cờ"],["回应","huíyìng","đáp lại"],["B"],["大师","dàshī","đại sư, kiện tướng"],["…"],["…"]]
    },
    {
     "zh": "最后的结果是和局。",
     "vi": "Kết quả cuối cùng là hòa cờ.",
     "tokens": [["最后","zuìhòu","cuối cùng"],["的","de","của (trợ từ)"],["结果","jiéguǒ","kết quả"],["是","shì","là"],["和","hé","và; hòa"],["局","jú","ván (cờ)"],["。"]]
    }
   ],
   "questions": [
    {
     "q": "姑娘的父亲有什么爱好？",
     "options": ["下国际象棋","打排球","看电影","旅行"],
     "answer": 0,
     "explain": "Bố cô gái đặc biệt thích chơi cờ vua (国际象棋)."
    },
    {
     "q": "王石提了什么条件？",
     "options": ["先休息一会儿","在两间不同的屋子里分别和两个人比赛","让姑娘帮他下棋","只和一位大师比赛"],
     "answer": 1,
     "explain": "Anh yêu cầu thi đấu riêng với hai người ở hai phòng khác nhau."
    },
    {
     "q": "王石用了什么办法下棋？",
     "options": ["他真的下得很好","把一位大师的棋走给另一位大师，照葫芦画瓢","请别人帮忙","看书学习"],
     "answer": 1,
     "explain": "Anh lấy nước cờ của đại kiện tướng này đáp lại đại kiện tướng kia, thực chất là để hai người tự đấu với nhau."
    }
   ],
   "fills": [{"sentence":"他哪里知道_______这天两位大师因为一些私事，专门来看望姑娘的父亲。","answer":"恰巧","options":["应战","恰巧","愣","思考"]},{"sentence":"大家都等着，王石只好_______应战。","answer":"硬着头皮","options":["硬着头皮","思考","恰巧","愣"]},{"sentence":"大家都等着，王石只好硬着头皮_______。","answer":"应战","options":["思考","恰巧","应战","愣"]},{"sentence":"B大师_______一会儿，也走了一步棋。","answer":"思考","options":["恰巧","思考","应战","硬着头皮"]},{"sentence":"A大师_______了一下，立即觉得这小伙子很不一般。","answer":"愣","options":["思考","应战","愣","恰巧"]}]
  },
  {
   "id": "u7t1",
   "unit": 7,
   "no": 1,
   "titleZh": "女女不一样",
   "titleVi": "Phụ nữ với phụ nữ không giống nhau",
   "note": "",
   "vocab": [
    {
     "hanzi": "地位",
     "pinyin": "dìwèi",
     "pos": "Danh từ",
     "meaning": "Địa vị",
     "exZh": "妇女的社会地位",
     "exVi": "Địa vị xã hội của phụ nữ"
    },
    {
     "hanzi": "男主女从",
     "pinyin": "nánzhǔ nǚcóng",
     "pos": "Cụm từ",
     "meaning": "Nam tôn nữ thứ",
     "exZh": "男主女从的观念",
     "exVi": "Quan niệm nam làm chủ, nữ phục tùng"
    },
    {
     "hanzi": "贤妻良母",
     "pinyin": "xiánqī liángmǔ",
     "pos": "Thành ngữ",
     "meaning": "Mẹ hiền vợ tốt",
     "exZh": "在家里做贤妻良母",
     "exVi": "Ở nhà làm vợ hiền mẹ đảm"
    },
    {
     "hanzi": "独立",
     "pinyin": "dúlì",
     "pos": "Tính từ/Động từ",
     "meaning": "Độc lập",
     "exZh": "经济独立的女人",
     "exVi": "Người phụ nữ độc lập về kinh tế"
    }
   ],
   "grammar": [
    {
     "name": "Đối tượng trước..., đối tượng sau...",
     "struct": "前者······后者······",
     "explain": "Biểu thị đại diện cho hai đối tượng nhắc đến trước và sau.",
     "exZh": "不能说只有前者才是有女人味，后者就是男人味。",
     "exVi": "Không thể nói chỉ có kiểu trước mới có nữ tính, còn kiểu sau là nam tính."
    }
   ],
   "text": [
    {
     "zh": "现代社会以后，中国妇女的地位经历了这样两个阶段：先是“时代不同了，男女都一样”，否定了几千年来男主女从的观念和社会结构；改革开放以后，又提出“女人要有女人味”，否定了“男女都一样”。",
     "vi": "Sau khi bước vào xã hội hiện đại, địa vị của phụ nữ Trung Quốc đã trải qua hai giai đoạn như sau: đầu tiên là “thời đại đã khác, nam nữ đều như nhau”, phủ định quan niệm và cấu trúc xã hội “nam làm chủ, nữ phục tùng” suốt mấy nghìn năm; sau cải cách mở cửa, lại đưa ra quan điểm “phụ nữ phải có nữ tính”, phủ định “nam nữ đều như nhau”.",
     "tokens": [["现代","xiàndài","hiện đại"],["社会","shèhuì","xã hội"],["以后","yǐhòu","sau này, sau khi"],["，"],["中国","zhōngguó","Trung Quốc"],["妇女","fùnǚ","phụ nữ"],["的","de","của (trợ từ)"],["地位","dìwèi","Địa vị"],["经历","jīnglì","trải qua"],["了","le","rồi (trợ từ)"],["这样","zhèyàng","như vậy"],["两个","liǎnggè","hai (cái)"],["阶段","jiēduàn","giai đoạn"],["："],["先是","xiānshì","đầu tiên là"],["“"],["时代","shídài","thời đại"],["不同","bùtóng","khác nhau"],["了","le","rồi (trợ từ)"],["，"],["男女","nánnǚ","nam nữ"],["都","dōu","đều"],["一样","yīyàng","giống nhau"],["”"],["，"],["否定","fǒudìng","phủ định"],["了","le","rồi (trợ từ)"],["几千年","jǐqiānnián","mấy nghìn năm"],["来","lái","đến"],["男主女从","nánzhǔ nǚcóng","Nam tôn nữ thứ"],["的","de","của (trợ từ)"],["观念","guānniàn","quan niệm"],["和","hé","và; hòa"],["社会","shèhuì","xã hội"],["结构","jiégòu","cấu trúc"],["；"],["改革开放","gǎigékāifàng","cải cách mở cửa"],["以后","yǐhòu","sau này, sau khi"],["，"],["又","yòu","lại"],["提出","tíchū","đề xuất"],["“"],["女人","nǚrén","phụ nữ"],["要","yào","muốn; phải"],["有","yǒu","có"],["女人味","nǚrénwèi","nữ tính"],["”"],["，"],["否定","fǒudìng","phủ định"],["了","le","rồi (trợ từ)"],["“"],["男女","nánnǚ","nam nữ"],["都","dōu","đều"],["一样","yīyàng","giống nhau"],["”"],["。"]]
    },
    {
     "zh": "我的观点是，不应当是“时代不同了，男女不一样”，而应当是“时代不同了，女女不一样”。我的意思是，女人已经不像过去那样永远不变了。有各种各样的女人，她们的味道，也可以被认为是“女人味”，因为女人味的内容，并不是简单的一种，它应当随着时间和空间的变化，不断被重新定义。",
     "vi": "Quan điểm của tôi là, không nên là “thời đại đã khác, nam nữ không như nhau”, mà nên là “thời đại đã khác, phụ nữ với phụ nữ không như nhau”. Ý tôi là, người phụ nữ đã không còn mãi bất biến như trước kia. Có đủ kiểu phụ nữ, nét riêng của họ cũng có thể được coi là “nữ tính”, bởi vì nội dung của nữ tính không phải chỉ đơn giản một kiểu, nó phải không ngừng được định nghĩa lại theo sự thay đổi của thời gian và không gian.",
     "tokens": [["我","wǒ","tôi"],["的","de","của (trợ từ)"],["观点","guāndiǎn","quan điểm"],["是","shì","là"],["，"],["不","bù","không"],["应当","yīngdāng","nên"],["是","shì","là"],["“"],["时代","shídài","thời đại"],["不同","bùtóng","khác nhau"],["了","le","rồi (trợ từ)"],["，"],["男女","nánnǚ","nam nữ"],["不","bù","không"],["一样","yīyàng","giống nhau"],["”"],["，"],["而","ér","mà, còn"],["应当","yīngdāng","nên"],["是","shì","là"],["“"],["时代","shídài","thời đại"],["不同","bùtóng","khác nhau"],["了","le","rồi (trợ từ)"],["，"],["女","nǚ","nữ"],["女","nǚ","nữ"],["不","bù","không"],["一样","yīyàng","giống nhau"],["”"],["。"],["我","wǒ","tôi"],["的","de","của (trợ từ)"],["意思","yìsi","ý nghĩa"],["是","shì","là"],["，"],["女人","nǚrén","phụ nữ"],["已经","yǐjīng","đã"],["不","bù","không"],["像","xiàng","giống như"],["过去","guòqù","trước đây; trôi qua"],["那样","nàyàng","như vậy"],["永远","yǒngyuǎn","mãi mãi"],["不变","bùbiàn","không thay đổi"],["了","le","rồi (trợ từ)"],["。"],["有","yǒu","có"],["各种各样","gèzhǒnggèyàng","đủ các loại"],["的","de","của (trợ từ)"],["女人","nǚrén","phụ nữ"],["，"],["她们","tāmen","các cô ấy"],["的","de","của (trợ từ)"],["味道","wèidào","mùi vị, nét riêng"],["，"],["也","yě","cũng"],["可以","kěyǐ","có thể"],["被","bèi","bị, được"],["认为","rènwéi","cho rằng"],["是","shì","là"],["“"],["女人味","nǚrénwèi","nữ tính"],["”"],["，"],["因为","yīnwèi","bởi vì"],["女人味","nǚrénwèi","nữ tính"],["的","de","của (trợ từ)"],["内容","nèiróng","nội dung"],["，"],["并","bìng","lại (nhấn mạnh phủ định); và"],["不是","búshì","không phải"],["简单","jiǎndān","đơn giản"],["的","de","của (trợ từ)"],["一种","yīzhǒng","một loại"],["，"],["它","tā","nó"],["应当","yīngdāng","nên"],["随着","suízhe","cùng với, theo"],["时间","shíjiān","thời gian"],["和","hé","và; hòa"],["空间","kōngjiān","không gian"],["的","de","của (trợ từ)"],["变化","biànhuà","thay đổi"],["，"],["不断","bùduàn","không ngừng"],["被","bèi","bị, được"],["重新","chóngxīn","lại từ đầu"],["定义","dìngyì","định nghĩa"],["。"]]
    },
    {
     "zh": "比如，有不愿意出来工作，在家里做贤妻良母的女人；也有愿意自己在社会上努力工作，经济独立的女人；有愿意站在男人的后面，帮助做事情的女人；也有愿意领导男人的女人。不能说只有前者才是有“女人味”，后者就是“男人味”。",
     "vi": "Ví dụ, có người phụ nữ không muốn ra ngoài làm việc, ở nhà làm vợ hiền mẹ đảm; cũng có người phụ nữ muốn tự mình nỗ lực làm việc ngoài xã hội, độc lập về kinh tế; có người phụ nữ muốn đứng phía sau đàn ông, giúp đỡ công việc; cũng có người phụ nữ muốn lãnh đạo đàn ông. Không thể nói chỉ có kiểu trước mới có “nữ tính”, còn kiểu sau là “nam tính”.",
     "tokens": [["比如","bǐrú","ví dụ"],["，"],["有","yǒu","có"],["不","bù","không"],["愿意","yuànyì","bằng lòng, muốn"],["出来","chūlái","ra, xuất hiện"],["工作","gōngzuò","công việc, làm việc"],["，"],["在","zài","ở, đang"],["家里","jiālǐ","trong nhà"],["做","zuò","làm"],["贤妻良母","xiánqī liángmǔ","Mẹ hiền vợ tốt"],["的","de","của (trợ từ)"],["女人","nǚrén","phụ nữ"],["；"],["也","yě","cũng"],["有","yǒu","có"],["愿意","yuànyì","bằng lòng, muốn"],["自己","zìjǐ","bản thân"],["在","zài","ở, đang"],["社会","shèhuì","xã hội"],["上","shàng","trên; lên"],["努力","nǔlì","nỗ lực"],["工作","gōngzuò","công việc, làm việc"],["，"],["经济","jīngjì","kinh tế"],["独立","dúlì","Độc lập"],["的","de","của (trợ từ)"],["女人","nǚrén","phụ nữ"],["；"],["有","yǒu","có"],["愿意","yuànyì","bằng lòng, muốn"],["站","zhàn","đứng"],["在","zài","ở, đang"],["男人","nánrén","đàn ông"],["的","de","của (trợ từ)"],["后面","hòumiàn","phía sau"],["，"],["帮助","bāngzhù","giúp đỡ"],["做","zuò","làm"],["事情","shìqíng","sự việc, chuyện"],["的","de","của (trợ từ)"],["女人","nǚrén","phụ nữ"],["；"],["也","yě","cũng"],["有","yǒu","có"],["愿意","yuànyì","bằng lòng, muốn"],["领导","lǐngdǎo","lãnh đạo"],["男人","nánrén","đàn ông"],["的","de","của (trợ từ)"],["女人","nǚrén","phụ nữ"],["。"],["不能","bùnéng","không thể"],["说","shuō","nói"],["只有","zhǐyǒu","chỉ có"],["前者","qiánzhě","cái trước"],["才","cái","mới"],["是","shì","là"],["有","yǒu","có"],["“"],["女人味","nǚrénwèi","nữ tính"],["”"],["，"],["后者","hòuzhě","cái sau"],["就是","jiùshì","chính là"],["“"],["男人味","nánrénwèi","nam tính"],["”"],["。"]]
    },
    {
     "zh": "人性是多样的、丰富的，女性气质也是多样的、丰富的。因此，新时代的“女人味”里面，不仅应当包括温柔、美丽、听话，还应当包括聪明、能干，甚至包括攻击性和领袖欲。",
     "vi": "Nhân tính là đa dạng, phong phú, khí chất nữ giới cũng đa dạng, phong phú. Vì vậy, “nữ tính” của thời đại mới không chỉ nên bao gồm dịu dàng, xinh đẹp, nghe lời, mà còn nên bao gồm thông minh, giỏi giang, thậm chí bao gồm cả tính quyết liệt và khát vọng lãnh đạo.",
     "tokens": [["人性","rénxìng","nhân tính"],["是","shì","là"],["多样","duōyàng","đa dạng"],["的","de","của (trợ từ)"],["、"],["丰富","fēngfù","phong phú"],["的","de","của (trợ từ)"],["，"],["女性","nǚxìng","nữ giới"],["气质","qìzhì","khí chất"],["也","yě","cũng"],["是","shì","là"],["多样","duōyàng","đa dạng"],["的","de","của (trợ từ)"],["、"],["丰富","fēngfù","phong phú"],["的","de","của (trợ từ)"],["。"],["因此","yīncǐ","vì vậy"],["，"],["新","xīn","mới"],["时代","shídài","thời đại"],["的","de","của (trợ từ)"],["“"],["女人味","nǚrénwèi","nữ tính"],["”"],["里面","lǐmiàn","bên trong"],["，"],["不仅","bùjǐn","không chỉ"],["应当","yīngdāng","nên"],["包括","bāokuò","bao gồm"],["温柔","wēnróu","dịu dàng"],["、"],["美丽","měilì","xinh đẹp"],["、"],["听话","tīnghuà","nghe lời"],["，"],["还","hái","còn, vẫn"],["应当","yīngdāng","nên"],["包括","bāokuò","bao gồm"],["聪明","cōngmíng","thông minh"],["、"],["能干","nénggàn","giỏi giang"],["，"],["甚至","shènzhì","thậm chí"],["包括","bāokuò","bao gồm"],["攻击性","gōngjīxìng","tính tấn công, quyết liệt"],["和","hé","và; hòa"],["领袖欲","lǐngxiùyù","khát vọng lãnh đạo"],["。"]]
    }
   ],
   "questions": [
    {
     "q": "改革开放以后，提出了什么观点？",
     "options": ["男女都一样","女人要有女人味","男主女从","女女不一样"],
     "answer": 1,
     "explain": "Sau cải cách mở cửa đưa ra quan điểm 女人要有女人味."
    },
    {
     "q": "作者的观点是什么？",
     "options": ["时代不同了，男女都一样","时代不同了，男女不一样","时代不同了，女女不一样","女人应该在家里做贤妻良母"],
     "answer": 2,
     "explain": "Tác giả cho rằng nên là “thời đại đã khác, phụ nữ với phụ nữ không như nhau”."
    },
    {
     "q": "作者认为新时代的“女人味”应该包括什么？",
     "options": ["只包括温柔、美丽","只包括聪明、能干","温柔、美丽、听话，还有聪明、能干，甚至攻击性和领袖欲","只包括听话"],
     "answer": 2,
     "explain": "Đoạn cuối: không chỉ dịu dàng, xinh đẹp, nghe lời mà còn thông minh, giỏi giang, thậm chí quyết liệt và muốn lãnh đạo."
    }
   ],
   "fills": [{"sentence":"现代社会以后，中国妇女的_______经历了这样两个阶段：先是“时代不同了，男女都一样”，否定了几千年来男主女从的观念和社会结构；","answer":"地位","options":["地位","贤妻良母","独立","实验"]},{"sentence":"现代社会以后，中国妇女的地位经历了这样两个阶段：先是“时代不同了，男女都一样”，否定了几千年来_______的观念和社会结构；","answer":"男主女从","options":["独立","贤妻良母","和睦","男主女从"]},{"sentence":"比如，有不愿意出来工作，在家里做_______的女人；","answer":"贤妻良母","options":["男主女从","独立","贤妻良母","地位"]},{"sentence":"也有愿意自己在社会上努力工作，经济_______的女人；","answer":"独立","options":["男主女从","地位","贤妻良母","独立"]}]
  },
  {
   "id": "u7t2",
   "unit": 7,
   "no": 2,
   "titleZh": "互联网40岁了",
   "titleVi": "Internet tròn 40 tuổi",
   "note": "",
   "vocab": [
    {
     "hanzi": "通讯",
     "pinyin": "tōngxùn",
     "pos": "Danh từ/Động từ",
     "meaning": "Thông tin truyền tin",
     "exZh": "实现了通讯",
     "exVi": "Thực hiện được liên lạc"
    },
    {
     "hanzi": "转眼",
     "pinyin": "zhuǎnyǎn",
     "pos": "Phó từ",
     "meaning": "Chớp mắt",
     "exZh": "只是转眼之间",
     "exVi": "Chỉ là trong chớp mắt"
    },
    {
     "hanzi": "地球村",
     "pinyin": "dìqiúcūn",
     "pos": "Danh từ",
     "meaning": "Ngôi làng toàn cầu",
     "exZh": "生活在地球村",
     "exVi": "Sống trong ngôi làng toàn cầu"
    },
    {
     "hanzi": "推动",
     "pinyin": "tuīdòng",
     "pos": "Động từ",
     "meaning": "Thúc đẩy",
     "exZh": "推动社会发展",
     "exVi": "Thúc đẩy sự phát triển của xã hội"
    },
    {
     "hanzi": "媒介",
     "pinyin": "méijiè",
     "pos": "Danh từ",
     "meaning": "Môi giới, trung gian",
     "exZh": "只是一个媒介",
     "exVi": "Chỉ là một phương tiện"
    }
   ],
   "grammar": [],
   "text": [
    {
     "zh": "互联网产生于1969年，具体时间却有两种不同意见：“9月2日”和“10月29日”。我们认为，只有两台主机之间实现了通讯才算是互联网的真正“生日”。当时准确的时间是1969年10月29日22点30分。",
     "vi": "Internet ra đời năm 1969, nhưng về thời gian cụ thể lại có hai ý kiến khác nhau: “ngày 2 tháng 9” và “ngày 29 tháng 10”. Chúng tôi cho rằng chỉ khi hai máy chủ thực hiện được liên lạc với nhau thì mới được coi là “ngày sinh” thực sự của internet. Thời điểm chính xác khi đó là 22 giờ 30 phút ngày 29 tháng 10 năm 1969.",
     "tokens": [["互联网","hùliánwǎng","internet"],["产生","chǎnshēng","sinh ra, nảy sinh"],["于","yú","ở, vào"],["1969"],["年","nián","năm"],["，"],["具体","jùtǐ","cụ thể"],["时间","shíjiān","thời gian"],["却","què","lại, nhưng lại"],["有","yǒu","có"],["两种","liǎngzhǒng","hai loại"],["不同","bùtóng","khác nhau"],["意见","yìjiàn","ý kiến"],["："],["“"],["9"],["月","yuè","trăng; tháng"],["2"],["日","rì","ngày; mặt trời"],["”"],["和","hé","và; hòa"],["“"],["10"],["月","yuè","trăng; tháng"],["29"],["日","rì","ngày; mặt trời"],["”"],["。"],["我们","wǒmen","chúng tôi"],["认为","rènwéi","cho rằng"],["，"],["只有","zhǐyǒu","chỉ có"],["两台","liǎngtái","hai cỗ (máy)"],["主机","zhǔjī","máy chủ"],["之间","zhījiān","giữa"],["实现","shíxiàn","thực hiện"],["了","le","rồi (trợ từ)"],["通讯","tōngxùn","Thông tin truyền tin"],["才","cái","mới"],["算是","suànshì","coi như là"],["互联网","hùliánwǎng","internet"],["的","de","của (trợ từ)"],["真正","zhēnzhèng","thực sự"],["“"],["生日","shēngrì","sinh nhật"],["”"],["。"],["当时","dāngshí","lúc đó"],["准确","zhǔnquè","chính xác"],["的","de","của (trợ từ)"],["时间","shíjiān","thời gian"],["是","shì","là"],["1969"],["年","nián","năm"],["10"],["月","yuè","trăng; tháng"],["29"],["日","rì","ngày; mặt trời"],["22"],["点","diǎn","nhấp; điểm; giờ"],["30"],["分","fēn","phút; chia"],["。"]]
    },
    {
     "zh": "互联网40年的时间，相对人类社会来说，只是转眼之间，但却完全改变了人们的生活和工作方式，我们就生活在互联网的“地球村”里。",
     "vi": "Bốn mươi năm của internet, so với xã hội loài người thì chỉ là trong chớp mắt, nhưng nó đã thay đổi hoàn toàn cách sống và làm việc của con người, chúng ta đang sống trong “ngôi làng toàn cầu” của internet.",
     "tokens": [["互联网","hùliánwǎng","internet"],["40"],["年","nián","năm"],["的","de","của (trợ từ)"],["时间","shíjiān","thời gian"],["，"],["相对","xiāngduì","tương đối, so với"],["人类","rénlèi","loài người"],["社会","shèhuì","xã hội"],["来说","láishuō","mà nói"],["，"],["只是","zhǐshì","chỉ là"],["转眼之间","zhuǎnyǎnzhījiān","trong chớp mắt"],["，"],["但","dàn","nhưng"],["却","què","lại, nhưng lại"],["完全","wánquán","hoàn toàn"],["改变","gǎibiàn","thay đổi"],["了","le","rồi (trợ từ)"],["人们","rénmen","mọi người"],["的","de","của (trợ từ)"],["生活","shēnghuó","cuộc sống"],["和","hé","và; hòa"],["工作","gōngzuò","công việc, làm việc"],["方式","fāngshì","cách thức"],["，"],["我们","wǒmen","chúng tôi"],["就","jiù","thì, liền"],["生活","shēnghuó","cuộc sống"],["在","zài","ở, đang"],["互联网","hùliánwǎng","internet"],["的","de","của (trợ từ)"],["“"],["地球村","dìqiúcūn","Ngôi làng toàn cầu"],["”"],["里","lǐ","trong; dặm"],["。"]]
    },
    {
     "zh": "互联网在进步？那是肯定的，并且这种进步推动着人类社会的发展。交流的方便与及时、应用的准确与有效，只要打开网络，你就可以联接整个世界。然而，消极影响也必然会出现，对于互联网的批评很多很多。",
     "vi": "Internet có đang tiến bộ không? Điều đó là chắc chắn, và sự tiến bộ này đang thúc đẩy sự phát triển của xã hội loài người. Giao lưu thuận tiện và kịp thời, ứng dụng chính xác và hiệu quả, chỉ cần mở mạng là bạn có thể kết nối với cả thế giới. Tuy nhiên, ảnh hưởng tiêu cực cũng tất yếu sẽ xuất hiện, những lời phê bình đối với internet rất rất nhiều.",
     "tokens": [["互联网","hùliánwǎng","internet"],["在","zài","ở, đang"],["进步","jìnbù","tiến bộ"],["？"],["那","nà","kia, đó"],["是","shì","là"],["肯定","kěndìng","chắc chắn"],["的","de","của (trợ từ)"],["，"],["并且","bìngqiě","và, hơn nữa"],["这种","zhèzhǒng","loại này"],["进步","jìnbù","tiến bộ"],["推动","tuīdòng","Thúc đẩy"],["着","zhe","đang (trợ từ)"],["人类","rénlèi","loài người"],["社会","shèhuì","xã hội"],["的","de","của (trợ từ)"],["发展","fāzhǎn","phát triển"],["。"],["交流","jiāoliú","giao lưu"],["的","de","của (trợ từ)"],["方便","fāngbiàn","thuận tiện"],["与","yǔ","và, với"],["及时","jíshí","kịp thời"],["、"],["应用","yìngyòng","ứng dụng"],["的","de","của (trợ từ)"],["准确","zhǔnquè","chính xác"],["与","yǔ","và, với"],["有效","yǒuxiào","hiệu quả"],["，"],["只要","zhǐyào","chỉ cần"],["打开","dǎkāi","mở ra"],["网络","wǎngluò","mạng"],["，"],["你","nǐ","bạn"],["就","jiù","thì, liền"],["可以","kěyǐ","có thể"],["联接","liánjiē","kết nối"],["整个","zhěnggè","cả, toàn bộ"],["世界","shìjiè","thế giới"],["。"],["然而","ránér","tuy nhiên"],["，"],["消极影响","xiāojíyǐngxiǎng","ảnh hưởng tiêu cực"],["也","yě","cũng"],["必然","bìrán","tất yếu"],["会","huì","sẽ; biết"],["出现","chūxiàn","xuất hiện"],["，"],["对于","duìyú","đối với"],["互联网","hùliánwǎng","internet"],["的","de","của (trợ từ)"],["批评","pīpíng","phê bình"],["很多很多","hěnduōhěnduō","rất rất nhiều"],["。"]]
    },
    {
     "zh": "仔细想想，网络是什么？只是一个媒介，一个工具。使用媒介的是人，各种各样的人。在使用的过程中，问题出现了，能把问题说成是互联网造成的吗？答案是否定的。批评的声音，对于网络应该是一个礼物，在我们努力想着该怎么救治网络的时候，网络正在偷笑呢，“40年，对‘我’来讲，只是一个开始。”",
     "vi": "Nghĩ kỹ lại, mạng là gì? Chỉ là một phương tiện, một công cụ. Người sử dụng phương tiện là con người, đủ loại người. Trong quá trình sử dụng, vấn đề nảy sinh, có thể nói vấn đề là do internet gây ra không? Câu trả lời là không. Những tiếng nói phê bình, đối với mạng mà nói, nên là một món quà. Khi chúng ta đang cố gắng nghĩ xem nên cứu chữa mạng thế nào thì mạng đang cười thầm: “40 năm, đối với ‘tôi’ mà nói, chỉ là một sự khởi đầu.”",
     "tokens": [["仔细","zǐxì","kỹ lưỡng"],["想想","xiǎngxiǎng","nghĩ xem"],["，"],["网络","wǎngluò","mạng"],["是","shì","là"],["什么","shénme","cái gì"],["？"],["只是","zhǐshì","chỉ là"],["一个","yígè","một (cái, người)"],["媒介","méijiè","Môi giới, trung gian"],["，"],["一个","yígè","một (cái, người)"],["工具","gōngjù","công cụ"],["。"],["使用","shǐyòng","sử dụng"],["媒介","méijiè","Môi giới, trung gian"],["的","de","của (trợ từ)"],["是","shì","là"],["人","rén","người"],["，"],["各种各样","gèzhǒnggèyàng","đủ các loại"],["的","de","của (trợ từ)"],["人","rén","người"],["。"],["在","zài","ở, đang"],["使用","shǐyòng","sử dụng"],["的","de","của (trợ từ)"],["过程","guòchéng","quá trình"],["中","zhōng","trong, giữa"],["，"],["问题","wèntí","vấn đề, câu hỏi"],["出现","chūxiàn","xuất hiện"],["了","le","rồi (trợ từ)"],["，"],["能","néng","có thể"],["把","bǎ","(giới từ đưa tân ngữ lên trước)"],["问题","wèntí","vấn đề, câu hỏi"],["说","shuō","nói"],["成","chéng","thành"],["是","shì","là"],["互联网","hùliánwǎng","internet"],["造成","zàochéng","gây ra"],["的","de","của (trợ từ)"],["吗","ma","không? (trợ từ hỏi)"],["？"],["答案","dáàn","câu trả lời"],["是","shì","là"],["否定","fǒudìng","phủ định"],["的","de","của (trợ từ)"],["。"],["批评","pīpíng","phê bình"],["的","de","của (trợ từ)"],["声音","shēngyīn","âm thanh, tiếng nói"],["，"],["对于","duìyú","đối với"],["网络","wǎngluò","mạng"],["应该","yīnggāi","nên"],["是","shì","là"],["一个","yígè","một (cái, người)"],["礼物","lǐwù","món quà"],["，"],["在","zài","ở, đang"],["我们","wǒmen","chúng tôi"],["努力","nǔlì","nỗ lực"],["想着","xiǎngzhe","đang nghĩ"],["该","gāi","nên; (trang) này"],["怎么","zěnme","thế nào"],["救治","jiùzhì","cứu chữa"],["网络","wǎngluò","mạng"],["的","de","của (trợ từ)"],["时候","shíhòu","lúc, khi"],["，"],["网络","wǎngluò","mạng"],["正在","zhèngzài","đang"],["偷笑","tōuxiào","cười thầm"],["呢","ne","nhỉ, thế (trợ từ)"],["，"],["“"],["40"],["年","nián","năm"],["，"],["对","duì","đối với; đúng"],["‘"],["我","wǒ","tôi"],["’"],["来讲","láijiǎng","mà nói"],["，"],["只是","zhǐshì","chỉ là"],["一个","yígè","một (cái, người)"],["开始","kāishǐ","bắt đầu"],["。"],["”"]]
    },
    {
     "zh": "过去的互联网，发展速度远远超过我们的想象；今天的互联网，正在改变我们的工作与生活；未来的互联网，也许更难猜想，我们唯一能够做的就是等待，但这种想象互联网未来的感觉，真的很棒。",
     "vi": "Internet của quá khứ có tốc độ phát triển vượt xa sức tưởng tượng của chúng ta; internet của hôm nay đang thay đổi công việc và cuộc sống của chúng ta; internet của tương lai có lẽ còn khó đoán hơn, điều duy nhất chúng ta có thể làm là chờ đợi, nhưng cảm giác tưởng tượng về tương lai của internet này thật sự rất tuyệt.",
     "tokens": [["过去","guòqù","trước đây; trôi qua"],["的","de","của (trợ từ)"],["互联网","hùliánwǎng","internet"],["，"],["发展","fāzhǎn","phát triển"],["速度","sùdù","tốc độ"],["远远","yuǎnyuǎn","xa xa, vượt xa"],["超过","chāoguò","vượt quá"],["我们","wǒmen","chúng tôi"],["的","de","của (trợ từ)"],["想象","xiǎngxiàng","tưởng tượng"],["；"],["今天","jīntiān","hôm nay"],["的","de","của (trợ từ)"],["互联网","hùliánwǎng","internet"],["，"],["正在","zhèngzài","đang"],["改变","gǎibiàn","thay đổi"],["我们","wǒmen","chúng tôi"],["的","de","của (trợ từ)"],["工作","gōngzuò","công việc, làm việc"],["与","yǔ","và, với"],["生活","shēnghuó","cuộc sống"],["；"],["未来","wèilái","tương lai"],["的","de","của (trợ từ)"],["互联网","hùliánwǎng","internet"],["，"],["也许","yěxǔ","có lẽ"],["更","gèng","càng, hơn"],["难","nán","khó"],["猜想","cāixiǎng","đoán"],["，"],["我们","wǒmen","chúng tôi"],["唯一","wéiyī","duy nhất"],["能够","nénggòu","có thể"],["做","zuò","làm"],["的","de","của (trợ từ)"],["就是","jiùshì","chính là"],["等待","děngdài","chờ đợi"],["，"],["但","dàn","nhưng"],["这种","zhèzhǒng","loại này"],["想象","xiǎngxiàng","tưởng tượng"],["互联网","hùliánwǎng","internet"],["未来","wèilái","tương lai"],["的","de","của (trợ từ)"],["感觉","gǎnjué","cảm giác"],["，"],["真的","zhēnde","thật sự"],["很棒","hěnbàng","rất tuyệt"],["。"]]
    }
   ],
   "questions": [
    {
     "q": "作者认为互联网真正的“生日”是哪一天？",
     "options": ["1969年9月2日","1969年10月29日","2009年10月29日","文章没有说"],
     "answer": 1,
     "explain": "Chỉ khi hai máy chủ liên lạc được mới tính là ngày sinh: 22h30 ngày 29/10/1969."
    },
    {
     "q": "作者认为网络是什么？",
     "options": ["一个问题","只是一个媒介、一个工具","一个礼物","一个地球"],
     "answer": 1,
     "explain": "Bài viết: 只是一个媒介，一个工具."
    },
    {
     "q": "对于互联网的问题，作者的看法是：",
     "options": ["问题都是互联网造成的","问题不是互联网造成的，是使用的人","应该关掉互联网","互联网没有任何问题"],
     "answer": 1,
     "explain": "Người dùng phương tiện là con người; câu trả lời cho “do internet gây ra?” là phủ định."
    }
   ],
   "fills": [{"sentence":"我们认为，只有两台主机之间实现了_______才算是互联网的真正“生日”。","answer":"通讯","options":["媒介","推动","转眼","通讯"]},{"sentence":"互联网40年的时间，相对人类社会来说，只是_______之间，但却完全改变了人们的生活和工作方式，我们就生活在互联网的“地球村”里。","answer":"转眼","options":["通讯","推动","媒介","转眼"]},{"sentence":"互联网40年的时间，相对人类社会来说，只是转眼之间，但却完全改变了人们的生活和工作方式，我们就生活在互联网的“_______”里。","answer":"地球村","options":["地球村","媒介","推动","通讯"]},{"sentence":"那是肯定的，并且这种进步_______着人类社会的发展。","answer":"推动","options":["推动","转眼","媒介","通讯"]},{"sentence":"只是一个_______，一个工具。","answer":"媒介","options":["推动","通讯","转眼","媒介"]}]
  },
  {
   "id": "u7t3",
   "unit": 7,
   "no": 3,
   "titleZh": "少吃可以多活",
   "titleVi": "Ăn ít có thể sống lâu",
   "note": "",
   "vocab": [
    {
     "hanzi": "老化",
     "pinyin": "lǎohuà",
     "pos": "Động từ/Danh từ",
     "meaning": "Lão hóa",
     "exZh": "使老化过程变慢",
     "exVi": "Làm cho quá trình lão hóa chậm lại"
    },
    {
     "hanzi": "延长",
     "pinyin": "yáncháng",
     "pos": "Động từ",
     "meaning": "Kéo dài",
     "exZh": "延长寿命",
     "exVi": "Kéo dài tuổi thọ"
    },
    {
     "hanzi": "婴儿",
     "pinyin": "yīng'ér",
     "pos": "Danh từ",
     "meaning": "Trẻ sơ sinh, em bé",
     "exZh": "从婴儿到少年",
     "exVi": "Từ sơ sinh đến thiếu niên"
    },
    {
     "hanzi": "实验",
     "pinyin": "shíyàn",
     "pos": "Danh từ/Động từ",
     "meaning": "Thực nghiệm, thí nghiệm",
     "exZh": "在一次实验中",
     "exVi": "Trong một lần thí nghiệm"
    },
    {
     "hanzi": "斯巴达式",
     "pinyin": "Sībādá shì",
     "pos": "Danh từ",
     "meaning": "Kiểu Sparta (khắc khổ)",
     "exZh": "斯巴达式的生活",
     "exVi": "Cuộc sống kiểu Sparta (khắc khổ)"
    },
    {
     "hanzi": "尽情",
     "pinyin": "jìnqíng",
     "pos": "Phó từ",
     "meaning": "Thỏa sức, tận tình",
     "exZh": "尽情地吃",
     "exVi": "Thả sức ăn"
    }
   ],
   "grammar": [
    {
     "name": "Thỏa sức / Tận tình",
     "struct": "尽情······",
     "explain": "Biểu thị làm việc gì đó hết mình, không kiềm chế.",
     "exZh": "大部分人都喜欢尽情地吃。",
     "exVi": "Phần lớn mọi người đều thích thả sức ăn uống."
    }
   ],
   "text": [
    {
     "zh": "对老鼠来说，一生的时间很快过去，几个月之内，就从婴儿到了少年、青年、中年，然后是老年，两岁多就要死去。但这是可以改变的。",
     "vi": "Đối với loài chuột, thời gian cả đời trôi qua rất nhanh, trong vòng vài tháng đã từ sơ sinh đến thiếu niên, thanh niên, trung niên, rồi tuổi già, hơn hai tuổi là đã chết. Nhưng điều này có thể thay đổi được.",
     "tokens": [["对","duì","đối với; đúng"],["老鼠","lǎoshǔ","con chuột"],["来说","láishuō","mà nói"],["，"],["一生","yīshēng","cả đời, một đời"],["的","de","của (trợ từ)"],["时间","shíjiān","thời gian"],["很快","hěnkuài","rất nhanh"],["过去","guòqù","trước đây; trôi qua"],["，"],["几个","jǐgè","vài (cái)"],["月","yuè","trăng; tháng"],["之内","zhīnèi","trong vòng"],["，"],["就","jiù","thì, liền"],["从","cóng","từ"],["婴儿","yīng'ér","Trẻ sơ sinh, em bé"],["到","dào","đến"],["了","le","rồi (trợ từ)"],["少年","shàonián","thiếu niên"],["、"],["青年","qīngnián","thanh niên"],["、"],["中年","zhōngnián","trung niên"],["，"],["然后","ránhòu","sau đó"],["是","shì","là"],["老年","lǎonián","tuổi già"],["，"],["两岁","liǎngsuì","hai tuổi"],["多","duō","nhiều; hơn"],["就要","jiùyào","sắp"],["死去","sǐqù","chết đi"],["。"],["但","dàn","nhưng"],["这","zhè","này"],["是","shì","là"],["可以","kěyǐ","có thể"],["改变","gǎibiàn","thay đổi"],["的","de","của (trợ từ)"],["。"]]
    },
    {
     "zh": "在一次实验中，研究人员挑选了两只老鼠，让其中一只老鼠放开肚子随便吃，过一种典型的终日吃喝玩乐式的日子，结果，两岁刚过，它就死了。另一只老鼠，则让它过一种斯巴达式的生活，只给它吃半饱，结果，它欢快活泼地活到三岁，才在真正的老年期死去。如果按照人来算，那就是120岁以后了。",
     "vi": "Trong một lần thí nghiệm, các nhà nghiên cứu chọn ra hai con chuột, cho một con thả sức ăn uống tùy thích, sống kiểu điển hình cả ngày ăn uống vui chơi, kết quả là vừa qua hai tuổi nó đã chết. Con chuột còn lại thì cho nó sống kiểu khắc khổ Sparta, chỉ cho ăn lưng lửng, kết quả nó sống vui vẻ hoạt bát đến ba tuổi, mới chết ở tuổi già thực sự. Nếu tính theo con người thì đó là sau 120 tuổi.",
     "tokens": [["在","zài","ở, đang"],["一次","yīcì","một lần"],["实验","shíyàn","Thực nghiệm, thí nghiệm"],["中","zhōng","trong, giữa"],["，"],["研究","yánjiū","nghiên cứu"],["人员","rényuán","nhân viên"],["挑选","tiāoxuǎn","chọn lựa"],["了","le","rồi (trợ từ)"],["两只","liǎngzhǐ","hai con"],["老鼠","lǎoshǔ","con chuột"],["，"],["让","ràng","để, bảo, khiến"],["其中","qízhōng","trong đó"],["一只","yīzhī","một con, một chiếc"],["老鼠","lǎoshǔ","con chuột"],["放开","fàngkāi","buông thả; gác lại"],["肚子","dǔzi","bụng"],["随便","suíbiàn","tùy ý"],["吃","chī","ăn"],["，"],["过","guò","qua; sống, đón"],["一种","yīzhǒng","một loại"],["典型","diǎnxíng","điển hình"],["的","de","của (trợ từ)"],["终日","zhōngrì","suốt ngày"],["吃喝玩乐","chīhēwánlè","ăn uống vui chơi"],["式","shì","kiểu"],["的","de","của (trợ từ)"],["日子","rìzi","ngày tháng, cuộc sống"],["，"],["结果","jiéguǒ","kết quả"],["，"],["两岁","liǎngsuì","hai tuổi"],["刚","gāng","vừa mới"],["过","guò","qua; sống, đón"],["，"],["它","tā","nó"],["就","jiù","thì, liền"],["死","sǐ","chết"],["了","le","rồi (trợ từ)"],["。"],["另一只","lìngyīzhī","con còn lại"],["老鼠","lǎoshǔ","con chuột"],["，"],["则","zé","thì; mẩu (tin)"],["让","ràng","để, bảo, khiến"],["它","tā","nó"],["过","guò","qua; sống, đón"],["一种","yīzhǒng","một loại"],["斯巴达式","Sībādá shì","Kiểu Sparta (khắc khổ)"],["的","de","của (trợ từ)"],["生活","shēnghuó","cuộc sống"],["，"],["只","zhǐ","chỉ; con"],["给","gěi","cho"],["它","tā","nó"],["吃","chī","ăn"],["半饱","bànbǎo","no lưng lửng"],["，"],["结果","jiéguǒ","kết quả"],["，"],["它","tā","nó"],["欢快","huānkuài","vui vẻ"],["活泼地","huópōdì","một cách hoạt bát"],["活","huó","sống"],["到","dào","đến"],["三岁","sānsuì","ba tuổi"],["，"],["才","cái","mới"],["在","zài","ở, đang"],["真正","zhēnzhèng","thực sự"],["的","de","của (trợ từ)"],["老年期","lǎoniánqī","thời kỳ tuổi già"],["死去","sǐqù","chết đi"],["。"],["如果","rúguǒ","nếu"],["按照","ànzhào","theo"],["人","rén","người"],["来","lái","đến"],["算","suàn","tính, coi là"],["，"],["那","nà","kia, đó"],["就是","jiùshì","chính là"],["120"],["岁","suì","tuổi"],["以后","yǐhòu","sau này, sau khi"],["了","le","rồi (trợ từ)"],["。"]]
    }
   ],
   "questions": [
    {
     "q": "在实验中，那只随便吃的老鼠活了多久？",
     "options": ["刚过两岁","三岁","一百二十岁","几个月"],
     "answer": 0,
     "explain": "Con chuột ăn uống tùy thích vừa qua hai tuổi đã chết."
    },
    {
     "q": "另一只老鼠过的是什么样的生活？",
     "options": ["终日吃喝玩乐","斯巴达式的生活，只吃半饱","住在二楼","每天爬楼梯"],
     "answer": 1,
     "explain": "Con kia sống kiểu Sparta khắc khổ, chỉ ăn lưng lửng."
    },
    {
     "q": "这个实验说明了什么？",
     "options": ["老鼠喜欢吃东西","少吃可以多活","老鼠只能活两年","吃得越多越健康"],
     "answer": 1,
     "explain": "Ăn ít lại sống lâu hơn — đúng như tên bài 少吃可以多活."
    }
   ],
   "fills": [{"sentence":"对老鼠来说，一生的时间很快过去，几个月之内，就从_______到了少年、青年、中年，然后是老年，两岁多就要死去。","answer":"婴儿","options":["婴儿","延长","尽情","实验"]},{"sentence":"在一次_______中，研究人员挑选了两只老鼠，让其中一只老鼠放开肚子随便吃，过一种典型的终日吃喝玩乐式的日子，结果，两岁刚过，它就死了。","answer":"实验","options":["尽情","婴儿","老化","实验"]},{"sentence":"另一只老鼠，则让它过一种_______的生活，只给它吃半饱，结果，它欢快活泼地活到三岁，才在真正的老年期死去。","answer":"斯巴达式","options":["婴儿","斯巴达式","老化","实验"]}]
  },
  {
   "id": "u7t4",
   "unit": 7,
   "no": 4,
   "titleZh": "幸福是什么",
   "titleVi": "Hạnh phúc là gì",
   "note": "",
   "vocab": [
    {
     "hanzi": "周游世界",
     "pinyin": "zhōuyóu shìjiè",
     "pos": "Cụm từ",
     "meaning": "Du lịch vòng quanh thế giới",
     "exZh": "想周游世界",
     "exVi": "Muốn du lịch vòng quanh thế giới"
    },
    {
     "hanzi": "富有",
     "pinyin": "fùyǒu",
     "pos": "Tính từ",
     "meaning": "Giàu có",
     "exZh": "富有的人",
     "exVi": "Người giàu có"
    },
    {
     "hanzi": "和睦",
     "pinyin": "hémù",
     "pos": "Tính từ",
     "meaning": "Hòa thuận",
     "exZh": "家庭和睦",
     "exVi": "Gia đình hòa thuận"
    },
    {
     "hanzi": "乐趣",
     "pinyin": "lèqù",
     "pos": "Danh từ",
     "meaning": "Niềm vui",
     "exZh": "平凡人的乐趣",
     "exVi": "Niềm vui của người bình thường"
    },
    {
     "hanzi": "平凡",
     "pinyin": "píngfán",
     "pos": "Tính từ",
     "meaning": "Bình dị, bình thường",
     "exZh": "平凡的生活",
     "exVi": "Cuộc sống bình dị"
    }
   ],
   "grammar": [],
   "text": [
    {
     "zh": "【调查问卷：幸福是什么】",
     "vi": "[Phiếu khảo sát: Hạnh phúc là gì]",
     "tokens": [["【"],["调查","diàochá","điều tra"],["问卷","wènjuǎn","phiếu khảo sát"],["："],["幸福","xìngfú","hạnh phúc"],["是","shì","là"],["什么","shénme","cái gì"],["】"]]
    },
    {
     "zh": "1. 你认为幸福是什么？",
     "vi": "1. Bạn cho rằng hạnh phúc là gì?",
     "tokens": [["1"],["."],[" "],["你","nǐ","bạn"],["认为","rènwéi","cho rằng"],["幸福","xìngfú","hạnh phúc"],["是","shì","là"],["什么","shénme","cái gì"],["？"]]
    },
    {
     "zh": "□ 浪漫的爱情  □ 幸福的家庭  □ 成功的事业  □ 健康与长寿",
     "vi": "□ Tình yêu lãng mạn  □ Gia đình hạnh phúc  □ Sự nghiệp thành công  □ Sức khỏe và tuổi thọ",
     "tokens": [["□"],[" "],["浪漫","làngmàn","lãng mạn"],["的","de","của (trợ từ)"],["爱情","àiqíng","tình yêu"],[" "],[" "],["□"],[" "],["幸福","xìngfú","hạnh phúc"],["的","de","của (trợ từ)"],["家庭","jiātíng","gia đình"],[" "],[" "],["□"],[" "],["成功","chénggōng","thành công"],["的","de","của (trợ từ)"],["事业","shìyè","sự nghiệp"],[" "],[" "],["□"],[" "],["健康","jiànkāng","khỏe mạnh"],["与","yǔ","và, với"],["长寿","chángshòu","trường thọ"]]
    },
    {
     "zh": "2. 你认为幸福与财富有关系吗？",
     "vi": "2. Bạn cho rằng hạnh phúc có liên quan đến của cải không?",
     "tokens": [["2"],["."],[" "],["你","nǐ","bạn"],["认为","rènwéi","cho rằng"],["幸福","xìngfú","hạnh phúc"],["与","yǔ","và, với"],["财富","cáifù","của cải"],["有","yǒu","có"],["关系","guānxì","quan hệ"],["吗","ma","không? (trợ từ hỏi)"],["？"]]
    },
    {
     "zh": "□ 有很大关系，有钱人更自由，他们总是比没有钱的人幸福一些。",
     "vi": "□ Có liên quan rất lớn, người có tiền tự do hơn, họ luôn hạnh phúc hơn người không có tiền một chút.",
     "tokens": [["□"],[" "],["有","yǒu","có"],["很大","hěndà","rất lớn"],["关系","guānxì","quan hệ"],["，"],["有钱人","yǒuqiánrén","người có tiền"],["更","gèng","càng, hơn"],["自由","zìyóu","tự do"],["，"],["他们","tāmen","họ"],["总是","zǒngshì","luôn luôn"],["比","bǐ","so với"],["没有","méiyǒu","không có"],["钱","qián","tiền"],["的","de","của (trợ từ)"],["人","rén","người"],["幸福","xìngfú","hạnh phúc"],["一些","yīxiē","một số, một vài"],["。"]]
    },
    {
     "zh": "□ 有一定的关系，但富有的人有时也会失去一些平凡人的乐趣。",
     "vi": "□ Có liên quan nhất định, nhưng người giàu có đôi khi cũng sẽ mất đi một số niềm vui của người bình thường.",
     "tokens": [["□"],[" "],["有","yǒu","có"],["一定","yídìng","nhất định, chắc chắn"],["的","de","của (trợ từ)"],["关系","guānxì","quan hệ"],["，"],["但","dàn","nhưng"],["富有","fùyǒu","Giàu có"],["的","de","của (trợ từ)"],["人","rén","người"],["有时","yǒushí","có lúc"],["也","yě","cũng"],["会","huì","sẽ; biết"],["失去","shīqù","mất đi"],["一些","yīxiē","một số, một vài"],["平凡","píngfán","Bình dị, bình thường"],["人","rén","người"],["的","de","của (trợ từ)"],["乐趣","lèqù","Niềm vui"],["。"]]
    },
    {
     "zh": "□ 没有关系，因为幸福首先是一种感觉，国王和乞丐各有各的幸福。",
     "vi": "□ Không liên quan, vì hạnh phúc trước hết là một loại cảm giác, nhà vua và người ăn mày mỗi người có hạnh phúc riêng.",
     "tokens": [["□"],[" "],["没有","méiyǒu","không có"],["关系","guānxì","quan hệ"],["，"],["因为","yīnwèi","bởi vì"],["幸福","xìngfú","hạnh phúc"],["首先","shǒuxiān","trước hết"],["是","shì","là"],["一种","yīzhǒng","một loại"],["感觉","gǎnjué","cảm giác"],["，"],["国王","guówáng","nhà vua"],["和","hé","và; hòa"],["乞丐","qǐgài","người ăn mày"],["各","gè","các, mỗi"],["有","yǒu","có"],["各","gè","các, mỗi"],["的","de","của (trợ từ)"],["幸福","xìngfú","hạnh phúc"],["。"]]
    },
    {
     "zh": "3. 当你看到一个对生活感到心满意足的人时，你会有什么反应？",
     "vi": "3. Khi bạn nhìn thấy một người cảm thấy hoàn toàn mãn nguyện với cuộc sống, bạn sẽ phản ứng thế nào?",
     "tokens": [["3"],["."],[" "],["当","dāng","khi; làm"],["你","nǐ","bạn"],["看到","kàndào","nhìn thấy"],["一个","yígè","một (cái, người)"],["对","duì","đối với; đúng"],["生活","shēnghuó","cuộc sống"],["感到","gǎndào","cảm thấy"],["心满意足","xīnmǎnyìzú","hoàn toàn mãn nguyện"],["的","de","của (trợ từ)"],["人","rén","người"],["时","shí","lúc, khi"],["，"],["你","nǐ","bạn"],["会","huì","sẽ; biết"],["有","yǒu","có"],["什么","shénme","cái gì"],["反应","fǎnyìng","phản ứng"],["？"]]
    },
    {
     "zh": "□ 真高兴，他/她也把幸福的感觉带到了我身上。",
     "vi": "□ Thật vui, anh ấy/cô ấy cũng mang cảm giác hạnh phúc đến cho tôi.",
     "tokens": [["□"],[" "],["真","zhēn","thật"],["高兴","gāoxìng","vui"],["，"],["他","tā","anh ấy, ông ấy"],["/"],["她","tā","cô ấy, bà ấy"],["也","yě","cũng"],["把","bǎ","(giới từ đưa tân ngữ lên trước)"],["幸福","xìngfú","hạnh phúc"],["的","de","của (trợ từ)"],["感觉","gǎnjué","cảm giác"],["带到","dàidào","đưa đến"],["了","le","rồi (trợ từ)"],["我","wǒ","tôi"],["身上","shēnshàng","trên người"],["。"]]
    },
    {
     "zh": "□ 努力，我以后一定要比他/她还幸福。",
     "vi": "□ Cố gắng, sau này tôi nhất định phải hạnh phúc hơn anh ấy/cô ấy.",
     "tokens": [["□"],[" "],["努力","nǔlì","nỗ lực"],["，"],["我","wǒ","tôi"],["以后","yǐhòu","sau này, sau khi"],["一定","yídìng","nhất định, chắc chắn"],["要","yào","muốn; phải"],["比","bǐ","so với"],["他","tā","anh ấy, ông ấy"],["/"],["她","tā","cô ấy, bà ấy"],["还","hái","còn, vẫn"],["幸福","xìngfú","hạnh phúc"],["。"]]
    },
    {
     "zh": "□ 没什么，我很满意自己现在的生活。",
     "vi": "□ Chẳng sao cả, tôi rất hài lòng với cuộc sống hiện tại của mình.",
     "tokens": [["□"],[" "],["没什么","méishénme","chẳng sao"],["，"],["我","wǒ","tôi"],["很","hěn","rất"],["满意","mǎnyì","hài lòng"],["自己","zìjǐ","bản thân"],["现在","xiànzài","bây giờ"],["的","de","của (trợ từ)"],["生活","shēnghuó","cuộc sống"],["。"]]
    }
   ],
   "questions": [
    {
     "q": "这篇文章是什么形式的？",
     "options": ["新闻","调查问卷","书信","故事"],
     "answer": 1,
     "explain": "Tiêu đề 【调查问卷：幸福是什么】— đây là một phiếu khảo sát."
    },
    {
     "q": "问卷中，“没有关系”的选项认为幸福首先是什么？",
     "options": ["财富","一种感觉","爱情","健康"],
     "answer": 1,
     "explain": "Lựa chọn thứ ba: 幸福首先是一种感觉."
    },
    {
     "q": "“富有的人有时也会失去一些平凡人的乐趣”中，“平凡”的意思是：",
     "options": ["普通、不特别","很有钱","很快乐","很聪明"],
     "answer": 0,
     "explain": "平凡 = bình thường, bình dị."
    }
   ],
   "fills": [{"sentence":"□ 有一定的关系，但_______的人有时也会失去一些平凡人的乐趣。","answer":"富有","options":["周游世界","转眼","和睦","富有"]},{"sentence":"□ 有一定的关系，但富有的人有时也会失去一些平凡人的_______。","answer":"乐趣","options":["乐趣","转眼","和睦","周游世界"]},{"sentence":"□ 有一定的关系，但富有的人有时也会失去一些_______人的乐趣。","answer":"平凡","options":["实验","周游世界","平凡","和睦"]}]
  },
  {
   "id": "u8t1",
   "unit": 8,
   "no": 1,
   "titleZh": "一生的职业",
   "titleVi": "Nghề nghiệp cả đời",
   "note": "",
   "vocab": [
    {
     "hanzi": "律师",
     "pinyin": "lǜshī",
     "pos": "Danh từ",
     "meaning": "Luật sư",
     "exZh": "成功的律师",
     "exVi": "Luật sư thành đạt"
    },
    {
     "hanzi": "支持",
     "pinyin": "zhīchí",
     "pos": "Động từ",
     "meaning": "Ủng hộ",
     "exZh": "支持她的事业",
     "exVi": "Ủng hộ sự nghiệp của cô"
    },
    {
     "hanzi": "坚信",
     "pinyin": "jiānxìn",
     "pos": "Động từ",
     "meaning": "Tin chắc",
     "exZh": "坚信这一点",
     "exVi": "Tin chắc điều này"
    },
    {
     "hanzi": "杰出",
     "pinyin": "jiéchū",
     "pos": "Tính từ",
     "meaning": "Xuất chúng",
     "exZh": "最杰出的女性",
     "exVi": "Người phụ nữ xuất sắc nhất"
    },
    {
     "hanzi": "怪病",
     "pinyin": "guàibìng",
     "pos": "Danh từ",
     "meaning": "Bệnh lạ",
     "exZh": "得了一种怪病",
     "exVi": "Mắc một căn bệnh lạ"
    },
    {
     "hanzi": "不得不",
     "pinyin": "bùdébù",
     "pos": "Phó từ",
     "meaning": "Không thể không",
     "exZh": "不得不放下工作",
     "exVi": "Đành phải gác lại công việc"
    },
    {
     "hanzi": "负责",
     "pinyin": "fùzé",
     "pos": "Động từ",
     "meaning": "Chịu trách nhiệm",
     "exZh": "为他的一生负责",
     "exVi": "Chịu trách nhiệm với cả cuộc đời con"
    }
   ],
   "grammar": [
    {
     "name": "Không thể không...",
     "struct": "不得不······",
     "explain": "Biểu thị sự bắt buộc do hoàn cảnh.",
     "exZh": "作为母亲的她不得不回家照顾儿子。",
     "exVi": "Là người mẹ, cô đành phải về nhà chăm sóc con trai."
    }
   ],
   "text": [
    {
     "zh": "结婚前，她是一名成功的律师。结婚后，丈夫很支持她的事业。第二年，她生了一个儿子。",
     "vi": "Trước khi kết hôn, cô là một luật sư thành đạt. Sau khi kết hôn, chồng rất ủng hộ sự nghiệp của cô. Năm thứ hai, cô sinh một cậu con trai.",
     "tokens": [["结婚","jiéhūn","kết hôn"],["前","qián","trước"],["，"],["她","tā","cô ấy, bà ấy"],["是","shì","là"],["一名","yīmíng","một (người)"],["成功","chénggōng","thành công"],["的","de","của (trợ từ)"],["律师","lǜshī","Luật sư"],["。"],["结婚","jiéhūn","kết hôn"],["后","hòu","sau"],["，"],["丈夫","zhàngfū","chồng; trượng phu"],["很","hěn","rất"],["支持","zhīchí","Ủng hộ"],["她","tā","cô ấy, bà ấy"],["的","de","của (trợ từ)"],["事业","shìyè","sự nghiệp"],["。"],["第二年","dìèrnián","năm sau"],["，"],["她","tā","cô ấy, bà ấy"],["生","shēng","sinh; sống"],["了","le","rồi (trợ từ)"],["一个","yígè","một (cái, người)"],["儿子","érzi","con trai"],["。"]]
    },
    {
     "zh": "后来，她又工作，又一次出了名。有人说，她将来会成为国内律师中最杰出的一位女性，所有的人都坚信这一点。",
     "vi": "Sau đó, cô vừa đi làm, lại một lần nữa nổi tiếng. Có người nói, tương lai cô sẽ trở thành người phụ nữ xuất sắc nhất trong giới luật sư trong nước, tất cả mọi người đều tin chắc điều này.",
     "tokens": [["后来","hòulái","sau đó"],["，"],["她","tā","cô ấy, bà ấy"],["又","yòu","lại"],["工作","gōngzuò","công việc, làm việc"],["，"],["又","yòu","lại"],["一次","yīcì","một lần"],["出了名","chūlemíng","nổi tiếng"],["。"],["有人","yǒurén","có người"],["说","shuō","nói"],["，"],["她","tā","cô ấy, bà ấy"],["将来","jiānglái","tương lai"],["会","huì","sẽ; biết"],["成为","chéngwéi","trở thành"],["国内","guónèi","trong nước"],["律师","lǜshī","Luật sư"],["中","zhōng","trong, giữa"],["最","zuì","nhất"],["杰出","jiéchū","Xuất chúng"],["的","de","của (trợ từ)"],["一位","yīwèi","một vị, một người"],["女性","nǚxìng","nữ giới"],["，"],["所有","suǒyǒu","tất cả"],["的","de","của (trợ từ)"],["人","rén","người"],["都","dōu","đều"],["坚信","jiānxìn","Tin chắc"],["这","zhè","này"],["一点","yìdiǎn","một chút"],["。"]]
    },
    {
     "zh": "没想到的事情发生了。儿子三岁那年，得了一种怪病。作为母亲的她特别伤心，不得不放下工作回家照顾儿子。一年过去了，所有的医生都摇头，他们说：“没有药物可以治疗，只能靠细心照顾，用爱和关怀来创造奇迹。",
     "vi": "Chuyện không ngờ đã xảy ra. Năm con trai ba tuổi, cậu bé mắc một căn bệnh lạ. Là người mẹ, cô vô cùng đau lòng, đành phải gác lại công việc về nhà chăm sóc con. Một năm trôi qua, tất cả bác sĩ đều lắc đầu, họ nói: “Không có thuốc nào chữa được, chỉ có thể dựa vào sự chăm sóc tỉ mỉ, dùng tình yêu và sự quan tâm để tạo nên kỳ tích.”",
     "tokens": [["没想到","méixiǎngdào","không ngờ"],["的","de","của (trợ từ)"],["事情","shìqíng","sự việc, chuyện"],["发生","fāshēng","xảy ra"],["了","le","rồi (trợ từ)"],["。"],["儿子","érzi","con trai"],["三岁","sānsuì","ba tuổi"],["那年","nànián","năm đó"],["，"],["得","dé","được; (trợ từ bổ ngữ)"],["了","le","rồi (trợ từ)"],["一种","yīzhǒng","một loại"],["怪病","guàibìng","Bệnh lạ"],["。"],["作为","zuòwéi","với tư cách là"],["母亲","mǔqīn","mẹ"],["的","de","của (trợ từ)"],["她","tā","cô ấy, bà ấy"],["特别","tèbié","đặc biệt"],["伤心","shāngxīn","đau lòng, buồn"],["，"],["不得不","bùdébù","Không thể không"],["放下","fàngxià","đặt xuống, gác lại"],["工作","gōngzuò","công việc, làm việc"],["回家","huíjiā","về nhà"],["照顾","zhàogù","chăm sóc"],["儿子","érzi","con trai"],["。"],["一年","yīnián","một năm"],["过去","guòqù","trước đây; trôi qua"],["了","le","rồi (trợ từ)"],["，"],["所有","suǒyǒu","tất cả"],["的","de","của (trợ từ)"],["医生","yīshēng","bác sĩ"],["都","dōu","đều"],["摇头","yáotóu","lắc đầu"],["，"],["他们","tāmen","họ"],["说","shuō","nói"],["："],["“"],["没有","méiyǒu","không có"],["药物","yàowù","thuốc"],["可以","kěyǐ","có thể"],["治疗","zhìliáo","điều trị"],["，"],["只能靠","zhǐnéngkào","chỉ có thể dựa vào"],["细心","xìxīn","tỉ mỉ"],["照顾","zhàogù","chăm sóc"],["，"],["用","yòng","dùng"],["爱","ài","yêu; hay (làm gì)"],["和","hé","và; hòa"],["关怀","guānhuái","quan tâm, chăm lo"],["来","lái","đến"],["创造","chuàngzào","tạo ra"],["奇迹","qíjì","kỳ tích"],["。"]]
    },
    {
     "zh": "许多人劝她重新去当律师，挣的钱一定能够养活儿子。她坚决地摇头：“儿子需要的不是钱，是母亲的时间和母亲的关心，我把他带到人间，我就应该为他的一生负责。”",
     "vi": "Nhiều người khuyên cô quay lại làm luật sư, tiền kiếm được chắc chắn đủ nuôi con trai. Cô kiên quyết lắc đầu: “Con trai cần không phải là tiền, mà là thời gian của mẹ và sự quan tâm của mẹ. Tôi đã đưa con đến với cuộc đời này thì tôi phải chịu trách nhiệm với cả cuộc đời con.”",
     "tokens": [["许多","xǔduō","nhiều"],["人","rén","người"],["劝","quàn","khuyên"],["她","tā","cô ấy, bà ấy"],["重新","chóngxīn","lại từ đầu"],["去","qù","đi"],["当","dāng","khi; làm"],["律师","lǜshī","Luật sư"],["，"],["挣","zhēng","kiếm (tiền)"],["的","de","của (trợ từ)"],["钱","qián","tiền"],["一定","yídìng","nhất định, chắc chắn"],["能够","nénggòu","có thể"],["养活","yǎnghuó","nuôi sống"],["儿子","érzi","con trai"],["。"],["她","tā","cô ấy, bà ấy"],["坚决","jiānjué","kiên quyết"],["地","dì","(trợ từ trạng ngữ)"],["摇头","yáotóu","lắc đầu"],["："],["“"],["儿子","érzi","con trai"],["需要","xūyào","cần"],["的","de","của (trợ từ)"],["不是","búshì","không phải"],["钱","qián","tiền"],["，"],["是","shì","là"],["母亲","mǔqīn","mẹ"],["的","de","của (trợ từ)"],["时间","shíjiān","thời gian"],["和","hé","và; hòa"],["母亲","mǔqīn","mẹ"],["的","de","của (trợ từ)"],["关心","guānxīn","quan tâm"],["，"],["我","wǒ","tôi"],["把","bǎ","(giới từ đưa tân ngữ lên trước)"],["他","tā","anh ấy, ông ấy"],["带到","dàidào","đưa đến"],["人间","rénjiān","nhân gian, cõi đời"],["，"],["我","wǒ","tôi"],["就","jiù","thì, liền"],["应该","yīnggāi","nên"],["为","wèi","vì, cho; là"],["他","tā","anh ấy, ông ấy"],["的","de","của (trợ từ)"],["一生","yīshēng","cả đời, một đời"],["负责","fùzé","Chịu trách nhiệm"],["。"],["”"]]
    },
    {
     "zh": "她完全成了家庭妇女，细心地照顾儿子，什么事情都要自己亲自动手。就这样，她成了一个真正的母亲，一个标准的妻子。丈夫想代替她，她不愿意；同行劝她找一个保姆，她也不愿意。",
     "vi": "Cô hoàn toàn trở thành một người nội trợ, chăm sóc con tỉ mỉ, việc gì cũng tự tay làm. Cứ như vậy, cô trở thành một người mẹ thực thụ, một người vợ mẫu mực. Chồng muốn làm thay cô, cô không muốn; đồng nghiệp khuyên cô thuê một bảo mẫu, cô cũng không muốn.",
     "tokens": [["她","tā","cô ấy, bà ấy"],["完全","wánquán","hoàn toàn"],["成","chéng","thành"],["了","le","rồi (trợ từ)"],["家庭妇女","jiātíngfùnǚ","người nội trợ"],["，"],["细心地","xìxīndì","một cách tỉ mỉ"],["照顾","zhàogù","chăm sóc"],["儿子","érzi","con trai"],["，"],["什么","shénme","cái gì"],["事情","shìqíng","sự việc, chuyện"],["都","dōu","đều"],["要","yào","muốn; phải"],["自己","zìjǐ","bản thân"],["亲自动手","qīnzìdòngshǒu","tự tay làm"],["。"],["就","jiù","thì, liền"],["这样","zhèyàng","như vậy"],["，"],["她","tā","cô ấy, bà ấy"],["成","chéng","thành"],["了","le","rồi (trợ từ)"],["一个","yígè","một (cái, người)"],["真正","zhēnzhèng","thực sự"],["的","de","của (trợ từ)"],["母亲","mǔqīn","mẹ"],["，"],["一个","yígè","một (cái, người)"],["标准","biāozhǔn","chuẩn mực, mẫu mực"],["的","de","của (trợ từ)"],["妻子","qīzǐ","vợ"],["。"],["丈夫","zhàngfū","chồng; trượng phu"],["想","xiǎng","nghĩ; muốn"],["代替","dàitì","thay thế"],["她","tā","cô ấy, bà ấy"],["，"],["她","tā","cô ấy, bà ấy"],["不","bù","không"],["愿意","yuànyì","bằng lòng, muốn"],["；"],["同行","tóngháng","người cùng nghề"],["劝","quàn","khuyên"],["她","tā","cô ấy, bà ấy"],["找","zhǎo","tìm"],["一个","yígè","một (cái, người)"],["保姆","bǎomǔ","bảo mẫu"],["，"],["她","tā","cô ấy, bà ấy"],["也","yě","cũng"],["不","bù","không"],["愿意","yuànyì","bằng lòng, muốn"],["。"]]
    },
    {
     "zh": "许多年过去了，人们忘记了她。可是她的儿子病好了，长成了一个男子汉，以优秀的成绩考入了一所著名的医科大学。儿子要成为一名医生，用自己的成功来补偿母亲。",
     "vi": "Nhiều năm trôi qua, mọi người đã quên cô. Nhưng con trai cô đã khỏi bệnh, lớn lên thành một chàng trai mạnh mẽ, đỗ vào một trường đại học y nổi tiếng với thành tích xuất sắc. Con trai muốn trở thành một bác sĩ, dùng thành công của mình để đền đáp mẹ.",
     "tokens": [["许多年","xǔduōnián","nhiều năm"],["过去","guòqù","trước đây; trôi qua"],["了","le","rồi (trợ từ)"],["，"],["人们","rénmen","mọi người"],["忘记","wàngjì","quên"],["了","le","rồi (trợ từ)"],["她","tā","cô ấy, bà ấy"],["。"],["可是","kěshì","nhưng"],["她","tā","cô ấy, bà ấy"],["的","de","của (trợ từ)"],["儿子","érzi","con trai"],["病","bìng","bệnh"],["好","hǎo","tốt; rất"],["了","le","rồi (trợ từ)"],["，"],["长成","zhǎngchéng","lớn lên thành"],["了","le","rồi (trợ từ)"],["一个","yígè","một (cái, người)"],["男子汉","nánzihàn","đấng nam nhi"],["，"],["以","yǐ","lấy, dùng; với"],["优秀","yōuxiù","xuất sắc"],["的","de","của (trợ từ)"],["成绩","chéngjì","thành tích"],["考入","kǎorù","thi đỗ vào"],["了","le","rồi (trợ từ)"],["一所","yīsuǒ","một ngôi (trường)"],["著名","zhùmíng","nổi tiếng"],["的","de","của (trợ từ)"],["医科大学","yīkēdàxué","đại học y"],["。"],["儿子","érzi","con trai"],["要","yào","muốn; phải"],["成为","chéngwéi","trở thành"],["一名","yīmíng","một (người)"],["医生","yīshēng","bác sĩ"],["，"],["用","yòng","dùng"],["自己","zìjǐ","bản thân"],["的","de","của (trợ từ)"],["成功","chénggōng","thành công"],["来","lái","đến"],["补偿","bǔcháng","đền bù, đền đáp"],["母亲","mǔqīn","mẹ"],["。"]]
    },
    {
     "zh": "以前的同事来看她，他们都成名了。她平静地坐在他们中间。有人说，她本来也可以成为有名的律师。",
     "vi": "Những đồng nghiệp cũ đến thăm cô, họ đều đã thành danh. Cô bình thản ngồi giữa họ. Có người nói, lẽ ra cô cũng đã có thể trở thành luật sư nổi tiếng.",
     "tokens": [["以前","yǐqián","trước đây"],["的","de","của (trợ từ)"],["同事","tóngshì","đồng nghiệp"],["来看","láikàn","đến thăm; mà xét"],["她","tā","cô ấy, bà ấy"],["，"],["他们","tāmen","họ"],["都","dōu","đều"],["成名","chéngmíng","thành danh"],["了","le","rồi (trợ từ)"],["。"],["她","tā","cô ấy, bà ấy"],["平静","píngjìng","bình thản"],["地","dì","(trợ từ trạng ngữ)"],["坐在","zuòzài","ngồi ở"],["他们","tāmen","họ"],["中间","zhōngjiān","ở giữa"],["。"],["有人","yǒurén","có người"],["说","shuō","nói"],["，"],["她","tā","cô ấy, bà ấy"],["本来","běnlái","vốn dĩ, lẽ ra"],["也","yě","cũng"],["可以","kěyǐ","có thể"],["成为","chéngwéi","trở thành"],["有名","yǒumíng","nổi tiếng"],["的","de","của (trợ từ)"],["律师","lǜshī","Luật sư"],["。"]]
    },
    {
     "zh": "她笑了，说：“对于一个母亲来讲，任何工作都只是暂时的，只有一样工作是一生的职业，那就是爱孩子。我明白，我首先是一个母亲，然后才是一名律师或者别的什么。",
     "vi": "Cô mỉm cười nói: “Đối với một người mẹ, mọi công việc đều chỉ là tạm thời, chỉ có một công việc là nghề nghiệp cả đời, đó là yêu thương con. Tôi hiểu, trước hết tôi là một người mẹ, sau đó mới là một luật sư hay bất cứ điều gì khác.”",
     "tokens": [["她","tā","cô ấy, bà ấy"],["笑","xiào","cười"],["了","le","rồi (trợ từ)"],["，"],["说","shuō","nói"],["："],["“"],["对于","duìyú","đối với"],["一个","yígè","một (cái, người)"],["母亲","mǔqīn","mẹ"],["来讲","láijiǎng","mà nói"],["，"],["任何","rènhé","bất kỳ"],["工作","gōngzuò","công việc, làm việc"],["都","dōu","đều"],["只是","zhǐshì","chỉ là"],["暂时","zànshí","tạm thời"],["的","de","của (trợ từ)"],["，"],["只有","zhǐyǒu","chỉ có"],["一样","yīyàng","giống nhau"],["工作","gōngzuò","công việc, làm việc"],["是","shì","là"],["一生","yīshēng","cả đời, một đời"],["的","de","của (trợ từ)"],["职业","zhíyè","nghề nghiệp"],["，"],["那","nà","kia, đó"],["就是","jiùshì","chính là"],["爱","ài","yêu; hay (làm gì)"],["孩子","háizi","đứa trẻ, con"],["。"],["我","wǒ","tôi"],["明白","míngbái","hiểu rõ"],["，"],["我","wǒ","tôi"],["首先","shǒuxiān","trước hết"],["是","shì","là"],["一个","yígè","một (cái, người)"],["母亲","mǔqīn","mẹ"],["，"],["然后","ránhòu","sau đó"],["才","cái","mới"],["是","shì","là"],["一名","yīmíng","một (người)"],["律师","lǜshī","Luật sư"],["或者","huòzhě","hoặc"],["别的","biéde","khác"],["什么","shénme","cái gì"],["。"]]
    }
   ],
   "questions": [
    {
     "q": "她为什么放下工作回家？",
     "options": ["丈夫不让她工作","儿子得了一种怪病，需要她照顾","她不喜欢当律师","她想休息"],
     "answer": 1,
     "explain": "Con trai mắc bệnh lạ năm ba tuổi, cô đành gác lại công việc về chăm con."
    },
    {
     "q": "她认为儿子需要的是什么？",
     "options": ["钱","母亲的时间和母亲的关心","好医生","保姆"],
     "answer": 1,
     "explain": "Cô nói: 儿子需要的不是钱，是母亲的时间和母亲的关心."
    },
    {
     "q": "她认为什么是“一生的职业”？",
     "options": ["律师","医生","爱孩子","家庭妇女"],
     "answer": 2,
     "explain": "Chỉ có một công việc là nghề nghiệp cả đời, đó là yêu thương con."
    }
   ],
   "fills": [{"sentence":"结婚前，她是一名成功的_______。","answer":"律师","options":["怪病","支持","律师","负责"]},{"sentence":"结婚后，丈夫很_______她的事业。","answer":"支持","options":["杰出","不得不","负责","支持"]},{"sentence":"有人说，她将来会成为国内律师中最杰出的一位女性，所有的人都_______这一点。","answer":"坚信","options":["不得不","负责","坚信","怪病"]},{"sentence":"有人说，她将来会成为国内律师中最_______的一位女性，所有的人都坚信这一点。","answer":"杰出","options":["不得不","支持","负责","杰出"]},{"sentence":"儿子三岁那年，得了一种_______。","answer":"怪病","options":["不得不","杰出","负责","怪病"]}]
  },
  {
   "id": "u8t2",
   "unit": 8,
   "no": 2,
   "titleZh": "说地道汉语 写典雅文章",
   "titleVi": "Nói tiếng Hán chuẩn, viết văn tao nhã",
   "note": "",
   "vocab": [
    {
     "hanzi": "典雅",
     "pinyin": "diǎnyǎ",
     "pos": "Tính từ",
     "meaning": "Tao nhã, lời hay ý đẹp",
     "exZh": "写典雅文章",
     "exVi": "Viết bài văn tao nhã"
    },
    {
     "hanzi": "地道",
     "pinyin": "dìdao",
     "pos": "Tính từ",
     "meaning": "Chính cống, chuẩn",
     "exZh": "说地道汉语",
     "exVi": "Nói tiếng Hán chuẩn"
    },
    {
     "hanzi": "开创",
     "pinyin": "kāichuàng",
     "pos": "Động từ",
     "meaning": "Khai sáng, đề xướng",
     "exZh": "开创的教学方法",
     "exVi": "Phương pháp giảng dạy do (ai đó) sáng lập"
    },
    {
     "hanzi": "注重",
     "pinyin": "zhùzhòng",
     "pos": "Động từ",
     "meaning": "Chú trọng",
     "exZh": "注重听说为先",
     "exVi": "Chú trọng nghe nói trước hết"
    },
    {
     "hanzi": "针对性地",
     "pinyin": "zhēnduìxìng de",
     "pos": "Phó từ",
     "meaning": "Một cách có mục tiêu/nhắm vào",
     "exZh": "针对性地纠正",
     "exVi": "Sửa lỗi có trọng tâm"
    }
   ],
   "grammar": [
    {
     "name": "Coi... là trên hết/ưu tiên",
     "struct": "······为先",
     "explain": "Cấu trúc nhấn mạnh tiêu chí quan trọng nhất.",
     "exZh": "在教学中，注重“听说为先”。",
     "exVi": "Trong giảng dạy, chú trọng “nghe nói là trước hết”."
    }
   ],
   "text": [
    {
     "zh": "“利用暑假，去中国学汉语！”这是97个美国大学生的心愿。6月中旬，他们在北京语言大学参加了北京书院的开学典礼，开始了9周的紧张学习。",
     "vi": "“Tận dụng kỳ nghỉ hè, đến Trung Quốc học tiếng Hán!” Đây là mong muốn của 97 sinh viên đại học Mỹ. Trung tuần tháng 6, họ đã tham dự lễ khai giảng của Thư viện Bắc Kinh tại Đại học Ngôn ngữ Bắc Kinh, bắt đầu 9 tuần học tập căng thẳng.",
     "tokens": [["“"],["利用","lìyòng","tận dụng"],["暑假","shǔjià","kỳ nghỉ hè"],["，"],["去","qù","đi"],["中国","zhōngguó","Trung Quốc"],["学","xué","học"],["汉语","hànyǔ","tiếng Hán"],["！"],["”"],["这","zhè","này"],["是","shì","là"],["97"],["个","gè","cái (lượng từ)"],["美国","měiguó","nước Mỹ"],["大学生","dàxuéshēng","sinh viên"],["的","de","của (trợ từ)"],["心愿","xīnyuàn","mong muốn"],["。"],["6"],["月","yuè","trăng; tháng"],["中旬","zhōngxún","trung tuần"],["，"],["他们","tāmen","họ"],["在","zài","ở, đang"],["北京语言大学","běi jīng yǔ yán dà xué","Đại học Ngôn ngữ Bắc Kinh"],["参加","cānjiā","tham gia"],["了","le","rồi (trợ từ)"],["北京书院","běijīngshūyuàn","Thư viện Bắc Kinh (chương trình học)"],["的","de","của (trợ từ)"],["开学典礼","kāixuédiǎnlǐ","lễ khai giảng"],["，"],["开始","kāishǐ","bắt đầu"],["了","le","rồi (trợ từ)"],["9"],["周","zhōu","xung quanh"],["的","de","của (trợ từ)"],["紧张","jǐnzhāng","căng thẳng"],["学习","xuéxí","học tập"],["。"]]
    },
    {
     "zh": "“汉语是练出来的，不是教出来的”，这是赵元任先生开创的教学方法。暑期班教材用“地道的口语”说话，上课用“直接的方法”练习。在教学中，注重“听说为先”，通过大量的句型操练，让学生能听会说，把“识字”这一难点放到了课下，让学生自己去练。",
     "vi": "“Tiếng Hán là do luyện mà thành, không phải do dạy mà thành”, đây là phương pháp giảng dạy do ông Triệu Nguyên Nhậm sáng lập. Giáo trình lớp hè dùng “khẩu ngữ chuẩn” để nói, trên lớp dùng “phương pháp trực tiếp” để luyện tập. Trong giảng dạy, chú trọng “nghe nói là trước hết”, thông qua lượng lớn bài luyện mẫu câu giúp học sinh nghe được nói được, còn việc “nhận mặt chữ” — một điểm khó — thì để ngoài giờ học, cho học sinh tự luyện.",
     "tokens": [["“"],["汉语","hànyǔ","tiếng Hán"],["是","shì","là"],["练","liàn","luyện"],["出来","chūlái","ra, xuất hiện"],["的","de","của (trợ từ)"],["，"],["不是","búshì","không phải"],["教","jiào","dạy"],["出来","chūlái","ra, xuất hiện"],["的","de","của (trợ từ)"],["”"],["，"],["这","zhè","này"],["是","shì","là"],["赵元任","zhàoyuánrèn","Triệu Nguyên Nhậm"],["先生","xiānshēng","ông, tiên sinh; chồng"],["开创","kāichuàng","Khai sáng, đề xướng"],["的","de","của (trợ từ)"],["教学方法","jiàoxuéfāngfǎ","phương pháp giảng dạy"],["。"],["暑期班","shǔqībān","lớp hè"],["教材","jiàocái","giáo trình"],["用","yòng","dùng"],["“"],["地道","dìdao","Chính cống, chuẩn"],["的","de","của (trợ từ)"],["口语","kǒuyǔ","khẩu ngữ"],["”"],["说话","shuōhuà","nói chuyện"],["，"],["上课","shàngkè","lên lớp, học"],["用","yòng","dùng"],["“"],["直接","zhíjiē","trực tiếp"],["的","de","của (trợ từ)"],["方法","fāngfǎ","phương pháp"],["”"],["练习","liànxí","luyện tập"],["。"],["在","zài","ở, đang"],["教学","jiàoxué","giảng dạy"],["中","zhōng","trong, giữa"],["，"],["注重","zhùzhòng","Chú trọng"],["“"],["听说","tīngshuō","nghe nói"],["为先","wèixiān","làm đầu, trước hết"],["”"],["，"],["通过","tōngguò","thông qua, vượt qua"],["大量","dàliàng","lượng lớn"],["的","de","của (trợ từ)"],["句型","jùxíng","mẫu câu"],["操练","cāoliàn","luyện tập"],["，"],["让","ràng","để, bảo, khiến"],["学生","xuéshēng","học sinh"],["能","néng","có thể"],["听","tīng","nghe"],["会","huì","sẽ; biết"],["说","shuō","nói"],["，"],["把","bǎ","(giới từ đưa tân ngữ lên trước)"],["“"],["识字","shízì","nhận mặt chữ"],["”"],["这","zhè","này"],["一","yī","một"],["难点","nándiǎn","điểm khó"],["放到","fàngdào","để vào"],["了","le","rồi (trợ từ)"],["课","kè","bài học, giờ học"],["下","xià","dưới; xuống"],["，"],["让","ràng","để, bảo, khiến"],["学生","xuéshēng","học sinh"],["自己","zìjǐ","bản thân"],["去","qù","đi"],["练","liàn","luyện"],["。"]]
    },
    {
     "zh": "朗读课是北京书院暑期班的亮点课程。朗读的内容，是大班课学过的知识点，朗读课老师的主要任务，是引导学生准确地发音。朗读课只有短短的15分钟，整个过程，无论是老师还是学生，都不见一点儿马虎。学生们错误的发音或容易出错的字，用拼音的方式写在一块小黑板上，老师有针对性地进行纠正和提醒。由于句子都很有趣，学生们几乎是在笑声中完成了这些练习。",
     "vi": "Giờ học đọc to là môn học nổi bật của lớp hè Thư viện Bắc Kinh. Nội dung đọc to là những điểm kiến thức đã học ở lớp lớn, nhiệm vụ chính của giáo viên giờ đọc là hướng dẫn học sinh phát âm chính xác. Giờ đọc chỉ vỏn vẹn 15 phút, trong suốt quá trình, dù là giáo viên hay học sinh, đều không hề qua loa chút nào. Những âm học sinh phát âm sai hoặc những chữ dễ sai được viết bằng pinyin lên một tấm bảng đen nhỏ, giáo viên sửa và nhắc nhở có trọng tâm. Vì các câu đều rất thú vị nên học sinh gần như hoàn thành những bài luyện này trong tiếng cười.",
     "tokens": [["朗读","lǎngdú","đọc to"],["课","kè","bài học, giờ học"],["是","shì","là"],["北京书院","běijīngshūyuàn","Thư viện Bắc Kinh (chương trình học)"],["暑期班","shǔqībān","lớp hè"],["的","de","của (trợ từ)"],["亮点","liàngdiǎn","điểm nổi bật"],["课程","kèchéng","chương trình học"],["。"],["朗读","lǎngdú","đọc to"],["的","de","của (trợ từ)"],["内容","nèiróng","nội dung"],["，"],["是","shì","là"],["大班","dàbān","lớp lớn"],["课","kè","bài học, giờ học"],["学","xué","học"],["过","guò","qua; sống, đón"],["的","de","của (trợ từ)"],["知识点","zhīshídiǎn","điểm kiến thức"],["，"],["朗读","lǎngdú","đọc to"],["课","kè","bài học, giờ học"],["老师","lǎoshī","thầy cô giáo"],["的","de","của (trợ từ)"],["主要","zhǔyào","chủ yếu"],["任务","rènwù","nhiệm vụ"],["，"],["是","shì","là"],["引导","yǐndǎo","hướng dẫn"],["学生","xuéshēng","học sinh"],["准确","zhǔnquè","chính xác"],["地","dì","(trợ từ trạng ngữ)"],["发音","fāyīn","phát âm"],["。"],["朗读","lǎngdú","đọc to"],["课","kè","bài học, giờ học"],["只有","zhǐyǒu","chỉ có"],["短短的","duǎnduǎnde","ngắn ngủi"],["15"],["分钟","fēnzhōng","phút"],["，"],["整个","zhěnggè","cả, toàn bộ"],["过程","guòchéng","quá trình"],["，"],["无论是","wúlùnshì","dù là"],["老师","lǎoshī","thầy cô giáo"],["还是","háishì","hay là; vẫn"],["学生","xuéshēng","học sinh"],["，"],["都","dōu","đều"],["不见","bújiàn","không thấy"],["一点儿","yìdiǎnér","một chút"],["马虎","mǎhǔ","qua loa"],["。"],["学生","xuéshēng","học sinh"],["们","men","(hậu tố số nhiều)"],["错误","cuòwù","sai, lỗi"],["的","de","của (trợ từ)"],["发音","fāyīn","phát âm"],["或","huò","hoặc"],["容易","róngyì","dễ"],["出错","chūcuò","mắc lỗi"],["的","de","của (trợ từ)"],["字","zì","chữ"],["，"],["用","yòng","dùng"],["拼音","pīnyīn","pinyin"],["的","de","của (trợ từ)"],["方式","fāngshì","cách thức"],["写","xiě","viết"],["在","zài","ở, đang"],["一块","yīkuài","một tảng, một miếng"],["小黑板","xiǎohēibǎn","bảng đen nhỏ"],["上","shàng","trên; lên"],["，"],["老师","lǎoshī","thầy cô giáo"],["有","yǒu","có"],["针对性地","zhēnduìxìng de","Một cách có mục tiêu/nhắm vào"],["进行","jìnxíng","tiến hành"],["纠正","jiūzhèng","sửa chữa"],["和","hé","và; hòa"],["提醒","tíxǐng","nhắc nhở"],["。"],["由于","yóuyú","do, vì"],["句子","jùzi","câu"],["都","dōu","đều"],["很","hěn","rất"],["有趣","yǒuqù","thú vị"],["，"],["学生","xuéshēng","học sinh"],["们","men","(hậu tố số nhiều)"],["几乎","jīhū","gần như"],["是","shì","là"],["在","zài","ở, đang"],["笑声","xiàoshēng","tiếng cười"],["中","zhōng","trong, giữa"],["完成","wánchéng","hoàn thành"],["了","le","rồi (trợ từ)"],["这些","zhèxiē","những ... này"],["练习","liànxí","luyện tập"],["。"]]
    },
    {
     "zh": "社会调查是北京书院的又一特色。学生要到中国社会中，去进行采访调查。每人都要设计10个问题，采访访问对象，然后写一篇调查报告。每年北京书院都会出版《美国大学生看中国报告》一书。这些作者中，有些人学习中文的时间不过两三年，却已经能够初步掌握现代汉语书面语。从书中的题目，也可以看到美国学生看中国的独特角度。",
     "vi": "Điều tra xã hội là một nét đặc sắc khác của Thư viện Bắc Kinh. Học sinh phải đi vào xã hội Trung Quốc để tiến hành phỏng vấn điều tra. Mỗi người phải thiết kế 10 câu hỏi, phỏng vấn đối tượng, sau đó viết một bản báo cáo điều tra. Hằng năm Thư viện Bắc Kinh đều xuất bản cuốn sách “Báo cáo của sinh viên Mỹ nhìn Trung Quốc”. Trong số các tác giả này, có người thời gian học tiếng Trung chỉ mới hai ba năm nhưng đã có thể bước đầu nắm được văn viết tiếng Hán hiện đại. Từ những tiêu đề trong sách cũng có thể thấy góc nhìn độc đáo của sinh viên Mỹ khi nhìn Trung Quốc.",
     "tokens": [["社会","shèhuì","xã hội"],["调查","diàochá","điều tra"],["是","shì","là"],["北京书院","běijīngshūyuàn","Thư viện Bắc Kinh (chương trình học)"],["的","de","của (trợ từ)"],["又","yòu","lại"],["一","yī","một"],["特色","tèsè","nét đặc sắc"],["。"],["学生","xuéshēng","học sinh"],["要","yào","muốn; phải"],["到","dào","đến"],["中国","zhōngguó","Trung Quốc"],["社会","shèhuì","xã hội"],["中","zhōng","trong, giữa"],["，"],["去","qù","đi"],["进行","jìnxíng","tiến hành"],["采访","cǎifǎng","phỏng vấn"],["调查","diàochá","điều tra"],["。"],["每人","měirén","mỗi người"],["都","dōu","đều"],["要","yào","muốn; phải"],["设计","shèjì","thiết kế"],["10"],["个","gè","cái (lượng từ)"],["问题","wèntí","vấn đề, câu hỏi"],["，"],["采访","cǎifǎng","phỏng vấn"],["访问","fǎngwèn","phỏng vấn"],["对象","duìxiàng","đối tượng"],["，"],["然后","ránhòu","sau đó"],["写","xiě","viết"],["一篇","yīpiān","một bài"],["调查报告","diàochábàogào","báo cáo điều tra"],["。"],["每年","měinián","mỗi năm"],["北京书院","běijīngshūyuàn","Thư viện Bắc Kinh (chương trình học)"],["都","dōu","đều"],["会","huì","sẽ; biết"],["出版","chūbǎn","xuất bản"],["《"],["美国","měiguó","nước Mỹ"],["大学生","dàxuéshēng","sinh viên"],["看","kàn","xem, nhìn"],["中国","zhōngguó","Trung Quốc"],["报告","bàogào","báo cáo"],["》"],["一","yī","một"],["书","shū","sách"],["。"],["这些","zhèxiē","những ... này"],["作者","zuòzhě","tác giả"],["中","zhōng","trong, giữa"],["，"],["有些","yǒuxiē","có một số"],["人","rén","người"],["学习","xuéxí","học tập"],["中文","zhōngwén","tiếng Trung"],["的","de","của (trợ từ)"],["时间","shíjiān","thời gian"],["不过","bùguò","tuy nhiên; chỉ, không quá"],["两三年","liǎngsānnián","hai ba năm"],["，"],["却","què","lại, nhưng lại"],["已经","yǐjīng","đã"],["能够","nénggòu","có thể"],["初步","chūbù","bước đầu"],["掌握","zhǎngwò","nắm vững"],["现代汉语","xiàndàihànyǔ","tiếng Hán hiện đại"],["书面语","shūmiànyǔ","văn viết"],["。"],["从","cóng","từ"],["书","shū","sách"],["中","zhōng","trong, giữa"],["的","de","của (trợ từ)"],["题目","tímù","đề mục, tiêu đề"],["，"],["也","yě","cũng"],["可以","kěyǐ","có thể"],["看到","kàndào","nhìn thấy"],["美国","měiguó","nước Mỹ"],["学生","xuéshēng","học sinh"],["看","kàn","xem, nhìn"],["中国","zhōngguó","Trung Quốc"],["的","de","của (trợ từ)"],["独特","dútè","độc đáo"],["角度","jiǎodù","góc độ"],["。"]]
    },
    {
     "zh": "如今，已经有近300名学生从北京书院暑期班毕业。他们中很多人都对中文越来越着迷，学习兴趣得到进一步的激发；有的喜欢上了中国文化，在美国完成学业后又来到中国工作。",
     "vi": "Đến nay, đã có gần 300 học viên tốt nghiệp lớp hè Thư viện Bắc Kinh. Nhiều người trong số họ ngày càng say mê tiếng Trung, hứng thú học tập được khơi dậy hơn nữa; có người yêu thích văn hóa Trung Quốc, sau khi hoàn thành việc học ở Mỹ lại sang Trung Quốc làm việc.",
     "tokens": [["如今","rújīn","ngày nay"],["，"],["已经","yǐjīng","đã"],["有","yǒu","có"],["近","jìn","gần"],["300"],["名","míng","tên; người (lượng từ)"],["学生","xuéshēng","học sinh"],["从","cóng","từ"],["北京书院","běijīngshūyuàn","Thư viện Bắc Kinh (chương trình học)"],["暑期班","shǔqībān","lớp hè"],["毕业","bìyè","tốt nghiệp"],["。"],["他们","tāmen","họ"],["中","zhōng","trong, giữa"],["很多","hěnduō","rất nhiều"],["人","rén","người"],["都","dōu","đều"],["对","duì","đối với; đúng"],["中文","zhōngwén","tiếng Trung"],["越来越","yuèláiyuè","ngày càng"],["着迷","zháomí","say mê"],["，"],["学习","xuéxí","học tập"],["兴趣","xìngqù","hứng thú"],["得到","dédào","nhận được"],["进一步","jìnyíbù","thêm một bước"],["的","de","của (trợ từ)"],["激发","jīfā","khơi dậy"],["；"],["有","yǒu","có"],["的","de","của (trợ từ)"],["喜欢","xǐhuān","thích"],["上","shàng","trên; lên"],["了","le","rồi (trợ từ)"],["中国","zhōngguó","Trung Quốc"],["文化","wénhuà","văn hóa"],["，"],["在","zài","ở, đang"],["美国","měiguó","nước Mỹ"],["完成学业","wánchéngxuéyè","hoàn thành việc học"],["后","hòu","sau"],["又","yòu","lại"],["来到","láidào","đến"],["中国","zhōngguó","Trung Quốc"],["工作","gōngzuò","công việc, làm việc"],["。"]]
    }
   ],
   "questions": [
    {
     "q": "北京书院暑期班的教学方法是谁开创的？",
     "options": ["孔子","赵元任先生","钱钟书先生","北京语言大学"],
     "answer": 1,
     "explain": "Đây là phương pháp giảng dạy do ông Triệu Nguyên Nhậm (赵元任) sáng lập."
    },
    {
     "q": "朗读课老师的主要任务是什么？",
     "options": ["教学生写汉字","引导学生准确地发音","带学生去旅行","给学生考试"],
     "answer": 1,
     "explain": "Nhiệm vụ chính của giáo viên giờ đọc là hướng dẫn học sinh phát âm chính xác."
    },
    {
     "q": "在社会调查中，每个学生要做什么？",
     "options": ["设计10个问题，采访访问对象，写一篇调查报告","写一封求职信","参加HSK考试","去旅行"],
     "answer": 0,
     "explain": "Mỗi người thiết kế 10 câu hỏi, phỏng vấn đối tượng rồi viết báo cáo điều tra."
    }
   ],
   "fills": [{"sentence":"暑期班教材用“_______的口语”说话，上课用“直接的方法”练习。","answer":"地道","options":["注重","针对性地","开创","地道"]},{"sentence":"“汉语是练出来的，不是教出来的”，这是赵元任先生_______的教学方法。","answer":"开创","options":["针对性地","地道","典雅","开创"]},{"sentence":"在教学中，_______“听说为先”，通过大量的句型操练，让学生能听会说，把“识字”这一难点放到了课下，让学生自己去练。","answer":"注重","options":["地道","开创","典雅","注重"]},{"sentence":"学生们错误的发音或容易出错的字，用拼音的方式写在一块小黑板上，老师有_______进行纠正和提醒。","answer":"针对性地","options":["地道","开创","典雅","针对性地"]}]
  }
 ]
});

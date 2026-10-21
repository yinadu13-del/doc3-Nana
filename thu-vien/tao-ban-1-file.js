// Gộp index.html + config.js + tu-dien.js + các môn học thành MỘT file duy nhất để gửi nhanh.
// Cách chạy (cần Node.js, đã cài khi dùng NanaBase): mở cửa sổ dòng lệnh trong thư mục này rồi gõ
//     node tao-ban-1-file.js
// Kết quả: file thu-vien-tieng-trung-1-file.html (cấu hình trong config.js lúc chạy được gộp vào).
const fs = require('fs');
const path = require('path');
const here = __dirname;
const read = (p) => fs.readFileSync(path.join(here, p), 'utf8');
const inline = (code) => '<script>\n' + code.replace(/<\/script/gi, '<\\/script') + '\n</script>';

let html = read('index.html');
const cfg = read('config.js');
const list = (cfg.split('subjects:')[1] || '').split(']')[0];
const subjects = [...list.matchAll(/^\s*"([^"]+\.js)"\s*,?/gm)].map((m) => m[1]);

html = html.replace('<script src="config.js"></script>', () => inline(cfg));
html = html.replace('<script src="tu-dien.js"></script>', () => inline(read('tu-dien.js')));
const parts = subjects.map((s) => inline(read(s)));
parts.push('<script>window.ZH_BUNDLED = ' + JSON.stringify(subjects) + ';</script>');
html = html.replace('<!--SUBJECTS-->', () => parts.join('\n'));

const out = path.join(here, 'thu-vien-tieng-trung-1-file.html');
fs.writeFileSync(out, html, 'utf8');
console.log('Đã tạo ' + out);
console.log('Gồm các môn: ' + subjects.join(', '));

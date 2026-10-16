# Thực hành cài đặt Sass bằng npm và Sass CLI

## Kiểm tra môi trường

Kiểm tra Node.js và npm đã có trên máy:

```powershell
node -v
npm -v
```

Node.js hiện có trên môi trường thực hành. `sass` được cài ở phạm vi dự án thay vì toàn cục, để không thay đổi cài đặt các bài khác.

## Cài Sass trong dự án

Trong thư mục này, chạy:

```powershell
npm install
npx sass --version
```

`package.json` khai báo Sass như một `devDependency`; npm tạo `package-lock.json` để khóa phiên bản cài đặt.

## Biên dịch SCSS sang CSS

Biên dịch một entry point:

```powershell
npx sass scss/styles.scss css/styles.css --no-source-map
```

Biên dịch tất cả tệp trong thư mục:

```powershell
npx sass scss:css --no-source-map
```

Hoặc dùng npm script tương ứng:

```powershell
npm run build:single
npm run build
```

Trong ví dụ, `scss/styles.scss` nạp `_layout.scss`, còn `_layout.scss` nạp `_tokens.scss`. Các tệp bắt đầu bằng dấu gạch dưới là partial: Sass dùng chúng để ghép stylesheet và không tạo CSS riêng cho partial.

## Theo dõi thay đổi tự động

```powershell
npx sass scss:css --watch
```

Hoặc:

```powershell
npm run watch
```

Giữ tiến trình chạy trong terminal, chỉnh sửa tệp trong `scss/`, rồi quan sát `css/styles.css` được biên dịch lại. Nhấn `Ctrl+C` để dừng watch.

## Xem kết quả

Mở `index.html` bằng trình duyệt sau khi chạy lệnh build. HTML đang liên kết tới `css/styles.css`.

## Ghi chú Windows

Không cần đổi Execution Policy toàn máy cho bài này. Các lệnh `npx sass` và npm script gọi Sass cài trong thư mục dự án, tránh yêu cầu cài toàn cục hoặc thay đổi chính sách bảo mật PowerShell.

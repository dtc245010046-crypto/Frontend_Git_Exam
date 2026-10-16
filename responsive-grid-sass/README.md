# Responsive Grid — Sass Refactor

Bản tái cấu trúc ví dụ responsive grid của [CodeGym Việt Nam](https://github.com/codegym-vn/responsive-grid). Các style inline và CSS trong trang gốc được chuyển thành Sass có biến, mixin, nesting và partials; `css/styles.css` là file đầu ra được trình duyệt sử dụng.

## Cấu trúc

- `scss/abstracts/`: biến giao diện và mixins dùng lại.
- `scss/base/`: quy tắc reset và thiết lập chung.
- `scss/layout/`: các hàng và cột của lưới 12 cột.
- `scss/components/`: banner và các thanh màu minh họa.
- `css/styles.css`: CSS đã biên dịch.

## Chạy

```sh
npm install
npm run build
```

Mở `index.html` trong trình duyệt. Để biên dịch tự động khi sửa SCSS, chạy `npm run watch`.

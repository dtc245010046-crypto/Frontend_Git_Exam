# Thực hành Sass Variables và Mixins

## Cấu trúc thư mục

```text
sass-variables-mixins/
├── index.html
├── package.json
├── css/styles.css
└── scss/
    ├── main.scss
    ├── abstracts/
    │   ├── _variables.scss
    │   └── _mixins.scss
    ├── base/_typography.scss
    └── components/
        ├── _buttons.scss
        └── _cards.scss
```

## Cách tổ chức

- `abstracts/_variables.scss` lưu màu, cỡ chữ, padding, bo góc và bóng đổ.
- `abstracts/_mixins.scss` khai báo `button-style($bg-color)` và `box-style` để dùng lại các nhóm thuộc tính.
- `base/_typography.scss` áp dụng biến cho tiêu đề `h1`, `h2`.
- `components/_buttons.scss` và `_cards.scss` dùng `@include` để áp dụng mixin.
- `main.scss` là entry point và nạp partial bằng `@use`.

## Cài đặt và biên dịch

```powershell
npm install
npm run build
```

Sass ghi CSS đã biên dịch vào `css/styles.css`. Mở `index.html` để xem nút và thẻ nội dung. Khi cần đổi màu chủ đạo hoặc khoảng cách nút, chỉ cần cập nhật biến tương ứng trong `_variables.scss` rồi chạy build lại.

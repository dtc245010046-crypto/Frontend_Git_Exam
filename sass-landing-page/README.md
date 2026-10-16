# CodeGym Career landing page — Sass refactor

Bài này tái cấu trúc stylesheet của landing page CodeGym Career đã thực hiện trước đó. Bố cục và giao diện được giữ nguyên; CSS inline cũng được chuyển thành các class trong stylesheet để trang dùng thống nhất file CSS đã biên dịch.

## Các phần được giữ lại

- Header, navigation và hero.
- Thẻ thống kê và các thẻ dịch vụ nổi bật.
- Phần giới thiệu, quy trình, đối tác, cảm nhận học viên và form tư vấn.
- Footer và các quy tắc responsive.

## Cấu trúc Sass

- `scss/abstracts/_variables.scss`: màu sắc và bóng đổ dùng chung.
- `scss/abstracts/_mixins.scss`: mixin transition và hiệu ứng hover card.
- `scss/pages/_landing-page.scss`: quy tắc giao diện, nesting và responsive.
- `scss/main.scss`: entry point để biên dịch.
- `css/styles.css`: CSS được liên kết trong `index.html`.

## Biên dịch

```sh
npm install
npm run build
```

Mở `index.html` trong trình duyệt để xem trang. Chạy `npm run watch` để tự biên dịch khi sửa SCSS.

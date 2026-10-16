# Chuyển CSS có sẵn sang SCSS có cấu trúc

## Cấu trúc thư mục

```text
sass-css-migration/
├── index.html
├── package.json
├── css/
│   └── styles.css       # CSS được Sass biên dịch
└── scss/
    ├── main.scss        # Entry point
    ├── abstracts/
    │   ├── _variables.scss
    │   └── _mixins.scss
    ├── base/
    │   └── _global.scss
    ├── layout/
    │   └── _container.scss
    └── components/
        ├── _buttons.scss
        └── _cards.scss
```

## Ánh xạ từ CSS sang SCSS

- Các màu, kích thước bo góc và bóng đổ được gom vào `abstracts/_variables.scss`.
- `abstracts/_mixins.scss` chứa mixin cho nút và box shadow.
- Quy tắc `body`, `.container`, `.button`, `.card` được tách theo trách nhiệm vào `base`, `layout`, và `components`.
- Nút dùng nesting với `&:hover` và `&:focus-visible` để gom trạng thái tương tác cạnh quy tắc `.button`.
- `main.scss` nạp các partial bằng `@use`, cơ chế module hiện hành của Sass. Các file bắt đầu bằng `_` là partial, không được biên dịch riêng.

## Cài đặt và biên dịch

```powershell
npm install
npm run build
```

Lệnh build tương đương:

```powershell
npx sass scss/main.scss css/styles.css --no-source-map
```

Mở `index.html` để xem CSS đã biên dịch. Các khai báo nền tảng từ CSS mẫu được giữ lại; phần nesting thêm trạng thái hover/focus cho nút để minh họa selector lồng nhau trong SCSS.

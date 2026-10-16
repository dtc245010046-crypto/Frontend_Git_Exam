# [Bài tập] Thiết kế UI/UX Giao diện Trang Đăng ký Người dùng

---

## I. Nghiên cứu trải nghiệm người dùng (UX Research)

Khi nghiên cứu các trang đăng ký phổ biến hàng đầu thế giới (**Google, Facebook, Twitter/X, Stripe, GitHub**), chúng tôi đúc kết các thực hành UX then chốt:

1. **Giảm tải nhận thức (Cognitive Load):** Bố cục 1 cột (Single-column layout) giúp mắt người dùng quét từ trên xuống dưới một cách tự nhiên theo đường thẳng (F-pattern / Z-pattern), giảm thời gian hoàn thành biểu mẫu.
2. **Đăng nhập xã hội nhanh (Social Sign-Up):** Cung cấp tùy chọn đăng ký 1 chạm bằng Google/Facebook giúp người dùng bỏ qua các thao tác gõ lặp lại.
3. **Phản hồi theo thời gian thực (Inline Realtime Validation):** Không bắt người dùng chờ bấm nút Submit mới báo lỗi. Khi đang gõ, hệ thống lập tức thông báo trạng thái hợp lệ hoặc nhắc nhở chỉnh sửa.
4. **Hướng dẫn và thước đo mật khẩu trực quan:** Hiển thị thanh tiến độ độ mạnh mật khẩu (Password Strength Meter) kèm đổi màu (Đỏ $\rightarrow$ Vàng $\rightarrow$ Xanh lá) giúp người dùng chủ động tạo mật khẩu an toàn mà không ức chế.
5. **Nút ẩn/hiện mật khẩu (Password Visibility Toggle):** Giảm tỷ lệ gõ sai mật khẩu tới 30% trên thiết bị di động.

---

## II. Bố cục thiết kế & Tuân thủ Luật Fitts (Fitts' Law)

> **Luật Fitts (Fitts' Law):** Thời gian để di chuyển và bấm vào một mục tiêu phụ thuộc vào **khoảng cách** và **kích thước** của mục tiêu đó.

Trong thiết kế này:
- **Kích thước nút bấm chính (CTA Button):** Chiều cao $52\text{px}$, chiều rộng phủ $100\%$ chiều rộng card form. Đây là kích thước vượt tiêu chuẩn chạm ngón tay ($44\text{px} - 48\text{px}$ của Apple/Google Material Design), giúp người dùng dễ dàng nhấp chuột hoặc bấm chạm trên màn hình cảm ứng mà không sợ bị trượt.
- **Kích thước các ô nhập liệu (Inputs):** Chiều cao $48\text{px}$, padding trong thoáng đãng, có icon nhận diện trực quan ở bên trái.
- **Khoảng cách tương tác:** Nút Submit nằm ngay dưới ô checkbox điều khoản và form đăng ký, tạo hành trình thao tác liền mạch.

---

## III. Cấu trúc 2 Trang đã thiết kế

```
register-uiux/
├── register.html      # Trang 1: Form nhập liệu đăng ký
├── success.html       # Trang 2: Trang thông báo đăng ký thành công
├── style.css          # Hệ thống Design Tokens, Responsive & Animations
├── script.js          # Logic validation thời gian thực & chuyển hướng
└── README.md          # Thuyết minh chi tiết báo cáo UI/UX & Wireframe
```

### 1. Trang 1: Form Đăng Ký (`register.html`)
- **Trường 1: Họ và tên** (icon người dùng, placeholder chỉ dẫn, báo lỗi khi nhập dưới 2 từ).
- **Trường 2: Email** (icon thư, regex kiểm tra định dạng email chuẩn `name@domain.com`).
- **Trường 3: Mật khẩu** (icon khóa, nút con mắt ẩn/hiện mật khẩu, thanh đo độ mạnh mật khẩu 4 mức độ: Rất yếu / Trung bình / Khá / Rất mạnh).
- **Trường 4: Xác nhận mật khẩu** (so sánh tức thì với ô mật khẩu trên).
- **Checkbox:** Cam kết Điều khoản & Chính sách quyền riêng tư.
- **Nút CTA:** "Tạo tài khoản ngay" với hiệu ứng hover nâng card và icon mũi tên chuyển động.

### 2. Trang 2: Xác Nhận Thành Công (`success.html`)
- Icon Checkmark màu xanh lá (`#10b981`) với hiệu ứng scale-in nổi bật.
- Tiêu đề & lời chúc mừng thân thiện.
- Bảng tóm tắt thông tin tài khoản vừa đăng ký (Họ tên, Email, Thời gian kích hoạt).
- Nút điều hướng "Đi tới Bảng điều khiển" (Primary CTA) và "Đăng ký tài khoản khác" (Secondary Action).

---

## IV. Sơ đồ Luồng Người Dùng (User Flow Diagram)

```
[Người dùng truy cập]
         │
         ▼
[Trang 1: register.html]
         │
         ├─── Nhập Họ tên ─────────► [Kiểm tra hợp lệ realtime]
         ├─── Nhập Email ──────────► [Kiểm tra định dạng email]
         ├─── Nhập Mật khẩu ───────► [Hiển thị thước đo độ mạnh]
         ├─── Xác nhận Mật khẩu ───► [So sánh trùng khớp]
         └─── Tích chọn Điều khoản
         │
         ▼
[Bấm: Tạo tài khoản ngay] (Luật Fitts: nút lớn 52px)
         │
     [Hợp lệ?]
    ├── Không ──► Hiển thị thông báo đỏ ngay dưới ô bị sai & Focus
    │
    └── Có ─────► Lưu dữ liệu & Chuyển hướng
                     │
                     ▼
             [Trang 2: success.html]
             - Hiển thị dấu tích xanh thành công
             - Tóm tắt thông tin Họ tên, Email vừa tạo
             - Nút "Đi tới Bảng điều khiển"
```

---

## V. Wireframe Mô Phỏng (ASCII Wireframe)

### Trang 1: Form Đăng Ký
```
+-------------------------------------------------------+
|                       [ Logo ]                        |
|                  Tạo tài khoản mới                    |
|       Khám phá hệ sinh thái và trải nghiệm tối ưu     |
|                                                       |
|   +---------------------+   +---------------------+   |
|   |  [G] Google         |   |  [f] Facebook       |   |
|   +---------------------+   +---------------------+   |
|   ----------------- HOẶC ĐIỀN BIỂU MẪU ------------   |
|                                                       |
|   Họ và tên *                                         |
|   +-----------------------------------------------+   |
|   | (icon) | Nguyễn Văn An                        |   |
|   +-----------------------------------------------+   |
|                                                       |
|   Email *                                             |
|   +-----------------------------------------------+   |
|   | (icon) | an.nguyen@example.com                |   |
|   +-----------------------------------------------+   |
|                                                       |
|   Mật khẩu *                                          |
|   +---------------------------------------+-------+   |
|   | (icon) | ••••••••••••••               | (eye) |   |
|   +---------------------------------------+-------+   |
|   [==== Thanh đo độ mạnh mật khẩu: Rất mạnh ====]     |
|                                                       |
|   Xác nhận mật khẩu *                                 |
|   +---------------------------------------+-------+   |
|   | (icon) | ••••••••••••••               | (eye) |   |
|   +---------------------------------------+-------+   |
|                                                       |
|   [v] Tôi đồng ý với Điều khoản và Chính sách         |
|                                                       |
|   +===============================================+   |
|   |          TẠO TÀI KHOẢN NGAY  -->              |   |  <-- Fitts' Law (52px)
|   +===============================================+   |
|                                                       |
|             Đã có tài khoản? Đăng nhập ngay           |
+-------------------------------------------------------+
```

### Trang 2: Xác Nhận Đăng Ký Thành Công
```
+-------------------------------------------------------+
|                                                       |
|                       (  ✓  )                         |
|                                                       |
|                Đăng ký thành công!                    |
|   Chúc mừng bạn! Chúng tôi đã gửi email kích hoạt.    |
|                                                       |
|   +-----------------------------------------------+   |
|   | Họ và tên:          Nguyễn Văn An             |   |
|   | Email đăng ký:      an.nguyen@example.com     |   |
|   | Thời gian:          Vừa xong                  |   |
|   +-----------------------------------------------+   |
|                                                       |
|   +===============================================+   |
|   |          ĐI TỚI BẢNG ĐIỀU KHIỂN  -->          |   |  <-- Primary CTA
|   +===============================================+   |
|   +-----------------------------------------------+   |
|   |          Đăng ký tài khoản khác               |   |  <-- Secondary
|   +-----------------------------------------------+   |
|                                                       |
|             Cần hỗ trợ? Trung tâm trợ giúp            |
+-------------------------------------------------------+
```

---

## VI. Hướng dẫn chạy thử và kiểm tra
1. Mở file [register.html](file:///d:/ICTU/TTCS2026/Frontend/register-uiux/register.html) bằng trình duyệt web.
2. Thử nghiệm các tính năng UI/UX:
   - Thử nhập thông tin sai định dạng để quan sát thông báo realtime.
   - Thử nhập mật khẩu để quan sát thước đo độ mạnh đổi màu động.
   - Nhấn icon con mắt để bật/tắt hiển thị mật khẩu.
   - Bấm **"Tạo tài khoản ngay"** để tự động chuyển sang trang [success.html](file:///d:/ICTU/TTCS2026/Frontend/register-uiux/success.html) kèm truyền dữ liệu tài khoản hiển thị trực quan.

# [Bài tập] Xây dựng Landing Page CodeGym Career theo phong cách Material Design

Báo cáo phân tích và triển khai trang Landing Page cho **CodeGym Career** (`https://codegym.vn/codegym-career/`) ứng dụng thư viện **Bootstrap Material Design (MDBootstrap)** và các nguyên tắc UX/UI hiện đại.

---

## I. Phân tích nội dung nguồn (codegym.vn/codegym-career)
Trang nguồn của CodeGym Career cung cấp dịch vụ hướng nghiệp, đào tạo kỹ năng phỏng vấn và cam kết việc làm cho học viên Lập trình viên. Các khối nội dung then chốt bao gồm:
1. **Header & Navigation:** Nhận diện thương hiệu CodeGym Career và điều hướng nhanh đến các khu vực.
2. **Hero Section:** Thông điệp giá trị cốt lõi (Bệ phóng sự nghiệp Lập trình viên), cam kết việc làm 100%, các chỉ số ấn tượng (600+ đối tác, 9000+ học viên).
3. **Giới thiệu & Sứ mệnh (About Us):** Mô hình Coding Bootcamp, kèm cặp 1-1, bảo hiểm nghề nghiệp.
4. **Dịch vụ trọng tâm (Career Services):** Chuẩn hóa CV/Portfolio, Phỏng vấn thử nghiệm (Mock Interview 1-1), Ngày hội việc làm (Job Fair & Matching).
5. **Lộ trình đào tạo (Process):** 4 bước từ kiểm tra tư duy, đào tạo tập trung đến nhận việc chính thức.
6. **Mạng lưới đối tác (Enterprise Partners):** FPT Software, Viettel Solutions, VNPT, CMC Global, VNPAY, Rikkeisoft,...
7. **Chứng thực từ học viên (Testimonials):** Câu chuyện thành công của các học viên chuyển ngành.
8. **Kêu gọi hành động & Form tư vấn (CTA):** Biểu mẫu đăng ký nhận tư vấn lộ trình học miễn phí.
9. **Footer:** Thông tin hệ thống cơ sở toàn quốc (Hà Nội, Đà Nẵng, TP.HCM, Huế) và mạng xã hội.

---

## II. Chiến lược chuyển đổi sang Material Design (Materialize Strategy)

| Thành phần | Triển khai Material Design | Lý do & Giá trị UX |
| :--- | :--- | :--- |
| **Hệ màu sắc (Color System)** | Blue 800 (`#1565C0`) làm màu chủ đạo kết hợp Amber/Orange 900 (`#FF6F00`) làm màu nhấn (Accent). | Tạo sự kết hợp hài hòa giữa tính chuyên nghiệp, tin cậy của ngành công nghệ và năng lượng nhiệt huyết, bứt phá sự nghiệp. |
| **Bóng đổ & Chiều sâu (Elevation & Shadows)** | Sử dụng các mức độ bóng đổ `z-depth-1` đến `z-depth-3` của MDBoostrap kết hợp transition mượt mà. | Khi người dùng di chuột vào thẻ (Card Hover), thẻ được nâng nhẹ lên (`transform: translateY(-8px)`), tạo cảm giác tương tác vật lý sống động. |
| **Hero Jumbotron** | Hiệu ứng Gradient chéo kết hợp lớp kính mờ (Glassmorphism Stat Card) và đường sóng cong SVG (Wave Shape Divider). | Tạo ấn tượng thị giác mạnh mẽ ngay từ cái nhìn đầu tiên theo mô hình quét mắt F-Pattern. |
| **Card Components** | Toàn bộ các dịch vụ và bước quy trình đều được đóng gói trong các khối thẻ bo góc $12\text{px}$ có biểu tượng tròn nhiều màu sắc. | Giúp người đọc dễ dàng quét nội dung (Scannability), giảm tải nhận thức (Cognitive Load). |
| **Call to Action (CTA)** | Nút bấm kiểu viên thuốc bo tròn (Pill Button), đổ bóng phát quang màu cam (`box-shadow`), chữ in hoa đậm nét. | Tuân thủ Luật Fitts (Fitts' Law): Kích thước lớn, dễ bấm trên điện thoại và nổi bật tuyệt đối so với nền. |

---

## III. Cấu trúc thư mục dự án

```
codegym-career-landing/
├── index.html     # Cấu trúc HTML hoàn chỉnh tích hợp MDBootstrap & Font Awesome
├── style.css      # CSS tùy biến bảng màu, typography Roboto và hiệu ứng Material
├── script.js      # Script cuộn trang mượt (Smooth Scroll) và xử lý biểu mẫu tư vấn
└── README.md      # Tài liệu thuyết minh giải pháp thiết kế
```

---

## IV. Kiểm tra tính tương thích và Responsive
- **Desktop (Màn hình lớn $\ge 1200\text{px}$):** Bố cục dạng lưới 3-4 cột rộng rãi, thanh navbar trải dài sang trọng.
- **Tablet ($768\text{px} - 1024\text{px}$):** Bố cục tự động co về 2 cột, giữ khoảng cách thoáng đãng.
- **Mobile ($\le 576\text{px}$):** Navbar chuyển thành menu thu gọn Hamburger, các thẻ chuyển thành dạng 1 cột vuốt dọc tự nhiên, nút CTA full-width tiện thao tác ngón tay cái.

---

## V. Hướng dẫn chạy thử nghiệm
Mở trực tiếp tệp [`index.html`](index.html) bằng trình duyệt web bất kỳ hoặc sử dụng Live Server trong VS Code để xem đầy đủ hiệu ứng Material Design.

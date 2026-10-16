# [Bài tập] Phối màu cho Newsletter với Bootstrap & Adobe Color

Báo cáo thực hành phối màu sắc trong thiết kế trải nghiệm người dùng (UX) và giao diện người dùng (UI) cho bản tin Newsletter.

---

## I. Mục tiêu bài tập
1. Khám phá và áp dụng các quy tắc phối màu chuyên nghiệp trên **Adobe Color** (`https://color.adobe.com/`).
2. Xây dựng khung giao diện **Newsletter Responsive** bằng framework **Bootstrap 5**.
3. Quản lý hệ thống màu linh hoạt thông qua biến CSS (**CSS Variables**), giúp thay đổi toàn bộ nhận diện thị giác chỉ bằng cách cập nhật bảng mã màu.
4. Tạo ra **2 phiên bản Newsletter** mang phong cách, tâm trạng (mood) và cảm nhận người dùng hoàn toàn khác biệt.
5. Đảm bảo độ tương phản màu sắc (Contrast Ratio) tuân thủ tiêu chuẩn khả dụng **WCAG 2.1 AA** cho trải nghiệm đọc văn bản.

---

## II. Bảng phối màu Adobe Color chi tiết

### 1. Phiên bản 1: "Trello Modern Productivity"
- **Tập tin:** [`newsletter_version1.html`](newsletter_version1.html) (và mặc định tại [`index.html`](index.html))
- **Quy tắc phối màu Adobe Color:** Tương đồng (Analogous Palette) kết hợp Accent tương phản.
- **Tâm lý học màu sắc & Cảm nhận:** Đem lại cảm giác tin cậy, chuyên nghiệp, thông suốt, tập trung cao độ – đặc trưng cho phong cách làm việc hiện đại của Trello & Atlassian.

| Thành phần giao diện | Mã màu HEX | Vai trò / Sắc thái |
| :--- | :--- | :--- |
| **Primary Color** | `#0079BF` | Xanh Trello kinh điển – Nền Header, Nút bấm CTA, Tiêu đề chính |
| **Primary Dark** | `#026AA7` | Trạng thái Hover của nút bấm CTA |
| **Secondary Color** | `#00C2E0` | Xanh Biển tươi sáng – Card tính năng Butler Automation |
| **Accent Color** | `#FFAB00` | Vàng Hổ Phách – Nhãn nổi bật (Badge), icon và điểm nhấn |
| **Neutral Light (BG)** | `#EBECF0` / `#FFFFFF` | Nền trang nhã và nền thẻ trắng tinh khiết |
| **Neutral Dark (Text)** | `#172B4D` | Chữ xanh đen đậm chuẩn tương phản cao |
| **Footer BG** | `#091E42` | Nền chân trang xanh bóng đêm uy nghiêm, vững chãi |

---

### 2. Phiên bản 2: "Sunset Creative Warmth"
- **Tập tin:** [`newsletter_version2.html`](newsletter_version2.html)
- **Quy tắc phối màu Adobe Color:** Bộ ba (Triadic Palette) / Bổ túc chia tách (Split-Complementary).
- **Tâm lý học màu sắc & Cảm nhận:** Đem lại cảm xúc nhiệt huyết, ấm áp, truyền cảm hứng và kích thích tư duy sáng tạo nghệ thuật.

| Thành phần giao diện | Mã màu HEX | Vai trò / Sắc thái |
| :--- | :--- | :--- |
| **Primary Color** | `#EA580C` | Cam Cháy hoàng hôn (Deep Amber) – Nền Header, Nút bấm CTA |
| **Primary Dark** | `#C2410C` | Trạng thái Hover của nút bấm CTA |
| **Secondary Color** | `#7C3AED` | Tím Thạch Anh (Violet) – Thẻ tính năng Gợi ý Brainstorming |
| **Accent Color** | `#0D9488` | Xanh Mòng Két (Teal) – Thẻ không gian trực quan, cân bằng độ nóng |
| **Neutral Light (BG)** | `#FDF4E7` / `#FFFFFF` | Kem Cam Nhạt êm dịu, không gây mỏi mắt |
| **Neutral Dark (Text)** | `#1C1917` | Đá cuội đen ấm (Stone Dark) sắc nét |
| **Footer BG** | `#292524` | Nền chân trang đen ấm hiện đại |

---

## III. Cấu trúc thư mục mã nguồn

```
newsletter-colors/
├── index.html                 # Bản tin mặc định (Phiên bản 1)
├── newsletter_version1.html   # Phiên bản 1: Trello Modern Blue (Adobe Color Analogous)
├── newsletter_version2.html   # Phiên bản 2: Sunset Creative (Adobe Color Triadic)
├── newsletter.css             # Kiến trúc CSS chung, định nghĩa biến CSS & Responsive
└── README.md                  # Báo cáo phân tích lý thuyết màu sắc và hướng dẫn
```

---

## IV. Đánh giá so sánh thị giác giữa 2 phiên bản

1. **Về ấn tượng thị giác (Visual Impact):**
   - **Phiên bản 1 (Trello Blue):** Giúp người đọc cảm nhận sự ổn định, an toàn, logic, phù hợp cho báo cáo tiến độ, cập nhật tính năng phần mềm kỹ thuật.
   - **Phiên bản 2 (Sunset Orange):** Thu hút ánh nhìn ngay từ giây đầu tiên, tạo cảm giác thôi thúc hành động, cực kỳ phù hợp cho các chiến dịch ra mắt sản phẩm sáng tạo, sự kiện workshop hoặc bản tin mùa thu/nắng ấm.
2. **Về khả năng đọc & Tiếp cận (Accessibility):**
   - Cả 2 bộ màu đều duy trì tỷ lệ tương phản giữa chữ và nền lớn hơn $4.5:1$ (đạt chuẩn WCAG AA), không dùng chữ xám mờ trên nền sáng gây khó chịu khi đọc email dài.

---

## V. Hướng dẫn chạy thử nghiệm
Mở trực tiếp tệp [`newsletter_version1.html`](newsletter_version1.html) hoặc [`newsletter_version2.html`](newsletter_version2.html) bằng bất kỳ trình duyệt web nào. Trên đầu mỗi trang đều có thanh công cụ chuyển đổi nhanh (`theme-switch-bar`) để bạn dễ dàng so sánh trực quan hai phiên bản.

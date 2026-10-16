# [Thực hành] Sử dụng màu sắc trong trang web

Thực hiện phối màu trang web theo nguyên lý phối màu đơn tông (Monochromatic Color Scheme).

---

## 1. Mục tiêu
- Luyện tập kỹ thuật phối màu đơn tông (Monochromatic) trên giao diện website bán hàng/album mẫu.
- Xác định tông màu chủ đạo (Primary Color) và triển khai các cấp độ màu (Tints & Shades) nhạt dần hoặc đậm dần.
- Đảm bảo độ tương phản, dễ đọc (Contrast & Readability) cho văn bản chữ và các thành phần nút bấm, nhãn nổi bật.

---

## 2. Bảng phối màu thực hành

### Giao diện chính: Tông màu Xanh Logo (#00ADEE)
Tập tin: [`index.html`](index.html) & [`style.css`](style.css)

| Cấp độ | Mã màu Hex | Vị trí áp dụng trên trang |
| :--- | :--- | :--- |
| **Bậc 1** (Màu chủ đạo) | `#00ADEE` | Nút "Add to Cart", nhãn góc `ON SALE`, badge `PREVIEW`, icon circle, đường viền menu |
| **Bậc 2** | `#00B2EF` | Điểm nhấn phụ / hiệu ứng hover |
| **Bậc 4** | `#00BFF2` | Nền thanh Banner nổi bật (`#banner`) |
| **Bậc 7** | `#8DD7F7` | Nền khối xem trước danh sách bài hát (`.preview li a`) |
| **Bậc 9** | `#C6E9FA` | Nền thanh chân trang (`footer`) |
| **Tông sáng phụ** | `#E3F4FC` | Nền khối thông tin & đăng ký nhận tin (`#info`) |
| **Chữ & Nội dung** | `#222222` / `#000000` | Toàn bộ nội dung chữ văn bản, đảm bảo độ tương phản rõ nét |

---

### Giao diện biến thể: Tông màu Xanh Emerald (#10B981)
Tập tin: [`index-green.html`](index-green.html) & [`style-green.css`](style-green.css)

| Cấp độ | Mã màu Hex | Vị trí áp dụng trên trang |
| :--- | :--- | :--- |
| **Bậc 1** (Chủ đạo) | `#10B981` | Nút bấm, badge ON SALE, PREVIEW badge, viền menu |
| **Bậc 4** | `#34D399` | Nền thanh Banner |
| **Bậc 7** | `#A7F3D0` | Nền các thẻ bài nghe thử (`preview cards`) |
| **Bậc 9** | `#D1FAE5` | Nền thanh footer |
| **Tông sáng phụ** | `#ECFDF5` | Nền khối info / newsletter |
| **Chữ** | `#222222` | Chữ màu đen/xám đậm tối ưu độ dễ đọc |

---

## 3. Các bước đã triển khai
1. **Bước 1**: Xác định màu xanh thương hiệu (`#00ADEE`) làm màu gốc bậc 1 và lập dải sắc độ đơn tông.
2. **Bước 2**: Đổi nền banner sang màu bậc 4 (`#00BFF2`), màu chữ sang màu đen để tăng độ tương phản.
3. **Bước 3**: Chuyển các khối nhãn nổi bật `ON SALE` và icon `PREVIEW` từ màu đỏ sang màu bậc 1 (`#00ADEE`).
4. **Bước 4**: Chuyển nền khối nội dung nghe thử sang màu bậc 7 (`#8DD7F7`), chữ giữ màu đen rõ nét.
5. **Bước 5**: Chuyển nền footer sang màu bậc 9 (`#C6E9FA`) tạo độ sáng hài hòa và trang nhã.
6. **Bước 6**: Giữ màu chữ toàn trang là màu tối (`#222` / `#000`).
7. **Bước 7 & 8**: Mở rộng thêm 1 bộ giao diện đơn tông Emerald Green hoàn chỉnh (`index-green.html` & `style-green.css`) có sẵn nút chuyển đổi trực tiếp trên thanh đầu trang.

---

## 4. Hướng dẫn chạy thử
Mở trực tiếp file `index.html` hoặc `index-green.html` bằng trình duyệt bất kỳ (Chrome, Edge, Firefox) hoặc chạy với Live Server trong VS Code.

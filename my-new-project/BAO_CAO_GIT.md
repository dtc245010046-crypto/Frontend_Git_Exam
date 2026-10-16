# [Báo cáo Thực hành] Tạo dự án mới trên GitHub & Ý nghĩa câu lệnh Git

Bài nộp báo cáo thực hành môn **Thực tập cơ sở (TTCS) - Frontend ICTU**.

---

## 1. Mô tả chi tiết ý nghĩa các câu lệnh Git đã sử dụng

Trong suốt quá trình khởi tạo và đồng bộ dự án giữa máy tính cá nhân (Local) và máy chủ GitHub (Remote), các câu lệnh sau đã được áp dụng:

| STT | Câu lệnh Git | Cú pháp sử dụng | Ý nghĩa & Giải thích chi tiết |
| :---: | :--- | :--- | :--- |
| **1** | `git init` | `git init` | Khởi tạo một kho lưu trữ Git cục bộ (Local Repository) hoàn toàn mới trong thư mục hiện tại. Lệnh này tạo ra một thư mục ẩn `.git` để theo dõi và quản lý lịch sử thay đổi của toàn bộ mã nguồn. |
| **2** | `git remote add` | `git remote add origin <url-repository>` | Thiết lập liên kết kết nối giữa kho lưu trữ trên máy cá nhân với kho lưu trữ từ xa (Remote Repository) trên GitHub. Trong đó, `origin` là tên định danh mặc định thường dùng cho kho từ xa chính. |
| **3** | `git remote -v` | `git remote -v` | Kiểm tra danh sách các remote URL đang được cấu hình cho việc tải về (fetch) và đẩy lên (push). |
| **4** | `git status` | `git status` | Kiểm tra trạng thái hiện tại của thư mục làm việc (Working Directory) và vùng chuẩn bị (Staging Area), cho biết tệp nào chưa được theo dõi (untracked), tệp nào đã thay đổi (modified), hoặc tệp nào đã sẵn sàng commit. |
| **5** | `git add` | `git add README.md` hoặc `git add .` | Đưa các tệp hoặc toàn bộ thay đổi từ thư mục làm việc vào vùng chuẩn bị (**Staging Area** / Index) để chuẩn bị cho lượt commit tiếp theo. |
| **6** | `git commit` | `git commit -m "Thông điệp mô tả"` | Lưu lại ảnh chụp nhanh (snapshot) của các thay đổi đang nằm trong Staging Area vào lịch sử của Git. Cờ `-m` dùng để đính kèm thông điệp giải thích ngắn gọn, rõ ràng về nội dung thay đổi giúp việc quản lý và làm việc nhóm thuận tiện. |
| **7** | `git checkout -b` | `git checkout -b exercise/create-new-github-project` | Tạo một nhánh mới và tự động chuyển con trỏ làm việc sang nhánh đó để phát triển tính năng hoặc làm bài tập độc lập mà không ảnh hưởng nhánh chính. |
| **8** | `git push` | `git push origin <tên-nhánh>` | Đẩy toàn bộ các commit mới từ nhánh cục bộ trên máy tính lên Remote Repository trên GitHub. Ví dụ: `git push origin main` hoặc `git push origin exercise/create-new-github-project`. |
| **9** | `git pull` | `git pull origin main` | Kéo và cập nhật mã nguồn mới nhất từ Remote Repository về kho cục bộ trên máy tính để tránh xung đột dữ liệu. |

---

## 2. Quy trình các bước thực hiện trong bài tập

1. **Bước 1 & 2:** Truy cập GitHub và khởi tạo Repository mới `Frontend_ICTU_TTCS`.
2. **Bước 3:** Lấy URL liên kết kho từ xa: `https://github.com/tamtran2k6zz/Frontend_ICTU_TTCS.git`.
3. **Bước 4 & 5:** Tạo thư mục cục bộ `my-new-project` trên máy tính và khởi tạo Git bằng lệnh `git init`.
4. **Bước 6:** Kết nối kho cục bộ với GitHub bằng lệnh `git remote add origin https://github.com/tamtran2k6zz/Frontend_ICTU_TTCS.git`.
5. **Bước 7:** Tạo tệp `README.md` mô tả mục tiêu và nội dung dự án.
6. **Bước 8:** Đưa tệp vào Staging Area bằng lệnh `git add README.md`.
7. **Bước 9:** Lưu thay đổi vào lịch sử bằng lệnh `git commit -m "Add README.md file"`.
8. **Bước 10:** Đẩy mã nguồn lên GitHub bằng lệnh `git push origin <branch>`.
9. **Bước 11:** Tiếp tục lặp lại chu trình để thêm tệp `index.html` và hoàn thiện dự án.

---

## 3. Link nộp bài

- **Repository GitHub:** [https://github.com/tamtran2k6zz/Frontend_ICTU_TTCS](https://github.com/tamtran2k6zz/Frontend_ICTU_TTCS)
- **Nhánh bài tập:** [https://github.com/tamtran2k6zz/Frontend_ICTU_TTCS/tree/exercise/create-new-github-project](https://github.com/tamtran2k6zz/Frontend_ICTU_TTCS/tree/exercise/create-new-github-project)
- **Thư mục bài tập my-new-project:** [https://github.com/tamtran2k6zz/Frontend_ICTU_TTCS/tree/exercise/create-new-github-project/my-new-project](https://github.com/tamtran2k6zz/Frontend_ICTU_TTCS/tree/exercise/create-new-github-project/my-new-project)

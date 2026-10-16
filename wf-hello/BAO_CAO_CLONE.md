# [Báo cáo Thực hành] Clone dự án từ GitHub

Bài thực hành môn **Thực tập cơ sở (TTCS) - Frontend ICTU**.

---

## 1. Cú pháp và ý nghĩa của câu lệnh `git clone`

### Cú pháp:
```bash
git clone <url-repository> [tên_thư_mục_tùy_chọn]
```

### Ví dụ thực tế trong bài:
```bash
git clone https://github.com/codegym-vn/wf-hello.git
```

### Ý nghĩa chi tiết:
- **`git clone`** là câu lệnh dùng để sao chép (nhân bản) toàn bộ một kho lưu trữ từ xa (**Remote Repository**) trên máy chủ (như GitHub, GitLab, Bitbucket) về máy tính cá nhân (**Local Repository**).
- Khác với việc tải file ZIP thông thường:
  1. `git clone` tải về toàn bộ mã nguồn, cấu trúc thư mục và toàn bộ **lịch sử commit (commit history)** của dự án.
  2. Tự động khởi tạo thư mục `.git` cục bộ.
  3. Tự động thiết lập liên kết `remote origin` trỏ về địa chỉ URL nguồn.
  4. Tự động `checkout` một nhánh làm việc ban đầu (thường là `main` hoặc `master`).

---

## 2. Kết quả thực hiện trên Terminal

Khi chạy câu lệnh trong Terminal:
```powershell
PS D:\ICTU\TTCS2026\Frontend> git clone https://github.com/codegym-vn/wf-hello.git
Cloning into 'wf-hello'...
remote: Enumerating objects: 6, done.
remote: Counting objects: 100% (6/6), done.
remote: Compressing objects: 100% (4/4), done.
remote: Total 6 (delta 0), reused 6 (delta 0), pack-reused 0
Receiving objects: 100% (6/6), done.
```

Kiểm tra danh sách các file nhận được trong thư mục `wf-hello`:
- `README.md`: Tập tin tài liệu giới thiệu của repository `wf-hello`.
- `hello.txt`: Tập tin chứa nội dung:
  > *"Hello the world.*
  > *This file was fetched from a Git repository."*

---

## 3. Quy trình thực hiện tổng quát
1. Lấy đường dẫn repository từ GitHub: `https://github.com/codegym-vn/wf-hello.git`.
2. Mở Terminal tại thư mục làm việc mong muốn.
3. Chạy lệnh `git clone <url>`.
4. Truy cập vào thư mục vừa clone và kiểm tra các file bằng lệnh `dir` hoặc `Get-ChildItem`.

---

## 4. Link nộp bài

- **Repository GitHub:** [https://github.com/tamtran2k6zz/Frontend_ICTU_TTCS](https://github.com/tamtran2k6zz/Frontend_ICTU_TTCS)
- **Nhánh bài tập:** [https://github.com/tamtran2k6zz/Frontend_ICTU_TTCS/tree/exercise/clone-project-from-git](https://github.com/tamtran2k6zz/Frontend_ICTU_TTCS/tree/exercise/clone-project-from-git)
- **Thư mục dự án đã clone:** [https://github.com/tamtran2k6zz/Frontend_ICTU_TTCS/tree/exercise/clone-project-from-git/wf-hello](https://github.com/tamtran2k6zz/Frontend_ICTU_TTCS/tree/exercise/clone-project-from-git/wf-hello)

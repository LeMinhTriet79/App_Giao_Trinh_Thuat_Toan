# BÍ KÍP THUẬT TOÁN CHO SINH VIÊN JAVA / .NET - DESKTOP EDITION v2.0

Ứng dụng Desktop tự học Thuật toán & Cấu trúc dữ liệu hoàn chỉnh (25 bài Cơ bản + 60 bài LeetCode song ngữ Java 17+ & C# .NET 8) theo phong cách hoài niệm **Microsoft HTML Help Viewer (.CHM) 2005**.

## 🌟 CÁC NÂNG CẤP & SỬA LỖI TOÀN DIỆN TRONG PHIÊN BẢN 2.0

1. **Sửa triệt để lỗi cuộn mất thanh tiêu đề / thanh công cụ ("Hư màn hình"):**
   - Khóa khung ứng dụng `.chm-window` cố định và tính toán tọa độ cuộn nội bộ trong `#rightPane`, đảm bảo khi bấm vào bất kỳ chương hay bài tập nào ở cây mục lục bên trái, thanh tiêu đề và thanh công cụ phía trên luôn giữ nguyên vị trí.
2. **Phòng Thí Nghiệm Chạy Tay (Trace Lab) với 2 ô chọn (Chọn Chương -> Chọn Bài) đủ 100% 85 bài tập:**
   - **Ô xổ xuống 1 (Chọn Chương):** Chọn từ Chương 0 đến Chương 9.
   - **Ô xổ xuống 2 (Chọn Bài trong Chương):** Liệt kê đầy đủ toàn bộ 25 bài Cơ bản và 60 bài LeetCode của từng chương (không thiếu bất kỳ bài nào).
   - Mỗi bài đều có nút **`[▶ Chạy tay bài này trong Trace Lab]`** ngay trên thẻ bài tập để chuyển sang chế độ chạy từng bước tức thì.
3. **Hiển thị 100% công thức toán học LaTeX & Định dạng Markdown:**
   - Mọi ký hiệu Big O như $O(1)$, $O(\log n)$, $O(n)$, $O(n \log n)$, $O(n^2)$, $O(2^n)$, phân số $rac{n(n+1)}{2}$, số mũ $10^5$, $2^{31}-1$ trong cả văn bản lẫn bảng biểu đều được biên dịch thành thẻ toán học `.tex-math` sắc nét (hoạt động 100% Offline).
   - Toàn bộ hơn 2.000 cụm mã inline `` `code` `` và chữ đậm `**bold**` đã được chuyển thành thẻ `<code>` và `<strong>` chuẩn xác.
4. **Thanh chỉnh cỡ chữ lớn nhỏ (`A-`, thanh kéo `11px` - `22px`, `A+`):**
   - Tích hợp ngay trên thanh công cụ, cho phép phóng to / thu nhỏ toàn bộ phông chữ bài đọc, bảng biểu, khung code và sơ đồ ASCII, tự động lưu lại kích thước yêu thích.
5. **Bổ sung Lý thuyết chuyên sâu, Gợi ý 3 cấp độ & Hướng dẫn từng bước viết code:**
   - Bổ sung lý thuyết giải phẫu bộ nhớ Stack/Heap, CPU Cache Locality, Red-Black Tree trong HashMap vs mảng phẳng trong Dictionary .NET, bảng phân loại các mẫu Two Pointers, Sliding Window, Monotonic Stack, Binary Search, Linked List, DFS/BFS, Heap và Quy hoạch động.
   - Mỗi bài tập đều có **Hộp Gợi ý mở dần 3 cấp độ** và **Hướng dẫn từng bước triển khai code** trước khi xem lời giải.

## 🚀 HƯỚNG DẪN CHẠY & ĐÓNG GÓI RA TỆP .EXE

### Cách 1: Chạy ngay lập tức trên Windows (0 giây)
Nhấp đúp chuột vào tệp **`Chay_App_Windows.bat`** (hoặc mở trực tiếp `index.html`).

### Cách 2: Chạy và Xuất tệp `.exe` bằng Electron
```bash
npm install
npm start
npm run dist:win
```

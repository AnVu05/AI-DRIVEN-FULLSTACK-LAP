# 📊 Nhật Ký & Tiến Độ Học Tập (Learning Progress Tracker)

Tài liệu này lưu lại trạng thái thực tế của quá trình học. Khi mở phiên làm việc mới hoặc khi muốn đồng bộ lại ngữ cảnh, Mentor sẽ đọc file này để biết chính xác bạn đang ở đâu.

---

## 📍 Trạng Thái Hiện Tại
- **Module hiện tại:** `Module 0: Trang bị nền tảng bất đồng bộ & useEffect`
- **Thử thách kế tiếp:** Tìm hiểu `Promise`, `async/await` và lý do vì sao `fetch()` không thể chạy trực tiếp trong thân Component.
- **Trạng thái kết nối Backend:** Chưa khởi tạo (dự kiến theo 6 Business Rules trong [backend/README.md](file:///d:/Learn/Knowledge/Full-Stack/backend/README.md)).

---

## 📋 Danh Sách Các Chặng (Milestones Checklist)

### [ ] MODULE 0: Nền Tảng Lý Thuyết Cốt Lõi
- [ ] 0.1. Hiểu cơ chế bất đồng bộ trong JS: `Promise`, `async/await` (Non-blocking I/O).
- [ ] 0.2. Hiểu vòng đời Component React & vai trò của `useEffect` (Mounting phase).
- [ ] 0.3. Phân biệt được sự khác nhau giữa `useState` (lưu trữ) và `useEffect` (tác vụ phụ).

### [ ] MODULE 1: Xây Dựng Backend Spring Boot (6 BRs)
- [ ] 1.1. Khởi tạo Entity, DTO, Repository, Service.
- [ ] 1.2. Cài đặt các Business Rules:
  - [ ] BR-01: Validation tiêu đề (3-100 ký tự).
  - [ ] BR-02: Chặn tạo trùng công việc chưa hoàn thành.
  - [ ] BR-03: Gán mức ưu tiên mặc định (`MEDIUM`).
  - [ ] BR-04: Tự động lưu `completedAt` khi toggle.
  - [ ] BR-05: Global Exception Handler ném lỗi chuẩn 400 & 404.
  - [ ] BR-06: Cấu hình `@CrossOrigin(origins = "http://localhost:5173")`.
- [ ] 1.3. Kiểm thử API qua Postman / cURL thành công.

### [ ] MODULE 2: Frontend Level 1 - Tự Tay Gọi API Bằng `fetch()`
- [ ] 2.1. Dựng khung giao diện TodoList (Mentor cung cấp UI & State ban đầu).
- [ ] 2.2. **Học viên tự code GET:** Gọi API lấy danh sách, xử lý đủ 3 trạng thái (`todos`, `isLoading`, `errorMessage`).
- [ ] 2.3. **Học viên tự code POST:** Gửi JSON body, xử lý hiển thị lỗi khi vi phạm validation (400 Bad Request).
- [ ] 2.4. **Học viên tự code PUT:** Toggle trạng thái hoàn thành và cập nhật mảng state bằng `.map()`.
- [ ] 2.5. **Học viên tự code DELETE:** Xóa công việc và cập nhật mảng state bằng `.filter()`.

### [ ] MODULE 3: Frontend Level 2 - Nâng Cấp Lên `Axios` & Kiến Trúc Service
- [ ] 3.1. Cài đặt thư viện `axios` và tạo `axiosClient.js`.
- [ ] 3.2. Refactor tách tầng `services/todoService.js` (tương đương tầng Service bên Spring Boot).
- [ ] 3.3. Tích hợp Interceptors bắt lỗi tập trung.

---

## 📝 Ghi Chú & Câu Hỏi Của Học Viên (Student Notes)
*(Bạn có thể tự ghi chú lại những thắc mắc hoặc bài học tâm đắc vào đây)*
- *Ví dụ: "Hôm nay đã hiểu tại sao response.json() phải có await..."*

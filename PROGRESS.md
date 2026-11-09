# 📊 Nhật Ký & Tiến Độ Học Tập (Learning Progress Tracker)

Tài liệu này lưu lại trạng thái thực tế của quá trình học. Khi mở phiên làm việc mới hoặc khi muốn đồng bộ lại ngữ cảnh, Mentor sẽ đọc file này để biết chính xác bạn đang ở đâu.

---

## 📍 Trạng Thái Hiện Tại
- **Module hiện tại:** `Hoàn thành toàn bộ khóa học (Module 0 -> Module 3)`
- **Thử thách kế tiếp:** Tổng kết & Ôn tập kiến thức Full-Stack (hoặc mở rộng tính năng nâng cao nếu muốn).
- **Trạng thái kết nối Backend:** Hoạt động ổn định trên SQL Server.

---

## 📋 Danh Sách Các Chặng (Milestones Checklist)

### [x] MODULE 0: Nền Tảng Lý Thuyết Cốt Lõi
- [x] 0.1. Hiểu cơ chế bất đồng bộ trong JS: `Promise`, `async/await` (Non-blocking I/O).
- [x] 0.2. Hiểu vòng đời Component React & vai trò của `useEffect` (Mounting phase).
- [x] 0.3. Phân biệt được sự khác nhau giữa `useState` (lưu trữ) và `useEffect` (tác vụ phụ).

### [x] MODULE 1: Xây Dựng Backend Spring Boot (6 BRs)
- [x] 1.1. Khởi tạo Entity, DTO, Repository, Service.
- [x] 1.2. Cài đặt các Business Rules:
  - [x] BR-01: Validation tiêu đề (3-100 ký tự).
  - [x] BR-02: Chặn tạo trùng công việc chưa hoàn thành.
  - [x] BR-03: Gán mức ưu tiên mặc định (`MEDIUM`).
  - [x] BR-04: Tự động lưu `completedAt` khi toggle.
  - [x] BR-05: Global Exception Handler ném lỗi chuẩn 400 & 404.
  - [x] BR-06: Cấu hình `@CrossOrigin(origins = "http://localhost:5173")`.
- [x] 1.3. Kiểm thử API qua Postman / cURL thành công.

### [x] MODULE 2: Frontend Level 1 - Tự Tay Gọi API Bằng `fetch()`
- [x] 2.1. Dựng khung giao diện TodoList (Mentor cung cấp UI & State ban đầu).
- [x] 2.2. **Học viên tự code GET:** Gọi API lấy danh sách, xử lý đủ 3 trạng thái (`todos`, `isLoading`, `errorMessage`).
- [x] 2.3. **Học viên tự code POST:** Gửi JSON body, xử lý hiển thị lỗi khi vi phạm validation (400 Bad Request).
- [x] 2.4. **Học viên tự code PUT:** Toggle trạng thái hoàn thành và cập nhật mảng state bằng `.map()`.
- [x] 2.5. **Học viên tự code DELETE:** Xóa công việc và cập nhật mảng state bằng `.filter()`.

### [x] MODULE 3: Frontend Level 2 - Nâng Cấp Lên `Axios` & Kiến Trúc Service
- [x] 3.1. Cài đặt thư viện `axios` và tạo `axiosClient.js`.
- [x] 3.2. Refactor tách tầng `services/todoService.js` (tương đương tầng Service bên Spring Boot).
- [x] 3.3. Tích hợp Interceptors bắt lỗi tập trung.

---

## 📝 Ghi Chú & Câu Hỏi Của Học Viên (Student Notes)
*(Bạn có thể tự ghi chú lại những thắc mắc hoặc bài học tâm đắc vào đây)*
- *Đã hoàn thành Module 0: Hiểu cơ chế Non-blocking I/O, Promise, async/await và Dependency array `[]` của `useEffect`.*
- *Kinh nghiệm Module 1: Khi dùng SQL Server với Hibernate, bắt buộc dùng `@Nationalized` hoặc cấu hình `hibernate.use_nationalized_character_data=true` để ánh xạ sang `NVARCHAR`, tránh lỗi font dấu tiếng Việt.*
- *Kinh nghiệm Module 2:*
  - *Arrow Function: Dùng `{}` thì bắt buộc phải có từ khóa `return`, nếu không sẽ trả về `undefined`. Muốn tự động return thì bỏ cặp ngoặc `{}`.*
  - *Tính bất biến (Immutability): Dùng `.map()` để update Todo (trả về object mới nếu khớp id), dùng `.filter()` để xóa Todo (chỉ cần điều kiện boolean `todo.id !== id`).*
  - *Bộ ba trạng thái bất đồng bộ: Luôn quản lý `data`, `isLoading` và `errorMessage`.*
- *Kinh nghiệm Module 3:*
  - *Tách tầng Service: Tách riêng `axiosClient.js` (cấu hình HTTP instance tương tự RestTemplate/WebClient Bean) và `todoService.js` (tương tự `@Service` trong Spring Boot), giúp Component `App.jsx` sạch sẽ, không còn URL hardcode hay `res.json()`.*
  - *Cơ chế Axios Error: Khi status là 400/404/500, Axios tự động ném lỗi vào khối `catch (error)`. Object lỗi có `error.response.data` map với `ErrorResponseDTO` của Spring Boot (truy xuất qua `error.response?.data?.message`).*
  - *Cạm bẫy HTTP 204 No Content: Khi xóa (DELETE), server trả về 204 không có body, biến `res` không chứa `.id` -> bắt buộc lọc bằng tham số `id` (`todo.id !== id`).*
  - *Axios Interceptors: Dùng `axiosClient.interceptors.response.use()` để bóc sẵn `response.data` tại một nơi duy nhất. Khi đó các hàm ở `todoService.js` nhận trực tiếp dữ liệu JSON (nếu gọi thêm `.data` một lần nữa sẽ bị `undefined`).*

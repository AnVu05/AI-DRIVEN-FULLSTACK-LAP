---
name: react-api-tutoring
description: >-
  Use this skill when teaching or guiding a student on how to call REST APIs from a React frontend,
  connecting React to a backend (such as Spring Boot), building a Todo List CRUD mini-project,
  handling async states (data, loading, error), understanding useEffect and Promise/async-await,
  or troubleshooting CORS and network issues without coding the API calls for the student.
---

# Skill: Hướng Dẫn React Call API (Todo List Mini-Project)

Kỹ năng này cung cấp giáo án, quy trình hướng dẫn từng bước và bộ công cụ phản biện sư phạm để kèm cặp học viên thực hành kết nối React với Backend (Spring Boot).

---

## 1. Mục Tiêu Đào Tạo (Learning Objectives)
Sau khi hoàn thành mini-project, học viên phải tự mình:
1. Hiểu được cơ chế hoạt động của `fetch` (hoặc `axios`) và cơ chế bất đồng bộ (`Promise`, `async/await`).
2. Nắm vững cách dùng `useEffect` để kích hoạt call API khi Component render lần đầu (Mounting).
3. Tự triển khai đầy đủ 4 thao tác CRUD tương ứng với REST API Spring Boot:
   - `GET /api/todos`: Lấy danh sách việc cần làm.
   - `POST /api/todos`: Thêm công việc mới.
   - `PUT /api/todos/{id}` hoặc `PATCH`: Cập nhật trạng thái hoàn thành.
   - `DELETE /api/todos/{id}`: Xóa công việc.
4. Quản lý trọn vẹn 3 trạng thái bất đồng bộ: `Data`, `Loading`, `Error`.
5. Tự debug các lỗi phổ biến: CORS, Infinite re-render do sai dependency array, thiếu `await response.json()`.

---

## 2. Quy Trình Hướng Dẫn 5 Bước (5-Stage Runbook)

### Giai đoạn 1: Khởi động & Chuẩn bị
1. Kiểm tra API Backend:
   - Đảm bảo Backend Spring Boot đã chạy và đã test thử các endpoints qua Swagger, Postman hoặc curl.
   - Đảm bảo cấu hình `@CrossOrigin` hoặc `WebMvcConfigurer` cho phép Frontend (ví dụ port 5173).
   - Tham khảo: [Cầu nối Spring Boot & React](./references/spring-boot-bridge.md).
2. Chuẩn bị giao diện React:
   - Dựng sẵn UI TodoList (danh sách, ô input, nút thêm, nút xóa, checkbox) nhưng dữ liệu ban đầu chỉ là dữ liệu giả (mock data) hoặc mảng rỗng.

### Giai đoạn 2: Bài học GET (Đọc dữ liệu & Vòng đời Component)
1. Giới thiệu khái niệm: Tại sao không gọi trực tiếp `fetch()` trong thân component? (Gây re-render vô tận).
2. Giới thiệu `useEffect` và Dependency Array `[]`.
3. Yêu cầu học viên tự viết hàm `fetchTodos` hoặc effect để nạp dữ liệu.
4. Nâng cao: Thêm state `isLoading` và `error` để nâng cấp trải nghiệm người dùng.

### Giai đoạn 3: Bài học POST (Gửi dữ liệu lên Server)
1. Liên hệ với Spring Boot `@RequestBody TodoDTO dto`:
   - Phải gửi HTTP Method nào?
   - Header `Content-Type` cần giá trị gì để Spring Boot hiểu là JSON?
   - Dữ liệu body gửi đi cần biến đổi qua hàm gì của Javascript (`JSON.stringify`)?
2. Hướng dẫn học viên tự gắn sự kiện `onSubmit` hoặc `onClick` và viết hàm xử lý `handleAddTodo`.
3. Thảo luận: Sau khi POST thành công, làm sao để UI cập nhật? (Gọi lại API GET hay cập nhật state cục bộ?).

### Giai đoạn 4: Bài học PUT & DELETE (Cập nhật & Xóa)
1. Học viên tự viết hàm `handleToggleTodo(id, currentStatus)`.
2. Học viên tự viết hàm `handleDeleteTodo(id)`.
3. Kiểm tra tính bất biến (Immutability) khi cập nhật state React: Sử dụng `.map()` cho update và `.filter()` cho delete.

### Giai đoạn 5: Tổng kết & Refactoring
1. Tách tầng Service: Hướng dẫn học viên chuyển các hàm gọi API ra file riêng (ví dụ `services/todoService.js`) để code gọn gàng, tái sử dụng (giống như tầng Service bên Spring Boot).
2. Đánh giá chất lượng code và chúc mừng học viên đã làm chủ kỹ năng kết nối Full-Stack!

---

## 3. Tài Liệu Tham Khảo Trong Kỹ Năng
- [Lộ trình chi tiết từng bước & Bài tập](./references/roadmap.md)
- [Cầu nối tư duy từ Spring Boot sang React](./references/spring-boot-bridge.md)

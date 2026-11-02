# Yêu Cầu Nghiệp Vụ (Business Requirements - BR) Cho Backend Spring Boot

Tài liệu này đóng vai trò là bản đặc tả kỹ thuật (Specification) để bạn tự tay hoặc cùng Mentor xây dựng tầng Backend cho Todo App.

---

## 🎯 1. Miền Dữ Liệu (Domain Model)

Một công việc (`Todo`) gồm các trường thông tin:
- `id` (Long, Primary Key, Auto-increment)
- `title` (String, Bắt buộc, 3 - 100 ký tự)
- `description` (String, Tùy chọn, tối đa 255 ký tự)
- `priority` (Enum: `LOW`, `MEDIUM`, `HIGH` - Mặc định: `MEDIUM`)
- `completed` (Boolean, Mặc định: `false`)
- `createdAt` (LocalDateTime, Tự động gán thời điểm tạo)
- `completedAt` (LocalDateTime, Gán thời điểm hoàn thành khi `completed = true`, set `null` khi bỏ tick)

---

## 📋 2. Các Quy Tắc Nghiệp Vụ Cụ Thể (Business Rules)

### BR-01: Kiểm Tra Tính Hợp Lệ Dữ Liệu Đầu Vào (Input Validation)
- `title` không được để trống (không null, không rỗng, không toàn khoảng trắng).
- Độ dài `title` phải từ 3 đến 100 ký tự.
- Nếu vi phạm: Trả về HTTP `400 Bad Request` kèm chi tiết lỗi (chuẩn bị sẵn để Frontend React hiển thị thông báo lỗi).

### BR-02: Chống Trùng Lặp Công Việc Đang Hoạt Động (No Duplicate Active Tasks)
- Hệ thống không cho phép tạo 2 công việc có `title` giống hệt nhau (không phân biệt hoa thường) nếu công việc cũ **chưa hoàn thành** (`completed = false`).
- *Lý do nghiệp vụ:* Giúp người dùng không vô tình thêm lặp lại một việc chưa làm.
- Nếu vi phạm: Trả về HTTP `400 Bad Request` hoặc `409 Conflict` với thông báo: `"Công việc này đã tồn tại và chưa hoàn thành!"`.

### BR-03: Mức Độ Ưu Tiên Mặc Định (Default Priority)
- Khi Client gửi request tạo mới mà không truyền `priority`, Backend tự động gán là `MEDIUM`.

### BR-04: Xử Lý Toggle Hoàn Thành (Toggle State Lifecycle)
- Khi chuyển `completed` từ `false` -> `true`: Tự động cập nhật `completedAt = LocalDateTime.now()`.
- Khi chuyển `completed` từ `true` -> `false`: Reset `completedAt = null`.

### BR-05: Xử Lý Khi Không Tìm Thấy Bản Ghi (Resource Not Found)
- Khi thực hiện Update hoặc Delete với một `id` không tồn tại trong Database:
  - Ném `ResourceNotFoundException`.
  - Trả về HTTP `404 Not Found` kèm cấu trúc JSON lỗi rõ ràng.

### BR-06: Cấu Hình Chia Sẻ Tài Nguyên (CORS Configuration)
- Cho phép Origin của Frontend React (`http://localhost:5173`) gửi các method: `GET`, `POST`, `PUT`, `PATCH`, `DELETE`, `OPTIONS`.

---

## 🔌 3. Danh Sách RESTful API Contracts

| Method | Endpoint | Request Body | Response (Success) | Response (Error) | Mô tả |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GET** | `/api/todos` | *Không* | `200 OK` + `List<TodoResponseDTO>` | - | Lấy danh sách toàn bộ todo |
| **POST** | `/api/todos` | `CreateTodoRequestDTO` | `201 Created` + `TodoResponseDTO` | `400 Bad Request` | Tạo todo mới theo BR-01, BR-02, BR-03 |
| **PUT** | `/api/todos/{id}/toggle`| *Không* | `200 OK` + `TodoResponseDTO` | `404 Not Found` | Đảo trạng thái hoàn thành theo BR-04 |
| **DELETE** | `/api/todos/{id}` | *Không* | `204 No Content` | `404 Not Found` | Xóa công việc theo BR-05 |

### Cấu Trúc Báo Lỗi Chuẩn (Standard Error Response):
```json
{
  "timestamp": "2026-11-02T12:30:00",
  "status": 400,
  "error": "Bad Request",
  "message": "Tiêu đề công việc phải có độ dài từ 3 đến 100 ký tự",
  "path": "/api/todos"
}
```
*Cấu trúc này giúp Frontend React dễ dàng bóc tách trường `message` để cảnh báo người dùng!*

# 🚀 Full-Stack API Integration Lab: React (`fetch` & `Axios`) + Spring Boot

> **Dự án thực hành chuyên sâu về kỹ thuật gọi RESTful API trong React (từ `fetch()` thuần đến kiến trúc `Axios` Service Layer & Interceptors) kết nối với Backend Spring Boot 3.**

[![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.x-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)](https://spring.io/projects/spring-boot)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Axios](https://img.shields.io/badge/Axios-HTTP_Client-5A29E4?style=for-the-badge&logo=axios&logoColor=white)](https://axios-http.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 🎯 Mục Tiêu Học Tập (Learning Objectives)

Repository này tập trung **100% vào kỹ năng giao tiếp Client - Server (Call API)** trong ứng dụng Full-Stack thông qua bài toán **Todo List CRUD**:

1. **Làm chủ cơ chế bất đồng bộ (Asynchronous JS):**
   - Hiểu sâu bản chất Non-blocking I/O, `Promise`, và cú pháp `async/await`.
   - Phối hợp nhịp nhàng giữa `useEffect` (Mounting lifecycle) và `useState` mà không bị dính bẫy *Infinite Re-render Loop*.
   - Quản lý trọn vẹn **Bộ 3 trạng thái bất đồng bộ (Triad of Async State):** `data` (dữ liệu), `isLoading` (đang tải), và `errorMessage` (thông báo lỗi).

2. **Từ `fetch()` thuần (Level 1) lên `Axios` & Kiến trúc Service (Level 2):**
   - **Cấp độ 1 - Native `fetch()`:** Hiểu rõ cơ chế HTTP Request/Response nguyên bản, tự cấu hình `method`, `headers`, `JSON.stringify()`, kiểm tra `response.ok` và giải mã luồng `await response.json()`.
   - **Cấp độ 2 - `Axios` & Service Layer:** Thiết lập `axiosClient` dùng chung (`baseURL`, `headers`, `timeout`), tách biệt tầng giao tiếp mạng ra khỏi UI Component (`todoService.js`), và sử dụng **Response Interceptors** để bóc tách dữ liệu tập trung.

---

## 🏛️ Kiến Trúc Kết Nối API (API Integration Architecture)

```
┌───────────────────────────────────────────────────────────────────────────────┐
│                          REACT 18 FRONTEND (Port 5173)                        │
│                                                                               │
│  ┌─────────────────────┐      ┌──────────────────────┐     ┌───────────────┐  │
│  │   UI Component      │      │   Service Layer      │     │  Axios Client │  │
│  │     (App.jsx)       ├─────►│  (todoService.js)    ├────►│(axiosClient.js│  │
│  │ - State: Data/Load  │      │ - getAll()           │     │ - baseURL     │  │
│  │ - Event Handlers    │◄─────┤ - create(todoData)   │◄────┤ - Interceptors│  │
│  └─────────────────────┘      │ - toggle(id)         │     └───────┬───────┘  │
│                               │ - delete(id)         │             │          │
└───────────────────────────────┴──────────────────────┴─────────────┼──────────┘
                                                                     │
                                                           HTTP / JSON (CORS)
                                                                     │
┌────────────────────────────────────────────────────────────────────▼──────────┐
│                       SPRING BOOT 3 BACKEND (Port 8080)                       │
│                                                                               │
│  [ @RestController ] ──► [ @Service (6 BRs) ] ──► [ @Repository ] ──► SQL DB  │
└───────────────────────────────────────────────────────────────────────────────┘
```

---

## 🛠️ Tech Stack & Công Nghệ Sử Dụng

| Tầng | Công Nghệ / Thư Viện | Mục Tiêu Thực Hành |
| :--- | :--- | :--- |
| **Frontend** | React 18, Vite, JavaScript (ES6+) | Quản lý State (`useState`), Lifecycle (`useEffect`), cập nhật mảng bất biến (`.map()`, `.filter()`). |
| **HTTP Client** | Native `fetch()` & `Axios` | Thực hành gọi 4 thao tác CRUD (`GET`, `POST`, `PUT`, `DELETE`), cấu hình `axiosClient` và `Interceptors`. |
| **Backend** | Spring Boot 3.x, Spring Data JPA | Cung cấp RESTful Endpoints, kiểm tra Validation (`400 Bad Request`), Global Exception Handler & CORS. |
| **Database** | Microsoft SQL Server (NVARCHAR) | Lưu trữ dữ liệu thực tế, hỗ trợ chuẩn tiếng Việt có dấu (`@Nationalized`). |

---

## 🏆 Nội Dung Đã Thực Hành & Hoàn Thành

### ✅ MODULE 0: Nền Tảng Lý Thuyết Cốt Lõi
- Hiểu cơ chế bất đồng bộ trong JS: `Promise`, `async/await` (Non-blocking I/O).
- Hiểu vòng đời Component React & vai trò của `useEffect` với Dependency Array `[]`.
- Quản lý bộ 3 trạng thái bất đồng bộ: `todos`, `isLoading`, `errorMessage`.

### ✅ MODULE 1: Chuẩn Bị Backend Spring Boot (6 Business Rules)
- Xây dựng RESTful API tại `/api/todos` với đầy đủ các ràng buộc thực tế:
  - `BR-01`: Validate tiêu đề từ 3 - 100 ký tự (`400 Bad Request`).
  - `BR-02`: Chặn tạo trùng công việc chưa hoàn thành (`400 Bad Request`).
  - `BR-03`: Tự động gán mức ưu tiên mặc định (`MEDIUM`).
  - `BR-04`: Tự động cập nhật thời gian `completedAt` khi đảo trạng thái.
  - `BR-05`: Xử lý lỗi `404 Not Found` tập trung qua `@RestControllerAdvice`.
  - `BR-06`: Mở cổng kết nối cho React qua `@CrossOrigin(origins = "http://localhost:5173")`.

### ✅ MODULE 2: Frontend Level 1 — Tự Tay Gọi API Bằng `fetch()` Thuần
- **`GET /api/todos`:** Gọi API lấy danh sách khi vừa vào trang, bật/tắt `LoadingSpinner` và bắt lỗi mất kết nối mạng.
- **`POST /api/todos`:** Đóng gói payload bằng `JSON.stringify()`, cấu hình header `Content-Type: application/json`, bóc tách mã lỗi `400` từ Backend để hiển thị thông báo lỗi trực tiếp trên Form.
- **`PUT /api/todos/{id}/toggle`:** Gọi API đảo trạng thái hoàn thành và dùng `.map()` để cập nhật lại phần tử trong mảng State.
- **`DELETE /api/todos/{id}`:** Gọi API xóa công việc (xử lý phản hồi `204 No Content`) và dùng `.filter()` để loại bỏ phần tử khỏi giao diện.

### ✅ MODULE 3: Frontend Level 2 — Nâng Cấp Lên `Axios` & Kiến Trúc Service
- **Cấu hình [`axiosClient.js`](./frontend/src/api/axiosClient.js):**
  - Thiết lập `baseURL: 'http://localhost:8080/api'`, `headers`, và `timeout`.
  - Tích hợp **Response Interceptor** (`axiosClient.interceptors.response.use`) để tự động bóc tách `response.data` trước khi trả về cho tầng Service.
- **Xây dựng tầng [`todoService.js`](./frontend/src/services/todoService.js):**
  - Đóng gói 4 phương thức `getAll()`, `create()`, `toggle()`, `delete()` (tương đương tầng `@Service` bên Spring Boot).
- **Tối ưu hóa [`App.jsx`](./frontend/src/App.jsx):**
  - Loại bỏ hoàn toàn URL cứng và các bước parse JSON thủ công khỏi Component, bắt lỗi trực tiếp qua `error.response.data.message`.

---

## 📂 Cấu Trúc Dự Án (Repository Structure)

```
.
├── backend/                             # Mã nguồn Backend (Spring Boot REST API)
│   └── README.md                        # Đặc tả 6 Business Rules & Endpoints
├── frontend/                            # Mã nguồn Frontend (React + Vite)
│   ├── src/
│   │   ├── api/
│   │   │   └── axiosClient.js           # Cấu hình Axios Instance & Interceptors
│   │   ├── services/
│   │   │   └── todoService.js           # Tầng Service gọi API (GET, POST, PUT, DELETE)
│   │   ├── components/                  # Các UI Components (TodoForm, TodoList, TodoItem...)
│   │   └── App.jsx                      # Quản lý State & tích hợp gọi API
│   └── README.md                        # Hướng dẫn thiết kế UI & API Integration
├── AGENTS.md                            # Quy tắc Socratic Mentoring (AI không code hộ API)
├── PROGRESS.md                          # Nhật ký & ghi chú kinh nghiệm qua từng Module
└── README.md                            # Tổng quan dự án học Call API
```

---

## 🚦 Hướng Dẫn Chạy Dự Án (Getting Started)

### 1. Khởi chạy Backend (Spring Boot)
```bash
cd backend
./mvnw spring-boot:run
# Backend chạy tại: http://localhost:8080/api/todos
```

### 2. Khởi chạy Frontend (React + Vite)
```bash
cd frontend
npm install
npm run dev
# Giao diện chạy tại: http://localhost:5173
```

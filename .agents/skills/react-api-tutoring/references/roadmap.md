# Lộ Trình Toàn Diện: Từ Spring Boot Backend Đến React Frontend (Call API)

Lộ trình học tập được thiết kế riêng biệt dựa trên hồ sơ của bạn: Đã biết Spring Boot MVC & `useState`, chuẩn bị học `async/await`, `useEffect`, thực hành gọi API từ `fetch()` cơ bản nâng cấp lên `axios`.

---

## 🗺️ Bản Đồ Lộ Trình (Curriculum Map)

```
┌────────────────────────────────────────────────────────────┐
│ MODULE 0: NỀN TẢNG BẤT ĐỒNG BỘ & VÒNG ĐỜI COMPONENT        │
│ 1. Promise & async/await trong JavaScript                  │
│ 2. useEffect trong React: Mounting, Re-render, Cleanup     │
└─────────────────────────────┬──────────────────────────────┘
                              │
┌─────────────────────────────▼──────────────────────────────┐
│ MODULE 1: XÂY DỰNG SPRING BOOT BACKEND THEO 6 BRs          │
│ 1. Entity, Repository, Service với Business Rules          │
│ 2. @RestController & GlobalExceptionHandler               │
│ 3. Cấu hình @CrossOrigin cho React (Vite: 5173)            │
└─────────────────────────────┬──────────────────────────────┘
                              │
┌─────────────────────────────▼──────────────────────────────┐
│ MODULE 2: FRONTEND LEVEL 1 - LÀM CHỦ VỚI FETCH() THUẦN     │
│ 1. Thử thách GET: Tải danh sách + 3 State (Data, Load, Err)│
│ 2. Thử thách POST: Gửi JSON body, xử lý Validation 400     │
│ 3. Thử thách PUT & DELETE: Cập nhật state bất biến         │
└─────────────────────────────┬──────────────────────────────┘
                              │
┌─────────────────────────────▼──────────────────────────────┐
│ MODULE 3: FRONTEND LEVEL 2 - NÂNG CẤP VỚI AXIOS & SERVICE  │
│ 1. Cài đặt Axios, tạo api client instance (baseURL)        │
│ 2. Tách tầng Services (như tầng Service bên Spring Boot)   │
│ 3. Xử lý Interceptors bắt lỗi tập trung (Toast notification)│
└────────────────────────────────────────────────────────────┘
```

---

## 📖 Chi Tiết Từng Module

### 📌 MODULE 0: Trang Bị Kiến Thức Nền Tảng (Trước Khi Viết Code Gọi API)

#### Bài học 0.1: Bất đồng bộ trong JavaScript (`Promise` & `async/await`)
- **Vấn đề thực tế:** Khi gửi request đến server, mạng internet mất thời gian (ví dụ 100ms - 2s). Nếu JavaScript dừng chờ đồng bộ (blocking), toàn bộ trang web sẽ bị "đơ" (freeze), chuột không click được.
- **Giải pháp:** Javascript sử dụng cơ chế Non-blocking thông qua `Promise`.
- **`async/await` là gì?** Cú pháp giúp ta viết code bất đồng bộ trông tự nhiên, tuần tự y hệt như code đồng bộ trong Java.
  ```javascript
  // Minh họa tư duy:
  async function layDuLieu() {
    try {
      const ketQua = await hamMatThoiGian(); // Đợi hàm này xong mà KHÔNG đơ web
      console.log(ketQua);
    } catch (loi) {
      console.error("Gặp sự cố:", loi);
    }
  }
  ```

#### Bài học 0.2: `useEffect` trong React
- **Câu hỏi cốt tử:** *"Tại sao không gọi `fetch()` trực tiếp ngay trong thân hàm Component?"*
  - **Trả lời:** Thân component chạy lại mỗi khi component render. Nếu bạn gọi `fetch()` rồi `setTodos(data)` trong thân hàm, `setTodos` kích hoạt re-render -> lại chạy thân hàm -> lại gọi `fetch` -> **vòng lặp vô tận (Infinite Loop)** làm sập trình duyệt!
- **`useEffect` sinh ra để giải quyết việc này:** Cho phép thực hiện các "tác vụ phụ" (Side Effects) như gọi API vào đúng thời điểm.
- **Dependency Array `[]`:**
  - `useEffect(() => { ... }, [])`: Dấu ngoặc vuông rỗng có nghĩa là **chỉ chạy 1 lần duy nhất** khi Component vừa xuất hiện trên màn hình (gọi là Mounting phase - tương đương `@PostConstruct` trong Spring Boot).

---

### 📌 MODULE 1: Xây Dựng Backend Spring Boot (6 Business Requirements)
- Bạn sẽ tạo một ứng dụng Spring Boot nhỏ (hoặc cùng Mentor dựng):
  - **BR-01:** Validation tiêu đề (3-100 ký tự).
  - **BR-02:** Không cho phép tạo trùng công việc chưa hoàn thành.
  - **BR-03:** Mức độ ưu tiên mặc định (`MEDIUM`).
  - **BR-04:** Lưu thời gian hoàn thành `completedAt` khi toggle.
  - **BR-05:** Ném exception và trả về `404` khi không tìm thấy ID.
  - **BR-06:** Cấu hình CORS (`@CrossOrigin`) cho phép `http://localhost:5173`.
- Test các endpoint qua Postman/cURL trước khi bước sang Frontend.

---

### 📌 MODULE 2: Frontend Cấp Độ 1 - Thực Hành Với `fetch()` Thuần
*(Quy tắc: Mentor cung cấp khung UI và gợi mở, bạn tự tay viết code call API)*

1. **Thử thách 1 (GET Todos):**
   - Viết hàm lấy danh sách công việc khi vừa tải trang.
   - Quản lý bộ 3 state: `todos` (mảng dữ liệu), `isLoading` (boolean hiển thị skeleton/spinner), `error` (thông báo lỗi nếu backend sập).
2. **Thử thách 2 (POST Todo):**
   - Lấy giá trị từ form (`title`, `priority`).
   - Gửi `fetch` với `method: 'POST'`, header `'Content-Type': 'application/json'`, `body: JSON.stringify(...)`.
   - **Xử lý đặc biệt:** Đọc `response.status`. Nếu là `400` (vi phạm BR-01 hoặc BR-02), bóc tách trường `message` từ Backend để hiển thị màu đỏ trên form!
3. **Thử thách 3 (PUT Toggle & DELETE):**
   - Gửi `PUT /api/todos/{id}/toggle`. Dùng `.map()` để cập nhật đúng todo trong state.
   - Gửi `DELETE /api/todos/{id}`. Dùng `.filter()` để loại bỏ todo khỏi state.

---

### 📌 MODULE 3: Frontend Cấp Độ 2 - Nâng Cấp Lên `Axios` & Kiến Trúc Tầng Service
- **Tại sao cần Axios khi đã có fetch?**
  - Tự động chuyển đổi JSON (không cần gọi `.json()` thủ công).
  - Tự động ném lỗi khi status code nằm ngoài khoảng 2xx (fetch không tự ném lỗi với 400/500).
  - Hỗ trợ cấu hình `baseURL`, timeout, headers dùng chung.
1. **Tạo `api/axiosClient.js`:**
   - Cấu hình instance với `baseURL: 'http://localhost:8080/api'`.
2. **Tách tầng `services/todoService.js`:**
   - Đóng gói các hàm `getTodos()`, `createTodo()`, `toggleTodo()`, `deleteTodo()`.
   - Đối chiếu: File này có vai trò tương đương như `@Service` bên Spring Boot, giúp Component React chỉ việc tập trung vào hiển thị giao diện!
3. **Thêm Interceptor:**
   - Bắt mọi lỗi từ server trả về một cách tập trung.

# Cầu Nối Tư Duy: Từ Spring Boot MVC Sang React Frontend

Bảng đối chiếu và giải thích các khái niệm tương đồng giúp lập trình viên Backend làm quen nhanh với Frontend React.

---

## 1. Bảng Đối Chiếu Khái Niệm

| Khái Niệm Bên Spring Boot | Khái Niệm Tương Đương Bên React | Ý Nghĩa Thực Tế |
| :--- | :--- | :--- |
| **`@RestController`** | **Endpoints URL mục tiêu** | Nơi cung cấp dữ liệu qua giao thức HTTP (JSON API). |
| **`ResponseEntity<T>`** | **`Response` trong JS (`response.json()`)** | Đóng gói HTTP Status Code, Headers, và Data Body. |
| **`@RequestBody` (DTO/Entity)** | **`body: JSON.stringify(data)`** | Dữ liệu Client tuần tự hóa thành chuỗi JSON gửi lên Server. |
| **`@PathVariable` / `@RequestParam`** | **URL Params / Query String trong URL** | Truyền tham số lọc hoặc ID bản ghi qua URL (VD: `/api/todos/${id}`). |
| **`@CrossOrigin`** | **CORS Configuration** | Cho phép trình duyệt ở domain/port của React gọi API về Backend. |
| **Model / DTO Class** | **Javascript Object / TypeScript Interface** | Định nghĩa cấu trúc của dữ liệu (Field names, types). |
| **In-memory cache / Service State** | **`useState` Hook** | Lưu trữ dữ liệu đang hiển thị tạm thời trên bộ nhớ trình duyệt. |
| **`@PostConstruct` / Init callback** | **`useEffect(() => { ... }, [])`** | Chạy một lần duy nhất khi Component "sinh ra" trên màn hình (Mounting). |

---

## 2. Luồng Vòng Đời Của Một Request (Request Lifecycle)

```
[Người dùng Click "Thêm việc"]
       │
       ▼ (1)
[React Event Handler (JavaScript)]
       │
       ▼ (2)
[fetch(URL, { method: 'POST', body: JSON.stringify(...) })]
       │
       ▼ (3) Mạng HTTP (Internet/Localhost)
[Spring Boot: TodoController @PostMapping]
       │
       ▼ (4)
[TodoService -> TodoRepository -> Lưu vào Database]
       │
       ▼ (5)
[Spring Boot trả về ResponseEntity.status(201).body(newTodo)]
       │
       ▼ (6) Mạng HTTP
[React: const data = await response.json()]
       │
       ▼ (7)
[setTodos(prev => [...prev, data])]  --> React tự động re-render UI cập nhật danh sách!
```

---

## 3. Các Lỗi Thường Gặp Cần Lưu Ý

1. **Quên `await` ở `response.json()`**:
   - `fetch()` trả về một `Response` stream, việc đọc stream sang JSON cũng là bất đồng bộ và trả về `Promise`. Nếu không `await`, biến `data` sẽ là `Promise { <pending> }`.
2. **Infinite Loop với `useEffect`**:
   - Nếu gọi hàm `fetch` bên trong `useEffect` mà lại đặt state `[todos]` vào Dependency Array, mỗi lần `setTodos` component sẽ re-render -> kích hoạt lại `useEffect` -> lặp vô tận!
   - Quy tắc: Với lần tải đầu tiên, dependency array luôn là rỗng `[]`.
3. **CORS Error**:
   - Trình duyệt chặn request vì React chạy ở `http://localhost:5173` còn Spring Boot chạy ở `http://localhost:8080` (khác Origin).
   - Khắc phục bằng cách gắn `@CrossOrigin(origins = "http://localhost:5173")` lên Controller của Spring Boot.

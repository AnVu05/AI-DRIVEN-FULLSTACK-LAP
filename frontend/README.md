# Frontend - React (Vite + JavaScript)

Ứng dụng Frontend được xây dựng bằng **Vite + React (JavaScript)** để bạn thực hành kết nối API từ cơ bản (`fetch`) đến nâng cao (`axios`).

---

## 🏗️ Cấu Trúc Thư Mục Dự Kiến Khi Khởi Tạo

```
frontend/
├── src/
│   ├── components/
│   │   ├── TodoList.jsx         # Component hiển thị danh sách
│   │   ├── TodoForm.jsx         # Form thêm công việc kèm chọn Priority
│   │   ├── TodoItem.jsx         # Từng thẻ công việc (checkbox toggle, badge priority, nút xóa)
│   │   ├── LoadingSpinner.jsx   # Hiệu ứng khi đang tải dữ liệu
│   │   └── ErrorBanner.jsx      # Hiển thị thông báo lỗi thân thiện
│   ├── services/                # (Dành cho Module 3) Tầng gọi API tách biệt
│   │   └── todoService.js
│   ├── api/                     # (Dành cho Module 3) Cấu hình axios instance
│   │   └── axiosClient.js
│   ├── App.jsx                  # Nơi bạn ráp nối và thực hành gọi API
│   └── App.css                  # Giao diện hiện đại, tối ưu trải nghiệm
├── package.json
└── vite.config.js
```

---

## 🎯 2 Giai Đoạn Thực Hành Của Bạn

### Giai Đoạn 1: Dùng `fetch()` Thuần
- Tự viết hàm trong `App.jsx` dùng `fetch()` và `async/await`.
- Thực hành quản lý 3 trạng thái: `todos`, `isLoading`, `errorMessage`.
- Xử lý phản hồi lỗi nghiệp vụ (HTTP 400 từ Backend).

### Giai Đoạn 2: Nâng Cấp Lên `Axios`
- Cài đặt thư viện `axios`.
- Refactor chuyển toàn bộ logic gọi API sang `services/todoService.js`.
- Trải nghiệm sự tiện lợi của Axios so với `fetch()`.

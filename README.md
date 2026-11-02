# 🚀 Full-Stack AI-Augmented Engineering Hub

> **Hành trình từ Nền Tảng Full-Stack (Spring Boot + React) đến Kiến Trúc Microservices & Event-Driven (Apache Kafka) — Ứng Dụng Phương Pháp AI-Augmented Pair Programming.**

[![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.x-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)](https://spring.io/projects/spring-boot)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Java](https://img.shields.io/badge/Java-17+-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)](https://openjdk.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![AI-Augmented](https://img.shields.io/badge/AI_Augmented-Pair_Programming-blueviolet?style=for-the-badge&logo=openai&logoColor=white)](./CONTEXT_GUIDE.md)

---

## 💡 Điểm Nhấn Dành Cho Nhà Tuyển Dụng (Recruiter Highlights)

Repo này không chỉ lưu trữ mã nguồn, mà còn là **bằng chứng thực tế (Proof of Work)** thể hiện:

1. **Tư Duy Kiến Trúc & Xây Dựng Sản Phẩm (System Architecture):**
   - Nắm vững chu trình phát triển trọn vẹn từ Backend RESTful API (Spring Boot MVC, DTO, Validation, Global Exception, CORS) đến Client-Side Frontend (React Hooks, Asynchronous Lifecycle, State Management).
   - Thiết kế hệ thống theo hướng module hóa, sẵn sàng mở rộng (evolve) thành **Microservices** và **Event-Driven Architecture với Apache Kafka** trong các giai đoạn tiếp theo.

2. **Kỹ Năng Làm Chủ & Ứng Dụng AI Đỉnh Cao (AI-Augmented Engineering):**
   - **Không Copy-Paste thụ động:** Thiết lập hệ sinh thái Rules & Skills độc lập (`.agents/`, `AGENTS.md`) để biến AI thành một **Senior Pair-Programmer & Socratic Mentor**.
   - **Strict Learning Contract:** Tự tay viết 100% logic kết nối API (`fetch`/`axios`, `async/await`, `useEffect`, bất biến State), AI chỉ đóng vai trò phân tích nguyên nhân gốc rễ (Root Cause Analysis), gợi ý khung sườn và review code.
   - **Context Maintenance Mastery:** Quản lý vòng đời ngữ cảnh AI qua các tài liệu theo dõi tiến độ (`PROGRESS.md`, `CONTEXT_GUIDE.md`), đảm bảo chất lượng kỹ thuật nhất quán.

---

## 🏛️ Bản Đồ Kiến Trúc & Lộ Trình Tiến Hóa (Architecture Evolution)

```
GIAI ĐOẠN 1: MODULAR MONOLITH (Hiện Tại)
┌─────────────────────────────────┐               ┌─────────────────────────────────┐
│     React 18 Frontend (Vite)    │  HTTP / REST  │    Spring Boot 3.x REST API     │
│  - Custom Fetch / Axios Service ├──────────────►│  - Controller, DTO, Service     │
│  - Triad State: Data/Load/Error │◄──────────────┤  - Validation, Global Handler   │
│  - React Hooks (State, Effect)  │     (JSON)    │  - CORS Config (Port 5173)      │
└─────────────────────────────────┘               └────────────────┬────────────────┘
                                                                   │
                                                            Database (H2/MySQL)
                                                                   │
GIAI ĐOẠN 2 & 3: MICROSERVICES & EVENT-DRIVEN (Tương Lai)           ▼
┌───────────────────────────────────────────────────────────────────────────────────┐
│                           API Gateway (Spring Cloud Gateway)                      │
└───────┬─────────────────────────────────┬─────────────────────────────────┬───────┘
        ▼                                 ▼                                 ▼
┌─────────────────┐             ┌───────────────────┐             ┌─────────────────┐
│  Auth Service   │             │   Todo Service    │             │  Notify Service │
│  (JWT / OAuth2) │             │ (Core Domain BRs) │             │(Email / Webhook)│
└─────────────────┘             └─────────┬─────────┘             └────────▲────────┘
                                          │                                │
                                          └─────► [ Apache Kafka Topic ] ──┘
                                                     Event Streaming
```

---

## 🛠️ Tech Stack & Công Nghệ Sử Dụng

| Tầng | Công Nghệ / Thư Viện | Mục Tiêu Kỹ Thuật |
| :--- | :--- | :--- |
| **Frontend** | React 18, Vite, JavaScript (ES6+), Vanilla CSS | Xây dựng UI hiện đại, quản lý trạng thái phản ứng (Reactive), tối ưu Bundle size. |
| **Networking** | Native `fetch()` $\rightarrow$ `Axios` Client | Làm chủ bản chất HTTP Stream, Promise, Interceptors, và Service Layer. |
| **Backend** | Spring Boot 3.x, Spring Web, Spring Data JPA | Xây dựng RESTful API chuẩn mực với 6 Business Rules chặt chẽ. |
| **Database** | Microsoft SQL Server (Unicode NVARCHAR), H2 | Lưu trữ dữ liệu quan hệ, xử lý chuẩn Unicode tiếng Việt có dấu. |
| **AI Tooling** | Antigravity IDE, Custom Agent Skills & Rules | Tự động hóa quy trình pair-programming, prompt engineering có cấu trúc. |
| **Future Stack** | Spring Cloud, Apache Kafka, Docker, Kubernetes | Chuyển dịch sang kiến trúc vi dịch vụ và xử lý luồng dữ liệu bất đồng bộ. |

---

## 🏆 Thành Quả Đã Hoàn Thành (Milestones Achieved & Proof of Work)

### ✅ MODULE 0: Nền Tảng Lý Thuyết Cốt Lõi
- **Bất đồng bộ trong JavaScript:** Hiểu cơ chế Non-blocking I/O, `Promise`, và cách dùng `async/await` để viết code tuần tự như Java mà không gây "đơ" (freeze) trình duyệt.
- **Vòng đời Component & Hook `useEffect`:** Giải mã bẫy **Infinite Re-render Loop** khi gọi `setState` trực tiếp trong thân Component. Nắm vững cơ chế so sánh của Dependency Array `[]` (Mounting phase tương đương `@PostConstruct` trong Spring Boot).
- **Bộ Ba Trạng Thái (Triad of Async State):** Luôn quản lý đồng thời `data` (dữ liệu), `loading` (trạng thái tải), và `error` (thông báo lỗi thân thiện).

### ✅ MODULE 1: Xây Dựng Backend Spring Boot Theo 6 Business Rules (BRs)
- **Kiến trúc phân tầng chuẩn mực:** `Entity`, `DTO`, `Repository`, `Service`, `@RestController`.
- **Thực thi trọn vẹn 6 Business Rules:**
  - `BR-01`: Validation tiêu đề (3-100 ký tự), trả về `400 Bad Request`.
  - `BR-02`: Chống trùng công việc chưa hoàn thành (`existsByTitleIgnoreCaseAndCompletedFalse`).
  - `BR-03`: Tự động gán mức ưu tiên mặc định (`Priority.MEDIUM`).
  - `BR-04`: Vòng đời toggle (`completed = true` gán `completedAt = now()`, bỏ tick reset `null`).
  - `BR-05`: Global Exception Handler ném `404 Not Found` (`ResourceNotFoundException`).
  - `BR-06`: Cấu hình CORS toàn cục cho phép Vite React chạy tại `http://localhost:5173`.
- **Kinh nghiệm thực chiến Database:** Xử lý triệt để lỗi font dấu tiếng Việt trong **Microsoft SQL Server** bằng `@Nationalized` và cấu hình `hibernate.use_nationalized_character_data=true` để tự động map sang `NVARCHAR`.

### ✅ MODULE 2: Frontend Level 1 - Tự Tay Gọi API Bằng `fetch()` Thuần
- **UI & UX hiện đại:** Giao diện Dark theme Glassmorphism tinh tế (Vite + React 18, font Plus Jakarta Sans, CSS micro-interactions).
- **Học viên tự tay lập trình 100% 4 thao tác CRUD:**
  - `GET /api/todos`: Nạp dữ liệu ban đầu, quản lý trọn vẹn 3 trạng thái (`todos`, `isLoading`, `errorMessage`).
  - `POST /api/todos`: Gửi JSON body, bóc tách `400 Bad Request` từ Backend để hiển thị lỗi validation tiếng Việt trực tiếp trên form.
  - `PUT /api/todos/{id}/toggle`: Đảo trạng thái hoàn thành và cập nhật mảng state bằng `.map()` bảo đảm tính bất biến (Immutability).
  - `DELETE /api/todos/{id}`: Xóa bản ghi và lọc mảng state bằng `.filter()`.
- **Bẫy thực tế đã vượt qua:** Nắm rõ sự khác biệt giữa Arrow Function có `{ return ... }` và không ngoặc nhọn (Implicit Return), khắc phục lỗi `ReferenceError` khi đọc body lỗi trong `try...catch`.

---

## 📂 Cấu Trúc Dự Án (Repository Structure)

```
.
├── .agents/                             # Hệ sinh thái Skills & Rules hướng dẫn AI
│   ├── rules/
│   │   └── react-teaching-pedagogy.md   # Quy tắc sư phạm & 3 cấp độ gợi ý
│   └── skills/
│       └── react-api-tutoring/          # Kỹ năng đào tạo kết nối Full-Stack
│           ├── SKILL.md                 # Quy trình dẫn dắt thực hành
│           └── references/              # Cầu nối tư duy Spring Boot <-> React
├── backend/                             # Mã nguồn Backend (Spring Boot REST API)
│   └── README.md                        # Đặc tả 6 Business Rules (BRs)
├── frontend/                            # Mã nguồn Frontend (React + Vite)
│   └── README.md                        # Thiết kế UI & Kế hoạch kết nối API
├── AGENTS.md                            # Quy tắc cốt lõi: AI TUYỆT ĐỐI KHÔNG CODE HỘ API
├── CONTEXT_GUIDE.md                     # Sổ tay câu lệnh duy trì ngữ cảnh cho AI
├── PROGRESS.md                          # Nhật ký & tiến độ học tập trên ổ đĩa
├── .gitignore                           # Chỉ đẩy mã nguồn, loại bỏ hoàn toàn rác build
└── README.md                            # Hồ sơ dự án & Portfolio
```

---

## 🤖 Minh Họa Quy Trình Hợp Tác Với AI (AI Collaboration in Action)

Thay vì dùng AI để sinh code hàng loạt một cách thụ động, repo này áp dụng mô hình **Spec-Driven & Socratic Learning**:

1. **Thiết lập đặc tả nghiệp vụ (Specification):** Đặt ra 6 Business Rules rõ ràng trong [backend/README.md](./backend/README.md).
2. **Kích hoạt Mentor Mode:** Tệp [AGENTS.md](./AGENTS.md) ràng buộc AI chỉ được cung cấp:
   - Gợi ý khái niệm (*Conceptual Hints*).
   - Phân tích nguyên nhân lỗi dựa trên giao thức HTTP (*Root Cause Analysis*).
   - Kiểm tra tính bất biến của State (*Code Review*).
3. **Người học tự tay cài đặt:** Tự viết từng hàm `fetch`, xử lý chuỗi Promise, bắt mã lỗi 400 Bad Request từ Spring Boot và hiển thị lên giao diện.

> 📖 *Xem toàn bộ các câu lệnh mẫu dùng để điều phối AI tại [CONTEXT_GUIDE.md](./CONTEXT_GUIDE.md).*

---

## 🚦 Bắt Đầu Nhanh (Getting Started)

### 1. Khởi Chạy Backend (Spring Boot)
```bash
cd backend
./mvnw spring-boot:run
# Server chạy tại: http://localhost:8080
```

### 2. Khởi Chạy Frontend (React + Vite)
```bash
cd frontend
npm install
npm run dev
# Ứng dụng chạy tại: http://localhost:5173
```

---

## 👤 Tác Giả (Author)
- **Học viên & Kỹ sư phát triển:** Đang trên lộ trình làm chủ Full-Stack & Distributed Systems.
- **Phương châm:** *"Làm chủ bản chất từ gốc rễ — Tận dụng AI làm đòn bẩy tư duy."*

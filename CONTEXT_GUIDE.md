# 🧭 Sổ Tay Lệnh & Cách Duy Trì Ngữ Cảnh (Context Cheatsheet)

Tài liệu này chứa các **câu lệnh mẫu (Prompt Templates)** và **mẹo duy trì ngữ cảnh** để bạn copy-paste dùng ngay bất cứ khi nào cần.

---

## ⚡ 1. Các Câu Lệnh Copy-Paste Dùng Ngay

### 🟢 Lệnh 1: Khi mở một buổi học mới hoặc mở phiên Chat mới
> *"Đọc file @PROGRESS.md và tiếp tục hướng dẫn tớ theo đúng lộ trình và quy tắc trong @AGENTS.md"*

*👉 **Tác dụng:** AI sẽ lập tức đọc lại tiến độ dở dang, nạp lại toàn bộ quy tắc không-code-hộ và đưa ra thử thách tiếp theo cho bạn với 100% ngữ cảnh sạch sẽ.*

---

### 🟡 Lệnh 2: Khi thấy AI lỡ tay "code hộ" phần gọi API
> *"Nhớ quy tắc @AGENTS.md: Cậu không được viết code call API hộ tớ! Hãy thu hồi code giải pháp và gợi ý theo 3 cấp độ để tớ tự làm."*

*👉 **Tác dụng:** Kéo AI về đúng vai trò Mentor, chỉ đưa ra câu hỏi gợi mở, cú pháp tổng quát hoặc rà soát lỗi gián tiếp.*

---

### 🔵 Lệnh 3: Khi gặp lỗi mạng / lỗi code mà chưa biết sửa
> *"Tớ đang gặp lỗi này [Dán thông báo lỗi hoặc mô tả hành vi vào đây]. Dựa trên @spring-boot-bridge.md, hãy giải thích nguyên nhân gốc rễ (Root cause) và chỉ cho tớ vị trí cần kiểm tra trong DevTools / Code mà không đưa code sửa hoàn chỉnh."*

*👉 **Tác dụng:** Giúp bạn rèn luyện kỹ năng tự debug và hiểu bản chất lỗi (như CORS, 404, infinite loop).*

---

### 🟣 Lệnh 4: Khi muốn cập nhật tiến độ học tập
> *"Tớ vừa hoàn thành xong phần [tên phần vừa làm]. Cậu cập nhật dấu [x] vào @PROGRESS.md giúp tớ và tóm tắt thử thách tiếp theo nhé!"*

*👉 **Tác dụng:** Cố định thành quả của bạn lên ổ đĩa cứng vĩnh viễn.*

---

### 🟠 Lệnh 5: Khi chuẩn bị bước vào một tính năng phức tạp
> */plan Hãy đọc @roadmap.md và @PROGRESS.md để lập kế hoạch chi tiết từng bước cho thử thách tiếp theo.*

*👉 **Tác dụng:** Bắt buộc AI phải lập danh sách các việc cần làm, giúp bạn có cái nhìn tổng quan trước khi chạm vào bàn phím.*

---

## 🛠️ 2. Bảng Tra Cứu Ký Tự `@` (File Mentions)

Chỉ cần gõ `@` trong ô chat, bạn có thể nhanh chóng "triệu hồi" tài liệu cần thiết vào trí nhớ của AI:

| Ký tự gợi ý | File tương ứng | Khi nào nên dùng? |
| :--- | :--- | :--- |
| **`@PROGRESS.md`** | [PROGRESS.md](file:///d:/Learn/Knowledge/Full-Stack/PROGRESS.md) | Khi muốn nhắc AI bạn đang đứng ở đâu trong khóa học. |
| **`@AGENTS.md`** | [AGENTS.md](file:///d:/Learn/Knowledge/Full-Stack/AGENTS.md) | Khi muốn nhấn mạnh lại quy tắc "Không code hộ API". |
| **`@roadmap.md`** | [roadmap.md](file:///d:/Learn/Knowledge/Full-Stack/.agents/skills/react-api-tutoring/references/roadmap.md) | Khi muốn xem lại toàn bộ các bước từ GET, POST đến PUT/DELETE. |
| **`@backend/README.md`** | [backend/README.md](file:///d:/Learn/Knowledge/Full-Stack/backend/README.md) | Khi cần đối chiếu 6 Business Requirements của Spring Boot. |
| **`@spring-boot-bridge.md`**| [spring-boot-bridge.md](file:///d:/Learn/Knowledge/Full-Stack/.agents/skills/react-api-tutoring/references/spring-boot-bridge.md) | Khi phân vân khái niệm bên Java tương ứng với gì bên React. |

---

## 💡 3. Chiến Thuật Vàng: "Reset Phiên Chat Khi Bị Chậm"

Sau 30 - 50 lượt trao đổi, bộ nhớ hội thoại có thể bị dài và AI phản hồi chậm hơn:
1. Bạn hãy yêu cầu AI: *"Cập nhật @PROGRESS.md trước khi tớ mở chat mới nhé!"*
2. Nhấn nút **New Chat** (mở phiên chat mới tinh).
3. Dán **Lệnh 1** ở trên vào:
   > *"Đọc file @PROGRESS.md và tiếp tục hướng dẫn tớ theo đúng lộ trình và quy tắc trong @AGENTS.md"*
4. Tiếp tục bài học với tốc độ mượt mà nhất mà không lo mất bất kỳ thông tin nào!

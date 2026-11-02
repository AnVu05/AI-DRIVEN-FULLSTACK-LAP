import { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorBanner from './components/ErrorBanner';
import './App.css';

// Endpoint Backend Spring Boot của chúng ta
const API_URL = 'http://localhost:8080/api/todos';

export default function App() {
  // 🎯 BỘ 3 TRẠNG THÁI BẤT ĐỒNG BỘ (Triad of Async State)
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  // State lưu lỗi validation trả về từ server khi thêm todo
  const [formError, setFormError] = useState(null);

  // =========================================================================
  // 🚀 THỬ THÁCH 2.2: LẤY DANH SÁCH (GET /api/todos)
  // =========================================================================
  useEffect(() => {
    // TODO: Học viên tự viết logic fetch() GET danh sách todos ở đây.
    // 💡 Gợi ý tư duy từ Mentor:
    // 1. Viết một hàm async (hoặc dùng .then()).
    // 2. Bắt đầu tải: setIsLoading(true), setErrorMessage(null).
    // 3. Gọi fetch(API_URL).
    // 4. Nhớ chuyển đổi phản hồi sang JSON: await res.json().
    // 5. Cập nhật dữ liệu vào state: setTodos(data).
    // 6. Xử lý khối catch: nếu mạng lỗi -> setErrorMessage("Không thể kết nối Backend...").
    // 7. Kết thúc: nhớ tắt loading (setIsLoading(false)).

    // call api get lấy danh sách todo
    const callAPI = async () => {
      try {
        const res = await fetch(API_URL);
        if (res.ok) {
          const todos = await res.json();
          setTodos(todos);
          setErrorMessage(null);
          setIsLoading(false);
        }
      } catch {
        setErrorMessage("Không thể kết nối đến server!!!");
      }
    }
    callAPI();
  }, []);

  // =========================================================================
  // 🚀 THỬ THÁCH 2.3: THÊM CÔNG VIỆC MỚI (POST /api/todos)
  // =========================================================================
  const handleAddTodo = async ({ title, priority }) => {
    // TODO: Học viên tự viết logic fetch() POST todo mới ở đây.
    // 💡 Gợi ý tư duy từ Mentor:
    // 1. Gọi fetch(API_URL, { method: 'POST', headers: {...}, body: ... }).
    // 2. Nhớ biến đổi object JS sang JSON string bằng JSON.stringify().
    // 3. Nếu response.ok: nhận todo mới và cập nhật vào mảng todos: setTodos([newTodo, ...todos]).
    // 4. Nếu response.status === 400 (vi phạm validation BR-01 hoặc trùng BR-02):
    //    bóc tách json lỗi để lấy field `message`, rồi gọi setFormError(errorJson.message).

    // call API thêm mới một todo
    try {
      const request = await fetch(API_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ title, priority }) });
      if(request.ok){
        const res = await request.json();
        setTodos([res, ...todos]);
      }else{
        const errorBr = await request.json();
        setFormError(errorBr.message);
      }
    } catch {
      setErrorMessage("Không thể kết nối đến server!!!");
    }
  };

  // =========================================================================
  // 🚀 THỬ THÁCH 2.4: ĐẢO TRẠNG THÁI HOÀN THÀNH (PUT /api/todos/{id}/toggle)
  // =========================================================================
  const handleToggleTodo = async (id) => {
    // TODO: Học viên tự viết logic fetch() PUT toggle ở đây.
    // 💡 Gợi ý tư duy từ Mentor:
    // 1. Gọi fetch(`${API_URL}/${id}/toggle`, { method: 'PUT' }).
    // 2. Sau khi có todo đã cập nhật từ server:
    //    Dùng .map() duyệt qua todos để thay thế todo có id tương ứng (tính bất biến Immutability).

    // call api cập nhật một todo
    try {
      const request = await fetch(`${API_URL}/${id}/toggle`, {method : 'PUT'});
      if(request.ok){
        const newTodo = await request.json();
        setTodos((prevTodo) => prevTodo.map((todo) => {return todo.id === newTodo.id ? newTodo : todo}));
      }
    } catch {
      setErrorMessage("Không thể kết nối đến server!!!");
    }
    
  };

  // =========================================================================
  // 🚀 THỬ THÁCH 2.5: XÓA CÔNG VIỆC (DELETE /api/todos/{id})
  // =========================================================================
  const handleDeleteTodo = async (id) => {
    // TODO: Học viên tự viết logic fetch() DELETE ở đây.
    // 💡 Gợi ý tư duy từ Mentor:
    // 1. Gọi fetch(`${API_URL}/${id}`, { method: 'DELETE' }).
    // 2. Sau khi server trả về 204 No Content (response.ok):
    //    Dùng .filter() để loại bỏ todo có id đó ra khỏi mảng todos.

    //call api delete todo
    try {
      const request = await fetch(`${API_URL}/${id}`, {method : 'DELETE'});
      if(request.ok){
        setTodos((prevTodo) => prevTodo.filter((todo) => {return todo.id !== id}))
      }
    } catch {
      setErrorMessage("Không thể kết nối đến server!!!");
    }
    


  };

  return (
    <div className="app-container">
      {/* Tiêu đề ứng dụng */}
      <header className="app-header">
        <h1 className="app-title">Todo List Full-Stack</h1>
        <p className="app-subtitle">React 18 + Spring Boot 3 + SQL Server</p>
      </header>

      {/* Banner thông báo lỗi hệ thống/mạng */}
      <ErrorBanner
        message={errorMessage}
        onRetry={() => window.location.reload()}
      />

      {/* Form nhập công việc */}
      <TodoForm
        onAddTodo={handleAddTodo}
        formError={formError}
      />

      {/* Khu vực hiển thị danh sách hoặc Spinner đang tải */}
      {isLoading ? (
        <LoadingSpinner message="Đang kết nối Spring Boot & tải dữ liệu..." />
      ) : (
        <TodoList
          todos={todos}
          onToggle={handleToggleTodo}
          onDelete={handleDeleteTodo}
        />
      )}
    </div>
  );
}

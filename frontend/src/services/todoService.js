import axiosClient from '../api/axiosClient';

/**
 * Tầng Service giao tiếp API Todo với Backend Spring Boot.
 * Đóng vai trò tương đương với tầng @Service bên Spring Boot,
 * giúp tách biệt hoàn toàn việc giao tiếp mạng (HTTP) ra khỏi UI Component (App.jsx).
 */
const todoService = {
  // 🚀 THỬ THÁCH 3.2.1: Lấy danh sách todos (GET /todos)
  getAll: async () => {
    // TODO: Học viên tự viết logic gọi API bằng axiosClient ở đây.
    // 💡 Gợi ý:
    // - Dùng phương thức axiosClient.get('/todos')
    // - Axios tự động parse JSON và bọc dữ liệu trong thuộc tính `data` của response object (response.data).
    const response = await axiosClient.get('/todos');
    return response;

  },

  // 🚀 THỬ THÁCH 3.2.2: Thêm mới todo (POST /todos)
  create: async (todoData) => {
    // TODO: Học viên tự viết logic gọi API bằng axiosClient ở đây.
    // 💡 Gợi ý:
    // - Dùng axiosClient.post('/todos', todoData)
    // - Không cần gọi JSON.stringify() vì axios tự động serialize object sang JSON.
    // - Trả về dữ liệu todo mới tạo từ response.data.
    const response = await axiosClient.post('/todos', todoData);
    return response;
  },

  // 🚀 THỬ THÁCH 3.2.3: Đảo trạng thái hoàn thành (PUT /todos/{id}/toggle)
  toggle: async (id) => {
    // TODO: Học viên tự viết logic gọi API bằng axiosClient ở đây.
    // 💡 Gợi ý:
    // - Dùng axiosClient.put(`/todos/${id}/toggle`)
    // - Trả về dữ liệu todo đã cập nhật từ response.data.
    const res = await axiosClient.put(`/todos/${id}/toggle`);
    return res;
  },

  // 🚀 THỬ THÁCH 3.2.4: Xóa todo (DELETE /todos/{id})
  delete: async (id) => {
    // TODO: Học viên tự viết logic gọi API bằng axiosClient ở đây.
    // 💡 Gợi ý:
    // - Dùng axiosClient.delete(`/todos/${id}`)
    const response = await axiosClient.delete(`/todos/${id}`);
    return response;
  },
};

export default todoService;


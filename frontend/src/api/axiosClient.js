import axios from 'axios';

/**
 * Cấu hình Axios Client dùng chung cho toàn bộ ứng dụng.
 * Tương đương cấu hình Bean RestTemplate hoặc WebClient với BaseUrl trong Spring Boot.
 */
const axiosClient = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

axiosClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
)
export default axiosClient;


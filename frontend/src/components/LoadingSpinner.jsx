export default function LoadingSpinner({ message = "Đang tải dữ liệu từ máy chủ..." }) {
  return (
    <div className="loading-box">
      <div className="spinner"></div>
      <p>{message}</p>
    </div>
  );
}

export default function ErrorBanner({ message, onRetry }) {
  if (!message) return null;

  return (
    <div className="error-banner">
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>⚠️</span>
        <span>{message}</span>
      </div>
      {onRetry && (
        <button onClick={onRetry}>Thử lại</button>
      )}
    </div>
  );
}

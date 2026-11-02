export default function TodoItem({ todo, onToggle, onDelete }) {
  const getPriorityBadgeClass = (priority) => {
    switch (priority) {
      case 'HIGH':
        return 'badge-high';
      case 'MEDIUM':
        return 'badge-medium';
      case 'LOW':
        return 'badge-low';
      default:
        return 'badge-medium';
    }
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-left">
        <input
          type="checkbox"
          className="todo-checkbox"
          checked={todo.completed || false}
          onChange={() => onToggle(todo.id)}
        />
        <div className="todo-content">
          <span className="todo-title">{todo.title}</span>
          {todo.completedAt && (
            <span className="todo-date">
              Hoàn thành: {new Date(todo.completedAt).toLocaleTimeString('vi-VN')}
            </span>
          )}
        </div>
      </div>

      <div className="todo-right">
        <span className={`badge ${getPriorityBadgeClass(todo.priority)}`}>
          {todo.priority || 'MEDIUM'}
        </span>
        <button
          className="btn-delete"
          title="Xóa công việc"
          onClick={() => onDelete(todo.id)}
        >
          🗑️
        </button>
      </div>
    </div>
  );
}

import { useState } from 'react';

export default function TodoForm({ onAddTodo, formError }) {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('MEDIUM');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAddTodo({
      title: title.trim(),
      priority: priority
    });

    setTitle('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <input
          type="text"
          className="input-field"
          placeholder="Nhập tên công việc cần làm..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select
          className="select-field"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="LOW">Thấp (Low)</option>
          <option value="MEDIUM">Vừa (Medium)</option>
          <option value="HIGH">Cao (High)</option>
        </select>

        <button type="submit" className="btn-primary">
          <span>+ Thêm</span>
        </button>
      </div>

      {formError && (
        <div className="form-error">
          ⚠️ {formError}
        </div>
      )}
    </form>
  );
}

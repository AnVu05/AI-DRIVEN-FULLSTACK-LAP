package com.fullstack.todo.service;

import com.fullstack.todo.dto.CreateTodoRequestDTO;
import com.fullstack.todo.dto.TodoResponseDTO;
import com.fullstack.todo.entity.Priority;
import com.fullstack.todo.entity.Todo;
import com.fullstack.todo.exception.BusinessRuleException;
import com.fullstack.todo.exception.ResourceNotFoundException;
import com.fullstack.todo.repository.TodoRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
@Transactional
public class TodoService {

    private final TodoRepository todoRepository;

    public TodoService(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    // Lấy toàn bộ danh sách Todo
    @Transactional(readOnly = true)
    public List<TodoResponseDTO> getAllTodos() {
        return todoRepository.findAllByOrderByCreatedAtDesc()
                .stream()
                .map(TodoResponseDTO::fromEntity)
                .toList();
    }

    // Tạo mới Todo theo BR-01, BR-02, BR-03
    public TodoResponseDTO createTodo(CreateTodoRequestDTO requestDTO) {
        String cleanTitle = requestDTO.getTitle().trim();

        // BR-02: Không cho phép tạo trùng công việc chưa hoàn thành
        if (todoRepository.existsByTitleIgnoreCaseAndCompletedFalse(cleanTitle)) {
            throw new BusinessRuleException("Công việc này đã tồn tại và chưa hoàn thành!");
        }

        // BR-03: Gán mức ưu tiên mặc định là MEDIUM nếu Client không gửi
        Priority priority = requestDTO.getPriority() != null ? requestDTO.getPriority() : Priority.MEDIUM;

        Todo todo = new Todo(cleanTitle, requestDTO.getDescription(), priority);
        Todo savedTodo = todoRepository.save(todo);

        return TodoResponseDTO.fromEntity(savedTodo);
    }

    // BR-04: Đảo trạng thái hoàn thành (Toggle State Lifecycle) & BR-05: Kiểm tra ID tồn tại
    public TodoResponseDTO toggleTodoStatus(Long id) {
        Todo todo = todoRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Không tìm thấy công việc với ID: " + id));

        boolean newStatus = !Boolean.TRUE.equals(todo.getCompleted());
        todo.setCompleted(newStatus);

        if (newStatus) {
            // Khi chuyển sang hoàn thành -> Gán thời gian hoàn thành
            todo.setCompletedAt(LocalDateTime.now());
        } else {
            // Khi bỏ hoàn thành -> Reset thời gian hoàn thành về null
            todo.setCompletedAt(null);
        }

        Todo updatedTodo = todoRepository.save(todo);
        return TodoResponseDTO.fromEntity(updatedTodo);
    }

    // Xóa Todo & BR-05: Kiểm tra ID tồn tại
    public void deleteTodo(Long id) {
        Todo todo = todoRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Không tìm thấy công việc với ID: " + id));

        todoRepository.delete(todo);
    }
}

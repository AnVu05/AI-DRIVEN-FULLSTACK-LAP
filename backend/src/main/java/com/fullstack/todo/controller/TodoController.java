package com.fullstack.todo.controller;

import com.fullstack.todo.dto.CreateTodoRequestDTO;
import com.fullstack.todo.dto.TodoResponseDTO;
import com.fullstack.todo.service.TodoService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/todos")
// BR-06: Mở CORS cho Frontend Vite React (chạy tại port 5173)
@CrossOrigin(origins = "http://localhost:5173", allowedHeaders = "*", methods = {
        RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE, RequestMethod.OPTIONS
})
public class TodoController {

    private final TodoService todoService;

    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    // 1. GET /api/todos: Lấy danh sách toàn bộ Todo
    @GetMapping
    public ResponseEntity<List<TodoResponseDTO>> getAllTodos() {
        List<TodoResponseDTO> todos = todoService.getAllTodos();
        return ResponseEntity.ok(todos);
    }

    // 2. POST /api/todos: Tạo mới Todo (kèm @Valid kích hoạt BR-01)
    @PostMapping
    public ResponseEntity<TodoResponseDTO> createTodo(@Valid @RequestBody CreateTodoRequestDTO requestDTO) {
        TodoResponseDTO createdTodo = todoService.createTodo(requestDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdTodo);
    }

    // 3. PUT /api/todos/{id}/toggle: Đảo trạng thái hoàn thành (BR-04, BR-05)
    @PutMapping("/{id}/toggle")
    public ResponseEntity<TodoResponseDTO> toggleTodo(@PathVariable Long id) {
        TodoResponseDTO updatedTodo = todoService.toggleTodoStatus(id);
        return ResponseEntity.ok(updatedTodo);
    }

    // 4. DELETE /api/todos/{id}: Xóa Todo (BR-05)
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable Long id) {
        todoService.deleteTodo(id);
        return ResponseEntity.noContent().build();
    }
}

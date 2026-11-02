package com.fullstack.todo.dto;

import com.fullstack.todo.entity.Priority;
import com.fullstack.todo.entity.Todo;

import java.time.LocalDateTime;

public class TodoResponseDTO {

    private Long id;
    private String title;
    private String description;
    private Priority priority;
    private Boolean completed;
    private LocalDateTime createdAt;
    private LocalDateTime completedAt;

    public TodoResponseDTO() {
    }

    public TodoResponseDTO(Long id, String title, String description, Priority priority, Boolean completed, LocalDateTime createdAt, LocalDateTime completedAt) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.completed = completed;
        this.createdAt = createdAt;
        this.completedAt = completedAt;
    }

    public static TodoResponseDTO fromEntity(Todo todo) {
        return new TodoResponseDTO(
                todo.getId(),
                todo.getTitle(),
                todo.getDescription(),
                todo.getPriority(),
                todo.getCompleted(),
                todo.getCreatedAt(),
                todo.getCompletedAt()
        );
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Priority getPriority() {
        return priority;
    }

    public void setPriority(Priority priority) {
        this.priority = priority;
    }

    public Boolean getCompleted() {
        return completed;
    }

    public void setCompleted(Boolean completed) {
        this.completed = completed;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getCompletedAt() {
        return completedAt;
    }

    public void setCompletedAt(LocalDateTime completedAt) {
        this.completedAt = completedAt;
    }
}

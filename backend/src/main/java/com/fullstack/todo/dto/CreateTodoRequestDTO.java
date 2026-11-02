package com.fullstack.todo.dto;

import com.fullstack.todo.entity.Priority;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class CreateTodoRequestDTO {

    // BR-01: Kiểm tra tính hợp lệ dữ liệu đầu vào (3 - 100 ký tự)
    @NotBlank(message = "Tiêu đề công việc không được để trống!")
    @Size(min = 3, max = 100, message = "Tiêu đề công việc phải có độ dài từ 3 đến 100 ký tự!")
    private String title;

    @Size(max = 255, message = "Mô tả công việc không được vượt quá 255 ký tự!")
    private String description;

    // BR-03: Nếu không truyền, service sẽ tự động gán Priority.MEDIUM
    private Priority priority;

    public CreateTodoRequestDTO() {
    }

    public CreateTodoRequestDTO(String title, String description, Priority priority) {
        this.title = title;
        this.description = description;
        this.priority = priority;
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
}

package com.fullstack.todo;

import com.fullstack.todo.entity.Priority;
import com.fullstack.todo.entity.Todo;
import com.fullstack.todo.repository.TodoRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class TodoBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(TodoBackendApplication.class, args);
    }

    // Seed dữ liệu mẫu ban đầu để Frontend có thể thấy ngay danh sách khi gọi GET /api/todos
    @Bean
    public CommandLineRunner initData(TodoRepository repository) {
        return args -> {
            if (repository.count() == 0) {
                repository.save(new Todo("Học cách gọi API từ React sang Spring Boot", "Nắm vững fetch, useEffect và async/await", Priority.HIGH));
                repository.save(new Todo("Tìm hiểu vòng đời Component trong React", "Mounting, Re-rendering, Cleanup", Priority.MEDIUM));
                repository.save(new Todo("Nâng cấp kiến trúc lên Axios & Service Layer", "Tách tầng tương tự Service của Spring Boot", Priority.LOW));
            }
        };
    }
}

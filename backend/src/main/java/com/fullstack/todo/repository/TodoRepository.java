package com.fullstack.todo.repository;

import com.fullstack.todo.entity.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Long> {

    // BR-02: Kiểm tra công việc trùng lặp chưa hoàn thành (case-insensitive)
    boolean existsByTitleIgnoreCaseAndCompletedFalse(String title);

    // Lấy danh sách sắp xếp theo thời gian tạo mới nhất
    List<Todo> findAllByOrderByCreatedAtDesc();
}

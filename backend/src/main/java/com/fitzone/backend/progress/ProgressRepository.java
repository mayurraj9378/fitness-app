package com.fitzone.backend.progress;

import com.fitzone.backend.user.User;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProgressRepository
        extends JpaRepository<Progress, Long> {

    List<Progress> findByUser(User user);
}
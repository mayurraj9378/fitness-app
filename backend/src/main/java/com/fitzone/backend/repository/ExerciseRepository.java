package com.fitzone.backend.repository;

import com.fitzone.backend.model.Exercise;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExerciseRepository
        extends JpaRepository<Exercise, Long> {

}
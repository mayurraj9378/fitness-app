
package com.fitzone.backend.workout;

import com.fitzone.backend.user.User;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface WorkoutRepository
        extends JpaRepository<Workout, Long> {

    List<Workout> findByUser(User user);
}



package com.fitzone.backend.workout;

import com.fitzone.backend.user.JwtUtil;
import com.fitzone.backend.user.User;
import com.fitzone.backend.user.UserRepository;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WorkoutService {

    private final WorkoutRepository workoutRepository;

    private final UserRepository userRepository;

    public WorkoutService(
            WorkoutRepository workoutRepository,
            UserRepository userRepository
    ) {

        this.workoutRepository = workoutRepository;

        this.userRepository = userRepository;
    }

    public Workout saveWorkout(
            Workout workout,
            String token
    ) {

        String email =
                JwtUtil.extractEmail(token);

        User user =
                userRepository
                        .findByEmail(email)
                        .orElseThrow(() ->
                                new RuntimeException("User not found")
                        );

        workout.setUser(user);

        return workoutRepository.save(workout);
    }

    public List<Workout> getUserWorkouts(
            String token
    ) {

        String email =
                JwtUtil.extractEmail(token);

        User user =
                userRepository
                        .findByEmail(email)
                        .orElseThrow(() ->
                                new RuntimeException("User not found")
                        );

        return workoutRepository.findByUser(user);
    }

    public void deleteWorkout(
            Long id
    ) {

        workoutRepository.deleteById(id);
    }
}


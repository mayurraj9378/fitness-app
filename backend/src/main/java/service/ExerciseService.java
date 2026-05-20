
package com.fitzone.backend.service;

import com.fitzone.backend.model.Exercise;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExerciseService {

    public List<Exercise> getAllExercises() {

        return List.of(
                new Exercise("Push Ups", "Chest"),
                new Exercise("Squats", "Legs"),
                new Exercise("Deadlift", "Back")
        );
    }
}


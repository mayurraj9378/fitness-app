
package com.fitzone.backend.controller;

import com.fitzone.backend.model.Exercise;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class HelloController {

    @GetMapping("/exercises")
    public List<Exercise> getExercises() {

        return List.of(
                new Exercise("Push Ups", "Chest"),
                new Exercise("Squats", "Legs"),
                new Exercise("Deadlift", "Back")
        );
    }
}

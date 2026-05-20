
package com.fitzone.backend.controller;

import com.fitzone.backend.model.Exercise;
import com.fitzone.backend.service.ExerciseService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class HelloController {

    private final ExerciseService exerciseService;

    public HelloController(ExerciseService exerciseService) {
        this.exerciseService = exerciseService;
    }

    @GetMapping("/exercises")
    public List<Exercise> getExercises() {

        return exerciseService.getAllExercises();
    }
}

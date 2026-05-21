
package com.fitzone.backend.controller;

import com.fitzone.backend.model.Exercise;
import com.fitzone.backend.service.ExerciseService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class HelloController {

    private final ExerciseService exerciseService;

    public HelloController(
            ExerciseService exerciseService
    ) {
        this.exerciseService = exerciseService;
    }

    @GetMapping("/")
    public String home() {
        return "FitZone Backend Running Successfully!";
    }

    @GetMapping("/exercises")
    public List<Exercise> getExercises() {

        return exerciseService.getAllExercises();
    }

    @PostMapping("/add")
    public Exercise addExercise(
            @RequestBody Exercise exercise
    ) {

        return exerciseService.saveExercise(exercise);
    }

    @DeleteMapping("/exercises/{id}")
    public void deleteExercise(
            @PathVariable Long id
    ) {

        exerciseService.deleteExercise(id);
    }

    @PutMapping("/exercises/{id}")
    public Exercise updateExercise(
            @PathVariable Long id,
            @RequestBody Exercise exercise
    ) {

        return exerciseService.updateExercise(id, exercise);
    }
}


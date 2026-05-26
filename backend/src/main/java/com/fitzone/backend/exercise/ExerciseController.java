package com.fitzone.backend.exercise;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/exercises")
public class ExerciseController {

    private final ExerciseService exerciseService;

    public ExerciseController(
            ExerciseService exerciseService
    ) {

        this.exerciseService = exerciseService;
    }

    @PostMapping
    public Exercise addExercise(
            @RequestBody Exercise exercise
    ) {

        return exerciseService.addExercise(exercise);
    }

    @GetMapping
    public List<Exercise> getExercises() {

        return exerciseService.getExercises();
    }

    @GetMapping("/{id}")
    public Exercise getExerciseById(
            @PathVariable Long id
    ) {

        return exerciseService.getExerciseById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteExercise(
            @PathVariable Long id
    ) {

        exerciseService.deleteExercise(id);
    }

    @PutMapping("/{id}")
    public Exercise updateExercise(
            @PathVariable Long id,
            @RequestBody Exercise exercise
    ) {

        return exerciseService.updateExercise(
                id,
                exercise
        );
    }
}
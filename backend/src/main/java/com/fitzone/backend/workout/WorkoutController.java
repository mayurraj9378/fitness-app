
package com.fitzone.backend.workout;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/workouts")
public class WorkoutController {

    private final WorkoutService workoutService;

    public WorkoutController(
            WorkoutService workoutService
    ) {

        this.workoutService = workoutService;
    }

    @PostMapping
    public Workout saveWorkout(
            @RequestBody Workout workout,
            @RequestHeader("Authorization")
            String authHeader
    ) {

        String token =
                authHeader.replace(
                        "Bearer ",
                        ""
                );

        return workoutService.saveWorkout(
                workout,
                token
        );
    }

    @GetMapping
    public List<Workout> getUserWorkouts(
            @RequestHeader("Authorization")
            String authHeader
    ) {

        String token =
                authHeader.replace(
                        "Bearer ",
                        ""
                );

        return workoutService.getUserWorkouts(token);
    }

    @DeleteMapping("/{id}")
    public void deleteWorkout(
            @PathVariable Long id
    ) {

        workoutService.deleteWorkout(id);
    }
}


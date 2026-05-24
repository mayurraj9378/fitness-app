
package com.fitzone.backend.exercise;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExerciseService {

    private final ExerciseRepository exerciseRepository;

    public ExerciseService(
            ExerciseRepository exerciseRepository
    ) {

        this.exerciseRepository = exerciseRepository;
    }

    public Exercise addExercise(
            Exercise exercise
    ) {

        return exerciseRepository.save(exercise);
    }

    public List<Exercise> getExercises() {

        return exerciseRepository.findAll();
    }

    public void deleteExercise(
            Long id
    ) {

        exerciseRepository.deleteById(id);
    }

    public Exercise updateExercise(
            Long id,
            Exercise updatedExercise
    ) {

        Exercise exercise =
                exerciseRepository
                        .findById(id)
                        .orElseThrow(() ->
                                new RuntimeException("Exercise not found")
                        );

        exercise.setName(updatedExercise.getName());

        exercise.setCategory(updatedExercise.getCategory());

        return exerciseRepository.save(exercise);
    }
}



package com.fitzone.backend.service;

import com.fitzone.backend.model.Exercise;
import com.fitzone.backend.repository.ExerciseRepository;
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

    public List<Exercise> getAllExercises() {

        return exerciseRepository.findAll();
    }

    public Exercise saveExercise(
            Exercise exercise
    ) {

        return exerciseRepository.save(exercise);
    }

    public void deleteExercise(Long id) {

        exerciseRepository.deleteById(id);
    }

    public Exercise updateExercise(
            Long id,
            Exercise updatedExercise
    ) {

        Exercise exercise =
                exerciseRepository.findById(id).orElseThrow();

        exercise.setName(updatedExercise.getName());

        exercise.setCategory(updatedExercise.getCategory());

        return exerciseRepository.save(exercise);
    }
}


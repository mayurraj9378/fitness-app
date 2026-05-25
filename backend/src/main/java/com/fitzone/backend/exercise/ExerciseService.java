
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

    public Exercise getExerciseById(
            Long id
    ) {

        return exerciseRepository
                .findById(id)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Exercise not found"
                        )
                );
    }

    public List<Exercise> getExercisesByCategory(
            String category
    ) {

        return exerciseRepository
                .findByCategory(category);
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
                                new RuntimeException(
                                        "Exercise not found"
                                )
                        );

        exercise.setName(
                updatedExercise.getName()
        );

        exercise.setCategory(
                updatedExercise.getCategory()
        );

        exercise.setDescription(
                updatedExercise.getDescription()
        );

        exercise.setDifficulty(
                updatedExercise.getDifficulty()
        );

        exercise.setSetsReps(
                updatedExercise.getSetsReps()
        );

        exercise.setYoutubeUrl(
                updatedExercise.getYoutubeUrl()
        );

        exercise.setReelUrl(
                updatedExercise.getReelUrl()
        );

        exercise.setImageUrl(
                updatedExercise.getImageUrl()
        );

        return exerciseRepository.save(exercise);
    }
}


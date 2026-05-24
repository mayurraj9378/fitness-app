
package com.fitzone.backend.workout;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fitzone.backend.user.User;

import jakarta.persistence.*;

@Entity
public class Workout {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    private String workoutName;

    private String category;

    @ManyToOne
    @JsonIgnore
    private User user;

    public Workout() {
    }

    public Workout(
            String workoutName,
            String category,
            User user
    ) {

        this.workoutName = workoutName;

        this.category = category;

        this.user = user;
    }

    public Long getId() {

        return id;
    }

    public String getWorkoutName() {

        return workoutName;
    }

    public void setWorkoutName(String workoutName) {

        this.workoutName = workoutName;
    }

    public String getCategory() {

        return category;
    }

    public void setCategory(String category) {

        this.category = category;
    }

    public User getUser() {

        return user;
    }

    public void setUser(User user) {

        this.user = user;
    }
}


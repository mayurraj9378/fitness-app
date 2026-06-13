package com.fitzone.backend.progress;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fitzone.backend.user.User;

import jakarta.persistence.*;

@Entity
public class Progress {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Double weight;

    private String date;

    @ManyToOne
    @JsonIgnore
    private User user;

    public Progress() {
    }

    public Progress(
            Double weight,
            String date,
            User user
    ) {
        this.weight = weight;
        this.date = date;
        this.user = user;
    }

    public Long getId() {
        return id;
    }

    public Double getWeight() {
        return weight;
    }

    public void setWeight(Double weight) {
        this.weight = weight;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
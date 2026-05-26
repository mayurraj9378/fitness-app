package com.fitzone.backend.exercise;

import jakarta.persistence.*;

@Entity
public class Exercise {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    private String name;

    private String category;

    @Column(length = 1000)
    private String description;

    private String difficulty;

    private String setsReps;

    private String youtubeUrl;

    private String reelUrl;

    private String imageUrl;

    public Exercise() {
    }

    public Exercise(
            String name,
            String category,
            String description,
            String difficulty,
            String setsReps,
            String youtubeUrl,
            String reelUrl,
            String imageUrl
    ) {

        this.name = name;

        this.category = category;

        this.description = description;

        this.difficulty = difficulty;

        this.setsReps = setsReps;

        this.youtubeUrl = youtubeUrl;

        this.reelUrl = reelUrl;

        this.imageUrl = imageUrl;
    }

    public Long getId() {

        return id;
    }

    public String getName() {

        return name;
    }

    public void setName(String name) {

        this.name = name;
    }

    public String getCategory() {

        return category;
    }

    public void setCategory(String category) {

        this.category = category;
    }

    public String getDescription() {

        return description;
    }

    public void setDescription(String description) {

        this.description = description;
    }

    public String getDifficulty() {

        return difficulty;
    }

    public void setDifficulty(String difficulty) {

        this.difficulty = difficulty;
    }

    public String getSetsReps() {

        return setsReps;
    }

    public void setSetsReps(String setsReps) {

        this.setsReps = setsReps;
    }

    public String getYoutubeUrl() {

        return youtubeUrl;
    }

    public void setYoutubeUrl(String youtubeUrl) {

        this.youtubeUrl = youtubeUrl;
    }

    public String getReelUrl() {

        return reelUrl;
    }

    public void setReelUrl(String reelUrl) {

        this.reelUrl = reelUrl;
    }

    public String getImageUrl() {

        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {

        this.imageUrl = imageUrl;
    }
}
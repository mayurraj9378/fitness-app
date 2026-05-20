
package com.fitzone.backend.model;

public class Exercise {

    private String name;
    private String category;

    public Exercise(String name, String category) {
        this.name = name;
        this.category = category;
    }

    public String getName() {
        return name;
    }

    public String getCategory() {
        return category;
    }
}


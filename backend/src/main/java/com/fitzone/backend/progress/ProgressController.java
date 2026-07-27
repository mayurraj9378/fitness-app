package com.fitzone.backend.progress;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/progress")
public class ProgressController {

    private final ProgressService progressService;

    public ProgressController(
            ProgressService progressService
    ) {

        this.progressService = progressService;
    }

    @PostMapping
    public Progress saveProgress(
            @RequestBody Progress progress,
            @RequestHeader("Authorization")
            String authHeader
    ) {

        String token =
                authHeader.replace(
                        "Bearer ",
                        ""
                );

        return progressService.saveProgress(
                progress,
                token
        );
    }

    @GetMapping
    public List<Progress> getUserProgress(
            @RequestHeader("Authorization")
            String authHeader
    ) {

        String token =
                authHeader.replace(
                        "Bearer ",
                        ""
                );

        return progressService.getUserProgress(
                token
        );
    }

    @DeleteMapping("/{id}")
    public void deleteProgress(
            @PathVariable Long id
    ) {

        progressService.deleteProgress(id);
    }
}
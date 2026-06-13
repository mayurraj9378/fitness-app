package com.fitzone.backend.progress;

import com.fitzone.backend.user.JwtUtil;
import com.fitzone.backend.user.User;
import com.fitzone.backend.user.UserRepository;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProgressService {

    private final ProgressRepository progressRepository;

    private final UserRepository userRepository;

    public ProgressService(
            ProgressRepository progressRepository,
            UserRepository userRepository
    ) {

        this.progressRepository = progressRepository;
        this.userRepository = userRepository;
    }

    public Progress saveProgress(
            Progress progress,
            String token
    ) {

        String email =
                JwtUtil.extractEmail(token);

        User user =
                userRepository
                        .findByEmail(email)
                        .orElseThrow(() ->
                                new RuntimeException("User not found")
                        );

        progress.setUser(user);

        return progressRepository.save(progress);
    }

    public List<Progress> getUserProgress(
            String token
    ) {

        String email =
                JwtUtil.extractEmail(token);

        User user =
                userRepository
                        .findByEmail(email)
                        .orElseThrow(() ->
                                new RuntimeException("User not found")
                        );

        return progressRepository.findByUser(user);
    }

    public void deleteProgress(
            Long id
    ) {

        progressRepository.deleteById(id);
    }
}
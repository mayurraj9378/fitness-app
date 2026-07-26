package com.fitzone.backend.user;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;

    private final BCryptPasswordEncoder passwordEncoder =
            new BCryptPasswordEncoder();

    public UserService(UserRepository userRepository) {

        this.userRepository = userRepository;
    }

    public User registerUser(User user) {

        // Name Validation
        if (user.getName() == null || user.getName().trim().isEmpty()) {
            throw new RuntimeException("Name is required");
        }

        // Email Validation
        if (user.getEmail() == null || user.getEmail().trim().isEmpty()) {
            throw new RuntimeException("Email is required");
        }

        // Basic Email Format Validation
        if (!user.getEmail().matches("^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$")) {
            throw new RuntimeException("Invalid email format");
        }

        // Duplicate Email Check
        if (userRepository.existsByEmail(user.getEmail())) {
            throw new RuntimeException("Email is already registered");
        }

        // Password Validation
        if (user.getPassword() == null || user.getPassword().length() < 8) {
            throw new RuntimeException("Password must be at least 8 characters");
        }

        boolean hasUppercase =
                user.getPassword().matches(".*[A-Z].*");

        boolean hasNumber =
                user.getPassword().matches(".*\\d.*");

        boolean hasSpecial =
                user.getPassword().matches(".*[!@#$%^&*()].*");

        if (!hasUppercase || !hasNumber || !hasSpecial) {

            throw new RuntimeException(
                    "Password must contain uppercase, number and special character"
            );
        }

        // Encrypt Password
        user.setPassword(
                passwordEncoder.encode(user.getPassword())
        );

        return userRepository.save(user);
    }

    public String loginUser(User loginRequest) {

        if (loginRequest.getEmail() == null ||
                loginRequest.getPassword() == null) {

            throw new RuntimeException(
                    "Email and Password are required"
            );
        }

        User user = userRepository
                .findByEmail(loginRequest.getEmail())
                .orElseThrow(() ->
                        new RuntimeException(
                                "Invalid email or password"
                        )
                );

        boolean passwordMatches =
                passwordEncoder.matches(
                        loginRequest.getPassword(),
                        user.getPassword()
                );

        if (!passwordMatches) {

            throw new RuntimeException(
                    "Invalid email or password"
            );
        }

        return JwtUtil.generateToken(
                user.getEmail()
        );
    }

    public User getCurrentUser(String token) {

        String email =
                JwtUtil.extractEmail(token);

        return userRepository
                .findByEmail(email)
                .orElseThrow(() ->
                        new RuntimeException("User not found")
                );
    }
}
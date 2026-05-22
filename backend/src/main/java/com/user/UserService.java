
package com.fitzone.backend.user;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;

    private final BCryptPasswordEncoder passwordEncoder =
            new BCryptPasswordEncoder();

    public UserService(
            UserRepository userRepository
    ) {

        this.userRepository = userRepository;
    }

    public User registerUser(
            User user
    ) {

        if (user.getPassword().length() < 8) {

            throw new RuntimeException(
                    "Password must be at least 8 characters"
            );
        }

        boolean hasUppercase =
                user.getPassword().matches(".*[A-Z].*");

        boolean hasNumber =
                user.getPassword().matches(".*\\d.*");

        boolean hasSpecial =
                user.getPassword().matches(".*[!@#$%^&*()].*");

        if (
                !hasUppercase ||
                !hasNumber ||
                !hasSpecial
        ) {

            throw new RuntimeException(
                    "Password must contain uppercase, number and special character"
            );
        }

        String encryptedPassword =
                passwordEncoder.encode(user.getPassword());

        user.setPassword(encryptedPassword);

        return userRepository.save(user);
    }

    public String loginUser(
            User loginRequest
    ) {

        User user =
                userRepository
                        .findByEmail(loginRequest.getEmail())
                        .orElseThrow(() ->
                                new RuntimeException("User not found")
                        );

        boolean passwordMatches =
                passwordEncoder.matches(
                        loginRequest.getPassword(),
                        user.getPassword()
                );

        if (!passwordMatches) {

            throw new RuntimeException(
                    "Invalid password"
            );
        }

        return "Login Successful";
    }
}


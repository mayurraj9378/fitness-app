package com.fitzone.backend.user;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class UserController {

    private final UserService userService;

    public UserController(
            UserService userService
    ) {

        this.userService = userService;
    }

    @PostMapping("/register")
    public User registerUser(
            @RequestBody User user
    ) {

        return userService.registerUser(user);
    }

    @PostMapping("/login")
    public String loginUser(
            @RequestBody User user
    ) {

        return userService.loginUser(user);
    }

    @GetMapping("/me")
    public UserDTO getCurrentUser(
            @RequestHeader("Authorization")
            String authHeader
    ) {

        String token =
                authHeader.replace(
                        "Bearer ",
                        ""
                );

        User user =
                userService.getCurrentUser(token);

        return new UserDTO(
                user.getId(),
                user.getName(),
                user.getEmail()
        );
    }
}
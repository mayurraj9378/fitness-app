package com.fitzone.backend.config;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Map;

@RestController
public class DebugCorsController {

    private final CorsConfigurationSource corsConfigurationSource;

    public DebugCorsController(
            CorsConfigurationSource corsConfigurationSource
    ) {
        this.corsConfigurationSource = corsConfigurationSource;
    }

    @GetMapping("/debug-cors")
    public Map<String, Object> debugCors() {

        CorsConfiguration config = null;

        if (corsConfigurationSource instanceof UrlBasedCorsConfigurationSource urlBased) {
            config = urlBased.getCorsConfigurations().get("/**");
        }

        if (config == null) {
            return Map.of(
                    "beanType", corsConfigurationSource.getClass().getName(),
                    "note", "Could not read /** config directly"
            );
        }

        return Map.of(
                "allowedOriginPatterns", config.getAllowedOriginPatterns(),
                "allowedOrigins", String.valueOf(config.getAllowedOrigins()),
                "allowedMethods", config.getAllowedMethods(),
                "allowCredentials", String.valueOf(config.getAllowCredentials())
        );
    }
}
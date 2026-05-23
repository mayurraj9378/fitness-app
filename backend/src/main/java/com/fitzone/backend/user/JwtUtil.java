
package com.fitzone.backend.user;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

import java.security.Key;
import java.util.Date;

public class JwtUtil {

    private static final Key key =
            Keys.secretKeyFor(
                    SignatureAlgorithm.HS256
            );

    public static String generateToken(
            String email
    ) {

        return Jwts.builder()

                .setSubject(email)

                .setIssuedAt(new Date())

                .setExpiration(
                        new Date(
                                System.currentTimeMillis()
                                        + 1000 * 60 * 60
                        )
                )

                .signWith(key)

                .compact();
    }

    public static String extractEmail(
            String token
    ) {

        Claims claims =
                Jwts.parserBuilder()

                        .setSigningKey(key)

                        .build()

                        .parseClaimsJws(token)

                        .getBody();

        return claims.getSubject();
    }
}


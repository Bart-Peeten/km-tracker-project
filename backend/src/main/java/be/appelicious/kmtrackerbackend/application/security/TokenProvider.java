package be.appelicious.kmtrackerbackend.application.security;

public interface TokenProvider {

    String generateToken(String username);
    String extractUsername(String token);
    boolean isTokenValid(String token);
}

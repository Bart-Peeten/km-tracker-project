package be.appelicious.kmtrackerbackend.domain.repository;

import be.appelicious.kmtrackerbackend.domain.model.User;

import java.util.Optional;

public interface UserRepository {

    User save(User user);
    Optional<User> findByUsername(String username);
    Optional<User> findByEmail(String email);
}

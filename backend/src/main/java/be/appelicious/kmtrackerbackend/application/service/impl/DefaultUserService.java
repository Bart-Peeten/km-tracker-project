package be.appelicious.kmtrackerbackend.application.service.impl;

import be.appelicious.kmtrackerbackend.application.dto.RegisterRequest;
import be.appelicious.kmtrackerbackend.domain.model.User;
import be.appelicious.kmtrackerbackend.domain.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class DefaultUserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public User register(RegisterRequest request) {
        if (userRepository.findByUsername(request.getUsername()).isPresent()) {
            throw new RuntimeException("Username already exists");
        }
        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            throw new RuntimeException("Email already exists");
        }
        String encodedPassword = passwordEncoder.encode(request.getPassword());
        User user = User.create(request.getUsername(), request.getEmail(), encodedPassword, "USER");
        return userRepository.save(user);
    }
}

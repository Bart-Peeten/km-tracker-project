package be.appelicious.kmtrackerbackend.domain.service.impl;

import be.appelicious.kmtrackerbackend.domain.model.User;
import be.appelicious.kmtrackerbackend.domain.repository.UserRepository;
import be.appelicious.kmtrackerbackend.domain.service.DomainUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class DefaultDomainUserService implements DomainUserService {

    private final UserRepository userRepository;

    @Override
    public User findByUsername(final String username) {
        return userRepository.findByUsername(username)
                .orElse(null);
    }
}

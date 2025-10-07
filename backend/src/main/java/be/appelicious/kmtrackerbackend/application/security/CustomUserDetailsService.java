package be.appelicious.kmtrackerbackend.application.security;

import be.appelicious.kmtrackerbackend.domain.model.User;
import be.appelicious.kmtrackerbackend.infrastructure.repository.JpaUserRepositoryAdapter;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private final JpaUserRepositoryAdapter userRepository;

    @Override
    public UserDetails loadUserByUsername(final String username) throws UsernameNotFoundException {
        Optional<User> user = userRepository.findByUsername(username);
        if(user.isEmpty()) {
            user = userRepository.findByEmail(username);
        }
        return user.orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }
}

package be.appelicious.kmtrackerbackend.domain.model;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class User {
    private final Long id;
    private final String username;
    private final String email;
    private final String password;
    private final String role;

    public static User create(String username, String email, String encodedPassword, String role) {
        return new User(null, username, email, encodedPassword, role);
    }

    public User withId(Long id) {
        return new User(id, this.username, this.email, this.password, this.role);
    }
}

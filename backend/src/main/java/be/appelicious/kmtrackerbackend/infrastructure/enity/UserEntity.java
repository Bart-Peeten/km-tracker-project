package be.appelicious.kmtrackerbackend.infrastructure.enity;

import be.appelicious.kmtrackerbackend.domain.model.User;
import jakarta.persistence.*;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "users")
@NoArgsConstructor
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String email;
    private String password;
    private String role;

    public UserEntity(User user) {
        this.id = user.getId();
        this.username = user.getUsername();
        this.email = user.getEmail();
        this.password = user.getPassword();
        this.role = user.getRole();
    }

    public User toDomain() {
        User user = User.create(username, email, password, role);
        return id != null ? user.withId(id) : user;
    }
}

package be.appelicious.kmtrackerbackend.web.controller;

import be.appelicious.kmtrackerbackend.domain.model.User;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    @GetMapping("/current")
    public ResponseEntity<String> getCurrentUser(@AuthenticationPrincipal User user) {
        return ResponseEntity.ok(user.getUsername());
    }
}

package be.appelicious.kmtrackerbackend.application.dto;

import lombok.Value;

@Value
public class RegisterRequest {

    String username;
    String email;
    String password;
}

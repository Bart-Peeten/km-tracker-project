package be.appelicious.kmtrackerbackend.application.dto;

import lombok.Value;

@Value
public class LoginRequest {

    String username;
    String password;
}

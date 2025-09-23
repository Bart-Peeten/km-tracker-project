package be.appelicious.kmtrackerbackend.domain.service;

import be.appelicious.kmtrackerbackend.domain.model.User;

public interface DomainUserService {

    User findByUsername(String username);
}

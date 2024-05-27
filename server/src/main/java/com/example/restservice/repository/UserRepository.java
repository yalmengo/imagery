package com.example.restservice.repository;

import com.example.restservice.model.User;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // Additional methods for custom queries if needed
    Optional<User> findByEmail(String email);
}

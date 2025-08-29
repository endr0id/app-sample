package com.example.demo.application.services

import com.example.demo.domain.model.User
import com.example.demo.domain.repository.UserRepository
import org.springframework.stereotype.Service

@Service
class UserService(
    private val userRepository: UserRepository
) {
    fun getAllUsers(): List<User> {
        return userRepository.findAll()
    }
}
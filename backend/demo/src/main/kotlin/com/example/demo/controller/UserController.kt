package com.example.demo.controller

import com.example.demo.application.services.UserService
import com.example.demo.domain.model.User
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/users")
class UserController(
    private val userService: UserService
) {
    @GetMapping
    fun getAllUsers(): List<User> {
        return userService.getAllUsers()
    }
}
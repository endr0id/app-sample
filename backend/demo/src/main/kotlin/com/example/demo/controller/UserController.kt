package com.example.demo.controller

import com.example.demo.application.services.UserService
import com.example.demo.application.dto.response.user.UserResponseDTO
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.bind.annotation.PathVariable

@RestController
@RequestMapping("/users")
class UserController(
    private val userService: UserService
) {
    @GetMapping
    fun getAllUsers(): ResponseEntity<List<UserResponseDTO>> {
        val users = userService.getAllUsers().map { user ->
            UserResponseDTO(user.id, user.name, user.email)
        }
        return ResponseEntity.ok(users)
    }

    @GetMapping("/{id}")
    fun getUser(@PathVariable id: Long): ResponseEntity<UserResponseDTO> {
        val user = userService.getUser(id)?.let { UserResponseDTO(it.id, it.name, it.email) }
        return user?.let { ResponseEntity.ok(user) } ?: ResponseEntity.notFound().build()
    }
}
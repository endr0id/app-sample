package com.example.demo.controller

import com.example.demo.application.dto.ApiResponse
import com.example.demo.application.dto.response.user.UserResponseDTO
import com.example.demo.application.mapper.ApiResponseMapper
import com.example.demo.application.mapper.toResponseDTO
import com.example.demo.application.mapper.toResponseDTOList
import com.example.demo.application.services.UserService
import jakarta.validation.constraints.Min
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/users")
class UserController(
    private val userService: UserService
) {
    @GetMapping
    fun getAllUsers(): ResponseEntity<ApiResponse<List<UserResponseDTO>>> {
        val users = userService.getAllUsers().toResponseDTOList()
        return ResponseEntity.ok(ApiResponseMapper.wrap(users))
    }

    @GetMapping("/{id}")
    fun getUser(@PathVariable @Min(1) id: Long): ResponseEntity<ApiResponse<UserResponseDTO>> {
        val user = userService.getUser(id)?.toResponseDTO()
        return user?.let { ResponseEntity.ok(ApiResponseMapper.wrap(user)) } ?: ResponseEntity.notFound().build()
    }
}
package com.example.demo.application.mapper

import com.example.demo.application.dto.response.user.UserResponseDTO
import com.example.demo.domain.model.User

fun User.toResponseDTO(): UserResponseDTO =
    UserResponseDTO(
        id = this.id,
        name = this.name,
        email = this.email
    )

fun List<User>.toResponseDTOList(): List<UserResponseDTO> =
    this.map { it.toResponseDTO() }
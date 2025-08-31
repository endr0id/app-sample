package com.example.demo.application.dto.request.user

import jakarta.validation.constraints.NotNull

data class UserIdRequestDTO (
    @field:NotNull
    val id: Long
)
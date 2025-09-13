package com.example.demo.application.mapper

import com.example.demo.application.dto.ApiResponse

object ApiResponseMapper {
    fun <T> wrap(data: T): ApiResponse<T> {
        return ApiResponse(data)
    }
}
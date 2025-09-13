package com.example.demo.mapper

import com.example.demo.application.dto.response.user.UserResponseDTO
import com.example.demo.application.mapper.toResponseDTO
import com.example.demo.application.mapper.toResponseDTOList
import com.example.demo.domain.model.User
import org.junit.jupiter.api.DisplayName
import kotlin.test.Test
import kotlin.test.assertEquals

@DisplayName("User DTO変換用のMapperテスト")
class UserMapperTest {

    @Test
    @DisplayName("UserをUserResponseDTOに正しく変換されること")
    fun `toResponseDTO converts User to UserResponseDTO`() {
        // Arrange
        val user = User(id = 1L, name = "John Doe", email = "john_doe@example.com")

        // Act
        val dto: UserResponseDTO = user.toResponseDTO()

        // Assert
        assertEquals(user.id, dto.id)
        assertEquals(user.name, dto.name)
        assertEquals(user.email, dto.email)
    }

    @Test
    @DisplayName("List<User>をList<UserResponseDTO>に正しく変換されること")
    fun `toResponseDTOList converts a User list to a UserResponseDTOList`() {
        // Arrange
        val users = listOf(
            User(id = 1L, name = "John Doe", email = "john_doe@example.com"),
            User(id = 2L, name = "Jane Doe", email = "jane_doe@example.com")
        )

        // Act
        val dto = users.toResponseDTOList()

        // Assert
        assertEquals(users.size, dto.size)
        assertEquals(users[0].id, dto[0].id)
        assertEquals(users[0].name, dto[0].name)
        assertEquals(users[0].email, dto[0].email)
        assertEquals(users[1].id, dto[1].id)
        assertEquals(users[1].name, dto[1].name)
        assertEquals(users[1].email, dto[1].email)
    }
}
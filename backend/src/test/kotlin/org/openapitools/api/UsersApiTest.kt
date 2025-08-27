package org.openapitools.api

import org.openapitools.model.User
import org.junit.jupiter.api.Test
import org.springframework.http.ResponseEntity

class UsersApiTest {

    private val api: UsersApiController = UsersApiController()

    /**
     * To test UsersApiController.usersIdGet
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    fun usersIdGetTest() {
        val id: kotlin.Int = TODO()
        val response: ResponseEntity<User> = api.usersIdGet(id)

        // TODO: test validations
    }
}

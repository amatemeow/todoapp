package app.todo.models

import kotlinx.datetime.*
import kotlinx.serialization.Serializable
import kotlinx.serialization.Transient
import java.util.UUID

@Serializable
data class Note(
    var title: String,
    var description: String,
    val id: String = UUID.randomUUID().toString(),
    var important: Boolean = false,
    val timeUnit: TimeUnit
)

val noteStorage = mutableListOf<Note>(
    Note(
        title = "Some Important Task",
        description = "Yeah, should better do it fast!",
        timeUnit = TimeUnit()
    ),
    Note(
        title = "Some Other Important Task",
        description = "Yeah, should better do it even faster!",
        timeUnit = TimeUnit()
    )
)
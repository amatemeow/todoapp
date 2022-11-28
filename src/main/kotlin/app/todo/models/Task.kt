package app.todo.models

import kotlinx.datetime.*
import kotlinx.serialization.Serializable
import kotlinx.serialization.Transient
import java.util.UUID

@Serializable
data class Task(
    var title: String,
    var description: String,
    val id: String = UUID.randomUUID().toString(),
    var done: Boolean = false,
    @Transient
    val dtCreated: LocalDateTime = Clock.System.now().toLocalDateTime(TimeZone.currentSystemDefault()),
    var time: String = "${dtCreated.hour}:${dtCreated.minute}",
    var date: LocalDate = dtCreated.date,
    var muted: Boolean = false
)

val taskStorage = mutableListOf<Task>(
    Task(
        title = "Some Important Task",
        description = "Yeah, should better do it fast!"
    ),
    Task(
        title = "Some Other Important Task",
        description = "Yeah, should better do it even faster!",
        muted = true
    )
)
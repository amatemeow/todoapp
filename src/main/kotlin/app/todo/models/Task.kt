package app.todo.models

import kotlinx.datetime.*
import kotlinx.serialization.Serializable
import java.util.UUID

@Serializable
data class Task(
    var title: String,
    var description: String,
    val id: String = UUID.randomUUID().toString(),
    var done: Boolean = false,
    var timeUnit: TimeUnit,
    var muted: Boolean = false,
    var notifyHoursBefore: Int = 0
)

val taskStorage = mutableListOf<Task>(
    Task(
        title = "Some Important Task",
        description = "Yeah, should better do it fast!",
        timeUnit = TimeUnit(Clock.System.now())
    ),
    Task(
        title = "Some Other Important Task",
        description = "Yeah, should better do it even faster!",
        timeUnit = TimeUnit(instant = Clock.System.now(), hour = 9, minute = 5)
    )
)
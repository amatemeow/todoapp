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
    @Transient
    val dtCreated: LocalDateTime = Clock.System.now().toLocalDateTime(TimeZone.currentSystemDefault()),
    val time: String = String.format("%02d:%02d", dtCreated.hour, dtCreated.minute),
    val date: LocalDate = dtCreated.date
)

val noteStorage = mutableListOf<Task>(
    Task(
        title = "Some Important Task",
        description = "Yeah, should better do it fast!"
    ),
    Task(
        title = "Some Other Important Task",
        description = "Yeah, should better do it even faster!"
    )
)
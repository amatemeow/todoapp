package app.todo.models

import kotlinx.datetime.*
import kotlinx.serialization.Serializable
import kotlinx.serialization.Transient

@Serializable
data class Day(
    @Transient
    var datetime: LocalDateTime = Clock.System.now().toLocalDateTime(TimeZone.currentSystemDefault()),
    val date: LocalDate = datetime.date,
    val ofWeek: String = date.dayOfWeek.toString(),
    val ofMonth: Int = date.dayOfMonth,
    val month: Int = date.monthNumber,
    val year: Int = date.year
)

val dayStorage = mutableListOf<Day>(
    Day(date = Clock.System.now().toLocalDateTime(TimeZone.currentSystemDefault()).date)
)

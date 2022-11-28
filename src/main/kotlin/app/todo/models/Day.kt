package app.todo.models

import kotlinx.datetime.*
import kotlinx.serialization.Serializable

@Serializable
data class Day(
    val date: LocalDate,
    val ofWeek: DayOfWeek = date.dayOfWeek
)

val dayStorage = mutableListOf<Day>(
    Day(date = Clock.System.now().toLocalDateTime(TimeZone.currentSystemDefault()).date)
)

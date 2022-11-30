package app.todo.models

import kotlinx.datetime.*
import kotlinx.serialization.Serializable
import kotlinx.serialization.Transient

@Serializable
data class TimeUnit(
    @Transient
    var instant: Instant = Clock.System.now(),
    var lDateTime: LocalDateTime = instant.toLocalDateTime(TimeZone.currentSystemDefault()),
    var lDate: LocalDate = lDateTime.date,
    var year: Int = lDate.year,
    var month: Int = lDate.monthNumber,
    var dayOfMonth: Int = lDate.dayOfMonth,
    var hour: Int = lDateTime.hour,
    var minute: Int = lDateTime.minute,
    var dayOfWeek: String = lDate.dayOfWeek.toString()
)

val CALENDAR = mutableListOf<TimeUnit>(
    TimeUnit()
)

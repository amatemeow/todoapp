package app.todo.routes

import app.todo.models.CALENDAR
import app.todo.models.dayStorage
import app.todo.models.TimeUnit
import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import kotlinx.datetime.Clock
import kotlinx.datetime.LocalDate
import kotlinx.datetime.TimeZone
import kotlinx.datetime.toLocalDateTime

fun Route.dayRouting() {
    route("calendar") {
        get {
            if (CALENDAR.isNotEmpty()) {
                call.respond(CALENDAR)
            } else {
                call.respondText("Your calendar is empty!", status = HttpStatusCode.NotFound)
            }
        }
        get("{date?}") {
            var date = call.parameters["date"] ?: return@get call.respondText(
                "Missing date!",
                status = HttpStatusCode.BadRequest
            )
            val instant = Clock.System.now()
            if (date == "today") {
                call.respond(TimeUnit())
            } else {
                try {
                    val day = CALENDAR.find { it.lDate == LocalDate.parse(date) } ?: TimeUnit(lDate = LocalDate.parse(date)
                    )
                    call.respond(day)
                } catch (e: RuntimeException) {
                    return@get call.respondText(
                        "Invalid date!",
                        status = HttpStatusCode.BadRequest
                    )
                }
            }
        }
    }
}
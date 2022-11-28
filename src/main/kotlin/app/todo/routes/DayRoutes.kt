package app.todo.routes

import app.todo.models.Day
import app.todo.models.dayStorage
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
            if (dayStorage.isNotEmpty()) {
                call.respond(dayStorage)
            } else {
                call.respondText("Your calendar is empty!", status = HttpStatusCode.NotFound)
            }
        }
        get("{date?}") {
            var date = call.parameters["date"] ?: return@get call.respondText(
                "Missing date!",
                status = HttpStatusCode.BadRequest
            )
            if (date == "today") {
                date = Clock.System.now().toLocalDateTime(TimeZone.currentSystemDefault()).date.toString()
            }
            try {
                val day = dayStorage.find { it.date == LocalDate.parse(date) } ?: Day(LocalDate.parse(date))
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
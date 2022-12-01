package app.todo.routes

import app.todo.config
import app.todo.config.AppConfig
import app.todo.models.Task
import app.todo.models.taskStorage
import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import kotlinx.coroutines.sync.withLock

fun Route.taskRouting() {
    route("/tasks") {
        get {
            if (taskStorage.isNotEmpty()) {
                call.respond(taskStorage)
            } else {
                call.respondText("Looks like there's nothing left to do!", status = HttpStatusCode.OK)
            }
        }
        get("{id?}") {
            val id = call.parameters["id"] ?: return@get call.respondText(
                "Missing ID!",
                status = HttpStatusCode.BadRequest
            )
            config.mutex.withLock {
                val task = taskStorage.find { it.id == id } ?: return@get call.respondText(
                    "No such task with ID = $id found!",
                    status = HttpStatusCode.NotFound
                )
                call.respond(task)
            }
        }
        post {
            config.mutex.withLock {
                try {
                    val task = call.receive<Task>()
                    val existingTask = taskStorage.find { it.id == task.id }
                    if (existingTask !== null) {
                        taskStorage.set(taskStorage.indexOf(existingTask), task)
                        call.respondText(
                            "Task updated successfully!",
                            status = HttpStatusCode.Created
                        )
                    } else {
                        taskStorage.add(task)
                        call.respondText(
                            "New task added successfully!",
                            status = HttpStatusCode.Created
                        )
                    }
                } catch (e: ContentTransformationException) {
                    return@post call.respondText(
                        e.message ?: "Invalid content type!",
                        status = HttpStatusCode.BadRequest
                    )
                }
            }
        }
        put {

        }
        delete("{id?}") {
            val id = call.parameters["id"] ?: return@delete call.respondText(
                "Missing ID!",
                status = HttpStatusCode.BadRequest
            )
            config.mutex.withLock {
                if (taskStorage.removeIf { it.id == id }) {
                    call.respondText(
                        "Task deleted successfully!",
                        status = HttpStatusCode.Accepted
                    )
                } else {
                    call.respondText(
                        "No such task with ID = $id found!",
                        status = HttpStatusCode.NotFound
                    )
                }
            }
        }
    }
}
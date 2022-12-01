package app.todo.config

import kotlinx.coroutines.sync.Mutex
import kotlinx.datetime.TimeZone

class AppConfig {
    public val mutex: Mutex = Mutex()
    public val timeZone: TimeZone = TimeZone.currentSystemDefault()
}
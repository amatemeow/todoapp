package app.todo

@Target(AnnotationTarget.FIELD, AnnotationTarget.LOCAL_VARIABLE,
    AnnotationTarget.PROPERTY, AnnotationTarget.VALUE_PARAMETER)
annotation class CurrentTimezone()

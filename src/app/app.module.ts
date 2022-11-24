import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NotesComponent } from './notes/notes.component';
import { NoteComponent } from './note/note.component';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todo/todo.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { CardContextComponent } from './card-context/card-context.component';
import { HeaderContextComponent } from './header-context/header-context.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NotesComponent,
    NoteComponent,
    TodosComponent,
    TodoComponent,
    MainComponent,
    HeaderComponent,
    CardContextComponent,
    HeaderContextComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

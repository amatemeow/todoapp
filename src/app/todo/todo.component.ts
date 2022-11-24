import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../entities/task';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() task!: Task;
  @Input() index!: number;
  @Output() removeEmitter = new EventEmitter<Task>();

  removeRequest(task: Task) {
    this.removeEmitter.emit(task);
  }
}

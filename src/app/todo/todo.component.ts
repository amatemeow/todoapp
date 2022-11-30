import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../entities/task';
import { format } from '../functions/format';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() task!: Task;
  @Input() index!: number;
  @Output() removeEmitter = new EventEmitter<Task>();
  @Output() doneEmitter = new EventEmitter<Task>();

  removeRequest(task: Task) {
    this.removeEmitter.emit(task);
  }

  toggleMute() {
    this.task.muted = !this.task.muted;
    this.updateOrAddRequest(this.task);
  }

  updateOrAddRequest(task: Task) {
    // console.log('todo sent');
    this.doneEmitter.emit(task);
  }

  format(num: number) {
    return format(num, 2);
  }
}

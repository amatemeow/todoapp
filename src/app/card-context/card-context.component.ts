import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../entities/task';

@Component({
  selector: 'app-card-context',
  templateUrl: './card-context.component.html',
  styleUrls: ['./card-context.component.css']
})
export class CardContextComponent {
  @Input() task!: Task;
  @Output() removeEmitter = new EventEmitter<Task>();

  removeRequest(task: Task) {
    this.removeEmitter.emit(task);
  }
}

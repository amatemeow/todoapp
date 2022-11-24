import { Component, Input } from '@angular/core';
import { Task } from '../entities/task';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  taskList: Task[] = [
    {
      time: '09:30',
      title: 'Some Task',
      description: 'Very cool task to do right away!',
      done: false
    },
    {
      time: '15:20',
      title: 'Some Other Task',
      description: 'Very cool another task to do right away!',
      done: false
    },
  ];

  @Input() task!: Task;

  get tasks() {
    return this.taskList;
  }

  removeTask(task: Task) {
    this.taskList.splice(this.taskList.indexOf(task), 1);
  }
}

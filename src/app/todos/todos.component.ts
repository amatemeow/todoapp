import { Component, Inject, Input, OnInit } from '@angular/core';
import { timeInterval } from 'rxjs';
import { DayService } from '../calendar.service';
import { Day } from '../entities/day';
import { Task } from '../entities/task';
import { TimeUnit } from '../entities/timeUnit';
import { sleep } from '../functions/sleep';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  timeUnit!: TimeUnit
  taskList: Task[] = []

  constructor(
    private taskService: TaskService,
    private dayService: DayService) {}

  ngOnInit(): void {
    this.getToday();
    this.getTasks();
  }

  getToday(): void {
    this.dayService.getToday()
    .subscribe(unit => this.timeUnit = unit);
  }

  getTasks(): void {
    this.taskService.getTasks()
    .subscribe(tasks => this.taskList = tasks);
  }

  @Input() task!: Task;

  get tasks() {
    return this.taskList;
  }

  removeTask(task: Task) {
    this.taskList = this.taskList.filter(t => t !== task);
    this.taskService.deleteTask(task.id!).subscribe();
  }

  async updateOrAddTask(task: Task) {
    // console.log('todos sent');
    this.taskService.updateOrAddTask(task).subscribe();
    await sleep(100);
    this.getTasks();
  }
}

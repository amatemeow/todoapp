import { Component, Input, OnInit } from '@angular/core';
import { DayService } from '../calendar.service';
import { Day } from '../entities/day';
import { Task } from '../entities/task';
import { TimeUnit } from '../entities/timeUnit';
import { format } from '../functions/format';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  @Input() task: Task = {} as Task;
  calendar: TimeUnit[] = []
  timeUnit!: TimeUnit;
  hours = new Date().getHours();
  minutes = new Date().getMinutes();

  constructor(public calendarService: DayService) {}

  ngOnInit(): void {
    this.today();
    this.initiateCalendar();
  }

  today() {
    this.calendarService.getToday()
    .subscribe(today => this.timeUnit = today);
  }

  initiateCalendar() {
    this.calendarService.getCalendar()
    .subscribe(clndr => this.calendar = clndr);
  }

  format(num: number) {
    return format(num, 2);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { DayService } from '../day.service';
import { Day } from '../entities/day';
import { Task } from '../entities/task';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  @Input() task?: Task;
  date!: Day;
  hours = new Date().getHours().toFixed(2);
  minutes = new Date().getMinutes().toFixed(2);

  constructor(private calendarService: DayService) {
  }

  ngOnInit(): void {
    this.today();
  }

  today() {
    this.calendarService.getToday()
    .subscribe(today => this.date = today);
  }
}

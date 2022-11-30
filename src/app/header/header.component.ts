import { Component, OnInit } from '@angular/core';
import { DayService } from '../calendar.service';
import { Day } from '../entities/day';
import { TimeUnit } from '../entities/timeUnit';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  timeUnit!: TimeUnit;

  constructor(private dayService: DayService) {}

  ngOnInit(): void {
    this.getToday();
  }

  getToday(): void {
    this.dayService.getToday()
    .subscribe(unit => this.timeUnit = unit);
  }
}

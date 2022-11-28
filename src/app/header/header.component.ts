import { Component, OnInit } from '@angular/core';
import { DayService } from '../day.service';
import { Day } from '../entities/day';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  day!: Day;

  constructor(private dayService: DayService) {}

  ngOnInit(): void {
    this.getToday();
  }

  getToday(): void {
    this.dayService.getToday()
    .subscribe(day => this.day = day);
  }
}

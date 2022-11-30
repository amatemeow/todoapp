import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Day } from './entities/day';
import { Observable } from 'rxjs';
import { TimeUnit } from './entities/timeUnit';

@Injectable({
  providedIn: 'root'
})
export class DayService {
  private calendarUrl = 'http://localhost:9085/calendar'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  hours = [24];
  minutes = [60];
  notifies = [27];

  constructor(
    private http: HttpClient) {
      for (let index = 0; index < 24; index++) {
        this.hours[index] = 24 - index;
      }
      for (let index = 0; index < 24; index++) {
        this.notifies[index] = 24 - index;
      }
      this.notifies[24] = 0.5;
      this.notifies[25] = 0.25;
      this.notifies[26] = 0;
      for (let index = 0; index < 60; index++) {
        this.minutes[index] = 59 - index;
      }
    }

    getToday(): Observable<TimeUnit> {
      return this.http.get<TimeUnit>(this.calendarUrl + '/today');
    }

    getCalendar(): Observable<TimeUnit[]> {
      return this.http.get<TimeUnit[]>(this.calendarUrl);
    }
}

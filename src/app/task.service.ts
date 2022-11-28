import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from './entities/task';
import { Observable } from 'rxjs';
import { Day } from './entities/day';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasksUrl = 'http://localhost:9085/tasks'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) {}

    getTasks(): Observable<Task[]> {
      return this.http.get<Task[]>(this.tasksUrl);
    }

    updateOrAddTask(task: Task): Observable<any> {
      // console.log('post sent');
      return this.http.post(this.tasksUrl, task, this.httpOptions).pipe();
    }

    deleteTask(id: string): Observable<Task> {
      const url = this.tasksUrl + '/' + id;

      return this.http.delete<Task>(url, this.httpOptions).pipe();
    }
}

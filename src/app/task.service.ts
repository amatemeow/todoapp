import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from './entities/task';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Day } from './entities/day';
import { MessageService } from './message.service';
import { messageIcon } from './types/message-icon';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasksUrl = 'http://localhost:9085/tasks'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {}

  private log(message: string, icon: messageIcon) {
    this.messageService.set(message, icon);
  }

  private handleError<T>(operation = 'operation', icon: messageIcon, result?: T) {
    return (error: any): Observable<T> => {
      // console.error(error.error);
      this.log(error.error.text || error.error || error.message, icon);

      return of(result as T);
    }
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl)
    .pipe(
      catchError(this.handleError<Task[]>('getTasks', 'fail', []))
    );
  }

  updateOrAddTask(task: Task): Observable<any> {
    // console.log('post sent');
    return this.http.post(this.tasksUrl, task, this.httpOptions).pipe(
      catchError(this.handleError<Task>('updateOrAddTask', 'success'))
    );
  }

  deleteTask(id: string): Observable<Task> {
    const url = this.tasksUrl + '/' + id;

    return this.http.delete<Task>(url, this.httpOptions).pipe(
      catchError(this.handleError<Task>('deleteTask', 'success'))
    );
  }
}

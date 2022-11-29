import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { Task } from '../entities/task';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-card-context',
  templateUrl: './card-context.component.html',
  styleUrls: ['./card-context.component.css']
})
export class CardContextComponent {
  @Input() task!: Task;
  @Output() removeEmitter = new EventEmitter<Task>();
  @Output() doneEmitter = new EventEmitter<Task>();

  constructor(
    private clipboard: Clipboard,
    private messageService: MessageService) {}

  removeRequest(task: Task) {
    this.removeEmitter.emit(task);
  }

  toggleDone() {
    this.task.done = !this.task.done;
    this.updateOrAddRequest(this.task);
  }

  cloneTask() {
    const newTask = this.task;
    newTask.id = undefined;
    newTask.muted = false;
    newTask.done = false;
    this.updateOrAddRequest(newTask);
  }

  updateOrAddRequest(task: Task) {
    // console.log('context sent');
    this.doneEmitter.emit(task);
  }

  shareTask() {
    this.clipboard.copy(JSON.stringify(this.task, (k,v) => { if(k !== "id" && k !== "muted") return v }, 4));
    this.messageService.set('Task is copied to clipboard!', 'info');
  }
}

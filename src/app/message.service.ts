import { Injectable } from '@angular/core';
import { Message } from './entities/message';
import { sleep } from './functions/sleep';
import { messageIcon } from './types/message-icon';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  message: Message = {text: '', icon: 'info'};
  display: boolean = false;

  constructor() { }

  async set(message: string, icon: messageIcon) {
    this.display = false;
    await sleep(100);
    // console.log(message);
    this.message.text = message;
    this.message.icon = icon;
    this.display = true;
  }

  remove() {
    this.display = false;
    this.message.text = '';
    this.message.icon = 'info';
  }
}

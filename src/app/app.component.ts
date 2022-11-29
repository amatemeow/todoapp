import { Component, Input } from '@angular/core';
import { Display } from './types/display';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../styles.css', '../tailwind.css']
})
export class AppComponent {
  title = 'todoapp';

  display: Display = 'task-edit';

  translateDisplay(display: Display) {
    this.display = display;
  }
}

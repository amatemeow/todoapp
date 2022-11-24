import { Component, EventEmitter, Output } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { Display } from '../types/display';

@Component({
  selector: 'footer',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  @Output() displayEmitter = new EventEmitter<Display>();

  display: Display = 'todos';

  passDisplay(display: Display) {
    this.displayEmitter.emit(display);
    this.display = display;
  }
}

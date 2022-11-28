import { trigger, style, animate, transition } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { Display } from '../types/display';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  @Input() display!: Display;

  get currentDisplay() {
    return this.display;
  }
}

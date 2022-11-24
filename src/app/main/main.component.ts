import { trigger, style, animate, transition } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { Display } from '../types/display';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    trigger('loadSection', [
      transition(':enter', [
        style({opacity: 1}),
        animate('500ms', style({opacity: 0}))
      ]),
      transition(':leave', [
        style({opacity: 0}),
        animate('500ms', style({opacity: 1}))
      ])
    ])
  ]
})
export class MainComponent {
  @Input() display!: Display;

  get currentDisplay() {
    return this.display;
  }
}

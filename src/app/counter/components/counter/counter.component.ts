import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>Counter: {{ counter }}</p>
    <button type="button" (click)="increaseBy()">+1</button>
    <button type="button" (click)="decreaseBy()">-1</button>
    <button type="button" (click)="reset()">Reset</button>
  `,
})
export class CounterComponent {
  public title: string = 'Mi primera app de Angular';
  public counter: number = 10;
  public inc: number = 1;

  increaseBy(inc: number = 1) {
    this.counter += inc;
  }
  decreaseBy(inc: number = 1) {
    this.counter -= inc;
  }
  reset() {
    this.counter = 0;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Mi primera app de Angular';
  public counter: number = 10;
  public inc: number = 1;

  increaseBy(inc: number = 1){
    this.counter += inc;
  }
  decreaseBy(inc: number = 1){
    this.counter -= inc;
  }
  reset(){
    this.counter = 0;
  }
}

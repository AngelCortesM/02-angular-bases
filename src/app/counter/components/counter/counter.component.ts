import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
<h3> Country: {{country}}</h3>
<button (click)="increaseBy(+1)" class="btn btn-warning">+1</button>
<button (click)="increaseBy(-1)">-1</button>
<button (click)="resetCounter()">reload</button>

  `
})

export class CounterComponent  {
  constructor() { }


  public country: number = 10;

  increaseBy(value: number): void {
    this.country += value;

  }

  resetCounter(): void {
    this.country = 10;
  }
}

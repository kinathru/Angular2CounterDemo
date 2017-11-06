import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  private componentName: string;
  private counter: number;
  private username: string;
  private validity: boolean;

  constructor() {
    this.componentName = 'Counter Component';
    this.counter = 0;
  }

  ngOnInit() {
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }
}

import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-custom-event-binding',
  templateUrl: './custom-event-binding.component.html',
  styleUrls: ['./custom-event-binding.component.css']
})
export class CustomEventBindingComponent implements OnInit {

  @Output('clickable') clicked = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  onClicked() {
    this.clicked.emit('It works!!!');
  }

}

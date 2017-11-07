import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  private stringInterpExample: string;
  private defaultInputValue: string;

  constructor() {
    this.stringInterpExample = ' String Interpolation ';
    this.defaultInputValue = 'Default Value';
  }

  ngOnInit() {
  }

  onTest() {
    return true;
  }

}

import { Component, OnInit } from '@angular/core';
import { UiPlaceholder, UiReadonly } from './decorators';

@UiPlaceholder
@UiReadonly
@Component({
  selector: 'app-input',
  inputs: ['readonly', 'placeholder'],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log(this.readonly);
    console.log(this.placeholder);
  }
}
export interface InputComponent extends UiPlaceholder {}
export interface InputComponent extends UiReadonly {}

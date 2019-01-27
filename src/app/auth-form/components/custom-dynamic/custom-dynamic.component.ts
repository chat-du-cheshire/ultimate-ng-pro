import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'custom-dynamic',
  template: `
    <p>{{text}}</p>
    <div><button (click)="clickEvt.emit(now)">Output me!</button></div>
  `,
  styles: [`
    :host {
      padding: 0 40px;
    }
  `]
})
export class CustomDynamicComponent implements OnInit {

  text = 'custom-dynamic works!'

  get now() {
    return Date.now();
  }

  @Output() clickEvt = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}

import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'auth-remember',
  template: `
    <label>
      <input type="checkbox" (change)="onChange($event.target.checked)"> Remember me!
    </label>
  `,
  styles: []
})
export class AuthRememberComponent implements OnInit {

  @Output() onRemember = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  onChange(value: boolean) {
    this.onRemember.emit(value);
  }

}

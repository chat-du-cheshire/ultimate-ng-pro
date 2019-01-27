import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'auth-message',
  template: `
    <p>You will be logged in for {{days}} days</p>
  `,
  styles: []
})
export class AuthMessageComponent implements OnInit {

  days = 30;
  constructor() { }

  ngOnInit() {
  }

}

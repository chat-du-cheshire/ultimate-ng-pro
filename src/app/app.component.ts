import { Component } from '@angular/core';
import {User} from './auth-form/interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  remember = false;

  onRemember(value: boolean) {
    this.remember = value;
  }

  createUser(user: User) {
    console.log('Create account', user);
  }

  loginUser(user: User) {
    console.log('Login', user, this.remember);
  }

}

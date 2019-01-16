import {Component, Output, EventEmitter, ContentChild, AfterViewInit, AfterContentInit} from '@angular/core';
import {User} from '../../interfaces/user';
import {AuthRememberComponent} from '../auth-remember/auth-remember.component';

@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements AfterContentInit{

  showMessage = false;

  @ContentChild(AuthRememberComponent) authRemember: AuthRememberComponent;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

  ngAfterContentInit() {
    if (this.authRemember) {
      this.authRemember.onRemember.subscribe((value) => this.showMessage = value);
    }
  }
}

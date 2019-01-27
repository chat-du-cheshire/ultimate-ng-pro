import {Component, Output, EventEmitter, AfterContentInit, ContentChild, ViewChild, AfterViewInit} from '@angular/core';
import {User} from '../../interfaces/user';
import {AuthRememberComponent} from '../auth-remember/auth-remember.component';
import {combineLatest} from 'rxjs';
import {AuthMessageComponent} from '../auth-message/auth-message.component';

@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {

  showMessage = false;

  @ContentChild(AuthRememberComponent) authRemember: AuthRememberComponent;

  @ViewChild(AuthMessageComponent) message: AuthMessageComponent;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

  ngAfterViewInit() {

  }

  ngAfterContentInit() {
    if (this.message) {
      this.message.days = 7;
    }

    if (this.authRemember) {
      this.authRemember.onRemember.subscribe((value) => this.showMessage = value);
    }


  }
}

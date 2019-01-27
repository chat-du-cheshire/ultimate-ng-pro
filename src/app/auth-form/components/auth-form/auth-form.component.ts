import {
  Component,
  Output,
  EventEmitter,
  AfterContentInit,
  ContentChild,
  ViewChild,
  AfterViewInit,
  QueryList,
  ViewChildren, ChangeDetectorRef
} from '@angular/core';
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

  @ViewChildren(AuthMessageComponent) messages: QueryList<AuthMessageComponent>;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  constructor(private cdr: ChangeDetectorRef) {
  }


  onSubmit(value: User) {
    this.submitted.emit(value);
  }

  ngAfterViewInit() {
    // !!! Available only in AfterViewInit
    if (this.messages) {
      this.messages.forEach((msgCmp) => {
        msgCmp.days = 7;
        this.cdr.detectChanges(); // Tell Angular that he needs to detect changes
      });
    }
  }

  ngAfterContentInit() {
    if (this.authRemember) {
      this.authRemember.onRemember.subscribe((value) => this.showMessage = value);
    }


  }
}

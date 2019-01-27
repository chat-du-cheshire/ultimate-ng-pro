import {Component, Output, EventEmitter, AfterContentInit, ContentChildren, QueryList} from '@angular/core';
import {User} from '../../interfaces/user';
import {AuthRememberComponent} from '../auth-remember/auth-remember.component';
import {combineLatest} from 'rxjs';

@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements AfterContentInit {

  showMessage = false;

  @ContentChildren(AuthRememberComponent) authRemember: QueryList<AuthRememberComponent>;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

  ngAfterContentInit() {
    if (this.authRemember.length) {
      const onRememberAll = this.authRemember.map((item) => item.onRemember);
      combineLatest(...onRememberAll).subscribe((values) => this.showMessage = values.every((val) => !!val));
    }
  }
}

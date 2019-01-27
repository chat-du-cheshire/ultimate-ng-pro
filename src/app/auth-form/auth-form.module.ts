import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import {FormsModule} from '@angular/forms';
import { AuthRememberComponent } from './components/auth-remember/auth-remember.component';
import { AuthMessageComponent } from './components/auth-message/auth-message.component';

@NgModule({
  declarations: [AuthFormComponent, AuthRememberComponent, AuthMessageComponent],
  exports: [AuthFormComponent, AuthRememberComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AuthFormModule { }

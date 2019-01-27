import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import {FormsModule} from '@angular/forms';
import { AuthRememberComponent } from './components/auth-remember/auth-remember.component';
import { AuthMessageComponent } from './components/auth-message/auth-message.component';
import { CustomDynamicComponent } from './components/custom-dynamic/custom-dynamic.component';

@NgModule({
  declarations: [AuthFormComponent, AuthRememberComponent, AuthMessageComponent, CustomDynamicComponent],
  exports: [AuthFormComponent, AuthRememberComponent],
  entryComponents: [CustomDynamicComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AuthFormModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [AuthFormComponent],
  exports: [AuthFormComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AuthFormModule { }

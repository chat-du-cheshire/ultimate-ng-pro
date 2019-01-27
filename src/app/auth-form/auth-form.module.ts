import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import {FormsModule} from '@angular/forms';
import { AuthRememberComponent } from './components/auth-remember/auth-remember.component';
import { AuthMessageComponent } from './components/auth-message/auth-message.component';
import { CustomDynamicComponent } from './components/custom-dynamic/custom-dynamic.component';
import { VENoneComponent } from './components/ViewEncapsulation/venone.component';
import { VeshadowdomComponent } from './components/ViewEncapsulation/veshadowdom.component';
import {VeemulatedComponent} from './components/ViewEncapsulation/veemulated.component';
import { CdOnPushComponent } from './components/cd-on-push/cd-on-push.component';

@NgModule({
  declarations: [AuthFormComponent, AuthRememberComponent, AuthMessageComponent, CustomDynamicComponent, VENoneComponent, VeemulatedComponent, VeshadowdomComponent, CdOnPushComponent],
  exports: [AuthFormComponent, AuthRememberComponent, VENoneComponent, VeemulatedComponent, VeshadowdomComponent, CdOnPushComponent],
  entryComponents: [CustomDynamicComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AuthFormModule { }

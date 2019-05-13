import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterComponent } from './components/router/router.component';
import {NgxProRouterRoutingModule} from './router-routing.module';
import {MailModule} from './modules/mail/mail.module';

@NgModule({
  declarations: [RouterComponent],
  imports: [
    CommonModule,
    MailModule,
    NgxProRouterRoutingModule
  ]
})
export class NgxProRouterModule { }

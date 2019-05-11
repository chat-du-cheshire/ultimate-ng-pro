import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {RouterComponent} from './components/router/router.component';
import {ROUTES} from './modules/mail/mail.module';

const routes: Route[] = [{
  path: 'router',
  component: RouterComponent,
  children: [
    ...ROUTES
  ]
}];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class NgxProRouterRoutingModule { }

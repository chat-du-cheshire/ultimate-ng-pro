import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './components/directives/directives.component';
import {Route, RouterModule} from '@angular/router';
import { CreditCardDirective } from './directives/credit-card.directive';

const routes: Route[] = [{
  path: 'directives',
  component: DirectivesComponent
}];

@NgModule({
  declarations: [DirectivesComponent, CreditCardDirective],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DirectivesModule { }

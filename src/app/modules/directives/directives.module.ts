import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './components/directives/directives.component';
import {Route, RouterModule} from '@angular/router';
import { CreditCardDirective } from './directives/credit-card.directive';
import { TooltipDirective } from './directives/tooltip.directive';
import { TooltipContainerComponent } from './components/tooltip-container/tooltip-container.component';
import { MyForDirective } from './directives/my-for.directive';

const routes: Route[] = [{
  path: 'directives',
  component: DirectivesComponent
}];

@NgModule({
  declarations: [DirectivesComponent, CreditCardDirective, TooltipDirective, TooltipContainerComponent, MyForDirective],
  entryComponents: [TooltipContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DirectivesModule { }

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsComponent} from './components/reactive-forms/reactive-forms.component';
import {Route, RouterModule} from '@angular/router';
import { StockInventoryComponent } from './components/stock-inventory/stock-inventory.component';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Route[] = [{
  path: 'reactive-forms',
  component: ReactiveFormsComponent
}];

@NgModule({
  declarations: [ReactiveFormsComponent, StockInventoryComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class NgxProReactiveFormsModule {
}

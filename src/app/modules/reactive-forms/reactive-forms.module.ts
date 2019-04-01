import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsComponent} from './components/reactive-forms/reactive-forms.component';
import {Route, RouterModule} from '@angular/router';
import { StockInventoryComponent } from './components/stock-inventory/stock-inventory.component';
import {ReactiveFormsModule} from '@angular/forms';
import { StockBranchComponent } from './components/stock-branch/stock-branch.component';
import { StockSelectorComponent } from './components/stock-selector/stock-selector.component';
import { StockProductsComponent } from './components/stock-products/stock-products.component';
import {HttpClientModule} from '@angular/common/http';

const routes: Route[] = [{
  path: 'reactive-forms',
  component: ReactiveFormsComponent
}];

@NgModule({
  declarations: [ReactiveFormsComponent, StockInventoryComponent, StockBranchComponent, StockSelectorComponent, StockProductsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class NgxProReactiveFormsModule {
}

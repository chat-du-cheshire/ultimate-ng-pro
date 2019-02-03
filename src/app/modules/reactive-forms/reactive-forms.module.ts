import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsComponent} from './components/reactive-forms/reactive-forms.component';
import {Route, RouterModule} from '@angular/router';

const routes: Route[] = [{
  path: 'reactive-forms',
  component: ReactiveFormsComponent
}];

@NgModule({
  declarations: [ReactiveFormsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class NgxProReactiveFormsModule {
}

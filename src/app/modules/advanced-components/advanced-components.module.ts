import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdvancedComponentsComponent} from './components/advanced-components/advanced-components.component';
import {AuthFormModule} from './modules/auth-form/auth-form.module';
import {Route, RouterModule} from '@angular/router';

const routes: Route[] = [{
  path: 'advanced-components',
  component: AdvancedComponentsComponent
}];

@NgModule({
  declarations: [AdvancedComponentsComponent],
  imports: [
    CommonModule,
    AuthFormModule,
    RouterModule.forChild(routes)
  ]
})
export class AdvancedComponentsModule {
}

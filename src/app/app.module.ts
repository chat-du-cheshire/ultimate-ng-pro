import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {Route, RouterModule} from '@angular/router';
import {AdvancedComponentsModule} from './modules/advanced-components/advanced-components.module';
import {DirectivesModule} from './modules/directives/directives.module';
import {PipesModule} from './modules/pipes/pipes.module';
import {NgxProReactiveFormsModule} from './modules/reactive-forms/reactive-forms.module';
import {NgxProRouterModule} from './modules/router/router.module';

const routes: Route[] = [];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AdvancedComponentsModule,
    DirectivesModule,
    PipesModule,
    NgxProReactiveFormsModule,
    NgxProRouterModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

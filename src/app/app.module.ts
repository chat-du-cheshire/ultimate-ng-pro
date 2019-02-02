import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {Route, RouterModule} from '@angular/router';
import {AdvancedComponentsModule} from './modules/advanced-components/advanced-components.module';
import {DirectivesModule} from './modules/directives/directives.module';
import {PipesModule} from './modules/pipes/pipes.module';

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
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

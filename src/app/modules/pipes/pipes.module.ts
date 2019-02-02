import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesComponent } from './components/pipes/pipes.component';
import {Route, RouterModule} from '@angular/router';
import { ToMbPipe } from './pipes/to-mb.pipe';

const routes: Route[] = [{
  path: 'pipes',
  component: PipesComponent
}];

@NgModule({
  declarations: [PipesComponent, ToMbPipe],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class PipesModule { }

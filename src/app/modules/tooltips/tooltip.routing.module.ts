import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TooltipsComponent } from './tooltips.component';

const routes: Routes = [
  {
    path: '',
    component: TooltipsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TooltipRoutingModule { }

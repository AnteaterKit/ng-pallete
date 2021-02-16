import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UitreeselectComponent } from './uitreeselect.component';

const routes: Routes = [
  {
    path: '',
    component: UitreeselectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UitreeselectRoutingModule { }

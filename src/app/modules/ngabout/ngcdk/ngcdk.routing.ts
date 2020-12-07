import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgcdkComponent } from './ngcdk.component';

const routes: Routes = [
  {
    path: '',
    component: NgcdkComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgCdkRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgmainComponent } from './ngmain.component';

const routes: Routes = [
  {
    path: '',
    component: NgmainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgMainRoutingModule { }

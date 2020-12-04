import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgaboutComponent } from './ngabout.component';

const routes: Routes = [
  {
    path: '',
    component: NgaboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgAboutRoutingModule { }

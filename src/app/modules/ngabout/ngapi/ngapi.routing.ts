import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgapiComponent } from './ngapi.component';

const routes: Routes = [
  {
    path: '',
    component: NgapiComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgApiRoutingModule { }

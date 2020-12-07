import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RxoperatorsComponent } from './rxoperators.component';

const routes: Routes = [
  {
    path: '',
    component: RxoperatorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgRxOperatorsRoutingModule { }

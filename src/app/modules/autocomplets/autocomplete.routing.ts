import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutocompletsComponent } from './autocomplets.component';

const routes: Routes = [
  {
    path: '',
    component: AutocompletsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutocompletsRoutingModule { }

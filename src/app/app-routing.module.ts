import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'buttons',
    loadChildren:  () => import('./modules/buttons/buttons.module').then(x => x.ButtonsModule)
  },
  {
    path: 'inputs',
    loadChildren:  () => import('./modules/input/input.module').then(x => x.InputsModule)
  }
  ,
  {
    path: 'selects',
    loadChildren:  () => import('./modules/selects/selects.module').then(x => x.SelectsModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'check',
    loadChildren:  () => import('./modules/check-list/check-list.module').then(x => x.CheckListModule)
  },
  {
    path: 'uikit',
    loadChildren:  () => import('./modules/ui-kit/ui-kit.module').then(x => x.UiKitModule)
  },
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
  ,
  {
    path: 'autocomplete',
    loadChildren:  () => import('./modules/autocomplets/autocomplets.module').then(x => x.AutocompletsModule)
  }
  ,
  {
    path: 'forms',
    loadChildren:  () => import('./modules/forms/forms.module').then(x => x.FormsModule)
  }
  ,
  {
    path: 'ngabout',
    loadChildren:  () => import('./modules/ngabout/ngabout.module').then(x => x.NgaboutModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

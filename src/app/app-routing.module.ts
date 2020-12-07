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
    children: [
      {
        path: '',
        loadChildren:  () => import('./modules/ngabout/ngabout.module').then(x => x.NgaboutModule),
      },
      {
        path: 'ngmain',
        loadChildren:  () => import('./modules/ngabout/ngmain/ngmain.module').then(x => x.NgmainModule)
      }
      ,
      {
        path: 'ngapi',
        loadChildren:  () => import('./modules/ngabout/ngapi/ngapi.module').then(x => x.NgapiModule)
      }
      ,
      {
        path: 'ngcdk',
        loadChildren:  () => import('./modules/ngabout/ngcdk/ngcdk.module').then(x => x.NgcdkModule)
      }
      ,
      {
        path: 'ngrxjs',
        loadChildren:  () => import('./modules/ngabout/rxjs/rxjs.module').then(x => x.RxjsModule)
      }
      ,
      {
        path: 'rxoperators',
        loadChildren:  () => import('./modules/ngabout/rxoperators/rxoperators.module').then(x => x.RxoperatorsModule)
      }
    ]
  },
  {
    path: 'typo',
    loadChildren:  () => import('./modules/typo/typo.module').then(x => x.TypoModule)
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

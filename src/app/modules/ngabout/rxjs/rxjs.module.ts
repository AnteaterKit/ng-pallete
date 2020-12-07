import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsComponent } from './rxjs.component';
import { NgRxJsRoutingModule } from './rxjs.routing';

@NgModule({
  imports: [
    CommonModule,
    NgRxJsRoutingModule
  ],
  exports: [RxjsComponent],
  declarations: [RxjsComponent]
})
export class RxjsModule { }

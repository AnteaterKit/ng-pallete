import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxoperatorsComponent } from './rxoperators.component';
import { NgRxOperatorsRoutingModule } from './rxoperators.routing';

@NgModule({
  imports: [
    CommonModule,
    NgRxOperatorsRoutingModule
  ],
  exports: [RxoperatorsComponent],
  declarations: [RxoperatorsComponent]
})
export class RxoperatorsModule { }

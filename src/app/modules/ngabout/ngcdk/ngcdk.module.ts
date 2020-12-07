import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgcdkComponent } from './ngcdk.component';
import { NgCdkRoutingModule } from './ngcdk.routing';

@NgModule({
  imports: [
    CommonModule,
    NgCdkRoutingModule
  ],
  exports: [NgcdkComponent],
  declarations: [NgcdkComponent]
})
export class NgcdkModule { }

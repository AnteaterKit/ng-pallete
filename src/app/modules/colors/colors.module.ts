import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorsComponent } from './colors.component';
import { ColorRoutingModule } from './colors.routings';

@NgModule({
  imports: [
    CommonModule,
    ColorRoutingModule
  ],
  exports: [ColorsComponent],
  declarations: [ColorsComponent]
})
export class ColorsModule { }

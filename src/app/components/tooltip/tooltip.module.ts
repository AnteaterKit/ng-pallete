import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipComponent, TooltipDirective } from './tooltip.component';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  imports: [
    CommonModule,
    OverlayModule
  ],
  exports: [TooltipComponent, TooltipDirective],
  declarations: [TooltipComponent, TooltipDirective]
})
export class TooltipModule { }

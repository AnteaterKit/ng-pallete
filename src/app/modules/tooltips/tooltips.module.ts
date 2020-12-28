import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipsComponent } from './tooltips.component';
import { TooltipRoutingModule } from './tooltip.routing.module';
import { ButtonModule } from 'src/app/components/button/button.module';
import { TooltipModule } from 'src/app/components/tooltip/tooltip.module';

@NgModule({
  imports: [
    CommonModule,
    TooltipRoutingModule,
    ButtonModule,
    TooltipModule
  ],
  exports: [TooltipsComponent],
  declarations: [TooltipsComponent]
})
export class TooltipsModule { }

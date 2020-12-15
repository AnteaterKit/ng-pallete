import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { LandingRoutingModule } from './landing.routing.module';
import { ButtonModule } from 'src/app/components/button/button.module';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    LandingRoutingModule
  ],
  exports: [LandingComponent],
  declarations: [LandingComponent]
})
export class LandingModule { }

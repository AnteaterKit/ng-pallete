import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './buttons.component';
import { BottonsRoutingModule } from './buttons.routing';
import { ButtonModule } from 'src/app/components/button/button.module';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    BottonsRoutingModule
  ],
  declarations: [ButtonsComponent],
  exports: [ButtonsComponent]
})
export class ButtonsModule { }

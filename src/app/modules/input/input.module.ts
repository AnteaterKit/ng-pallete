import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import { InputRoutingModule } from './input.routing';
import { InputModule } from 'src/app/components/input/input.module';

@NgModule({
  imports: [
    CommonModule,
    InputRoutingModule,
    InputModule
  ],
  declarations: [InputComponent],
  exports: [InputComponent]
})
export class InputsModule { }

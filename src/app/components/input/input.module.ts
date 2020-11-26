import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldComponent } from './input.component';
import { InputDirective } from './input.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InputDirective, InputFieldComponent],
  exports: [InputDirective, InputFieldComponent]
})
export class InputModule { }

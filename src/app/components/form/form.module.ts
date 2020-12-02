import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { FormControlComponent } from './form-control.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [FormComponent, FormControlComponent],
  declarations: [FormComponent, FormControlComponent]
})
export class FormModule { }

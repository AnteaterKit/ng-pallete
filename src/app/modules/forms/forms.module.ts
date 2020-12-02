import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms.component';
import { FormsRoutingModule } from './forms.routing';
import { FormModule } from 'src/app/components/form/form.module';
import { InputModule } from 'src/app/components/input/input.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputModule,
    FormsRoutingModule,
    FormModule
  ],
  declarations: [FormsComponent]
})
export class FormsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckRoutingModule } from './checkbox.routing.module';
import { CheckboxDocComponent } from './checkbox.component';
import { CheckboxModule } from 'src/app/components/checkbox/checkbox.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CheckRoutingModule,
    FormsModule,
    CheckboxModule
  ],
  exports: [CheckboxDocComponent],
  declarations: [CheckboxDocComponent]
})
export class CheckboxDocModule { }

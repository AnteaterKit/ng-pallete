import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckRoutingModule } from './checkbox.routing.module';
import { CheckboxDocComponent } from './checkbox.component';
import { CheckboxModule } from 'src/app/components/checkbox/checkbox.module';

@NgModule({
  imports: [
    CommonModule,
    CheckRoutingModule,

    CheckboxModule
  ],
  exports: [CheckboxDocComponent],
  declarations: [CheckboxDocComponent]
})
export class CheckboxDocModule { }

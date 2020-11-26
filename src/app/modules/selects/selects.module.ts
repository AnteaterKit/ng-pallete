import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectsComponent } from './selects.component';
import { SelectRoutingModule } from './select.routing';
import { SelectModule } from 'src/app/components/select/select.module';

@NgModule({
  imports: [
    CommonModule,
    SelectRoutingModule,
    SelectModule
  ],
  declarations: [SelectsComponent],
  exports: [SelectsComponent]
})
export class SelectsModule { }

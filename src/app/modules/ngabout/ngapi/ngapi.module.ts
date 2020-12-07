import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgapiComponent } from './ngapi.component';
import { NgApiRoutingModule } from './ngapi.routing';

@NgModule({
  imports: [
    CommonModule,
    NgApiRoutingModule
  ],
  exports: [NgapiComponent],
  declarations: [NgapiComponent]
})
export class NgapiModule { }

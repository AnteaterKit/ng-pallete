import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgmainComponent } from './ngmain.component';
import { NgMainRoutingModule } from './ngmain.routing.module';

@NgModule({
  imports: [
    CommonModule,
    NgMainRoutingModule
  ],
  exports: [NgmainComponent],
  declarations: [NgmainComponent]
})
export class NgmainModule { }

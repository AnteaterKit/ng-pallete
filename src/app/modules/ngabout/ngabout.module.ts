import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgaboutComponent } from './ngabout.component';
import { NgAboutRoutingModule } from './ngabout.routing';

@NgModule({
  imports: [
    CommonModule,
    NgAboutRoutingModule
  ],
  declarations: [NgaboutComponent]
})
export class NgaboutModule { }

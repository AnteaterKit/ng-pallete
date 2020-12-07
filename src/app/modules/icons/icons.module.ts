import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsComponent } from './icons.component';
import { IconsRoutingModule } from './icons.routing';

@NgModule({
  imports: [
    CommonModule,
    IconsRoutingModule
  ],
  exports: [IconsComponent],
  declarations: [IconsComponent]
})
export class IconsModule { }

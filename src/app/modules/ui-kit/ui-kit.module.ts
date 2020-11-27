import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiKitComponent } from './ui-kit.component';
import { UiKitRoutingModule } from './ui-kit.routing.module';

@NgModule({
  imports: [
    CommonModule,
    UiKitRoutingModule
  ],
  exports: [UiKitComponent],
  declarations: [UiKitComponent]
})
export class UiKitModule { }

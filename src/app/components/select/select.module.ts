import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { OptionComponent } from './option.component';
import { OptionItemComponent } from './option-item.component';
import { OptionContainerComponent } from './option-container.component';

@NgModule({
  imports: [
    CommonModule,

    OverlayModule
  ],
  declarations: [SelectComponent, OptionComponent, OptionItemComponent, OptionContainerComponent],
  exports: [SelectComponent, OptionComponent, OptionItemComponent]
})
export class SelectModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypoComponent } from './typo.component';
import { TipoRoutingModule } from './typo.routing';

@NgModule({
  imports: [
    CommonModule,
    TipoRoutingModule
  ],
  declarations: [TypoComponent]
})
export class TypoModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { FormModule } from '../form/form.module';

@NgModule({
  imports: [
    CommonModule,
    FormModule
  ],
  exports: [CardComponent],
  declarations: [CardComponent]
})
export class CardModule { }

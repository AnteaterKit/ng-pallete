import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards.component';
import { CardsRoutingModule } from './cards.routing.module';
import { CardModule } from 'src/app/components/card/card.module';
import { ButtonModule } from 'src/app/components/button/button.module';

@NgModule({
  imports: [
    CommonModule,
    CardsRoutingModule,
    CardModule,
    ButtonModule
  ],
  exports: [CardsComponent],
  declarations: [CardsComponent]
})
export class CardsModule { }

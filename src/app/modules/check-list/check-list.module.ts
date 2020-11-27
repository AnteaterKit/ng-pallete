import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckListComponent } from './check-list.component';
import { CheckListRoutingModule } from './check-list.routing';

@NgModule({
  imports: [
    CommonModule,
    CheckListRoutingModule
  ],
  exports: [CheckListComponent],
  declarations: [CheckListComponent]
})
export class CheckListModule { }

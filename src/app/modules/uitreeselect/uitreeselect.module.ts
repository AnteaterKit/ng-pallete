import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UitreeselectComponent } from './uitreeselect.component';
import { UitreeselectRoutingModule } from './uitreeselect.routing';
import { TreeSelectModule } from 'src/app/components/tree-select/tree-select.module';

@NgModule({
  imports: [
    CommonModule,
    UitreeselectRoutingModule,
    TreeSelectModule
  ],
  declarations: [UitreeselectComponent]
})
export class UitreeselectModule { }

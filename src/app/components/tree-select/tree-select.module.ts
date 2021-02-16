import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeSelectComponent } from './tree-select.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { CheckboxModule } from '../checkbox/checkbox.module';
import { InternalTreeSelectComponent } from './tree.component';
import { TreeNodeComponent } from './tree-node.components';
import { TreeNodeIndentComponent } from './tree-indent.component';
import { InputModule } from '../input/input.module';

@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
    CheckboxModule,
    InputModule
  ],
  exports: [TreeSelectComponent, InternalTreeSelectComponent, TreeNodeComponent, TreeNodeIndentComponent],
  declarations: [TreeSelectComponent, InternalTreeSelectComponent, TreeNodeComponent, TreeNodeIndentComponent]
})
export class TreeSelectModule { }

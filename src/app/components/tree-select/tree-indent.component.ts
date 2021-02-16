import { CdkConnectedOverlay, CdkOverlayOrigin, ConnectionPositionPair } from '@angular/cdk/overlay';
import { ChangeDetectorRef, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { TreeNode } from './tree-select.model';

@Component({
  selector: 'tree-node-indent',
  template: `
    <span class='tree-node-indent' *ngFor="let i of list; let index = index"></span>
  `,
})
export class TreeNodeIndentComponent implements OnInit, OnChanges {
  @Input()
  level: number;
  list: number[] = [];
  constructor() { }
  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    const { level } = changes;
    if (level) {
      this.list = [...new Array(level.currentValue || 0)];
    }
  }
}


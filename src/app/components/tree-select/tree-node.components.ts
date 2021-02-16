import { CdkConnectedOverlay, CdkOverlayOrigin, ConnectionPositionPair } from '@angular/cdk/overlay';
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { TreeNode } from './tree-select.model';

@Component({
  selector: 'tree-node',
  template: `
    <div class='tree-node-wrapper'>
        <tree-node-indent *ngIf='node' [level]='node.level'></tree-node-indent>
        <span *ngIf='!isExpanded' (click)='openClick($event)'>о</span>
        <span *ngIf='isExpanded' (click)='closeClick($event)'>з</span>
        <span class='tree-node__content'>{{node.title}} {{isExpanded}}</span>
    </div>
  `,
  host: {
    '[class.tree-node-open]': `isExpanded`,
    '[class.tree-node-close]': `isExpanded`
  }
})
export class TreeNodeComponent implements OnInit {
  @Input()
  node: TreeNode;
  @Input() isExpanded!: boolean;
  @Input() isLeaf!: boolean;
  @Output() expandedChange: EventEmitter<TreeNode> = new EventEmitter();
  ngOnInit(): void {
  }

  constructor(public cdr: ChangeDetectorRef, public elementRef: ElementRef) { }

  openClick(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.node.setExpanded(!this.isExpanded);
    this.expandedChange.emit(this.node);
  }

  closeClick(event): void {
    event.preventDefault();
    event.stopPropagation();
    this.node.setExpanded(!this.isExpanded);
    this.expandedChange.emit(this.node);
  }

  get expanded(): boolean {
    return this.isExpanded;
  }
}


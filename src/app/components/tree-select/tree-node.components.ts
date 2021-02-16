import { CdkConnectedOverlay, CdkOverlayOrigin, ConnectionPositionPair } from '@angular/cdk/overlay';
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { TreeNode } from './tree-select.model';

@Component({
  selector: 'tree-node',
  template: `
    <div class='tree-node-wrapper'>
        <tree-node-indent *ngIf='node' [level]='node.level'></tree-node-indent>
        <span *ngIf='!node.isLeaf' class='arrow-wrapper'>
          <span *ngIf='!isExpanded' class='arrow arrow-right' (click)='openClick($event)'>
            <img src='https://raw.githubusercontent.com/ant-design/ant-design-icons/e4c3364e7a83fe581af634b1702fd3297fa104c4/packages/icons-svg/svg/outlined/caret-right.svg' />
          </span>
          <span class='arrow arrow-down' *ngIf='isExpanded' (click)='closeClick($event)'>
            <img src='https://raw.githubusercontent.com/ant-design/ant-design-icons/e4c3364e7a83fe581af634b1702fd3297fa104c4/packages/icons-svg/svg/outlined/caret-down.svg' />
          </span>
        </span>
        <span class='tree-node__content' (click)='nodeClick($event)' >{{node.title}}</span>
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
  @Output() nodeClicked: EventEmitter<TreeNode> = new EventEmitter();
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

  nodeClick(event): void {
    this.nodeClicked.emit(this.node);
  }

  get expanded(): boolean {
    return this.isExpanded;
  }
}


import { CdkConnectedOverlay, CdkOverlayOrigin, ConnectionPositionPair } from '@angular/cdk/overlay';
import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TreeNode } from './tree-select.model';

@Component({
  selector: 'internal-tree-select',
  template: `
  <ng-template
      #overlay='cdkConnectedOverlay'
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayOrigin]='origin'
      [cdkConnectedOverlayOpen]='visible'
      [cdkConnectedOverlayPositions]='positions'
      [cdkConnectedOverlayPush]='true',
      (detach)='hide()'
    >
    <div [style.min-width.px]='minWidth' class='tree-select'>
      <div *ngFor='let item of expanded' >
        <tree-node
          [node]='item'
          [isExpanded]='item.isExpanded'
          (expandedChange)='expandedChange($event)'
          >
        </tree-node>
      </div>
    </div>
    </ng-template>
  `,
})
export class InternalTreeSelectComponent implements OnInit {
  datasource: Array<TreeNode> = [];
  expanded: Array<TreeNode> = [];
  minWidth = 120;
   // Директива для упрощения декларативного создания наложения с помощью FlexibleConnectedPositionStrategy
   @ViewChild('overlay', { static: false }) overlay!: CdkConnectedOverlay;
   // Директива для использования элемента в качестве источника для наложения с помощью ConnectedPositionStrategy.
   origin!: CdkOverlayOrigin;
   positions = [new ConnectionPositionPair({ originX: 'start', originY: 'bottom' },
     { overlayX: 'start', overlayY: 'top' }, 0, 0)];
   visible = false;
   overlayRef: any;

  ngOnInit(): void {
    const node = new TreeNode();
    node.level = 0;
    node.title = 'NG ui library';

    const node1 = new TreeNode();
    node1.level = 1;
    node1.title = 'Open source';
    node1.parent = node;

    const node2 = new TreeNode();
    node2.level = 1;
    node2.title = 'Commercial';
    node2.parent = node;

    this.datasource.push(node);
    this.datasource.push(node1);
    this.datasource.push(node2);

    this.expanded = this.datasource.filter(x => x.level === 0);
  }

  constructor(public cdr: ChangeDetectorRef, public elementRef: ElementRef) { }

  setOverlayOrigin(origin: CdkOverlayOrigin): void {
    this.origin = origin;
    this.setOriginWidth();
    this.show();
  }

  setOriginWidth(): void {
    this.minWidth =  this.origin.elementRef.nativeElement.getBoundingClientRect().width;
  }

  hide(): void {
    this.visible = false;
    this.cdr.markForCheck();
  }

  show(): void {
    this.visible = true;
  }

  expandedChange(node: TreeNode): void {
    if (node.isExpanded) {
      const children = this.datasource.filter(x => x.parent === node);
      if (children) {
        this.expanded.push(...children);
      }
    } else {
      const children = this.datasource.filter(x => x.parent === node);
      this.expanded = this.expanded.filter(x => children.indexOf(x) === -1);
    }
  }
}


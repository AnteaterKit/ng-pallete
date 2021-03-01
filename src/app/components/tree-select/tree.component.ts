import { CdkConnectedOverlay, CdkOverlayOrigin, ConnectionPositionPair } from '@angular/cdk/overlay';
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { TreeNode } from './tree-select.model';

@Component({
  selector: 'internal-tree-select',
  template: `
  <ng-template
      #overlay='cdkConnectedOverlay'
      cdkConnectedOverlay
      [cdkConnectedOverlayOrigin]='origin'
      [cdkConnectedOverlayOpen]='visible'
      [cdkConnectedOverlayPositions]='positions'
      [cdkConnectedOverlayPush]='false',
    >
    <div [style.min-width.px]='minWidth' class='tree-select' style="box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%), 0 9px 28px 8px rgb(0 0 0 / 5%);">
      <div *ngFor='let item of expanded' >
        <tree-node
          [node]='item'
          [isExpanded]='item.isExpanded'
          (expandedChange)='expandedChange($event)'
          (nodeClicked)='nodeClicked($event)'
          >
        </tree-node>
      </div>
    </div>
    </ng-template>
  `,
})
export class InternalTreeSelectComponent implements OnInit {
  @Output()
  selectedNodeChanged = new EventEmitter<TreeNode>();
  datasource: Array<TreeNode> = [];
  expanded: Array<TreeNode> = [];
  minWidth = 120;
  @ViewChild('overlay', { static: false }) overlay!: CdkConnectedOverlay;
  origin!: CdkOverlayOrigin;
  positions = [new ConnectionPositionPair({ originX: 'start', originY: 'bottom' },
    { overlayX: 'start', overlayY: 'top' }, 0, 0)];
  visible = false;

  constructor(public cdr: ChangeDetectorRef, public elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  setOverlayOrigin(origin: CdkOverlayOrigin): void {
    this.origin = origin;
    this.setOriginWidth();
    this.show();
  }

  setOriginWidth(): void {
    this.minWidth = this.origin.elementRef.nativeElement.getBoundingClientRect().width;
  }

  setDataSource(datasource = []): void {
    datasource.forEach((x) => {
      const node = new TreeNode();
      node.id = x.id;
      node.level = 0;
      node.title = x.title;
      node.isLeaf = !x.children;
      this.datasource.push(node);
      this.setChildren(x, node, 1);
    });

    this.expanded = this.datasource.filter(t => t.level === 0);
  }

  setChildren(parent, parentNode, index): void {
    if (parent.children) {
      parent.children.forEach(x => {
        const node = new TreeNode();
        node.id = x.id;
        node.level = index;
        node.title = x.title;
        node.parent = parentNode;
        node.isLeaf = !x.children;
        this.datasource.push(node);
        this.setChildren(x, node, node.level + 1);
      });
    }
  }

  hide(): void {
    this.visible = false;
  }

  show(): void {
    this.visible = true;
  }

  expandedChange(node: TreeNode): void {
    if (node.isExpanded) {
      const children = this.datasource.filter(x => x.parent === node);
      if (children) {
        this.insertAt(this.expanded, this.expanded.indexOf(node) + 1, children);
      }
    } else {
      const children = this.datasource.filter(x => x.parent === node);
      children.forEach(ch => {
        ch.isExpanded = false;
        this.removeFromExpanded(ch);
      });
      this.expanded = this.expanded.filter(x => children.indexOf(x) === -1);
    }
  }

  removeFromExpanded(node: TreeNode): void {
    const children = this.datasource.filter(x => x.parent === node);
    this.expanded = this.expanded.filter(x => children.indexOf(x) === -1);
    children.forEach(ch => {
      ch.isExpanded = false;
      this.removeFromExpanded(ch);
    });
  }

  nodeClicked($event): void {
    this.selectedNodeChanged.emit($event);
  }

  insertAt(array, index, arrayToInsert): void {
    Array.prototype.splice.apply(array, [index, 0].concat(arrayToInsert));
    return array;
  }
}


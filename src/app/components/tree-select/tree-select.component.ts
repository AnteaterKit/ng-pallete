import { CdkConnectedOverlay, CdkOverlayOrigin, ConnectionPositionPair } from '@angular/cdk/overlay';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectorRef, Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, ElementRef, ExistingProvider, forwardRef, Inject, Input, OnInit, Optional, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { fromEvent, merge, Subscription } from 'rxjs';
import { TreeNode } from './tree-select.model';
import { InternalTreeSelectComponent } from './tree.component';

export const TREE_SELECT_VALUE_ACCESSOR: ExistingProvider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TreeSelectComponent),
  multi: true
};

@Component({
  selector: 'app-tree-select',
  providers: [TREE_SELECT_VALUE_ACCESSOR],
  templateUrl: './tree-select.component.html',
  styleUrls: ['./tree-select.component.scss']
})
export class TreeSelectComponent implements OnInit, ControlValueAccessor {
  @Input()
  datasource = [];
  componentRef: ComponentRef<InternalTreeSelectComponent>;
  component: InternalTreeSelectComponent;
  overlayBackdropClickSubscription: Subscription;
  selectedNodeChangedSubscription: Subscription;
  componentFactory: ComponentFactory<InternalTreeSelectComponent>  = this.resolver.resolveComponentFactory(InternalTreeSelectComponent);
  selectedNode: TreeNode = null;
  @Input() displayWith: (node: TreeNode) => string | undefined = (node: TreeNode) => {
    return node?.title || '';
  }
  constructor(  private elementRef: ElementRef,
                private hostView: ViewContainerRef,
                private renderer: Renderer2,
                private resolver: ComponentFactoryResolver,
                @Optional() @Inject(DOCUMENT) private document: any) { }

  ngOnInit(): void {
  }

  onClick($event): void {
    $event.preventDefault();
    this.createComponent();
  }

  createComponent(): void {
    if (this.componentRef) {
      return;
    }

    if (this.overlayBackdropClickSubscription) {
      this.overlayBackdropClickSubscription.unsubscribe();
    }
    this.componentRef = this.hostView.createComponent(this.componentFactory);
    this.component = this.componentRef.instance as InternalTreeSelectComponent;
    this.component.setDataSource(this.datasource);
    this.component.setOverlayOrigin({ elementRef: this.elementRef });
    this.selectedNodeChangedSubscription = this.component.selectedNodeChanged.subscribe(x => {
      this.selectedNode = x;
      this.closeOverlay();
    });

    setTimeout(() => {
      this.overlayBackdropClickSubscription = this.subscribeOverlayBackdropClick();
    }, 0);
  }

  private subscribeOverlayBackdropClick(): Subscription {
    return merge<MouseEvent | TouchEvent>(
      fromEvent<MouseEvent>(this.document, 'click'),
      fromEvent<TouchEvent>(this.document, 'touchend')
    ).subscribe((event: MouseEvent | TouchEvent) => {
      const clickTarget = event.target as HTMLElement;
      if (clickTarget !== this.component.elementRef.nativeElement
            && !this.component!.overlay!.overlayRef!.overlayElement!.contains(clickTarget)) {
        this.closeOverlay();
      }
    });
  }

  closeOverlay(): void {
    if (this.overlayBackdropClickSubscription) {
      this.overlayBackdropClickSubscription.unsubscribe();
    }
    if ( this.selectedNodeChangedSubscription) {
      this.selectedNodeChangedSubscription.unsubscribe();
    }
    this.component.hide();
    this.componentRef.destroy();
    this.componentRef = undefined;
  }

  onChange: (value: string | number) => void = () => null;
  onTouched: () => void = () => null;

  writeValue(value: string | number): void {
    if (value) {
      if (this.datasource) {
        const node = this.datasource.find(x => x.id === value);
        if (node) {
          this.selectedNode = node;
        } else {
          this.datasource.forEach(n => {
            this.selectedNode = this.findNode(n, value);
          });
        }
      }
    }
    this.onChange(value);
  }
  registerOnChange(fn: (_: string | number) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {

  }

  findNode(node, search): TreeNode {
   if (node.id === search) {
     return node;
   }
   if (node.children) {
    for (const childNode of node.children) {
      return this.findNode(childNode, search);
    }
   }
   return null;
  }

}

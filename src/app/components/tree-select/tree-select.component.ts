import { CdkConnectedOverlay, CdkOverlayOrigin, ConnectionPositionPair } from '@angular/cdk/overlay';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectorRef, Component, ComponentFactory, ComponentFactoryResolver, ElementRef, Inject, OnInit, Optional, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { fromEvent, merge, Subscription } from 'rxjs';
import { InternalTreeSelectComponent } from './tree.component';

@Component({
  selector: 'app-tree-select',
  templateUrl: './tree-select.component.html',
  styleUrls: ['./tree-select.component.scss']
})
export class TreeSelectComponent implements OnInit {
  component: InternalTreeSelectComponent;
  overlayBackdropClickSubscription: Subscription;
  componentFactory: ComponentFactory<InternalTreeSelectComponent>  = this.resolver.resolveComponentFactory(InternalTreeSelectComponent);
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
    console.log('create');
    if (this.overlayBackdropClickSubscription) {
      this.overlayBackdropClickSubscription.unsubscribe();
    }
    const componentRef = this.hostView.createComponent(this.componentFactory);
    this.component = componentRef.instance as InternalTreeSelectComponent;
    this.component.setOverlayOrigin({ elementRef: this.elementRef });

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
      console.log(clickTarget, this.component.elementRef.nativeElement);
      if (clickTarget !== this.component.elementRef.nativeElement
            && !this.component!.overlay!.overlayRef!.overlayElement!.contains(clickTarget)) {
        if (this.overlayBackdropClickSubscription) {
          this.overlayBackdropClickSubscription.unsubscribe();
        }
        this.component.hide();
      }
    });
  }

}

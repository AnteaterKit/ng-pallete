import { AfterViewInit, ChangeDetectionStrategy,
  ChangeDetectorRef,
   Component, ComponentFactory, ComponentFactoryResolver, Directive, ElementRef, Input,
  OnDestroy, OnInit, Renderer2, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { CdkConnectedOverlay, CdkOverlayOrigin, ConnectedOverlayPositionChange, ConnectionPositionPair, OverlayPositionBuilder } from '@angular/cdk/overlay';

@Directive ({
  selector: '[ui-tooltip]',
  exportAs: 'uiTooltip'
})
export class TooltipDirective implements OnInit, OnDestroy, AfterViewInit {
  @Input()
  content: string;
  component: TooltipComponent;
  componentFactory: ComponentFactory<TooltipComponent>  = this.resolver.resolveComponentFactory(TooltipComponent);
  protected readonly disposables: Array<() => void> = [];

  constructor(
    private elementRef: ElementRef,
    private hostView: ViewContainerRef,
    private renderer: Renderer2,
    private resolver: ComponentFactoryResolver,
  ) {

  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.registerTriggers();
  }

  createComponent(): void {
    const componentRef = this.hostView.createComponent(this.componentFactory);
    this.component = componentRef.instance as TooltipComponent;
    this.component.setTitle(this.content);
    this.component.setOverlayOrigin({ elementRef: this.elementRef });
  }

  registerTriggers(): void {
    const el = this.elementRef.nativeElement;
    const listnerMouseenter = this.renderer.listen(el, 'mouseenter', () => {
      this.createComponent();
    });
    this.disposables.push(listnerMouseenter);
    const listnerMouseleave = this.renderer.listen(el, 'mouseleave', () => {
      this.component.hide();
    });
    this.disposables.push(listnerMouseleave);
  }

  ngOnDestroy(): void {
    this.disposables.forEach(dispose => dispose());
  }
}

@Component({
  selector: 'uikit-tooltip',
  exportAs: 'uikitTooltip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
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
    <div class='tooltip-container'>
      <div class='tooltip-body'>
        {{title}}
      </div>
    </div>
    </ng-template>
  `,
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {
  title: string;
  // Директива для упрощения декларативного создания наложения с помощью FlexibleConnectedPositionStrategy
  @ViewChild('overlay', { static: false }) overlay!: CdkConnectedOverlay;
  // Директива для использования элемента в качестве источника для наложения с помощью ConnectedPositionStrategy.
  origin!: CdkOverlayOrigin;
  positions = [new ConnectionPositionPair({ originX: 'center', originY: 'top' },
                                         { overlayX: 'center', overlayY: 'bottom' },  0, -16,  '')];
  visible = false;
  constructor(public cdr: ChangeDetectorRef) { }
  overlayRef: any;

  ngOnInit(): void {
  }

  setOverlayOrigin(origin: CdkOverlayOrigin): void {
    this.origin = origin;
    this.show();
  }

  hide(): void {
    this.visible = false;
    this.cdr.markForCheck();
  }

  show(): void {
    this.visible = true;
  }

  setTitle(title: string): void {
    this.title = title;
  }
}

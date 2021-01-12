import { Directive, OnDestroy, forwardRef, ExistingProvider, Input, ElementRef, ViewContainerRef, Optional, Inject } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
    ConnectionPositionPair,
    FlexibleConnectedPositionStrategy,
    Overlay,
    OverlayConfig,
    OverlayRef,
    PositionStrategy
  } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';

import { AutocompleteComponent } from './autocomplete.component';
import { Subscription, merge, fromEvent } from 'rxjs';


export const SH_AUTOCOMPLETE_VALUE_ACCESSOR: ExistingProvider = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ShAutocompleteTriggerDirective),
    multi: true
  };


@Directive({
    selector: `input[shAutocomplete], textarea[shAutocomplete]`,
    exportAs: 'shAutocompleteTrigger',
    providers: [SH_AUTOCOMPLETE_VALUE_ACCESSOR],
    host: {
      autocomplete: 'off',
      '(input)': 'handleInput($event)',
      'aria-autocomplete': 'list'
    }
  })
  export class ShAutocompleteTriggerDirective implements ControlValueAccessor, OnDestroy {
    @Input() shAutocomplete!: AutocompleteComponent;

    private overlayRef: OverlayRef | null = null;
    private portal: TemplatePortal<{}> | null = null;
    private positionStrategy!: FlexibleConnectedPositionStrategy;

    private overlayBackdropClickSubscription!: Subscription;

    constructor(
        private elementRef: ElementRef, // обертка над нативным элементом
        private overlay: Overlay, // сервис для всплывающих панелей
        private viewContainerRef: ViewContainerRef, // Апи для создания новых вьюх у текущего компонента
        @Optional() @Inject(DOCUMENT) private document: any
    ) {}

    writeValue(value: any): void {
        Promise.resolve(null).then(() => this.setTriggerValue(value));
    }
    registerOnChange(fn: any): void {
        this._onChange = fn;
    }
    registerOnTouched(fn: any): void {
        this._onTouched = fn;
    }
    setDisabledState?(isDisabled: boolean): void {

    }

    _onChange: (value: any) => void = () => {};
    _onTouched = () => {};

    private setTriggerValue(value: any): void {
        // устанавливаем значения в ng контрол и нативный элемент
    }

    handleInput(event: KeyboardEvent): void {
    
        console.log(event);
        const target = event.target as HTMLInputElement;
        // const document = this.document as Document;
        let value: number | string | null = target.value;

        if (target.type === 'number') {
          value = value === '' ? null : parseFloat(value);
        }
       // if (this.previousValue !== value) {
        //  this.previousValue = value;
       //   this.onChange(value);

       //   if (this.canOpen() && document.activeElement === event.target) {
        this.openPanel();
        //  }
       // }
    }

    openPanel(): void {
        // this.previousValue = this.elementRef.nativeElement.value;
        this.attachOverlay();
        // this.updateStatus();
    }

    private attachOverlay(): void {
        console.log('attachOverlay');
        console.log(this.shAutocomplete.template);
        console.log(this.viewContainerRef);
        if (!this.portal && this.shAutocomplete.template) {
            // берем шаблон ангуляр компонента и отображаем его в другом месте
            this.portal = new TemplatePortal(this.shAutocomplete.template, this.viewContainerRef);
        }

        if (!this.overlayRef) {
            // Создаем ссылку на всплываху
            this.overlayRef = this.overlay.create(this.getOverlayConfig());
        }

        if (this.overlayRef && !this.overlayRef.hasAttached()) {
            this.overlayRef.attach(this.portal);
            // this.selectionChangeSubscription = this.subscribeSelectionChange();
            this.overlayBackdropClickSubscription = this.subscribeOverlayBackdropClick();
            // this.optionsChangeSubscription = this.subscribeOptionsChange();
           // this.overlayRef
           //   .detachments()
           //   .pipe(takeUntil(this.destroy$))
           //   .subscribe(() => {
           //     this.closePanel();
            //  });
          }

        this.shAutocomplete.isOpen = true;
        this.shAutocomplete.subscirbeOptions();
    }

    /**
    * Подписка на клик за пределами панели
    */
    private subscribeOverlayBackdropClick(): Subscription {
        return merge<MouseEvent | TouchEvent>(
        fromEvent<MouseEvent>(this.document, 'click'),
        fromEvent<TouchEvent>(this.document, 'touchend')
        ).subscribe((event: MouseEvent | TouchEvent) => {
        const clickTarget = event.target as HTMLElement;
        console.log('subscribeOverlayBackdropClick');
        // Make sure is not self
        // tslint:disable-next-line:no-non-null-assertion
        if (clickTarget !== this.elementRef.nativeElement && !this.overlayRef!.overlayElement.contains(clickTarget) ) {
            this.closePanel();
        }
        });
    }

    closePanel(): void {
        // if (this.panelOpen) {
        //  this.shAutocomplete.isOpen = this.panelOpen = false;

          if (this.overlayRef && this.overlayRef.hasAttached()) {
            // this.selectionChangeSubscription.unsubscribe();
            this.overlayBackdropClickSubscription.unsubscribe();
            // this.optionsChangeSubscription.unsubscribe();
            this.overlayRef.dispose();
            this.overlayRef = null;
            this.portal = null;
          }
        // }
      }

    ngOnDestroy(): void {
        
    }

    private getOverlayConfig(): OverlayConfig {
        return new OverlayConfig({
          positionStrategy: this.getOverlayPosition(),
          disposeOnNavigation: true,
          scrollStrategy: this.overlay.scrollStrategies.reposition(),
          // default host element width
          width: this.shAutocomplete.shWidth || this.getHostWidth()
        });
    }

    private getOverlayPosition(): PositionStrategy {
        const positions = [
          new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
          new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' })
        ];
        this.positionStrategy = this.overlay
          .position()
          .flexibleConnectedTo(this.getConnectedElement())
          .withFlexibleDimensions(false)
          .withPush(false)
          .withPositions(positions);
          // .withTransformOriginOn('.sh-select-dropdown');
        return this.positionStrategy;
    }

    private getConnectedElement(): ElementRef {
        return this.elementRef;
    }

    private getHostWidth(): number {
        return this.getConnectedElement().nativeElement.getBoundingClientRect().width;
    }
}

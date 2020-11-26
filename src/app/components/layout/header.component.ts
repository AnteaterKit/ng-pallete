import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'my-header',
  exportAs: 'myheader',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false,
  template: `<ng-content></ng-content> `
})
export class HeaderComponent {
    constructor(public elementRef: ElementRef, private renderer: Renderer2) {
        this.renderer.addClass(this.elementRef.nativeElement, 'layout-header');
    }
}

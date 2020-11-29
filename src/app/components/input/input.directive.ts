import { Directive, OnInit, Input, Optional, Self, Renderer2, ElementRef, TemplateRef } from '@angular/core';
import { NgControl } from '@angular/forms';

export type InputSize = 'large' | 'default' | 'small';

@Directive({
  selector: 'input[sh-input]',
  exportAs: 'shInput',
  host: {
    '[class.input-lg]': `size === 'large'`,
    '[class.input-sm]': `size === 'small'`,
  }
})
export class InputDirective implements OnInit {
  @Input() size: InputSize = 'default';

  @Input()
  get disabled(): boolean {
    if (this.ngControl && this.ngControl.disabled !== null) {
      return this.ngControl.disabled;
    }
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = value != null && `${value}` !== 'false';
  }
  _disabled = false;

  constructor(@Optional() @Self() public ngControl: NgControl, renderer: Renderer2, elementRef: ElementRef) {
    renderer.addClass(elementRef.nativeElement, 'sh-input');
  }

  ngOnInit() {
  }

}

import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input, ElementRef } from '@angular/core';

export type ShButtonType = 'primary' | 'default' | 'warn' | null;

// атрибуты директивы
const BUTTON_HOST_ATTRIBUTES = [
  'sh-button',
  'flatButton'
];

@Component({
  selector: 'button[shButton], button[flatButton]',
  exportAs: 'shButton',
  // tslint:disable-next-line:no-inputs-metadata-property
  inputs: ['disabled', 'color'],
  // tslint:disable-next-line:no-host-metadata-property
  host: {
    '[class.button-disabled]': 'disabled',
    '[attr.disabled]': 'disabled || null',
  },
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit {
  private _elementRef: ElementRef;
  constructor(elementRef: ElementRef) {
   this._elementRef = elementRef;

   for (const attr of BUTTON_HOST_ATTRIBUTES) {
      if (this._hasHostAttributes(attr)) {
        (this._getHostElement() as HTMLElement).classList.add(attr);
      }
    }

   elementRef.nativeElement.classList.add('button');
   const pallete = this._getHostAttribute('color');
   elementRef.nativeElement.classList.add(`button-${pallete}`);
  }


  ngOnInit() {
  }

  // tslint:disable-next-line:typedef
  _hasHostAttributes(...attributes: string[]) {
    return attributes.some(attribute => this._getHostElement().hasAttribute(attribute));
  }

  // tslint:disable-next-line:typedef
  _getHostAttribute(name: string) {
    return this._getHostElement().getAttribute(name);
  }

  // tslint:disable-next-line:typedef
  _getHostElement() {
    return this._elementRef.nativeElement;
  }

}

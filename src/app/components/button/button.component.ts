import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input, ElementRef } from '@angular/core';

export type ShButtonType = 'primary' | 'default' | 'warn' | null;
export type ShButtonSize = 'large' | 'default' | 'small';

// атрибуты директивы
const BUTTON_HOST_ATTRIBUTES = [
  'simpleButton',
  'flatButton',
  'strokedButton'
];

@Component({
  selector: 'button[simpleButton], button[flatButton], button[strokedButton]',
  exportAs: 'shButton',
  // tslint:disable-next-line:no-inputs-metadata-property
  inputs: ['disabled', 'color'],
  // tslint:disable-next-line:no-host-metadata-property
  host: {
    '[class.button-disabled]': 'disabled',
    '[attr.disabled]': 'disabled || null',
    '[class.btn-lg]': `size === 'large'`,
    '[class.btn-sm]': `size === 'small'`,
  },
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit {
  private _elementRef: ElementRef;
  @Input() size: ShButtonSize = 'default';
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

import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'sh-autocomplete-option',
  exportAs: 'shAutocompleteOption',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
  <div class="sh-select-item-option-content">
    <ng-content></ng-content>
  </div>
  `,
  host: {
    role: 'menuitem',
    class: 'sh-select-item sh-select-item-option',
    '[class.sh-select-item-option-selected]': 'selected',
    '[class.sh-select-item-option-active]': 'active',
    '[class.sh-select-item-option-disabled]': 'shDisabled',
   // '[attr.aria-selected]': 'selected.toString()',
   // '[attr.aria-disabled]': 'shDisabled.toString()',
    '(click)': 'selectViaInteraction()',
    '(mouseenter)': 'onMouseEnter()',
    '(mousedown)': '$event.preventDefault()'
  }
})
export class ShAutocompleteOptionComponent {

  @Input() value: any;
  @Input() label?: string;
  constructor() { }

  selectViaInteraction(): void {
  }

  onMouseEnter() {

  }
}

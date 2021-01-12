import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, Input, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';

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
    '(click)': 'selectInternal()',
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
    '(mousedown)': '$event.preventDefault()'
  }
})
export class ShAutocompleteOptionComponent {
  @Input() value: any;
  @Input() label?: string;
  @Output() readonly selectionChange = new EventEmitter<any>();

  active = false;
  selected = false;
  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  selectInternal(): void {
    console.log('selectInternal');
    this.selectionChange.emit(this);
    this.changeDetectorRef.markForCheck();
  }

  onMouseEnter(): void {
    this.active = true;
    this.changeDetectorRef.markForCheck();
  }

  onMouseLeave(): void {
    this.active = false;
    this.changeDetectorRef.markForCheck();
  }

  select(): void {
    this.selected = true;
  }

  deselect(): void {
    this.selected = false;
  }
}

import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'option-item',
  template: `
    <div class="select-item-option-content">
      <div >{{ label }}</div>
      <!-- можно реализовать условие кастомного контента -->
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.select-item]': 'true',
    '[class.select-item-option]': 'true',
    '[class.select-item-option-selected]': 'selected && !disabled',
    '[class.select-item-option-disabled]': 'disabled',
    '[class.select-item-option-active]': 'activated && !disabled',
    '(mouseenter)': 'onHostMouseEnter()',
    '(click)': 'onHostClick()'
  }
})
export class OptionItemComponent implements OnChanges {
  selected = false;
  activated = false;
  @Input() template: TemplateRef<any> | null = null;
  @Input() disabled = false;
  @Input() label: string | null = null;
  @Input() value: any | null = null;
  @Input() activatedValue: any | null = null;
  @Input() listOfSelectedValue: any[] = [];
  @Input() compareWith!: (o1: any, o2: any) => boolean;
  @Output() readonly itemClick = new EventEmitter<any>();
  @Output() readonly itemHover = new EventEmitter<any>();
  onHostMouseEnter(): void {
    if (!this.disabled) {
      this.itemHover.next(this.value);
    }
  }
  onHostClick(): void {
    if (!this.disabled) {
      this.itemClick.next(this.value);
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    const { value, activatedValue, listOfSelectedValue } = changes;
    console.log(value);
    console.log(listOfSelectedValue);
    if (value || listOfSelectedValue) {
       this.selected = this.listOfSelectedValue.some(v => this.compareWith(v, this.value));
    }
  }
}

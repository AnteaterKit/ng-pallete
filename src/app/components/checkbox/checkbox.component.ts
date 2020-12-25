import { AfterViewInit, ChangeDetectionStrategy,
  ChangeDetectorRef, Component, EventEmitter, forwardRef, OnDestroy, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'uikit-checkbox',
  exportAs: 'uiKitCheckbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <span
      class="checkbox"
      [class.checkbox-checked]="checked"
    >
      <input
        type='checkbox'
        [checked]="checked"
        [ngModel]="checked"
        [disabled]="disabled"
        (ngModelChange)="updateCheckedChange($event)"
        (click)="$event.stopPropagation()"
      />
      <span class="checkbox-inner"></span>
    </span>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true
    }
  ],
  styleUrls: ['./checkbox.component.scss'],
  host: {
    '(click)': 'hostClick($event)'
  }
})
export class CheckboxComponent implements OnInit , ControlValueAccessor, OnDestroy, AfterViewInit {
  constructor(private cdr: ChangeDetectorRef) { }
  checked = false;
  disabled = false;
  @Output() readonly сheckedChange = new EventEmitter<boolean>();
  onChange = (e) => {};
  onTouched = () => {};


  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
  }
  ngOnDestroy(): void {
   //  throw new Error('Method not implemented.');
  }
  writeValue(value: any): void {
    this.checked = value;
    this.cdr.markForCheck();
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled =  isDisabled;
    this.cdr.markForCheck();
  }

  hostClick(e: MouseEvent): void {
    e.preventDefault();
    this.updateCheckedChange(!this.checked);
  }

  updateCheckedChange(checked: boolean): void {
    if (!this.disabled) {
      this.checked = checked;
      this.onChange(this.checked);
      this.сheckedChange.emit(this.checked);
    }
  }

  ngOnInit(): void {
  }

}

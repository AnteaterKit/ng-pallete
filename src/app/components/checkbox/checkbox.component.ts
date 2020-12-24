import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

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
      />
      <span class="checkbox-inner"></span>
    </span>
  `,
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  checked = false;
  constructor() { }

  ngOnInit() {
  }

}

import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'my-option',
  exportAs: 'myOption',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `
})
export class OptionComponent implements OnChanges, OnInit, OnDestroy {

  private destroy$ = new Subject<void>();
  changes = new Subject();
  @Input() label: string | null = null;
  @Input() value: any | null = null;

  constructor() {}

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.changes.next();
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

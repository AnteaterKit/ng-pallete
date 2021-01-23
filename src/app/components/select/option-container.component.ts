import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'option-container',
  exportAs: 'optionContainer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
  template: `
    <div >
      <!-- todo лучше использовать virtual scroll -->
      <div *ngFor='let item of listOfContainerItem'>
          <option-item
              [template]="item.template"
              [disabled]="item.disabled"
              [label]="item.label"
              [compareWith]="compareWith"
              [activatedValue]="activatedValue"
              [listOfSelectedValue]="listOfSelectedValue"
              [value]="item"
              (itemHover)="onItemHover($event)"
              (itemClick)="onItemClick($event)"
          >
          </option-item>
      </div>
    </div>
  `,
  host: {
  }
})
export class OptionContainerComponent implements OnChanges, AfterViewInit {
  @Input() activatedValue: any | null = null;
  @Input() listOfSelectedValue: any[] = [];
  @Input() compareWith!: (o1: any, o2: any) => boolean;
  @Input() listOfContainerItem: any[] = [];
  @Output() readonly itemClick = new EventEmitter<any>();

  onItemClick(value: any): void {
    this.itemClick.emit(value);
  }

  onItemHover(value: any): void {
    this.activatedValue = value;
  }

  trackValue(index: number, option: any): any {
    return option.key;
  }

  ngAfterViewInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}

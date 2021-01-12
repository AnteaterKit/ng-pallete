import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, Input, ViewChild, TemplateRef, ElementRef, QueryList, ContentChildren, AfterContentInit, AfterViewInit, ViewChildren, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { merge } from 'rxjs';
import { ShAutocompleteOptionComponent } from './autocomplete-option.component';

@Component({
  selector: 'sh-autocomplete',
  exportAs: 'shAutocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutocompleteComponent implements AfterContentInit, AfterViewInit {

  @Input() shWidth?: number;
  @Input() shDataSource?: any;
  @Output()
  readonly selectionChange: EventEmitter<ShAutocompleteOptionComponent> = new EventEmitter<ShAutocompleteOptionComponent>();

  isOpen = false;
  activeItem: any;

  /** cdk-overlay */
  @ViewChild(TemplateRef, { static: false }) template?: TemplateRef<{}>;
  @ViewChild('panel', { static: false }) panel?: ElementRef;
  @ViewChild('content', { static: false }) content?: ElementRef;

  @ViewChildren(ShAutocompleteOptionComponent) contentOptions!: QueryList<ShAutocompleteOptionComponent>;
  s  = [];
  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngAfterContentInit(): void {
  }

  ngAfterViewInit(): void {
    this.contentOptions.changes.subscribe(x => {
      this.subscirbeOptions();
    });
  }

  public subscirbeOptions(): void {
    if (this.contentOptions) {
      const changesMerge = merge<any>(...this.contentOptions.map(x => x.selectionChange));
      changesMerge.subscribe(x => {
        x.select();
        this.activeItem = x;
        this.clearSelectedOptions(x);
        this.selectionChange.emit(x);
      });
    }
  }

  setVisibility(): void {
    this.changeDetectorRef.markForCheck();
  }

  clearSelectedOptions(skip?: any): void {
    this.contentOptions.forEach(option => {
      if (option !== skip) {
        option.deselect();
      }
    });
  }

  public getOption(value: ShAutocompleteOptionComponent): string {
    if (value) {
      return value.label;
    }
    return '';
  }

  public setActiveItem(value: ShAutocompleteOptionComponent): void {
    if (value && this.contentOptions) {
      this.activeItem = value;
      const item = this.contentOptions.find(x => x.value === value);
      if (item) {
        item.setActive();
      }
    }
  }
}

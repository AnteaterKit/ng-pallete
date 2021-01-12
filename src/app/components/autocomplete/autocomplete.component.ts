import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, Input, ViewChild, TemplateRef, ElementRef, QueryList, ContentChildren, AfterContentInit, AfterViewInit, ViewChildren, ChangeDetectorRef } from '@angular/core';
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

  isOpen = false;

  /** cdk-overlay */
  @ViewChild(TemplateRef, { static: false }) template?: TemplateRef<{}>;
  @ViewChild('panel', { static: false }) panel?: ElementRef;
  @ViewChild('content', { static: false }) content?: ElementRef;

  @ViewChildren(ShAutocompleteOptionComponent) contentOptions!: QueryList<ShAutocompleteOptionComponent>;
  s  = [];
  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngAfterContentInit(): void {
    this.contentOptions.changes.subscribe(x => {
      console.log(x);
    });
   
    console.log(this.contentOptions);
  }

  ngAfterViewInit(): void {
    this.contentOptions.changes.subscribe(x => {
      console.log(x);
      this.subscirbeOptions();
    });
   
    console.log(this.contentOptions);
    // this.subscirbeOptions();
  }

  public subscirbeOptions(): void {
    console.log(this.contentOptions);
    if (this.contentOptions) {
      console.log('79878');

      const changesMerge = merge<any>(...this.contentOptions.map(x => x.selectionChange));
      changesMerge.subscribe(x => {
        console.log(x);
        x.select();
        this.clearSelectedOptions(x);
      });
    }
  }

  setVisibility(): void {
    this.changeDetectorRef.markForCheck();
  }

  clearSelectedOptions(skip?: any): void {
    this.contentOptions.forEach(option => {
      console.log(option);
      if (option !== skip) {
        option.deselect();
      }
    });
  }
}

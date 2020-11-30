import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, Input, ViewChild, TemplateRef, ElementRef } from '@angular/core';
import { ShAutocompleteOptionComponent } from './autocomplete-option.component';

@Component({
  selector: 'sh-autocomplete',
  exportAs: 'shAutocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AutocompleteComponent  {

  @Input() shWidth?: number;
  @Input() shDataSource?: any;

  isOpen = false;

   /** cdk-overlay */
   @ViewChild(TemplateRef, { static: false }) template?: TemplateRef<{}>;
   @ViewChild('panel', { static: false }) panel?: ElementRef;
   @ViewChild('content', { static: false }) content?: ElementRef;

  constructor() { }
}

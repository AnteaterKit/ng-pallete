import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteComponent } from './autocomplete.component';
import { ShAutocompleteTriggerDirective } from './autocomplete-trigger';
import { ShAutocompleteOptionComponent } from './autocomplete-option.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [AutocompleteComponent, ShAutocompleteTriggerDirective, ShAutocompleteOptionComponent],
  declarations: [AutocompleteComponent, ShAutocompleteTriggerDirective, ShAutocompleteOptionComponent]
})
export class AutocompleteModule { }

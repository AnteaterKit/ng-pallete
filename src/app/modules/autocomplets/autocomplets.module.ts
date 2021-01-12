import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompletsComponent } from './autocomplets.component';
import { AutocompleteModule } from 'src/app/components/autocomplete/autocomplete.module';
import { AutocompletsRoutingModule } from './autocomplete.routing';
import { InputModule } from 'src/app/components/input/input.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AutocompletsRoutingModule,
    AutocompleteModule,
    InputModule
  ],
  declarations: [AutocompletsComponent]
})
export class AutocompletsModule { }

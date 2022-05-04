import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteComponent } from './autocomplete.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { HighlightPipePipe } from './pipes/highlight-pipe.pipe';



@NgModule({
  declarations: [
    AutocompleteComponent,
    HighlightPipePipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatAutocompleteModule
  ],
  exports: [AutocompleteComponent]
})
export class AutocompleteModule { }

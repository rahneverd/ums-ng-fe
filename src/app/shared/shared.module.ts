import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableGenericComponent } from './components/table-generic/table-generic.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from './liabraries/prime-ng.module';
import { FormGenericComponent } from './components/form-generic/form-generic.component';
import { InputTextComponent } from './components/inputs/input-text/input-text.component';
import { InputTextAreaComponent } from './components/inputs/input-text-area/input-text-area.component';
import { InputNumberComponent } from './components/inputs/input-number/input-number.component';
import { InputSwitchComponent } from './components/inputs/input-switch/input-switch.component';
import { InputAutocompleteComponent } from './components/inputs/input-autocomplete/input-autocomplete.component';
import { InputDateComponent } from './components/inputs/input-date/input-date.component';
import { InputDateTimeComponent } from './components/inputs/input-date-time/input-date-time.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, PrimeNgModule],
  declarations: [
    TableGenericComponent,
    FormGenericComponent,
    InputTextComponent,
    InputTextAreaComponent,
    InputNumberComponent,
    InputSwitchComponent,
    InputAutocompleteComponent,
    InputDateComponent,
    InputDateTimeComponent,
  ],
  exports: [
    PrimeNgModule,
    FormsModule,
    ReactiveFormsModule,
    TableGenericComponent,
    FormGenericComponent,
  ],
})
export class SharedModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableGenericComponent } from './components/table-generic/table-generic.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from './liabraries/prime-ng.module';
import { FormGenericComponent } from './components/form-generic/form-generic.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextComponent } from './components/inputs/input-text/input-text.component';
import { InputTextAreaComponent } from './components/inputs/input-text-area/input-text-area.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberComponent } from './components/inputs/input-number/input-number.component';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeNgModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,
  ],
  declarations: [
    TableGenericComponent,
    FormGenericComponent,
    InputTextComponent,
    InputTextAreaComponent,
    InputNumberComponent,
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

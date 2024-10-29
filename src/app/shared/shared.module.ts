import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableGenericComponent } from './components/table-generic/table-generic.component';
import { FormGenericComponent } from './components/form-generic/form-generic.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from './liabraries/prime-ng.module';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, PrimeNgModule],
  declarations: [TableGenericComponent, FormGenericComponent],
  exports: [
    PrimeNgModule,
    FormsModule,
    ReactiveFormsModule,
    TableGenericComponent,
    FormGenericComponent,
  ],
})
export class SharedModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UmsRoutingModule } from './ums-routing.module';
import { UsersListComponent } from './components/users/users-list/users-list.component';


@NgModule({
  declarations: [
    UsersListComponent
  ],
  imports: [
    CommonModule,
    UmsRoutingModule
  ]
})
export class UmsModule { }

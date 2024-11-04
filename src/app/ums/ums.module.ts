import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UmsRoutingModule } from './ums-routing.module';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [UsersListComponent],
  imports: [CommonModule, UmsRoutingModule, SharedModule],
})
export class UmsModule {}

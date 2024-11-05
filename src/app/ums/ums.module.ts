import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UmsRoutingModule } from './ums-routing.module';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { SharedModule } from '../shared/shared.module';
import { ApplicationsListComponent } from './components/applications/applications-list/applications-list.component';
import { ApplicationsDialogComponent } from './components/applications/applications-dialog/applications-dialog.component';

@NgModule({
  declarations: [UsersListComponent, ApplicationsListComponent, ApplicationsDialogComponent],
  imports: [CommonModule, UmsRoutingModule, SharedModule],
})
export class UmsModule {}

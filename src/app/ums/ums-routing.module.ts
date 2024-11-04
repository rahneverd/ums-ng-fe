import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { ApplicationsListComponent } from './components/applications/applications-list/applications-list.component';

const routes: Routes = [
  { path: 'users', component: UsersListComponent },
  { path: 'applications', component: ApplicationsListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UmsRoutingModule {}

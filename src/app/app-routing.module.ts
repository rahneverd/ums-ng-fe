import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/components/register/register.component';
import { FE_URLS } from './shared/utils/Constants';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    canActivate: [AuthGuard],
    data: { roles: ['Dashboard'] },
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: FE_URLS.LOGIN,
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  { path: FE_URLS.REGISTER, component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

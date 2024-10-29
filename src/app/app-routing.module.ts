import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/components/login/login.component';
import { RegisterComponent } from './register/components/register/register.component';
import { FE_URLS } from './shared/enums/Constants';

const routes: Routes = [
  { path: '', component: RegisterComponent },
  { path: FE_URLS.LOGIN, component: LoginComponent },
  { path: FE_URLS.REGISTER, component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

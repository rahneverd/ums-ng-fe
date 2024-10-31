import { Component } from '@angular/core';
import { FormConfig } from 'src/app/shared/models/form.model';
import { LOGIN_FORM_CONFIG } from './_settings/login.config';
import { ACTIONS, FE_URLS } from 'src/app/shared/utils/Constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  formConfig: FormConfig;

  constructor(private router: Router) {
    this.formConfig = new FormConfig(LOGIN_FORM_CONFIG);
  }

  ngOnInit() {}

  onAction(event: any) {
    console.log(event);
    if (event?.actionName === ACTIONS.LOGIN) {
    } else if (event?.actionName === ACTIONS.REGISTER) {
      this.router.navigate([FE_URLS.REGISTER]);
    }
  }
}

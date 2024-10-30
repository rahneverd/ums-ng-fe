import { Component } from '@angular/core';
import { FormConfig } from 'src/app/shared/models/form.model';
import { LOGIN_FORM_CONFIG } from './_settings/login.config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  formConfig: FormConfig;

  constructor() {
    this.formConfig = new FormConfig(LOGIN_FORM_CONFIG);
  }

  ngOnInit() {}
}

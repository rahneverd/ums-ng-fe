import { Component } from '@angular/core';
import { FormConfig } from 'src/app/shared/models/form.model';
import { LOGIN_FORM_CONFIG } from './_settings/login.config';
import { ACTIONS, FE_URLS } from 'src/app/shared/utils/Constants';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';
import { API_ENDPOINTS } from 'src/app/shared/utils/ApiEndpoints';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  formConfig: FormConfig;

  constructor(private router: Router, private apiService: ApiService) {
    this.formConfig = new FormConfig(LOGIN_FORM_CONFIG);
  }

  ngOnInit() {}

  onAction(event: any) {
    // console.log(event);
    if (event?.action?.actionName === ACTIONS.LOGIN) {
      this.login(event);
    } else if (event?.action?.actionName === ACTIONS.REGISTER) {
      this.router.navigate([FE_URLS.REGISTER]);
    }
  }

  login(obj: any) {
    console.log(obj);
    this.apiService
      .call(obj?.data, {}, API_ENDPOINTS.LOGIN, true)
      .subscribe((data) => {
        console.log(data);
      });
  }
}

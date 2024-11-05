import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormConfig } from 'src/app/shared/models/form.model';
import { APPLICATION_FORM_CONFIG } from './_settings/applications.config';

@Component({
  selector: 'app-applications-dialog',
  templateUrl: './applications-dialog.component.html',
  styleUrls: ['./applications-dialog.component.scss'],
})
export class ApplicationsDialogComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  formConfig: FormConfig;

  constructor() // private router: Router,
  // private apiService: ApiService,
  // private loginService: LoginService,
  // private alertService: AlertService
  {
    this.formConfig = new FormConfig(APPLICATION_FORM_CONFIG);
  }

  ngOnInit() {}

  onAction(event: any) {
    console.log(event);
    // if (event?.action?.actionName === ACTIONS.LOGIN) {
    //   this.login(event);
    // } else if (event?.action?.actionName === ACTIONS.REGISTER) {
    //   this.router.navigate([FE_URLS.REGISTER]);
    // }
  }

  // login(obj: any) {
  //   console.log(obj);
  //   this.subscription = this.apiService
  //     .call(obj?.data, {}, API_ENDPOINTS.LOGIN, false)
  //     .subscribe((resp) => {
  //       if (resp.statusCode === API_STATUS_CODE.OK) {
  //         this.loginService.login(ApiResponse.getData(resp));
  //       } else {
  //         this.alertService.showErrorAlert(resp?.message);
  //       }
  //     });
  // }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

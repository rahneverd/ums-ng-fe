import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormConfig } from 'src/app/shared/models/form.model';
import { ApiService } from 'src/app/shared/services/api.service';
import { APPLICATION_ROLES_FORM_CONFIG } from './_settings/application-roles.config';
import { ACTIONS, API_STATUS_CODE } from 'src/app/shared/utils/Constants';
import { API_ENDPOINTS } from 'src/app/shared/utils/ApiEndpoints';
import { ApiResponse } from 'src/app/shared/models/api.model';

@Component({
  selector: 'app-application-roles-dialog',
  templateUrl: './application-roles-dialog.component.html',
  styleUrls: ['./application-roles-dialog.component.scss'],
})
export class ApplicationRolesDialogComponent {
  subscription: Subscription = new Subscription();
  formConfig: FormConfig;

  applicationsList: any[] = [];

  // private alertService: AlertService
  // private loginService: LoginService,
  constructor(private apiService: ApiService) {
    this.formConfig = new FormConfig(APPLICATION_ROLES_FORM_CONFIG);
  }

  ngOnInit() {
    this.getAllApplications();
  }

  getAllApplications() {
    this.subscription = this.apiService
      .call({}, {}, API_ENDPOINTS.APPLICATION_FIND_ALL, false)
      .subscribe((resp: any) => {
        if (resp.statusCode === API_STATUS_CODE.OK) {
          // this.loginService.login(ApiResponse.getData(resp));
          this.applicationsList = ApiResponse.getData(resp);
          console.log(this.applicationsList);
        } else {
          // this.alertService.showErrorAlert(resp?.message);
        }
      });
  }

  onAction(event: any) {
    console.log(event);
    if (event?.action?.actionName === ACTIONS.ADD) {
      this.add(event);
    } else if (event?.action?.actionName === ACTIONS.UPDATE) {
      // this.update()
    } else if (event?.action?.actionName === ACTIONS.DELETE) {
      // this.delete()
    }
    // if (event?.action?.actionName === ACTIONS.LOGIN) {
    //   this.login(event);
    // } else if (event?.action?.actionName === ACTIONS.REGISTER) {
    //   this.router.navigate([FE_URLS.REGISTER]);
    // }
  }

  add(obj: any) {
    console.log(obj);
    this.subscription = this.apiService
      .call(obj?.data, {}, obj.action?.actionUrl, obj.action.show)
      .subscribe((resp: any) => {
        if (resp.statusCode === API_STATUS_CODE.OK) {
          // this.loginService.login(ApiResponse.getData(resp));
        } else {
          // this.alertService.showErrorAlert(resp?.message);
        }
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

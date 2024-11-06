import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormConfig } from 'src/app/shared/models/form.model';
import { APPLICATION_FORM_CONFIG } from './_settings/applications.config';
import { ACTIONS, API_STATUS_CODE } from 'src/app/shared/utils/Constants';
import { ApiService } from 'src/app/shared/services/api.service';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-applications-dialog',
  templateUrl: './applications-dialog.component.html',
  styleUrls: ['./applications-dialog.component.scss'],
})
export class ApplicationsDialogComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  formConfig: FormConfig;

  // private alertService: AlertService
  // private loginService: LoginService,
  constructor(private apiService: ApiService, private ref: DynamicDialogRef) {
    this.formConfig = new FormConfig(APPLICATION_FORM_CONFIG);
  }

  ngOnInit() {}

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
          this.ref.close({ refresh: true });
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

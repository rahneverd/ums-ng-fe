import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { TableConfig } from 'src/app/shared/models/table.model';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ApiService } from 'src/app/shared/services/api.service';
import { BUSINESS_ROLES_TABLE_CONFIG } from './_settings/business-roles.config';
import { API_ENDPOINTS } from 'src/app/shared/utils/ApiEndpoints';
import { API_STATUS_CODE } from 'src/app/shared/utils/Constants';
import { ApiResponse } from 'src/app/shared/models/api.model';
import { ActionConfig } from 'src/app/shared/models/common.model';
import { BusinessRolesDialogComponent } from '../business-roles-dialog/business-roles-dialog.component';

@Component({
  selector: 'app-business-roles-list',
  templateUrl: './business-roles-list.component.html',
  styleUrls: ['./business-roles-list.component.scss'],
})
export class BusinessRolesListComponent {
  subscription: Subscription = new Subscription();
  constructor(
    private apiService: ApiService,
    private ref: DynamicDialogRef,
    private dialogService: DialogService,
    private alertService: AlertService
  ) {}

  tableDate: TableConfig = new TableConfig(BUSINESS_ROLES_TABLE_CONFIG);

  ngOnInit() {
    this.getAllBusinessRoles();
  }

  getAllBusinessRoles() {
    this.subscription = this.apiService
      .call({}, {}, API_ENDPOINTS.BUSINESS_ROLES_FIND_ALL, false)
      .subscribe((resp) => {
        if (resp.statusCode === API_STATUS_CODE.OK) {
          console.log(resp);
          this.tableDate.tableData = ApiResponse.getData(resp);
        } else {
          this.alertService.showErrorAlert(resp?.message);
        }
      });
  }

  onClick(event: ActionConfig) {
    console.log(event);
    this.ref = this.dialogService.open(BusinessRolesDialogComponent, {
      data: {},
      header: event.actionTitle,
      width: '70%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      styleClass: 'png-dialogbox',
      footer: '.',
    });
    this.subscription = this.ref.onClose.subscribe((data: any) => {
      if (data?.refresh) {
        this.getAllBusinessRoles();
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

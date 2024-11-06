import { Component, OnDestroy, OnInit } from '@angular/core';
import { TableConfig } from 'src/app/shared/models/table.model';
import { ApiService } from 'src/app/shared/services/api.service';
import { APPLICATIONS_TABLE_CONFIG } from './_settings/applications.config';
import { API_ENDPOINTS } from 'src/app/shared/utils/ApiEndpoints';
import { API_STATUS_CODE } from 'src/app/shared/utils/Constants';
import { ApiResponse } from 'src/app/shared/models/api.model';
import { Subscription } from 'rxjs';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ApplicationsDialogComponent } from '../applications-dialog/applications-dialog.component';
import { ActionConfig } from 'src/app/shared/models/common.model';

@Component({
  selector: 'app-applications-list',
  templateUrl: './applications-list.component.html',
  styleUrls: ['./applications-list.component.scss'],
})
export class ApplicationsListComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  constructor(
    private apiService: ApiService,
    private ref: DynamicDialogRef,
    private dialogService: DialogService
  ) {}

  tableDate: TableConfig = new TableConfig(APPLICATIONS_TABLE_CONFIG);

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.subscription = this.apiService
      .call({}, {}, API_ENDPOINTS.APPLICATION_FIND_ALL, true)
      .subscribe((resp) => {
        if (resp.statusCode === API_STATUS_CODE.OK) {
          console.log(resp);
          this.tableDate.tableData = ApiResponse.getData(resp);
        } else {
          // this.alertService.showErrorAlert(resp?.message);
        }
      });
  }

  onClick(event: ActionConfig) {
    console.log(event);
    this.dialogService.open(ApplicationsDialogComponent, {
      data: {},
      header: event.actionTitle,
      width: '70%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      styleClass: 'png-dialogbox',
      footer: '.',
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

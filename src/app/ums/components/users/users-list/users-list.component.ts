import { Component } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { API_ENDPOINTS } from 'src/app/shared/utils/ApiEndpoints';
import { API_STATUS_CODE } from 'src/app/shared/utils/Constants';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent {
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.apiService
      .call({}, {}, API_ENDPOINTS.FIND_ALL, true)
      .subscribe((resp) => {
        if (resp.statusCode === API_STATUS_CODE.OK) {
          console.log(resp);
        } else {
          // this.alertService.showErrorAlert(resp?.message);
        }
      });
  }
}

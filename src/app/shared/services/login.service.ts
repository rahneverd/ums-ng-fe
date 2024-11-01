import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private sharedService: SharedService,
    private alertService: AlertService
  ) {}

  validateLoginResp(loginResp: any) {
    return new Promise<any>((resolve, reject) => {
      if (loginResp?.user && loginResp?.token && loginResp?.case) {
        resolve(true);
      } else {
        reject('Invalid login response');
      }
    });
  }

  async login(loginResp: any) {
    try {
      await this.validateLoginResp(loginResp);
      localStorage.setItem('user', loginResp?.user);
      localStorage.setItem('token', loginResp?.token);
      this.sharedService.setIsLoggedIn(true);
    } catch (error: any) {
      this.alertService.showErrorAlert(error);
    }
  }
}

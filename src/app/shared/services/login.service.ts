import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private sharedService: SharedService) {}

  login(loginResp: any) {
    localStorage.setItem('user', loginResp?.user);
    localStorage.setItem('token', loginResp?.token);
    this.sharedService.setIsLoggedIn(true);
  }
}

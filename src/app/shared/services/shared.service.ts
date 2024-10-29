import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  // initialize behavior subjects and subkect
  loginStatus = new BehaviorSubject<boolean>(false);

  // initialize observables
  loginStatus$ = this.loginStatus.asObservable();

  constructor() {}

  // setters
  setLoginStatus(value: boolean) {
    this.loginStatus.next(value);
  }
}

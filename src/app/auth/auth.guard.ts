import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { FE_URLS, UTS } from '../shared/utils/Constants';
import { SharedService } from '../shared/services/shared.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private sharedService: SharedService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (
      UTS.getTokenFromLocalStorage() != null &&
      UTS.getTokenFromLocalStorage() != ''
    ) {
      return true;
    } else {
      this.sharedService.setIsLoggedIn(false);
      this.router.navigate([FE_URLS.LOGIN]);
      return false;
    }
  }
}

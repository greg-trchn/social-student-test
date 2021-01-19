import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(
    private user: UserService,
    private route: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const url:string = state.url;

    if(url ==='/auth' 
    || url ==='/auth/login' 
    || url ==='/auth/register'
    || url ==='/auth/entry') {
      if(this.user.has()) {
        this.route.navigate(['/contacts', 'dashboard']);
      }
    }

    if(url ==='/contacts/dashboard'
    || url === '/contacts') {
      if(!this.user.has()) {
        this.route.navigate(['/auth', 'login']);
        return false;
      }
    }
    return true;
  }
  
}

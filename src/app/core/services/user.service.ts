import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User;


  constructor() { 
    const user = window.localStorage.getItem(environment.storage.user);
    if (user) {
      this.user = JSON.parse(user);
    }
  }

  set(user: User): void {
    // this.user = user;
    window.localStorage.setItem(environment.storage.user, JSON.stringify(user));
  }

  
  get(): User {
    // if(!this.user) {
    //   this.user = JSON.parse(window.localStorage.getItem(environment.storage.user));
    // }
    return this.user;
  }

  has(): boolean {
    // if (this.user) {
    //   return true;
    // }
    // return false;
    return !!this.user;
  }

}

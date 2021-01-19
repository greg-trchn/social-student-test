import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core/services/user.service';
import { AuthorizationsHttpService } from 'src/app/shared/services/authorizations-http.service';
import { LoginFormService } from 'src/app/shared/services/login-form.service';
import { environment } from 'src/environments/environment.prod';
import { LoadingService } from '../shared/services/loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public titre: string = 'Login';
  public loginForm : FormGroup;
  public error: string;

  constructor( 
    private loginFormService: LoginFormService,
    private authorizationsHttpService: AuthorizationsHttpService,
    private routerService: Router,
    private UserService: UserService,
    public loadingService: LoadingService
  ) {}
  
  ngOnInit(){
    // if(this.UserService.has()) {
    //   this.routerService.navigate(["/contacts", "dashboard"]);
    // }
    this.loginForm = this.loginFormService.create();

  }

  login() {
    this.authorizationsHttpService
    .login(this.loginForm)
    .subscribe(
      (user: User) => {
        console.log("Je suis dans subscribe");
        // this.UserService.set(user);
        // this.routerService.navigate(["/contacts", "dashboard"]);
      },
      (error: string) => {this.error = error;},

    )
  }

}

// email: [
//   "",
//   Validators.compose([
//   Validators.minLength(4),
//   Validators.pattern("[0-9a-z-A-Z@.]*"),
//   Validators.required
//   ])
//   ],
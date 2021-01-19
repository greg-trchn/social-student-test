import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorizationsHttpService } from 'src/app/shared/services/authorizations-http.service';
import { RegisterFormService } from 'src/app/shared/services/register-form.service';

import { environment } from 'src/environments/environment';
import { RepeatedPasswordDirective } from '../shared/validators/repeated-password.directive';

//test http
class PackageBag {
  package: string = null;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  public registerForm : FormGroup;
  public error: HttpErrorResponse;

  constructor( 
    // private formBuilder: FormBuilder,
    // private repeatedPasswordDirective: RepeatedPasswordDirective,
    // private http: HttpClient,
    private authorizationsHttpService: AuthorizationsHttpService,
    private registerFormService: RegisterFormService,
    private routerService: Router,
  ) { }
  
  ngOnInit() {
    this.registerForm = this.registerFormService.create();
  }

  register(){
    // console.log(this.registerForm.value)
    // console.log(this.registerFormService);
    this.authorizationsHttpService
    .register(this.registerForm)
    .subscribe(
      () => {this.routerService.navigate(["/auth","login"])},
      (error: HttpErrorResponse) => {this.error = error;}
    )
  }

}


// this.http.post(environment.api.register, {
    //   username: "test10",
    //   email: "test10foo.foo",
    //   password: "test10"
    // }).subscribe(
    //   (data) => {
    //     console.log(data);
    //   },
    //   (error: HttpErrorResponse) => {
    //     console.log(error);
    //   }
    // )

    // test requete http
    // this.http.get<PackageBag>(api.packages).subscribe(
    //   (data: PackageBag) => {
    //     console.log(data);
    //   },
    //   (error: HttpErrorResponse) => {
    //     console.log(error);
    //   }
    // )
    // this.http.post<PackageBag>(api.packages, {}).subscribe(
    //   (data: PackageBag) => {
    //     console.log(data);
    //   },
    //   (error: HttpErrorResponse) => {
    //     console.log(error);
    //   }
    // )
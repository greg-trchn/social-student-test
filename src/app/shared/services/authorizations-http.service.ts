import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FormGroup } from '@angular/forms';
import { Observable, ObservableInput } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';
import { User } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core/services/user.service';
import { LoadingService } from 'src/app/authorizations/shared/services/loading.service';

@Injectable({
  // providedIn: 'root'
  providedIn: 'any' // si l'interceptor ne passe pas
})
export class AuthorizationsHttpService {

  constructor(
    private http: HttpClient,
    private UserService: UserService,
    private loadingService: LoadingService
  ) { }

  register(registerForm: FormGroup): Observable<User> {
    return this.http.post<User>(environment.api.register, {
      username: registerForm.get("username").value,
      email: registerForm.get("email").value,
      password: registerForm.get("password").value
    })
  }

  login(registerForm: FormGroup): Observable<User> {
    // this.loadingService.login = true;
    return this.http
      .post<User>(environment.api.login, {
        email: registerForm.get("email").value,
        password: registerForm.get("password").value
      })
      .pipe(
        tap((user: User) => {
          this.UserService.set(user);
          console.log("je suis dans tap");
        }),
        // catchError((error: HttpErrorResponse) => {
        //   throw error;
        // })
        
      )
  }
}

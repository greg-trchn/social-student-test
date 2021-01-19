import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginFormService {

  private loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  create() {
    return this.loginForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password:['', Validators.required]
    })
  }
}

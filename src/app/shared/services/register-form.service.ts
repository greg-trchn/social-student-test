import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RepeatedPasswordDirective } from 'src/app/authorizations/shared/validators/repeated-password.directive';

@Injectable({
  providedIn: 'root'
})
export class RegisterFormService {

  private registerForm : FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private repeatedPasswordDirective: RepeatedPasswordDirective
  ) { }

  create() {
    return this.registerForm = this.formBuilder.group({
      username:['', Validators.required],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password:['', Validators.required],
      confirm:['', [this.repeatedPasswordDirective]]
    });
  }
}

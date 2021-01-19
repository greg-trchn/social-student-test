import { Directive, Injectable } from '@angular/core';
import { AbstractControl, ControlContainer, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { Subscription } from 'rxjs';


@Injectable({
  providedIn: 'root',
})

@Directive({
  selector: '[appRepeatedPassword]',
  providers: [{ provide: NG_VALIDATORS, useExisting: RepeatedPasswordDirective, multi: true }]
})
export class RepeatedPasswordDirective implements Validator {

  private listener: Subscription;
  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    if (!control.dirty) {
      if(this.listener) {
        this.listener.unsubscribe();
        this.listener = null;
      }
      return null;
    }

    if(!this.listener) {
      this.listener = control.root.get('password')
        .valueChanges.subscribe(()=> control.updateValueAndValidity())
    }
    return control.root.get('password').value !== control.value ? {'confirm': true} : null;
    
    //throw new Error('Method not implemented');
    // control.parent
    // control.root
    // control.root.get('foo')
    // control.parent.get('foo')
    // control.value
    // control.dirty
    // control.root.get('foo').valueChanges.subscribe(() => {
    //   // code exe quand la valeur de foo change
    // })

    //console.log("validate RepeatedPasswordDirective");
    //control.root.get('confirm').setErrors({repeatedPassword:true})
    //console.log(control.root.get('confirm').setErrors({repeatedPassword:true}));

    // if (control.dirty) {
    //   let verif = control.root.get('password');
    //   if (control.value == verif.value) {
    //     return null;
    //   } else {
    //     return {mismatch: true};
    //   }
    // }
    //control.root.get('password');

    //return { repeatedPassword: true };
  }

}

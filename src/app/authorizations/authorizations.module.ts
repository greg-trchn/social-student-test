import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizationsRoutingModule } from './authorizations-routing.module';
import { AuthorizationsComponent } from './authorizations.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EntryComponent } from './entry/entry.component';
import { SharedModule } from '../shared/shared.module';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { RepeatedPasswordDirective } from './shared/validators/repeated-password.directive';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { FormBuilder, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AuthorizationsComponent,
    LoginComponent,
    RegisterComponent,
    EntryComponent,
    ToolbarComponent,
    RepeatedPasswordDirective
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthorizationsRoutingModule,
    // ReactiveFormsModule
  ],
  providers: [
    // FormBuilder
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true }
  ]
})
export class AuthorizationsModule { }

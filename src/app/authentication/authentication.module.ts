import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LayoutsModule } from '../layouts/layouts.module';
import { SignupUserComponent } from './signup-user/signup-user.component';


@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    SignupUserComponent, 
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LayoutsModule  
],
  exports:[
    SignupComponent,
  ]
})
export class AuthenticationModule { }

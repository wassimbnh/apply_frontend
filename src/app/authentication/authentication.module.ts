import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SideGridComponent } from '../layouts/side-grid/side-grid.component';
import { LayoutsModule } from '../layouts/layouts.module';


@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent, 
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

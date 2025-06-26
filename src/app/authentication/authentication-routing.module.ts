import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SignupUserComponent } from './signup-user/signup-user.component';


const routes: Routes = [
  {path:"auth/signup-company", component: SignupComponent},
  {path: "auth/login", component: LoginComponent},
  {path: "auth/forgot-password", component: ForgotPasswordComponent},
  {path: "auth/reset-password/:token", component: ResetPasswordComponent},
  {path: "auth/signup-user", component: SignupUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
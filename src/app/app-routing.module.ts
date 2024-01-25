import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './authentication/signup/signup.component';
import { LoginComponent } from './authentication/login/login.component';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { LandingPageComponent } from './layouts/landing-page/landing-page.component';
import { ResetPasswordComponent } from './authentication/reset-password/reset-password.component';
import { SignupClientComponent } from './authentication/signup-client/signup-client.component';

const routes: Routes = [
  {path:'', component: LandingPageComponent},
  {path:"auth/signup-company", component: SignupComponent},
  {path: "auth/login", component: LoginComponent},
  {path: "auth/forgot-password", component: ForgotPasswordComponent},
  {path: "auth/reset-password/:token", component: ResetPasswordComponent},
  {path: "auth/signup-client", component: SignupClientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup = new FormGroup({});
  isSubmitted: boolean = false;


  text: string = 'Login your account and hire faster'
  ngOnInit(): void {
    this.initRegisterForm();
  }

  initRegisterForm(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
      ]),
      password: new FormControl('', [
        Validators.required,
      ]),
      
    });
  }

  login(){
    this.isSubmitted = true;
  }
}

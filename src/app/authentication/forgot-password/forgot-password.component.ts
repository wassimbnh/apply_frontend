import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent implements OnInit{

  forgotForm: FormGroup = new FormGroup({});
  isSubmitted: boolean = false;

  text: string = 'Make the job market better with faster recruiting'

  ngOnInit(): void {
    this.initRegisterForm();
  }

  initRegisterForm(): void {
    this.forgotForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
      ]),
      
    });
  }

  forgotPassword(){
    this.isSubmitted = true;
  }
}

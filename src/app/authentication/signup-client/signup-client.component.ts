import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-client',
  templateUrl: './signup-client.component.html',
  styleUrl: './signup-client.component.css'
})
export class SignupClientComponent implements OnInit{
  text: string = 'Find your first job and apply quickly'
  isSubmitted: boolean = false;
  registerUserForm: FormGroup = new FormGroup({})


  ngOnInit(): void {
    this.initRegisterForm();
  }

  initRegisterForm(): void {
    this.registerUserForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      email: new FormControl('', [
        Validators.required,
      ]),
      phone: new FormControl('', [
        Validators.required,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20)
      ]),
    });
  }
  
  registerUser() {
    this.isSubmitted = true;
    if(this.registerUserForm.valid){
      console.log(this.registerUserForm.value)
    }

  }
}

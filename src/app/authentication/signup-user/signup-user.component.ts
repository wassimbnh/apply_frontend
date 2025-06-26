import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { error } from 'console';
import { Router } from '@angular/router';
import { APIResponse, JwtTokens } from '../../interfaces';
import { AuthenticationService } from '../authentication.service';
import { UserData } from '../../interfaces/Client.interface';

@Component({
  selector: 'app-signup-user',
  templateUrl: './signup-user.component.html',
  styleUrl: './signup-user.component.css'
})
export class SignupUserComponent implements OnInit{

  text: string = 'Find your first job and apply quickly'
  isSubmitted: boolean = false;
  registerUserForm: FormGroup = new FormGroup({})

  errorMessage: string = '';
  successMessage: string = '';

  constructor(private authService: AuthenticationService,
             private router: Router){}


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
        Validators.minLength(3),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
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
  
  signUpUser() {
    this.isSubmitted = true;
    if(this.registerUserForm.valid){
      console.log(this.registerUserForm.value)
      this.registerUser(this.registerUserForm.value);
    }

  }


  registerUser(userData: UserData){
    this.authService.signUpClient(userData).subscribe({
        next: (response: APIResponse<JwtTokens>)=>{
          this.successMessage = response.message;
          this.isSubmitted = false;
          this.registerUserForm.reset();
          
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 2000); 
        },
        error: (error) =>{
          this.errorMessage = error.error.message
          setTimeout(()=>{
            this.errorMessage = ''
          },3000)
        }
      })
  }
}

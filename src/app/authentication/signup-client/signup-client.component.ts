import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { error } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-client',
  templateUrl: './signup-client.component.html',
  styleUrl: './signup-client.component.css'
})
export class SignupClientComponent implements OnInit{


  constructor(private authService: AuthenticationService,
             private router: Router){}

  text: string = 'Find your first job and apply quickly'
  isSubmitted: boolean = false;
  registerClientForm: FormGroup = new FormGroup({})

  errorMessage: string = '';
  successMessage: string = '';


  ngOnInit(): void {
    this.initRegisterForm();
  }

  initRegisterForm(): void {
    this.registerClientForm = new FormGroup({
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
  
  registerClient() {
    this.isSubmitted = true;
    if(this.registerClientForm.valid){
      this.authService.signUpClient(this.registerClientForm.value).subscribe(
        (response)=>{
          this.successMessage = 'Please check you email!'
          this.isSubmitted = false;
          this.registerClientForm.reset();
          
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 2000); 
        },
        (error) =>{
          this.errorMessage = error.error.message
          setTimeout(()=>{
            this.errorMessage = ''
          },3000)
        }
      )
    }

  }
}

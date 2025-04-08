import { Component, OnInit } from '@angular/core';
import intlTelInput from 'intl-tel-input';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { error } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  constructor(private authService: AuthenticationService,
             private router :Router){

  }
  registerClientForm: FormGroup = new FormGroup({});
  companyForm: FormGroup = new FormGroup({});
  isSubmitted:boolean = false;

  combinedFormValues: any = {};

  successMessage: string = '';


  text: string = 'Create an account and post your a job offer'
  currentStep = 1; 
  totalSteps = 2;
  progressPercentage = 0 ;

  confirmEmailMessage: string = '';
  
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

    this.companyForm = new FormGroup({
      companyName: new FormControl('', [
        Validators.required,
      ]),
      contactEmail: new FormControl('', [
        Validators.required,
      ]),
      companyWebsite: new FormControl('', [
        Validators.required,
      ]),
      companyField: new FormControl('', [
        Validators.required,
      ]),
    })
  }

  registerAdmin(): void {
    this.isSubmitted = true;
    const currentForm = this.getCurrentForm();
    
    
    if (currentForm.valid) {
      // Update progress value
      this.progressPercentage += (100 / this.totalSteps);
      this.isSubmitted = !this.isSubmitted;

      this.combinedFormValues = { ...this.combinedFormValues, ...currentForm.value };

      // Check if there are more steps
      if (this.currentStep < this.totalSteps) {
        // Move to the next step
        this.currentStep++;
      } else {
        console.log(this.combinedFormValues);
        this.authService.signUpAdmin(this.combinedFormValues).subscribe(
          (response) => {
            // Handle successful response if needed
            this.successMessage = 'Please check your email !'; 
            
            this.registerClientForm.reset();
            this.companyForm.reset();
            
            setTimeout(() => {
              this.router.navigate(['/']);
            }, 2000); 
          },
          (error) => {
            this.confirmEmailMessage = error.message
            console.error('Signup error:', error);
          })

      }
      
    }
  }
  private getCurrentForm(): FormGroup {
    // Return the current form based on the current step
    return this.currentStep === 1 ? this.registerClientForm : this.companyForm;
  }


}



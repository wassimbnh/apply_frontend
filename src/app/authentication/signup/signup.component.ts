import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { APIResponse, CompanyData } from '../../interfaces';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  constructor(private readonly authService: AuthenticationService,
             private readonly router :Router){

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

  onSignupCompany(): void {
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
        this.signupCompany(this.combinedFormValues)

      }
      
    }
  }

  signupCompany(companyData: CompanyData) {

    this.authService.signUpCompany(companyData).subscribe({
      next: (response: APIResponse<CompanyData>) => {
        // Handle successful response if needed
        this.successMessage = response.message; 
        
        this.registerClientForm.reset();
        this.companyForm.reset();
        
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 2000); 
      },
      error: (error) => {
        this.confirmEmailMessage = error.message
        console.error('Signup error:', error);
      }})

  }

  private getCurrentForm(): FormGroup {
    // Return the current form based on the current step
    return this.currentStep === 1 ? this.registerClientForm : this.companyForm;
  }


}



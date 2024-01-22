import { Component, OnInit } from '@angular/core';
import intlTelInput from 'intl-tel-input';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthenticationService } from '../../authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  constructor(private authService: AuthenticationService){

  }
  registerClientForm: FormGroup = new FormGroup({});
  companyForm: FormGroup = new FormGroup({});
  isSubmitted:boolean = false;

  text: string = 'Create an account and post your a job offer'
  currentStep = 1; 
  totalSteps = 2;
  progressPercentage = 0 ;

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
    this.isSubmitted = !this.isSubmitted;
    const currentForm = this.getCurrentForm();
    
    if (currentForm.valid) {
      // Update progress value
      this.progressPercentage += (100 / this.totalSteps);
      this.isSubmitted = !this.isSubmitted;

      // Check if there are more steps
      if (this.currentStep < this.totalSteps) {
        // Move to the next step
        this.currentStep++;
      } else {
        const newAdmin = currentForm.value
        console.log(newAdmin)

      }
    }
  }
  private getCurrentForm(): FormGroup {
    // Return the current form based on the current step
    return this.currentStep === 1 ? this.registerClientForm : this.companyForm;
  }

  submitCompanyInfo(){

  }

  ngAfterViewInit(): void {
    const input = document.querySelector('#phoneNumber') as HTMLInputElement;
    const flagContainer = document.querySelector('#flag-container') as HTMLDivElement;

    intlTelInput(input, {
      initialCountry: 'tn',
      separateDialCode: true,
      utilsScript: 'node_modules/intl-tel-input/build/js/utils.js',
      customPlaceholder: function (selectedCountryPlaceholder, selectedCountryData) {
        return '+' + selectedCountryData.dialCode + ' ' + selectedCountryPlaceholder;
      },
      nationalMode: false,
      onlyCountries: ['tn', 'us', 'gb', 'de', 'fr', 'es'],
    });

    // Add flag class to flag container
    flagContainer.classList.add('flag-icon');
  }
}



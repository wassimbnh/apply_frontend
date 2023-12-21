import { Component, OnInit } from '@angular/core';
import intlTelInput from 'intl-tel-input';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  registerClientForm: FormGroup = new FormGroup({});
  companyForm: FormGroup = new FormGroup({});
  isSubmitted:boolean = false;

  text: string = 'Create an account and post your a job offer'
  currentStep = 1; // Track the current step
  totalSteps = 2; // Total number of steps
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
  }

  registerClient(): void {
    this.isSubmitted = true;
    console.log(this.currentStep)
    // Check if the current form is valid before proceeding to the next step
    const currentForm = this.getCurrentForm();
    if (currentForm.valid) {
      // Update progress value
      this.progressPercentage += (100 / this.totalSteps);

      // Check if there are more steps
      if (this.currentStep < this.totalSteps) {
        // Move to the next step
        this.currentStep++;
      } else {
        // Logic to navigate to the next page or perform other actions
        // For example, you can use Angular Router to navigate to the next page
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



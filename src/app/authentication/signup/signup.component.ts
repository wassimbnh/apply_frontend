import { Component, OnInit } from '@angular/core';
import intlTelInput from 'intl-tel-input';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerClientForm: FormGroup = new FormGroup({});
  isSubmitted:boolean = false;

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
    if(this.registerClientForm.valid){
      console.log(this.registerClientForm.value)
    }
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



import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { confirmPasswordValidator } from '../../helpers/confirm-password.validator';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

  resetForm: FormGroup = new FormGroup({});
  isSubmitted: boolean = false;

  text: string = 'Make the job market better with faster recruiting';

  ngOnInit(): void {
    this.initRegisterForm();
  }

  initRegisterForm(): void {
    this.resetForm = new FormGroup({
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20)
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
      ])
    }, { validators: confirmPasswordValidator });
  }

  resetPassword() {
    this.isSubmitted = true;
  }
  
}

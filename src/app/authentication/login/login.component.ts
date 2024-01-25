import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private route :ActivatedRoute,
              private authService: AuthenticationService){}

  loginForm: FormGroup = new FormGroup({});
  isSubmitted: boolean = false;

  text: string = 'Login your account and hire faster'

  confirmEmailMessage: string = '';

  ngOnInit(): void {
    this.initRegisterForm();

    const queryParams = this.route.snapshot.queryParams;

    const confirmEmailToken = queryParams['confirmEmailToken'];
    this.authService.confirmEmail(confirmEmailToken).subscribe(
      (response) =>{
        console.log(response)
      },
      (error)=>{
        console.log(error)
        //this.confirmEmailMessage = error.message;
      }
    )
  }

  initRegisterForm(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
      ]),
      password: new FormControl('', [
        Validators.required,
      ]),
      
    });
  }

  login(){
    this.isSubmitted = true;
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginCredentials } from '../interfaces/loginCreds.interface';
import { Observable } from 'rxjs';
import { JwtTokens } from '../interfaces/jwt.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient
  ) { }
  private apiUrl = "http://localhost:9090/auth"

  signUpAdmin(admin:any){
   return this.http.post(`${this.apiUrl}/signup-company`, admin)
  }

  confirmEmail(token: string){
    return this.http.post(`${this.apiUrl}/confirm-email/${token}`,'' )
  }

  signUpClient(client: any){
    return this.http.post(`${this.apiUrl}/signup-client`,client)
  }

  loginClient(logindCreds: LoginCredentials): Observable<JwtTokens>{
    return this.http.post<JwtTokens>(`${this.apiUrl}/login-client`,logindCreds)
  }
}

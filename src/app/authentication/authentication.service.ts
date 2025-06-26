import { Injectable } from '@angular/core';
import { APIResponse, CompanyData, JwtTokens, LoginCredentials } from '../interfaces';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserData } from '../interfaces/Client.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }


  private apiUrl = "http://localhost:9090/auth"

  loginClient(logindCreds: LoginCredentials): Observable<APIResponse<JwtTokens>>{
    return this.http.post<APIResponse<JwtTokens>>(`${this.apiUrl}/login-client`,logindCreds)
  }

  signUpCompany(companyData:CompanyData): Observable<APIResponse<CompanyData>>{
   return this.http.post<APIResponse<any>>(`${this.apiUrl}/signup-company`, companyData)
  }

  confirmEmail(token: string): Observable<APIResponse<any>>{
    return this.http.post<APIResponse<any>>(`${this.apiUrl}/confirm-email/${token}`,'' )
  }

  signUpClient(user: UserData): Observable<APIResponse<JwtTokens>>{
    return this.http.post<APIResponse<any>>(`${this.apiUrl}/signup-user`, user)
  }

}

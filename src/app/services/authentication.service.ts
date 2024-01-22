import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient
  ) { }
  private apiUrl = "http://localhost:9090/auth"

  signUpAdmin(admin:any){
   return this.http.post(`${this.apiUrl}/signup-admin`, admin)
  }
}

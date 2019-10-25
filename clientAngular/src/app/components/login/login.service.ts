import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient,private router:Router) { }

  logout(): void {
    localStorage.setItem('isLoggedIn', "false");
  }

  onlogin(username:string, password:string){
    localStorage.setItem('isLoggedIn', "true");
    this.router.navigate(['/teacher']);
  } 
}

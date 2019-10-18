import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
// import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient, private router:Router, ) { }

  logout(): void {
    
  } 

  onlogin(username:string, password:string){
    localStorage.setItem('isLoggedIn', "true");
  } 

}


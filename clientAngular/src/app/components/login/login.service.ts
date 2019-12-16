import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Account } from '../models/account';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient,private router:Router) { }

  logout(): void {
    localStorage.setItem('isLoggedIn', "false");
  }

  onlogin(username:string, password:string){
    
    const obj={
      username : username,
      password :password
    }

    const headers = new HttpHeaders()
    .set("Content-Type", "application/json");

    return this.httpClient.post('http://'+ environment.ip +':8090/onlogin',JSON.stringify(obj),{headers})
  } 

  getTeacherByUsername(username:string){
    return this.httpClient.get('http://' + environment.ip + ':8090/teacher/byName/'+username);
  }

  getStudentByUsername(username:string){
    return this.httpClient.get('http://'+ environment.ip + ':8090/student/byName/'+ username);
  }

  saveAccount(account : Account){

    const headers = new HttpHeaders()
    .set("Content-Type", "application/json");
    return this.httpClient.post('http://'+ environment.ip+ ':8090/saveAccount',JSON.stringify(account),{headers});
  }
}

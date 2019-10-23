import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup;

  constructor(private router: Router, private loginService:LoginService) { }

  //cand intru pe pagina de login, atunci trebuie sa ma deloghez
  ngOnInit() {
  this.loginForm = new FormGroup(
  {'username': new FormControl(),
   'password' : new FormControl() 
});
   
}
  onSubmit(s:string){
   let usern = this.loginForm.controls['username'].value;
   let passs = this.loginForm.controls['password'].value;
   this.loginService.onlogin('a','b');
  }

}

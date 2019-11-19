import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../login/login.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Account } from '../models/account';

@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.css']
})
export class LogonComponent implements OnInit {

  logonForm:FormGroup;

  constructor(private loginService:LoginService) { }
  isTeacher = false;

  ngOnInit() {
    
    this.logonForm = new FormGroup(
      {'username': new FormControl(),
       'password' : new FormControl(),
       'password2': new FormControl() 
    });
  }

  onSubmit(){
    let usern = this.logonForm.controls['username'].value;
    let passs = this.logonForm.controls['password'].value;
    let passs2 = this.logonForm.controls['password2'].value;

    const account : Account = new Account();
    account.username = usern;
    account.password = passs;
    account.isTeacher = this.isTeacher;
    console.log(JSON.stringify(account))
    
    this.loginService.saveAccount(account).subscribe(
      
    );
  }
}

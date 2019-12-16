import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service'
import { HttpClient } from '@angular/common/http';
import { Account } from '../models/account';
import { Teacher } from '../models/teacher';
import { Student } from '../models/student';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup;
invalidAccount : boolean = false;

  constructor(private router: Router, private loginService:LoginService, private messageService: MessageService) { }

  //cand intru pe pagina de login, atunci trebuie sa ma deloghez
  ngOnInit() {
  this.loginForm = new FormGroup(
  {'username': new FormControl(),
   'password' : new FormControl() 
});
   
}
  onSubmit(){
   let usern = this.loginForm.controls['username'].value;
   let passs = this.loginForm.controls['password'].value;
   this.loginService.onlogin(usern,passs).subscribe( (res:Account)=>
    {
      //here we check if the user is a teacher or a student...
      if(res.isTeacher){ 
      this.loginService.getTeacherByUsername(usern).subscribe(
        (res:Teacher)=>{
          //we use the id of teacher from database
          localStorage.setItem('teacherId',res.idTeacher.toString())
          localStorage.setItem('isLoggedIn', "true");
          
          this.router.navigate(['teacher/myClassooms']); })
      }
      else{
        this.loginService.getStudentByUsername(usern).subscribe(
          (res:Student)=>{
            localStorage.setItem('studentId', res.idStudent.toString());
            localStorage.setItem('isLoggedIn', "true")
           
            this.router.navigate(['student/myClassrooms'])

          }
        )
      } 
    },
    err=>{
      if (err.status === 401) this.invalidAccount = true});
  }

  onClick(){
    this.router.navigate(['logon']);    
  }
}

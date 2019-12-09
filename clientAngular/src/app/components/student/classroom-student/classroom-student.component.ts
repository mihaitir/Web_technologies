import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Classroom } from '../../models/classroom';

@Component({
  selector: 'app-classroom-student',
  templateUrl: './classroom-student.component.html',
  styleUrls: ['./classroom-student.component.css']
})
export class ClassroomStudentComponent implements OnInit {

  constructor(private studentService:StudentService) { }
  classrooms:Classroom[] = [];
  idStudent : number;

  ngOnInit() {
    this.idStudent = +localStorage.getItem('studentId');
    console.log(localStorage.getItem('idStudent'))
    this.studentService.findAllClassStudByIdStudent(this.idStudent).subscribe(
      (res:Classroom[]) =>{
        this.classrooms = res;
        console.log(this.classrooms);
      },
      err=>{
        console.log(err);
      }
    )  
  }

}

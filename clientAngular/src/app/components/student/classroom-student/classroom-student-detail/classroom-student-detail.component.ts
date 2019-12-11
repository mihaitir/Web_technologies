import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/components/models/student';
import { StudentService } from '../../student.service';
import { ClassroomService } from 'src/app/components/teacher/classroom/classroom.service';
import { Test } from 'src/app/components/models/test';

@Component({
  selector: 'app-classroom-student-detail',
  templateUrl: './classroom-student-detail.component.html',
  styleUrls: ['./classroom-student-detail.component.css']
})
export class ClassroomStudentDetailComponent implements OnInit {

  constructor(private studentService:StudentService, private classroomService:ClassroomService) { }

  idClassroom : number;
  tests : Test[] = [];
  ngOnInit() {
    this.idClassroom = this.studentService.getIdClassroom();
    this.classroomService.getTestsByClassroomId(this.idClassroom).subscribe(
      (res:Test[]) =>{
        this.tests = res;
        console.log(this.tests);
      },
      err=>{
        console.log(err);
      }
    )

  }

}

import { Component, OnInit } from '@angular/core';
import { ClassroomService } from '../classroom.service';
import { Student } from 'src/app/components/models/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Student[] = [];
  idClassroom: number;
  constructor(private classroomService:ClassroomService) { }

  ngOnInit() {
    this.idClassroom = this.classroomService.getIdClassroom();
    this.classroomService.getStudentEnroledByClassroomId(this.idClassroom).subscribe(
      (res:Student[])=>{
        this.students = res;
      },err=>{console.log(err)}
    )
  }

}

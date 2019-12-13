import { Component, OnInit } from '@angular/core';
import { ClassroomService } from '../classroom.service';
import { Student } from 'src/app/components/models/student';
import { ClassStud } from 'src/app/components/models/class-stud';
import { StudTest } from 'src/app/components/models/stud-test';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Student[] = [];
  tableInfo : TableInfo[] = [];
  idClassroom: number;
  constructor(private classroomService:ClassroomService) { }

  ngOnInit() {
    this.idClassroom = this.classroomService.getIdClassroom();

    this.classroomService.getStudentEnroledByClassroomId(this.idClassroom).subscribe(
      (res:Student[])=>{
        this.students = res;
        for(let student of this.students){
          
          
          //for each student, i obtain the list of tests completed, and made an average of their scores...
          this.classroomService.getScoresUsingIdStudentAndIdClassroom(student.idStudent, this.idClassroom).subscribe(
            (res:StudTest[]) =>{
              let s = 0;
              for(let c of res){
                s = s+c.score;
              }
              this.tableInfo.push({name:student.name, score:s/res.length})
            }
          )
         

        }
        console.log(this.tableInfo);
      },err=>{console.log(err)}
    )
  }

}

export interface TableInfo {
  name : string; 
  score : number;
}

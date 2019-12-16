import { Component, OnInit, OnDestroy } from '@angular/core';
import { ClassroomService } from '../classroom.service';
import { Student } from 'src/app/components/models/student';
import { ClassStud } from 'src/app/components/models/class-stud';
import { StudTest } from 'src/app/components/models/stud-test';
import { timer, Subscription } from 'rxjs';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit, OnDestroy {

  students: Student[] = [];
  tableInfo: TableInfo[] = [];
  idClassroom: number;
  subscribeT: Subscription;
  constructor(private classroomService: ClassroomService) { }


  ngOnInit() {

    const source = timer(0, 1000);
    this.subscribeT = source.subscribe(
      val => {
        this.initialization();
      });
  }

  initialization() {
    
    this.idClassroom = this.classroomService.getIdClassroom();
    this.classroomService.getStudentEnroledByClassroomId(this.idClassroom).subscribe(
      (res: Student[]) => {
          if(JSON.stringify(this.students) !== JSON.stringify(res))
          {
          this.students = res;
          this.tableInfo = [];
          for (let student of this.students) {

            //for each student, i obtain the list of tests completed, and made an average of their scores...
            this.classroomService.getScoresUsingIdStudentAndIdClassroom(student.idStudent, this.idClassroom).subscribe(
              (res: StudTest[]) => {
                let s = 0;
                for (let c of res) {
                  s = s + c.score;
                }
                this.tableInfo.push({ name: student.name, score: s / res.length })
              }
            )
            }
          
        }
        console.log(this.tableInfo);
      }, err => { console.log(err) }
    )
  }

ngOnDestroy(){
  this.subscribeT.unsubscribe();
}
}


export interface TableInfo {
  name: string;
  score: number;
}

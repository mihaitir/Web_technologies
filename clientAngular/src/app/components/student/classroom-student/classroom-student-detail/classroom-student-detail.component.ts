import { Component, OnInit, OnDestroy } from '@angular/core';
import { Student } from 'src/app/components/models/student';
import { StudentService } from '../../student.service';
import { ClassroomService } from 'src/app/components/teacher/classroom/classroom.service';
import { Test } from 'src/app/components/models/test';
import { timer, Subscription } from 'rxjs';


@Component({
  selector: 'app-classroom-student-detail',
  templateUrl: './classroom-student-detail.component.html',
  styleUrls: ['./classroom-student-detail.component.css']
})
export class ClassroomStudentDetailComponent implements OnInit, OnDestroy {

  constructor(private studentService: StudentService, private classroomService: ClassroomService) { }


  subscribe: Subscription;
  idClassroom: number;
  tests: Test[] = [];
  numberOfTest : number = 0;
  ngOnInit() {
    const source = timer(0, 2000);
    this.subscribe = source.subscribe(val => {
      this.initialization();
    });
  }

  initialization() {
    this.idClassroom = this.studentService.getIdClassroom();
    this.classroomService.getTestsByClassroomId(this.idClassroom).subscribe(
      (res: Test[]) => {
        this.numberOfTest = res.length;
        this.tests = res;
      },
      err => {
        console.log(err);
      }
    )
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

  public trackByFunction(index, item) {

    if (!item) return null;
    return item.idClassroom;
  }

}

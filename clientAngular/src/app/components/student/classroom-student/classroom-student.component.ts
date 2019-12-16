import { Component, OnInit, OnDestroy } from '@angular/core';
import { StudentService } from '../student.service';
import { Classroom } from '../../models/classroom';
import { timer, Subscription } from 'rxjs';

@Component({
  selector: 'app-classroom-student',
  templateUrl: './classroom-student.component.html',
  styleUrls: ['./classroom-student.component.css']
})
export class ClassroomStudentComponent implements OnInit, OnDestroy {

  constructor(private studentService:StudentService) { }
  classrooms:Classroom[] = [];
  idStudent : number;
  subscribeT:Subscription;
  
  ngOnInit() {

    const source = timer(0, 1000);
    this.subscribeT = source.subscribe(
      val => 
      {
        this.initialization();
      }); 
  }

  ngOnDestroy(){
    this.subscribeT.unsubscribe();
  }

  public trackByFunction(index, item){
    
    if (!item) return null;
    return item.idClassroom;
  }

  initialization(){
    this.idStudent = +localStorage.getItem('studentId');
    this.studentService.findAllClassStudByIdStudent(this.idStudent).subscribe(
      (res:Classroom[]) =>{
        this.classrooms = res;
      },
      err=>{
        console.log(err);
      }
    )  
  }

}

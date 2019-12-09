import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { StudentService } from './student.service';
import { ClassStud } from '../models/class-stud';
import { Classroom } from '../models/classroom';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  createClassroom: FormGroup;
  idStudent: number;
  display: boolean = false;

  constructor(private studentService:StudentService) { }

  ngOnInit() {

    this.idStudent = +localStorage.getItem('studentId');
    this.createClassroom = new FormGroup({
      classroomKey: new FormControl(''),
    });
  }

  launchModal() {
    console.log('launch modal')
    this.display = true;
  }

  onSubmit() {

    let obj : ClassStud = new ClassStud();
    obj.idStudent = this.idStudent;
    this.studentService.findClassroomByKey(this.createClassroom.controls.classroomKey.value.toString()).subscribe(
      (res:Classroom) =>{
        obj.idClassroom = res.idClassroom;
        this.studentService.enrolToNewClassroom(obj).subscribe(res=>{
          console.log('Succesfully enroled');
          this.display = false;
        },
        err=>{
          console.log(err)
        })
      },
      err=>{
        console.log('cel mai probabil nu exista clasa')
        console.log(err)
      }
    );

  }
}

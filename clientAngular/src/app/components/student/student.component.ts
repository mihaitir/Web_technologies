import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { StudentService } from './student.service';
import { ClassStud } from '../models/class-stud';
import { Classroom } from '../models/classroom';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  createClassroom: FormGroup;
  idStudent: number;
  display: boolean = false;

  constructor(private studentService:StudentService, private messageService: MessageService) { }

  ngOnInit() {

    this.idStudent = +localStorage.getItem('studentId');
    this.createClassroom = new FormGroup({
      classroomKey: new FormControl(''),
    });
  }

  launchModal() {
    this.display = true;
  }

  onSubmit() {

    let obj : ClassStud = new ClassStud();
    obj.idStudent = this.idStudent;
    this.studentService.findClassroomByKey(this.createClassroom.controls.classroomKey.value.toString()).subscribe(
      (res:Classroom) =>{
        obj.idClassroom = res.idClassroom;
        this.studentService.enrolToNewClassroom(obj).subscribe(res=>{
          this.display = false;
          this.messageService.add({severity:'success', summary:'Service Message', detail:'Successfully enroled'});
        },
        err=>{
          console.log(err)
          this.display = false;
          this.messageService.add({severity:'success', summary:'Service Message', detail:'Error'});
        })
      },
      err=>{
        this.display = false;
        this.messageService.add({severity:'success', summary:'Service Message', detail:'Classroom does not exist'});
        console.log(err)
      }
    );

  }
}

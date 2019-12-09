import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-classroom-student',
  templateUrl: './add-classroom-student.component.html',
  styleUrls: ['./add-classroom-student.component.css']
})
export class AddClassroomStudentComponent implements OnInit {

  constructor() { }

  createClassroom = new FormGroup({
    classroomName: new FormControl(''),
    classroomKey: new FormControl(''),
    classroomDescription: new FormControl('')
  });

  ngOnInit() {
    
  }

  onSubmit(){ 
    // let classroom = new Classroom;
    // classroom.key = this.createClassroom.get('classroomKey').value;
    // classroom.name = this.createClassroom.get('classroomName').value;
    // classroom.description = this.createClassroom.get('classroomDescription').value;
    // this.teacherService.createClassroom(localStorage.getItem('teacherId'),classroom).subscribe(res=>{
    //   console.log('classroom created')});
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Classroom } from '../../models/classroom';
import { TeacherService } from '../../services/teacher.service';

@Component({
  selector: 'app-add-classroom',
  templateUrl: './add-classroom.component.html',
  styleUrls: ['./add-classroom.component.css']
})
export class AddClassroomComponent implements OnInit {

  constructor(private teacherService:TeacherService) { }

  createClassroom = new FormGroup({
    classroomName: new FormControl(''),
    classroomKey: new FormControl(''),
    classroomDescription: new FormControl('')
  });


  ngOnInit() {
    
  }

  onSubmit(){ 
    let classroom = new Classroom;
    classroom.key = this.createClassroom.get('classroomKey').value;
    classroom.name = this.createClassroom.get('classroomName').value;
    classroom.description = this.createClassroom.get('classroomDescription').value;
    this.teacherService.createClassroom(localStorage.getItem('teacherId'),classroom).subscribe();
    
  }

}

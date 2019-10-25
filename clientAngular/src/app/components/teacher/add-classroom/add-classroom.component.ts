import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-classroom',
  templateUrl: './add-classroom.component.html',
  styleUrls: ['./add-classroom.component.css']
})
export class AddClassroomComponent implements OnInit {

  constructor() { }

  createClassroom = new FormGroup({
    classroomName: new FormControl(''),
    classroomKey: new FormControl(''),
  });


  ngOnInit() {
  }

  onSubmit(){
    console.log('here');
  }

}

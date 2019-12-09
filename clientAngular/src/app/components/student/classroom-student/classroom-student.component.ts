import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classroom-student',
  templateUrl: './classroom-student.component.html',
  styleUrls: ['./classroom-student.component.css']
})
export class ClassroomStudentComponent implements OnInit {

  constructor() { }


  
  display: boolean = false;

  showDialog() {
      this.display = true;
  }

  ngOnInit() {
  }

}

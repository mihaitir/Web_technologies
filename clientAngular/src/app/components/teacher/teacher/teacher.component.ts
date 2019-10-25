import { Component, OnInit } from '@angular/core';
import { Classroom } from '../../models/classroom';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  constructor() { }

  classrooms : Classroom[] = [];
  ngOnInit() {
    

  }



}

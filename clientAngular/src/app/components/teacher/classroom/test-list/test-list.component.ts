import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClassroomService } from '../classroom.service';
import { Test } from 'src/app/components/models/test';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})
export class TestListComponent implements OnInit {

  constructor(private ar:ActivatedRoute, private classroomService:ClassroomService) { }

  idClassroom : number;
  tests:Test[] = [];
  
  testSelected = true;
  ngOnInit() {
  
  this.idClassroom = this.classroomService.getIdClassroom();
  this.classroomService.getTestsByClassroomId(this.idClassroom).subscribe(
    (res:Test[])=>{
      console.log(res);
      this.tests = res;
      
    }
  )
  
}



}

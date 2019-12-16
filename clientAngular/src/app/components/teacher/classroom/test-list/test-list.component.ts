import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClassroomService } from '../classroom.service';
import { Test } from 'src/app/components/models/test';
import { timer, Subscription } from 'rxjs';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})
export class TestListComponent implements OnInit, OnDestroy{

  constructor(private ar:ActivatedRoute, private classroomService:ClassroomService) { }

  idClassroom : number;
  tests:Test[] = [];
  subscribeT : Subscription;

  testSelected = true;
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
  return item.idTest;
}

initialization(){
  this.idClassroom = this.classroomService.getIdClassroom();
  this.classroomService.getTestsByClassroomId(this.idClassroom).subscribe(
    (res:Test[])=>{
      this.tests = res;
    }
  ) 
}


}

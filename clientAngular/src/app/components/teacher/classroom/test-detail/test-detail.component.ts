import { Component, OnInit, Input } from '@angular/core';
import { Test } from 'src/app/components/models/test';
import { ActivatedRoute } from '@angular/router';
import { Question } from 'src/app/components/models/question';
import { ClassroomService } from '../classroom.service';
import { Option } from 'src/app/components/models/option';

@Component({
  selector: 'app-test-detail',
  templateUrl: './test-detail.component.html',
  styleUrls: ['./test-detail.component.css']
})
export class TestDetailComponent implements OnInit {

  constructor(private ar:ActivatedRoute, private classroomService:ClassroomService) { }
  idTest:number;
  questions : Question[] = [];

  ngOnInit() {
    this.idTest = this.ar.snapshot.params['id'];
    this.classroomService.getQuestionsByTestId(this.idTest).subscribe((res:Question[])=>{
      this.questions = res;
      for(let q of this.questions){
        this.classroomService.getOptionsByQuestionId(q.idQuestion).subscribe((res2:Option[])=>
        {q.option = res2;
      }, err=>{console.log(err)});
      }
      console.log(this.questions);
    },
    err=>{console.log(err)})
  }
} 
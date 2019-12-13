import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../student.service';
import { Question } from 'src/app/components/models/question';

@Component({
  selector: 'app-solve-test',
  templateUrl: './solve-test.component.html',
  styleUrls: ['./solve-test.component.css']
})
export class SolveTestComponent implements OnInit {

  constructor(private studentService:StudentService) { }
  idTest : number
  questions : Question[] = [];
  testStarted = false;
  indexOfCurrentQuestion = 0;
  nr = 10;

  ngOnInit() {
    this.idTest = this.studentService.getIdTest();
    this.studentService.getQuestionsByTestId(this.idTest).subscribe(
      (res:Question[]) =>{
        this.questions = res;
      }
    )
  }

  onTestStarted(){
    this.testStarted = true;
  }

}

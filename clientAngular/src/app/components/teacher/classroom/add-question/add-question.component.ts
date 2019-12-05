import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ClassroomService } from '../classroom.service';
import { Question } from 'src/app/components/models/question';
import { Option } from 'src/app/components/models/option';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  

  constructor(private classroomService: ClassroomService) { }
  q1 = false;
  q2 = false;
  q3 = false;
  q4 = false;
  idTest: number;

  formAddQuestion: FormGroup;
  ngOnInit() {
    this.idTest = this.classroomService.getIdCurrentTest();

    this.formAddQuestion = new FormGroup({
      questionName: new FormControl(''),
      answer1: new FormControl(''),
      answer2: new FormControl(''),
      answer3: new FormControl(''),
      answer4: new FormControl(''),
    });
  }

  onAddNewQuestion() {
    let q: Question = new Question();
    q.name = this.formAddQuestion.controls['questionName'].value;
    q.idTest = this.classroomService.getIdCurrentTest();

    console.log(JSON.stringify(q));
    this.classroomService.saveQuestion(q).subscribe((res: Question) => {
      this.classroomService.setIdCurrentQuestion(res.idQuestion);
      let option: Option = new Option();
      option.idQuestion = this.classroomService.getIdCurrentQuestion();
      option.name = this.formAddQuestion.controls.answer1.value;
      option.isCorrect = this.q1;

      console.log(JSON.stringify(option));
      this.classroomService.saveOption(option).subscribe(res=>{console.log('da')},err=>{console.log(err)});

      //save the second option
      console.log(JSON.stringify(option));  
      option.name = this.formAddQuestion.controls.answer2.value;
      option.isCorrect = this.q2;
      this.classroomService.saveOption(option).subscribe();

      //save the third option
      option.name = this.formAddQuestion.controls.answer3.value;
      option.isCorrect = this.q3;
      this.classroomService.saveOption(option).subscribe();

      //save the fourt option
      option.name = this.formAddQuestion.controls.answer4.value;
      option.isCorrect = this.q4;
      this.classroomService.saveOption(option).subscribe();
    })
  }

  onCreateTest() {

  }

}

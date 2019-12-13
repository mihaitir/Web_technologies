import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'src/app/components/models/question';
import { StudentService } from '../../../student.service';
import { Option } from 'src/app/components/models/option';
import { FormControl } from '@angular/forms';
import { StudTest } from 'src/app/components/models/stud-test';

@Component({
  selector: 'app-resolve-question',
  templateUrl: './resolve-question.component.html',
  styleUrls: ['./resolve-question.component.css']
})
export class ResolveQuestionComponent implements OnInit {

  indexOfCurrentQuestion :number;
  endTest : boolean = false;
  name: string;
  options : Option[] = [];
  @Input() questions:Question[];
  selectedValues: string[] = [];
  numberOfCorrectAnswer : number = 0;

  v1 : string;
  v2 : string;
  v3 : string;
  v4 : string;

  constructor(private studentService:StudentService) { }

  ngOnInit() {
   
    this.indexOfCurrentQuestion = 0;
    this.name = this.questions[this.indexOfCurrentQuestion].name;
    this.studentService.getOptionsByQuestionId(this.questions[this.indexOfCurrentQuestion].idQuestion).subscribe(
      (res:Option[]) =>
      {
        this.options = res;
        this.v1 = this.options[0].name;
        this.v2 = this.options[1].name;
        this.v3 = this.options[2].name;
        this.v4 = this.options[3].name;
        }
    )
    
  }

  nextQuestion(){
    console.log('Respunsul a fost ' + this.verifyAnswer(this.options));
    if(this.verifyAnswer(this.options)) this.numberOfCorrectAnswer = this.numberOfCorrectAnswer + 1;
    this.selectedValues = [];
    this.indexOfCurrentQuestion = this.indexOfCurrentQuestion + 1;
    if (this.indexOfCurrentQuestion >= this.questions.length){
      this.name = 'Sfarsit test'
      this.endTest = true;
      
      let result = (10*this.numberOfCorrectAnswer) / this.questions.length;
      console.log('Ai obtiunut nota' + result);
      console.log(this.studentService.getIdTest() + "@" + localStorage.getItem('studentId'))
      let studTest : StudTest = new StudTest();
      studTest.idStudent = +localStorage.getItem('studentId');
      studTest.idTest = this.studentService.getIdTest();
      studTest.score = result;
      studTest.done = true;
      console.log(studTest);
      this.studentService.saveTestResult(studTest).subscribe(
        (res:any)=>{
          console.log(res)
        },
       err=>{
         console.log(err);
       }
      )
        
    }

    else{
      this.name = this.questions[this.indexOfCurrentQuestion].name;
      this.studentService.getOptionsByQuestionId(this.questions[this.indexOfCurrentQuestion].idQuestion).subscribe(
        (res:Option[]) =>{
          this.options = res;
          this.v1 = this.options[0].name;
          this.v2 = this.options[1].name;
          this.v3 = this.options[2].name;
          this.v4 = this.options[3].name;
        }
      )
    }
  }

  verifyAnswer(options:Option[]): boolean{
    for(let o of options){
      if (o.isCorrect){
        //if the option is correct let's find if it selected, if it's not then the answer is wrong
        if (!this.selectedValues.includes(o.name)){
          return false;
        }
      }
      else{ //if it's incorrect, let's verify if it selected, if it's selected then the answer is wrong again...
        if(this.selectedValues.includes(o.name)) {
          return false;
        }
      }
    }
    return true;
  }
}

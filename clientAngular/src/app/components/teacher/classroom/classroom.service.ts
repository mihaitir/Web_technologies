import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Test } from '../../models/test';
import { Question } from '../../models/question';
import { Option} from '../../models/option';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  idClassroom : number;
  idCurrentTest: number;
  idCurrentQuestion: number;
  cureentSelectedTest : Test;
  constructor(private httpClient:HttpClient) { }

  setIdClassroom(idClassroom: number){
    this.idClassroom = idClassroom;
  }

  getIdClassroom(): number{
    return this.idClassroom;
  }

  setIdCurrentTest(idCurrentTest:number){
    this.idCurrentTest = idCurrentTest;
  }

  getIdCurrentTest(): number{
    return this.idCurrentTest
  }

  setIdCurrentQuestion(idCurrentQuestion: number){
    this.idCurrentQuestion = idCurrentQuestion;
  }

  getIdCurrentQuestion():number{
    return this.idCurrentQuestion;
  }

  setcureentSelectedTest(cureentSelectedTest:Test){
    this.cureentSelectedTest = cureentSelectedTest;
  }

  getCureentSelectedTest():Test{
    return this.cureentSelectedTest;
  }

  saveTest(test:Test){
    return this.httpClient.post('http://localhost:8090/test', test);
  }

  saveQuestion(question:Question){
    return this.httpClient.post('http://localhost:8090/question', question);
  }

  saveOption(option:Option){
    return this.httpClient.post('http://localhost:8090/option', option);
  }

  getTestsByClassroomId(idClassroom:number){
    return this.httpClient.get('http://localhost:8090/test/byClassroom/'+ idClassroom);
  }

  getQuestionsByTestId(idTest:number){
    return this.httpClient.get('http://localhost:8090/question/' + idTest);
  }

  getOptionsByQuestionId(idQuestion:number){
    return this.httpClient.get('http://localhost:8090/options/'+idQuestion);
  }

  getStudentEnroledByClassroomId(idClassroom: number){
    return this.httpClient.get('http://localhost:8090/classroom/getStudentsByIdClassroom/' + idClassroom);
  }

}

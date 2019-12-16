import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClassStud } from '../models/class-stud';
import { StudTest } from '../models/stud-test';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient:HttpClient) { }

  idClassroom: number;
  idTest: number;

  public setIdClassroom(idClassroom : number){
    this.idClassroom = idClassroom;
  }

  public getIdClassroom(){
    return this.idClassroom;
  }

  public setIdTest(idTest:number){
    this.idTest = idTest;
  }

  public getIdTest(){
    return this.idTest;
  }

  public enrolToNewClassroom(classStud :ClassStud){
    return this.httpClient.post('http://'+ environment.ip +':8090/student/addNewClassroom', classStud);
  }

  public findClassroomByKey(key:string){
    return this.httpClient.get('http://'+ environment.ip+ ':8090/classroom/getClassroomByKey/' + key);
  }

  public findAllClassStudByIdStudent(idStudent: number){
    return this.httpClient.get('http://' +environment.ip + ':8090/classroom/classeByStudentId/'+ idStudent);
  }

  public getQuestionsByTestId(idTest:number){
    return this.httpClient.get('http://' +environment.ip + ':8090/question/' + idTest);
  }

  public getOptionsByQuestionId(idQuestion:number){
    return this.httpClient.get('http://'+ environment.ip + ':8090/options/'+idQuestion);
  }

  public saveTestResult(studTest : StudTest){
    return this.httpClient.post('http://'+ environment.ip +':8090/classroom/saveTestResult', studTest);  
  }

  public getTestResultForTestAndStud(idStudent : number, idTest: number){
		return this.httpClient.get('http://'+ environment.ip +':8090/classroom/getTestsResult/' + idStudent + '/' +idTest);
	}

}

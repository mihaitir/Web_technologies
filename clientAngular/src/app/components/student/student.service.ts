import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClassStud } from '../models/class-stud';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient:HttpClient) { }

  public enrolToNewClassroom(classStud :ClassStud){
    return this.httpClient.post('http://localhost:8090/student/addNewClassroom', classStud);
  }

  public findClassroomByKey(key:string){
    return this.httpClient.get('http://localhost:8090/classroom/getClassroomByKey/' + key);
  }

  public findAllClassStudByIdStudent(idStudent: number){
    return this.httpClient.get('http://localhost:8090/classroom/classeByStudentId/'+ idStudent);
  }

}

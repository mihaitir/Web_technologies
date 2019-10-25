import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Classroom } from '../models/classroom';

@Injectable({
  providedIn: 'root'
})

//in this service i put the calles that are made by the teacher
export class TeacherService {

  constructor(private httpClient: HttpClient) { }

  getClassroomsByTeacherId() {
    return this.httpClient.get('/localhost:8090/classroom/classes/t'); //change t... in the future.
  }

  createClassroom(idTeacher: string, classroom: Classroom) {
    return this.httpClient.post('//localhost:8090/classroom/add/' + idTeacher, JSON.stringify(classroom), this.headerWithApplicationNJSON());
  }

  headerWithApplicationNJSON() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = { headers: headers };
    return options;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private httpClient:HttpClient) { }

  getClassroomsByTeacherId(){
    return this.httpClient.get('//localhost:8090/classroom/classes/t');
  }
}

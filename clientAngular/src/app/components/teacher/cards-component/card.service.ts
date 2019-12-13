import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Classroom } from '../../models/classroom';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  
  constructor(private httpClient:HttpClient) { }

  getAllClassroomByTeacherId(id:number){
    console.log(id+"!!!!!!");
     return this.httpClient.get('//localhost:8090/classroom/classes/'+ id);
  }

  getClassroomById(id:number){
    return this.httpClient.get('http://localhost:8090/classroom/classesById/'+id);
  }
}


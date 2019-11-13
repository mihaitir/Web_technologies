import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Classroom } from '../../models/classroom';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  
  constructor(private httpClient:HttpClient) { }

  getAllClassroomByTeacherId(id:number){
     return this.httpClient.get('//localhost:8090/classroom/classes/1');
  }

  getClassroomById(id:number){
    return this.httpClient.get('//localhost:8090/classroom/classesById/'+id);
  }
}


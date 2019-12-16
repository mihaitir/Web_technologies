import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Classroom } from '../../models/classroom';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  
  constructor(private httpClient:HttpClient) { }

  getAllClassroomByTeacherId(id:number){
     return this.httpClient.get('http://'+ environment.ip +':8090/classroom/classes/'+ id);
  }

  getClassroomById(id:number){
    return this.httpClient.get('http://'+ environment.ip + ':8090/classroom/classesById/'+id);
  }
}


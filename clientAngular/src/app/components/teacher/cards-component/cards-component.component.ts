import { Component, OnInit, Input } from '@angular/core';
import { Classroom } from '../../models/classroom';
import { HttpClient } from '@angular/common/http';
import { CardService } from './card.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cards-component',
  templateUrl: './cards-component.component.html',
  styleUrls: ['./cards-component.component.css']
})
export class CardsComponentComponent implements OnInit {

  classrooms:Classroom[] = [];

  constructor(private cardService:CardService){

  }
  ngOnInit() {
    
    this.cardService.getAllClassroomByTeacherId(+localStorage.getItem('teacherId')).
    subscribe((res:Classroom[])=>{this.classrooms = res;})
  }
  
}

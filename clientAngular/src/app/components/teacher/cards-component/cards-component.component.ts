import { Component, OnInit, Input } from '@angular/core';
import { Classroom } from '../../models/classroom';
import { HttpClient } from '@angular/common/http';
import { CardService } from './card.service';

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
    this.cardService.getAllClassroomByTeacherId(1).subscribe((res:Classroom[])=>{this.classrooms = res; console.log(res)})

    console.log(this.classrooms);
  }

}

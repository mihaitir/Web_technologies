import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../cards-component/card.service';
import { Classroom } from '../../models/classroom';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css']
})
export class ClassroomComponent implements OnInit {

  constructor(private ar:ActivatedRoute, private cardService:CardService) { }

  id:number;
  classroom : Classroom;
  ngOnInit() {
    this.id = this.ar.snapshot.params['idClassroom'];
    this.cardService.getClassroomById(this.id).subscribe((res:Classroom)=>{this.classroom = res});  
  }

}

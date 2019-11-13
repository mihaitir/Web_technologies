import { Component, OnInit, Input } from '@angular/core';
import { Classroom } from 'src/app/components/models/classroom';
import { CardService } from '../card.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private cardService:CardService, private router:Router) { }

  
  classroom:Classroom;
  @Input() id:number;
  ngOnInit() {
    this.cardService.getClassroomById(this.id).subscribe((res:Classroom)=>{this.classroom = res});
  }

  onClick(){
    this.router.navigate(['/teacher/classroom',this.id])
  }
}


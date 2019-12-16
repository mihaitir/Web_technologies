import { Component, OnInit, Input } from '@angular/core';
import { CardService } from 'src/app/components/teacher/cards-component/card.service';
import { Classroom } from 'src/app/components/models/classroom';
import { StudentService } from '../../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-s',
  templateUrl: './card-s.component.html',
  styleUrls: ['./card-s.component.css']
})
export class CardSComponent implements OnInit {

  constructor(private cardService:CardService, private studentService:StudentService,private  router: Router) { }

  classroom:Classroom;
  @Input() id:number;
  
  ngOnInit() {
   this.cardService.getClassroomById(this.id).subscribe((res:Classroom)=>{this.classroom = res});
  }

  onClick(){ 
    this.studentService.setIdClassroom(this.id);
    this.router.navigate(['/student/myClassroom'])
  }

}

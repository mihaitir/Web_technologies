import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ClassroomService } from '../classroom.service';
import { Test } from 'src/app/components/models/test';

@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.css']
})
export class AddTestComponent implements OnInit {

  addTestForm : FormGroup;
  displayAddQuestion = false;
  constructor(private classroomService:ClassroomService) { }

  ngOnInit() {
    this.addTestForm = new FormGroup(
      {'name': new FormControl(), 
    });
  }

  // on click create test without question, then update the test with questions...  
  onClick(){
    
    this.displayAddQuestion = true;
    let t: Test = new Test();
   t.idClassroom = this.classroomService.getIdClassroom();
   t.name = this.addTestForm.controls['name'].value;
    console.log(JSON.stringify(t));
    this.classroomService.saveTest(t).subscribe((res:Test)=>
      {
        console.log('Test added');
        console.log(res);
        this.classroomService.setIdCurrentTest(res.idTest);
      },
       err=>{console.log(err)});

  }
}

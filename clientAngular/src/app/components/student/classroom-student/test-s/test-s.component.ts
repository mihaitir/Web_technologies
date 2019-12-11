import { Component, OnInit, Input } from '@angular/core';
import { Test } from 'src/app/components/models/test';
import { StudentService } from '../../student.service';

@Component({
  selector: 'app-test-s',
  templateUrl: './test-s.component.html',
  styleUrls: ['./test-s.component.css']
})
export class TestSComponent implements OnInit {
  @Input() test:Test;
  
  constructor(private setudentService:StudentService) { }

  ngOnInit() {
    // here i can query after idTest and idStudent
    //score and done => render in a mod, else render the component in another mode
  }

  onAccestTest(){
    this.setudentService.setIdTest(this.test.idTest);
  }

}

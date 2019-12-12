import { Component, OnInit, Input } from '@angular/core';
import { Test } from 'src/app/components/models/test';
import { StudentService } from '../../student.service';
import { StudTest } from 'src/app/components/models/stud-test';

@Component({
  selector: 'app-test-s',
  templateUrl: './test-s.component.html',
  styleUrls: ['./test-s.component.css']
})
export class TestSComponent implements OnInit {
  @Input() test:Test;
  
  constructor(private setudentService:StudentService) { }
  idTest : number;
  idStudent : number;
  studTest : StudTest = new StudTest();

  s1 : boolean = false; // ok, score above 50
  s2 : boolean = false; // not ok, score under  50
  s3 : boolean = false; // test available

  ngOnInit() {
    this.idStudent = +localStorage.getItem('studentId');

    this.setudentService.getTestResultForTestAndStud(this.idStudent, this.test.idTest).subscribe(
      (res : StudTest) =>{
        this.studTest = res;
        console.log(this.studTest);
        if (this.studTest.idStudTest === -1 ){
          this.s3 = true;
        }
        else{
          if (this.studTest.score > 5){
            this.s1 = true;
          }
          else{
            this.s2 = true;
          }
        }


      },
    
    )
    
  }

  onAccestTest(){
    this.setudentService.setIdTest(this.test.idTest);
  }

}

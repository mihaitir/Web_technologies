import { Component, OnInit, Input } from '@angular/core';
import { Test } from 'src/app/components/models/test';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test-detail',
  templateUrl: './test-detail.component.html',
  styleUrls: ['./test-detail.component.css']
})
export class TestDetailComponent implements OnInit {

  constructor(private ar:ActivatedRoute) { }
  idTest:number;
  ngOnInit() {
    this.idTest = this.ar.snapshot.params['id'];
    console.log(this.idTest);
  }

}

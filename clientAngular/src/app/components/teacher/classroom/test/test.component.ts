import { Component, OnInit, Input } from '@angular/core';
import { Test } from 'src/app/components/models/test';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input() test:Test;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToTest(){
        this.router.navigate(['../test'])
  }
}

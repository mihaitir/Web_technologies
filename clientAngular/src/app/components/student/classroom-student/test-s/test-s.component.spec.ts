import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSComponent } from './test-s.component';

describe('TestSComponent', () => {
  let component: TestSComponent;
  let fixture: ComponentFixture<TestSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

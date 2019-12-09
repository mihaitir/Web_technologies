import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClassroomStudentComponent } from './add-classroom-student.component';

describe('AddClassroomStudentComponent', () => {
  let component: AddClassroomStudentComponent;
  let fixture: ComponentFixture<AddClassroomStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddClassroomStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClassroomStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

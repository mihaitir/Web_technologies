import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomStudentDetailComponent } from './classroom-student-detail.component';

describe('ClassroomStudentDetailComponent', () => {
  let component: ClassroomStudentDetailComponent;
  let fixture: ComponentFixture<ClassroomStudentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassroomStudentDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassroomStudentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

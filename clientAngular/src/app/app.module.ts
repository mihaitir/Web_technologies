import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { StudentComponent } from './components/student/student/student.component';
import { TeacherComponent } from './components/teacher/teacher/teacher.component';
import {AccordionModule} from 'primeng/accordion';
import { AddClassroomComponent } from './components/teacher/add-classroom/add-classroom.component';
import { CardsComponentComponent } from './components/teacher/cards-component/cards-component.component';
import { CardComponent } from './components/teacher/cards-component/card/card.component';
import { ClassroomComponent } from './components/teacher/classroom/classroom.component';
import { LogonComponent } from './components/logon/logon.component';
import { AddTestComponent } from './components/teacher/classroom/add-test/add-test.component';
import { TestListComponent } from './components/teacher/classroom/test-list/test-list.component';
import { AddQuestionComponent } from './components/teacher/classroom/add-question/add-question.component';
import { TestComponent } from './components/teacher/classroom/test/test.component';
import { TestDetailComponent } from './components/teacher/classroom/test-detail/test-detail.component';
import { StudentListComponent } from './components/teacher/classroom/student-list/student-list.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentComponent,
    TeacherComponent,
    AddClassroomComponent,
    CardsComponentComponent,
    CardComponent,
    ClassroomComponent,
    LogonComponent,
    AddTestComponent,
    TestListComponent,
    AddQuestionComponent,
    TestComponent,
    TestDetailComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AccordionModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

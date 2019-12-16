import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { StudentComponent } from './components/student/student.component';
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
import { ClassroomStudentComponent } from './components/student/classroom-student/classroom-student.component';
import {MenuItem, MessageService} from 'primeng/api';                 //api
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import { CardSComponent } from './components/student/classroom-student/card-s/card-s.component';
import { ClassroomStudentDetailComponent } from './components/student/classroom-student/classroom-student-detail/classroom-student-detail.component';
import { TestSComponent } from './components/student/classroom-student/test-s/test-s.component';
import { SolveTestComponent } from './components/student/classroom-student/solve-test/solve-test.component';
import { ResolveQuestionComponent } from './components/student/classroom-student/solve-test/resolve-question/resolve-question.component';
import {CheckboxModule} from 'primeng/checkbox';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';




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
    StudentListComponent,
    ClassroomStudentComponent,
    CardSComponent,
    ClassroomStudentDetailComponent,
    TestSComponent,
    SolveTestComponent,
    ResolveQuestionComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule,
    BrowserAnimationsModule,
    AccordionModule,
    DialogModule,
    ButtonModule,
    CheckboxModule,
    TableModule,
    ToastModule

    
  
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

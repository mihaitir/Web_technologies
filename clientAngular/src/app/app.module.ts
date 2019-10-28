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



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentComponent,
    TeacherComponent,
    AddClassroomComponent,
    CardsComponentComponent
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

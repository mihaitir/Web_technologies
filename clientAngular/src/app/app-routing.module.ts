import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard} from './auth.guard';
import { TeacherComponent } from './components/teacher/teacher/teacher.component';
import { AddClassroomComponent } from './components/teacher/add-classroom/add-classroom.component';
import { CardsComponentComponent } from './components/teacher/cards-component/cards-component.component';
import { ClassroomComponent } from './components/teacher/classroom/classroom.component';
import { LogonComponent } from './components/logon/logon.component';
import { AddTestComponent } from './components/teacher/classroom/add-test/add-test.component';
import { TestListComponent } from './components/teacher/classroom/test-list/test-list.component';
import { TestDetailComponent } from './components/teacher/classroom/test-detail/test-detail.component';
import { StudentListComponent } from './components/teacher/classroom/student-list/student-list.component';
import { StudentComponent } from './components/student/student.component';
import { ClassroomStudentComponent } from './components/student/classroom-student/classroom-student.component';
import { ClassroomStudentDetailComponent } from './components/student/classroom-student/classroom-student-detail/classroom-student-detail.component';
import { SolveTestComponent } from './components/student/classroom-student/solve-test/solve-test.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'logon', component: LogonComponent},
  {path: 'teacher', component: TeacherComponent, canActivate:[AuthGuard]},
  {path: 'teacher', component: TeacherComponent, canActivate:[AuthGuard],
    children:[
      {path:'addClassroom', component:AddClassroomComponent, canActivate:[AuthGuard]},
      {path:'myClassooms', component:CardsComponentComponent, canActivate:[AuthGuard]},
      {path:'classroom', component:ClassroomComponent, canActivate:[AuthGuard]},
      {path:'classroom', component:ClassroomComponent, canActivate:[AuthGuard],children:[
        {path:'testList', component:TestListComponent, canActivate:[AuthGuard]},
        {path:'addTest', component:AddTestComponent, canActivate:[AuthGuard]},
        {path:'test/:id',component:TestDetailComponent, canActivate:[AuthGuard]},
        {path:'students',component:StudentListComponent, canActivate:[AuthGuard]}
      ]}
    ]
  },
  {path: 'student', component:StudentComponent, canActivate:[AuthGuard]},
  {path: 'student', component:StudentComponent, canActivate:[AuthGuard], children:[
    {path:'myClassrooms', component:ClassroomStudentComponent,canActivate:[AuthGuard]},
    {path:'myClassroom', component:ClassroomStudentDetailComponent, canActivate:[AuthGuard]},
    {path:'solveTest', component:SolveTestComponent, canActivate:[AuthGuard]}
    
    // {path:'myClassroom', component:}
  ]},
  {path: '**', redirectTo :'/login', pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

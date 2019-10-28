import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { StudentComponent } from './components/student/student/student.component';
import { AuthGuard} from './auth.guard';
import { TeacherComponent } from './components/teacher/teacher/teacher.component';
import { AddClassroomComponent } from './components/teacher/add-classroom/add-classroom.component';
import { CardsComponentComponent } from './components/teacher/cards-component/cards-component.component';
const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'teacher/myClassooms', component: TeacherComponent, canActivate:[AuthGuard]},
  {path: 'teacher/myClassooms', component: TeacherComponent, canActivate:[AuthGuard],
    children:[
      {path:'addClassroom', component:AddClassroomComponent, canActivate:[AuthGuard]},
      //{path:'myClassooms', component:CardsComponentComponent, canActivate:[AuthGuard]}
    ]
  },
  {path: '**', redirectTo :'/login', pathMatch:'full'}
  
];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

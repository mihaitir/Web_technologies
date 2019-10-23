import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { StudentComponent } from './components/student/student/student.component';
import { AuthGuard} from './auth.guard';
const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'teacher', component: StudentComponent, canActivate:[AuthGuard]},
  {path: '**', redirectTo :'/login', pathMatch:'full'}
  
];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

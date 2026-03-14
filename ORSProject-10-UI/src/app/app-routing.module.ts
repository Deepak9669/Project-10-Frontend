import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashbord/dashboard.component';
import { RoleComponent } from './role/role.component';
import { UserComponent } from './user/user.component';
import { StudentComponent } from './student/student.component';
import { CollegeComponent } from './college/college.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { CourseComponent } from './course/course.component';
import { SubjectComponent } from './subject/subject.component';
import { TmetableComponent } from './tmetable/tmetable.component';

const routes: Routes = [

{
  path : '',
  redirectTo: '/dashboard',
  pathMatch: 'full'
},
{
  path: 'dashboard',
  component: DashboardComponent
},
{

  path: 'role',
  component: RoleComponent
},

{
  path: 'user',
  component: UserComponent
},

{
  path: 'college',
  component: CollegeComponent
},

{
  path: 'student',
  component: StudentComponent
},

{
  path: 'marksheet',
  component: MarksheetComponent
},

{
  path: 'course',
  component: CourseComponent
},

{
  path: 'subject',
  component: SubjectComponent
},

{
  path: 'timetable',
  component: TmetableComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

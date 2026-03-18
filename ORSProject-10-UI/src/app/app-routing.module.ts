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
import { TimetableComponent } from './timetable/timetable.component';
import { FacultyComponent } from './faculty/faculty.component';
import { RoleListComponent } from './role/role-list.component';
import { UserListComponent } from './user/user-list.component';
import { CollegeListComponent } from './college/college-list.component';
import { StudentListComponent } from './student/student-list.component';
import { FacultyListComponent } from './faculty/faculty-list.component';
import { MarksheetListComponent } from './marksheet/marksheet-list.component';
import { CourseListComponent } from './course/course-list.component';
import { TimetableListComponent } from './timetable/timetable-list.component';
import { SubjectListComponent } from './subject/subject-list.component';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './login/singup.component';


const routes: Routes = [

{
  path : '',
  redirectTo: '/dashboard',
  pathMatch: 'full'
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'signup',
  component: SingupComponent
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
  path : 'role/:id',
  component: RoleComponent
},

{
  path: 'user',
  component: UserComponent
},

{
  path: 'user/:id',
  component: UserComponent
},

{
  path: 'college',
  component: CollegeComponent
},
{
  path: 'college/:id',
  component: CollegeComponent
},
{
  path: 'student',
  component: StudentComponent
},
{
  path: 'student/:id',
  component: StudentComponent
},
{
  path: 'marksheet',
  component: MarksheetComponent
},

{
  path: 'marksheet/:id',
  component: MarksheetComponent
},

{
  path: 'course',
  component: CourseComponent
},

{
  path: 'course/:id',
  component: CourseComponent
},

{
  path: 'subject',
  component: SubjectComponent
},

{
  path: 'subject/:id',
  component: SubjectComponent
},

{
  path: 'timetable',
  component: TimetableComponent
},

{
  path: 'timetable/:id',
  component: TimetableComponent
},

{
  path: 'faculty',
  component: FacultyComponent
}, 
{
  path: 'faculty/:id',
  component: FacultyComponent
},

{
  path: 'role-list',
  component: RoleListComponent  
},
{
  path: 'user-list',
  component: UserListComponent
},

{
  path : 'college-list',
  component: CollegeListComponent
},

{
  path : 'student-list',
  component: StudentListComponent
},



{
  path: 'marksheet-list',
  component: MarksheetListComponent
},

{
  path: 'course-list',
  component: CourseListComponent
},

{
  path: 'faculty-list',
  component: FacultyListComponent
},

{
  path: 'marksheet-list',
  component: MarksheetListComponent
},

{
  path: 'course-list',
  component: CourseListComponent
},

{
  path: 'subject-list',
  component: SubjectListComponent
},

{
  path: 'timetable-list',
  component: TimetableListComponent
},

{
  path: 'faculty-list',
  component: FacultyListComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

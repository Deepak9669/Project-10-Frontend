import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EndpointServiceService } from './endpoint-service.service';
import { HttpServiceService } from './http-service.service';
import { RoleComponent } from './role/role.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashbord/dashboard.component'; 
import { RouterModule } from '@angular/router'; 
import { ServiceLocatorService } from './service-locator.service';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { CollegeComponent } from './college/college.component';
import { StudentComponent } from './student/student.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { CourseComponent } from './course/course.component';
import { SubjectComponent } from './subject/subject.component';
import { TmetableComponent } from './tmetable/tmetable.component';
import { FooterComponent } from './footer/footer.component'; 


@NgModule({
  declarations: [
    AppComponent,
    RoleComponent,
    NavbarComponent,
    DashboardComponent,
    UserComponent,
    CollegeComponent,
    StudentComponent,
    MarksheetComponent,
    CourseComponent,
    SubjectComponent,
    TmetableComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
     HttpServiceService,
    EndpointServiceService,
    ServiceLocatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

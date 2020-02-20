
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { InternsComponent } from './components/interns/interns.component';
import { AllInternsComponent } from './components/interns/all-interns/all-interns.component';
import { TopTenComponent } from './components/interns/top-ten/top-ten.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PersonalDetailsComponent } from './components/profile/personal-details/personal-details.component';
import { WorkExperienceComponent } from './components/profile/work-experience/work-experience.component';
import { DocumentsComponent } from './components/profile/documents/documents.component';
import { PointsComponent } from './components/profile/points/points.component';
import { BlogComponent } from './components/blog/blog.component';
import { ViewBlogsComponent } from './components/blog/view-blogs/view-blogs.component';
import { AddEditBlogComponent } from './components/blog/add-edit-blog/add-edit-blog.component';
import { CommunityComponent } from './components/community/community.component';
import { ViewQuestionComponent } from './components/community/view-question/view-question.component';
import { AddEditQuestionComponent } from './components/community/add-edit-question/add-edit-question.component';
import { AddEditAnswerComponent } from './components/community/add-edit-answer/add-edit-answer.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthRegisterComponent } from './components/auth-register/auth-register.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    InternsComponent,
    AllInternsComponent,
    TopTenComponent,
    ProfileComponent,
    PersonalDetailsComponent,
    WorkExperienceComponent,
    DocumentsComponent,
    PointsComponent,
    BlogComponent,
    ViewBlogsComponent,
    AddEditBlogComponent,
    CommunityComponent,
    ViewQuestionComponent,
    AddEditQuestionComponent,
    AddEditAnswerComponent,
    SideNavComponent,
    DashboardComponent,
    AuthRegisterComponent,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

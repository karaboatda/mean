
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ICardComponent } from './components/i-card/i-card.component';
import { IProfileComponent } from './components/i-profile/i-profile.component';
import { PCardComponent } from './components/p-card/p-card.component';
import { CCardComponent } from './components/c-card/c-card.component';
import { CommunityComponent } from './components/community/community.component';
import { BlogComponent } from './components/blog/blog.component';
import { BCardComponent } from './components/b-card/b-card.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { SearchComponent } from './components/search/search.component';
import { FilterComponent } from './components/filter/filter.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UProfileComponent } from './components/u-profile/u-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ICardComponent,
    IProfileComponent,
    PCardComponent,
    CCardComponent,
    CommunityComponent,
    BlogComponent,
    BCardComponent,
    SideBarComponent,
    SearchComponent,
    FilterComponent,
    ProfileComponent,
    UProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

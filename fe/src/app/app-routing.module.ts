import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { CommunityComponent } from './components/community/community.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UProfileComponent } from './components/u-profile/u-profile.component';

// this constant default routes to Home, and also send all unknown path to Home
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'community', component: CommunityComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: UProfileComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InternsComponent } from './components/interns/interns.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { AllInternsComponent } from './components/interns/all-interns/all-interns.component';
import { TopTenComponent } from './components/interns/top-ten/top-ten.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
	{ path: ' ', component: InternsComponent, redirectTo: '' },
	{ path: 'interns', component: InternsComponent },
	{ path: 'all-interns', component: AllInternsComponent },
	{ path: 'top-ten-interns', component: TopTenComponent },
	{ path: 'admin/dashboard', component: DashboardComponent },
	{ path: 'profile', component: ProfileComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes, { enableTracing: false }) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}

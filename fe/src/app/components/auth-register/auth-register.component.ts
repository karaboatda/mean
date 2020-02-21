import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ModalDirective } from 'angular-bootstrap-md';
import { TopTenComponent } from '../interns/top-ten/top-ten.component';
import { Router, Route } from '@angular/router'
import { Register } from '../../register'
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
import { profile } from 'src/app/models/profile';
import { Profile } from 'selenium-webdriver/firefox';

@Component({
	selector: 'app-auth-register',
	templateUrl: './auth-register.component.html',
	styleUrls: ['./auth-register.component.scss']
})
export class AuthRegisterComponent implements OnInit {
	 validatingForm: FormGroup;

	/**Register view child */
	@ViewChild('RegisterModal', { static: true }) RegisterModal: ModalDirective

	register = AuthRegisterComponent

	user = new User;
	//profile = new Profile;

	constructor(private authService:AuthService, private route:Router) { }

	ngOnInit() {
		this.validatingForm = new FormGroup({
			required: new FormControl(null, Validators.required)
		  });
	}
	get input() { return this.validatingForm.get('required'); }
	RegisterAuth() {
		this.RegisterModal.show()
	};

	/* RegisterButton Method For Registering into the system */

	RegisterBtn() {
		console.log(this.user)

		this.authService.register(this.user).subscribe(
			(data) => {
				console.log(data);
				let token = JSON.stringify(data.token);
				
				/* Store in local storage */
				localStorage.setItem('token', token);
				
				this.route.navigate(['/top-ten-interns']);
				
			},
			(error) => {
				console.log(error);
			}
		)

	}


}

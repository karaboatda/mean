import { Component, OnInit,ViewChild } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { ModalDirective } from 'angular-bootstrap-md';
import { TopTenComponent } from '../interns/top-ten/top-ten.component';
import {Router} from '@angular/router'
import {Register} from '../../register'

@Component({
	selector: 'app-auth-register',
	templateUrl: './auth-register.component.html',
	styleUrls: [ './auth-register.component.scss' ]
})
export class AuthRegisterComponent implements OnInit {
	// validatingForm: FormGroup;


	register = AuthRegisterComponent
	constructor() {}

	ngOnInit() {

	}



/**Register view child */
	@ViewChild('RegisterModal',{static:true}) RegisterModal:ModalDirective

	RegisterAuth(){
		this.RegisterModal.show()
	};

	/**RegisterButton Method For Registering into the system */
	
RegisterBtn(){
console.log("Register button works")
}

	
}

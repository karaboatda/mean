import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDirective } from 'angular-bootstrap-md';
import { Router } from '@angular/router';

@Component({
	selector: 'app-authentication',
	templateUrl: './authentication.component.html',
	styleUrls: [ './authentication.component.scss' ]
})
export class AuthenticationComponent implements OnInit {
	// validatingForm: FormGroup;
	constructor(private router: Router) {}

	ngOnInit() {
		//Auth-Modal..
		// this.validatingForm = new FormGroup({
		//   subscriptionFormModalName: new FormControl('', Validators.required),
		//   subscriptionFormModalEmail: new FormControl('', Validators.email)
		// });
	}

	// get subscriptionFormModalName() {
	//   return this.validatingForm.get('subscriptionFormModalName');
	// }

	// get subscriptionFormModalEmail() {
	//   return this.validatingForm.get('subscriptionFormModalEmail');
	// }

	@ViewChild('LoginModal', { static: true })
	LoginModal: ModalDirective;

	LoginAuth() {
		this.LoginModal.show();
	}

	// LoginBtn(AllInterns) {
		
	// 		this.router.navigate([ '/all-interns' ]);
  //   console.log(AllInterns)
  //   //  else {
	// 	// 	console.log('heheteeetetete ');
	// 	// }
	// }
}

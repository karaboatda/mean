import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDirective } from 'angular-bootstrap-md';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-authentication',
	templateUrl: './authentication.component.html',
	styleUrls: [ './authentication.component.scss' ]
})
export class AuthenticationComponent implements OnInit {
	 validatingForm: FormGroup;
	constructor(private authService:AuthService,private router: Router) {}

	ngOnInit() {
		this.validatingForm = new FormGroup({
		  subscriptionFormModalName: new FormControl('', Validators.required),
		  subscriptionFormModalEmail: new FormControl('', [Validators.email, Validators.required])
		});
	}

	user = {
		email:"",
		passsword:""
	}
	
	credentialError:boolean = false;
	serverError: false = false;
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

	login(){
		console.log(this.user);

		this.authService.userLogin(this.user).subscribe(
			(data)=>{
				
				this.serverError = false;
				this.credentialError = false;

				let token=JSON.stringify(data.token);
				localStorage.setItem('token',token);

				
				this.router.navigate(['/interns/top-ten']);
				this.LoginModal.hide();
			}

		,
		(error)=>
		{
			if(error.status == 400){
				this.credentialError = true;
			}else{
				this.serverError = false;
			}
			console.log(error.status);
			
		})
		
	}
	// LoginBtn(AllInterns) {
		
	// 		this.router.navigate([ '/all-interns' ]);
  //   console.log(AllInterns)
  //   //  else {
	// 	// 	console.log('heheteeetetete ');
	// 	// }
	// }
}

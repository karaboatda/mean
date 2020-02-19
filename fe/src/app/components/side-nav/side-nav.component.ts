import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationComponent } from '../authentication/authentication.component';
import { AuthRegisterComponent } from '../auth-register/auth-register.component';

declare var jQuery: any;

@Component({
	selector: 'app-side-nav',
	templateUrl: './side-nav.component.html',
	styleUrls: [ './side-nav.component.scss' ]
})
export class SideNavComponent implements OnInit {
	
	@ViewChild('LoginModal', { static: true })
	LoginModal: AuthenticationComponent;

@ViewChild('RegisterModal', {static:true})
RegisterModal:AuthRegisterComponent;


	constructor() {}

	ngOnInit() {
		(function($) {
			const $button = document.querySelector('#sidebar-toggle');
			const $wrapper = document.querySelector('#wrapper');

			$button.addEventListener('click', (e) => {
				e.preventDefault();
				$wrapper.classList.toggle('toggled');
			});
		})(jQuery);
	}
	//
	LoginAuth() {
		this.LoginModal.LoginAuth();
	}


/**Register-Auth method for the register modal*/
	RegisterAuth() {
		this.RegisterModal.RegisterAuth()
	}

}
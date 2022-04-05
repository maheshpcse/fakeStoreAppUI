import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthUserService } from 'src/app/api-services/auth-user.service';
import { ToastrManager } from 'ng6-toastr-notifications';
declare var $: any;

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	href: any = '';
  username: any = null;
  password: any = null;

	constructor(
		public router: Router,
		public route: ActivatedRoute,
		public authUserService: AuthUserService,
		public toastr: ToastrManager
	) { }

	ngOnInit() {
		this.href = this.router.url;
	}

	userLogin() {
		const userPayload = {
			username: this.username || 'mor_2314',
			password: this.password || '83r5^_'
		};
		console.log('Post payload to get user login data isss', userPayload);


		this.authUserService.getUserLogin(userPayload).subscribe(async (response: any) => {
      console.log('Get user login data response isss', response);
			if (response) {
        this.toastr.successToastr('User Login success');
        this.router.navigate(['/home']);
			} else {
				this.toastr.errorToastr('Error while user login');
			}
		}, (error: any) => {
      console.log('Error isss', error);
			this.toastr.errorToastr(error && error['error'] ? error['error'] : 'Network failed. Please try again.');
		});
	}

}

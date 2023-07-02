import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login/login-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  response: any;
  constructor(
    private loginService: LoginServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  submit(loginForm: any) {
    console.log('The form has been submitted');
    const reqBody: Object = {
      email: loginForm.value.email,
      password: loginForm.value.password,
    };

    this.loginService.loginAPI(reqBody).subscribe(
      (res: any) => {
        localStorage.setItem('name', res.User.name);
        localStorage.setItem('role', res.User.role);
        localStorage.setItem('email', res.User.email);
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('home').then(() => {
          window.location.reload();
        });
      },
      (err) => {
        Swal.fire('', err.error.message, 'warning');
      }
    );
  }

  register() {
    this.router.navigateByUrl('register');
  }
}

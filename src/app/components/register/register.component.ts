import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user/user-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(
    private userService: UserServiceService,
    private router: Router
  ) {}

  submit(registerForm: any) {
    const name: string = registerForm.value.name;
    const username: string = registerForm.value.username;
    const phone: string = registerForm.value.phone.toString();
    const email: string = registerForm.value.email;
    const password: string = registerForm.value.password;
    const role: string = 'User';
    //API call here
    this.userService
      .registerAPI({
        name,
        username,
        phone,
        password,
        email,
        role,
      })
      .subscribe(
        (res) => {
          this.router.navigateByUrl('login').then(() => {
            Swal.fire('', 'Registeration Success', 'success');
          });
        },
        (err) => {
          Swal.fire('', err.error.message, 'warning');
        }
      );
  }
}

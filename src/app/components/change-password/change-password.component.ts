import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user/user-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent {
  constructor(
    private userService: UserServiceService,
    private router: Router
  ) {}

  submit(changepass: any) {
    const newPassword = changepass.value.newpassword;
    const confirmPasswor = changepass.value.password;

    if (newPassword != confirmPasswor)
      Swal.fire('', 'Password does not mattch', 'warning');
    else {
      //API calls here
      this.userService
        .changePassword({
          password: newPassword,
          email: localStorage.getItem('email'),
        })
        .subscribe(
          (res) => {
            this.router.navigateByUrl('home').then(() => {
              Swal.fire('', 'Password changed successfully', 'success');
            });
          },
          (err) => {
            Swal.fire('', err.error.message, 'warning');
          }
        );
    }
  }
}

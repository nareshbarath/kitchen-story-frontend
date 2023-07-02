import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  submit(contactFormF: any) {
    Swal.fire('Contact form', 'Message sent successfully', 'success');
  }
}

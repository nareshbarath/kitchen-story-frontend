import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  total: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    let sessionTotal: any = sessionStorage.getItem('total');
    sessionTotal = JSON.parse(sessionTotal);
    this.total = sessionTotal;
  }

  pay() {
    sessionStorage.clear();
    this.router.navigateByUrl('cart').then(() => {
      Swal.fire('', 'Order placed successfully', 'success');
    });
  }
}

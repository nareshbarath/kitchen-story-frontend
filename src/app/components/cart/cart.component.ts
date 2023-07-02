import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsServiceService } from 'src/app/services/products/products-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: any = [];
  total: any = 0;

  constructor(
    private productService: ProductsServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let sessionCart: any = sessionStorage.getItem('counter');
    sessionCart = JSON.parse(sessionCart);

    this.productService.listProducts().subscribe(
      (res: any) => {
        this.setCart(sessionCart, res.data);
      },
      (err) => {}
    );
  }

  setCart(sessionCart: any, products: [any]) {
    for (const key in sessionCart) {
      const count = sessionCart[key];
      if (count > 0) {
        const product = products.filter((e) => e.id == key)[0];
        product.count = count;
        product.subtotal = count * product.price;
        this.total += product.subtotal;
        this.cart.push(product);
      }
    }
  }

  payment() {
    sessionStorage.removeItem('total');
    sessionStorage.setItem('total', this.total);
    this.router.navigateByUrl('payment');
  }
}

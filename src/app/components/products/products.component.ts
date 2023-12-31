import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from 'src/app/services/products/products-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  searchText: string;
  products: any = [];
  counter: any = {};
  items: any = [];

  constructor(private productService: ProductsServiceService) {}

  ngOnInit(): void {
    this.productService.listProducts().subscribe(
      (res: any) => {
        this.products = res.data;
        this.items = res.data;
        if (this.products.length == 0)
          Swal.fire('', 'No data found', 'warning');
      },
      (err) => {
        Swal.fire('', 'No data found', 'warning');
      }
    );

    let sesssionCounter: any = sessionStorage.getItem('counter');
    sesssionCounter = JSON.parse(sesssionCounter);
    if (sesssionCounter) this.counter = sesssionCounter;
  }

  search() {
    let filter: any = [];
    if (!this.searchText) this.ngOnInit();
    else {
      for (const product of this.items) {
        if (product.name.toLowerCase().includes(this.searchText.toLowerCase()))
          filter.push(product);
      }
      this.products = filter;
    }
  }

  add(id: number) {
    this.counter[id] = this.counter[id] ? this.counter[id] + 1 : 1;
    sessionStorage.clear();
    sessionStorage.setItem('counter', JSON.stringify(this.counter));
  }
  remove(id: number) {
    if (this.counter[id] && this.counter[id] > 0) {
      this.counter[id] = this.counter[id] - 1;
      sessionStorage.clear();
      sessionStorage.setItem('counter', JSON.stringify(this.counter));
    }
  }
}

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

  constructor(private productService: ProductsServiceService) {}

  ngOnInit(): void {
    this.productService.listProducts().subscribe(
      (res: any) => {
        this.products = res.data;
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
    console.log(this.searchText);
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

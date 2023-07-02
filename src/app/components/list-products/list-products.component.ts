import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from 'src/app/services/products/products-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent implements OnInit {
  products: any = [];

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
  }

  delete(id: number) {
    this.productService.deleteProduct(id).subscribe(
      (res: any) => {
        Swal.fire('', 'Product deleted succfully', 'success');
        this.ngOnInit();
      },
      (err) => {
        Swal.fire('', 'Error deleting the product', 'warning');
      }
    );
  }
}

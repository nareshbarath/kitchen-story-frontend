import { Component } from '@angular/core';
import { ProductsServiceService } from 'src/app/services/products/products-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  constructor(private productService: ProductsServiceService) {}
  submit(addproductForm: any) {
    const name: string = addproductForm.value.name;
    const price: string = addproductForm.value.price;
    const image: string = addproductForm.value.image;
    const description: string = addproductForm.value.description;
    this.productService
      .addProduct({ name, price, image, description })
      .subscribe(
        (res) => {
          Swal.fire('', 'Product added successfully', 'success');
        },
        (err) => {
          Swal.fire('', err.error.message, 'warning');
        }
      );
  }
}

import { Component, OnInit } from '@angular/core';
import {ProductRepository} from "../../../service/product-repository.service";
import {Product} from "../../../model/Product.model";

  /*
    The component provides all products regist in json-server.
    Delete the product from the server
  */

@Component({
  moduleId: module.id,
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
})
export class ProductTableComponent {

  constructor(private productRepository: ProductRepository) { }

  getProducts(): Product[] {
    return this.productRepository.getProducts();
  }

  deleteProduct(id: number){
    this.productRepository.deleteProduct(id);
  }
}

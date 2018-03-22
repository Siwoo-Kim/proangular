import { Component } from '@angular/core';
import {Product} from "../../../model/Product.model";
import {ProductRepository} from "../../../service/product-repository.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {NgForm} from "@angular/forms";

  /*
    The component provides two features depending on url segement (mode)
    mode create : creating new product and save into server
    mode edit and product id : editing existing product and save into server
  */

@Component({
  moduleId: module.id,
  selector: 'app-product-editor',
  templateUrl: './product-editor.component.html',
})
export class ProductEditorComponent {
  editing: boolean = false;
  product: Product = new Product();

  constructor(private productRepository: ProductRepository,
              private router: Router,
              private route: ActivatedRoute) {
    this.editing = this.route.snapshot.params['mode'] == 'edit';
    if(this.editing){
      let id = this.route.snapshot.params['id'];
      console.log(id);
      /*
      * Object.assign(target,source)
      * Copy the values of all of the enumerable own properties
      * from one or more source objects to a
      * target object. Returns the target object.
      */
      Object.assign(this.product,this.productRepository.getProduct(id));
    }

  }

  save(form: NgForm){
    this.productRepository.saveProduct(this.product);
    this.router.navigateByUrl('/admin/main/products');
  }

}

import { Component, OnInit } from '@angular/core';
import {Cart} from "../../../model/Cart.model";

  /*
    This components the rendering data from the Cart Model class
    Changing the quantity value for each Item
    Remove the product from the cart
    Navigate to CheckoutComponent
  */

@Component({
  moduleId: module.id,
  selector: 'cart-detail',
  templateUrl: './cart-detail.component.html',
})
export class CartDetailComponent {

  constructor(private cart: Cart) { }


}

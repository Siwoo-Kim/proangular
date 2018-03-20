import { Component, } from '@angular/core';
import {Cart} from "../../../../model/Cart.model";

  /*
    This is a child Component in the StoreComponent.
    Showing the current state of the Cart Model Class.
    Navigating to the CartDetailComponent
  */

@Component({
  moduleId: module.id,
  selector: 'cart-summary',
  templateUrl: './cart-summary.component.html',
})
export class CartSummaryComponent {

  constructor(public cart: Cart) { }


}

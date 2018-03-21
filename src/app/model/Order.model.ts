import {Injectable} from "@angular/core";
import {Cart} from "./Cart.model";

/*
  This is the model of Order.
  The class holds Customer Information and the cart where User put their product.
  A single Order Object used throughout the entire application,
  ensure that one instance can used by one user.
*/

@Injectable()
export class Order{
  public id: number;
  public name: string;
  public address: string;
  public city: string;
  public state: string;
  public zip: string;
  public country: string;
  public shipped: boolean = false;

  constructor(public cart: Cart){}

  clear(){
    this.id = null;
    this.name = this.address = this.city = null;
    this.state = this.zip = this.country = null;
    this.shipped = false;
    this.cart.clear();
  }
}

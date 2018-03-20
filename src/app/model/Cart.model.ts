import {Injectable} from "@angular/core";
import {Product} from "./Product.model";


/*
  This is the model of item.
  The class holds Product and quantity of the product
*/

export class Item {
  constructor(public product: Product,
              public quantity: number){ }

  get price(){
    return this.product.price * this.quantity;
  }
}

/*
  This is the model of cart.
  A Cart class keep track of selected product, the number of products, and the total price.
  A single Cart Object used throughout the entire application,
  ensure that one instance can used by one user.
*/
@Injectable()
export class Cart{
  items: Item[] = [];
  itemCount: number = 0;
  totalPrice: number = 0;

  addProduct(product: Product, quantity: number = 1){
    quantity = +quantity;
    let item = this.items.find(item => item.product.id == product.id);
    if(item){
      item.quantity += quantity;
    }else{
      this.items.push(new Item(product,quantity));
    }
    this.recalculate()
  }

  updateQuantity(product: Product, quantity: number){
    quantity = +quantity;
    console.log(typeof  quantity)
    let item = this.items.find(item => item.product.id == product.id);
    if(item){
      item.quantity = quantity;
    }
    this.recalculate();
  }

  removeProduct(product: Product){
    /**
     * Returns the index of the first element in the array where predicate is true, and -1
     * otherwise.
     */
     let index = this.items.findIndex(item => item.product.id == product.id);
    /**
     * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
     */
    this.items.splice(index,1);
    this.recalculate();
  }

  isEmpty(): boolean{
    return this.itemCount == 0;
  }

  clear(){
    this.items = [];
    this.itemCount = this.totalPrice = 0;
  }

  private recalculate() {
    this.itemCount = this.totalPrice = 0;
    this.items.forEach(item => {
      this.itemCount += item.quantity;
      this.totalPrice += item.price;
    })
  }
}

import {Injectable} from "@angular/core";
import {Order} from "../model/Order.model";
import {Observable} from "rxjs/Observable";
import {RestDatasource} from "./rest-datasource.service";

  /*
  *   The service-api which provides Order Data from DataSource
  *   to components.
  *   The components does not contain orders data
  *   unless any request is not received(proxy).
  */
@Injectable()
export class OrderRepository{
  orders: Order[] = [];
  private loaded: boolean = false;

  constructor(public dataSource: RestDatasource){ }

  //Including Proxy Feature
  loadOrders() {
    this.loaded = true;
    this.dataSource.getOrders().subscribe((orders: Order[]) => {
      this.orders = orders;
      console.log(this.orders)
    })
  }

  getOrders(): Order[]{
    if(!this.loaded){
      this.loadOrders();
    }
    return this.orders;
  }

  isEmpty(): boolean{
    if(!this.loaded){
      this.loadOrders();
    }
    return this.orders.length == 0;
  }

  saveOrder(order: Order): Observable<Order> {
    return this.dataSource.saveOrder(order);
  }

  updateOrder(order: Order) {
    this.dataSource.updateOrder(order).subscribe((order: Order) => {
      this.orders.splice(this.orders.findIndex(_order => order.id == _order.id),1,order);
    })
  }

  deleteOrder(id: number){
    this.dataSource.deleteOrder(id).subscribe((order: Order) => {
      this.orders.splice(this.orders.findIndex(_order => _order.id == id),1);
    });
  }

}

import {Injectable} from "@angular/core";
import {Order} from "../model/Order.model";
import {MockDatasource} from "./mock-datasource.service";
import {Observable} from "rxjs/Observable";

  /*
  *   The service-api which provides Order Data from DataSource
  *   to components.
  */
@Injectable()
export class OrderRepository{
  orders: Order[] = [];

  constructor(public dataSource: MockDatasource){ }

  saveOrder(order: Order): Observable<Order>{
    return this.dataSource.saveOrder(order);
  }

  //Not Implement
  getOrders(): Order[]{
    throw new Error();
  }

}

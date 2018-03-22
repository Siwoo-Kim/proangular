import { Component, OnInit } from '@angular/core';
import {OrderRepository} from "../../../service/order-repository.service";
import {Order} from "../../../model/Order.model";

  /*
    The Component displays all current orders, also provides management feature
    If the property "shipped" of an order is true, remove the order from the list
    And also provides two displays mode. IncludeShipped or vice versa(exclude shipped orders)
  */
@Component({
  moduleId: module.id,
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
})
export class OrderTableComponent {
  includeShipped: boolean = false;

  constructor(public orderRepository: OrderRepository){ }

  getOrders(): Order[] {
    return this.orderRepository.getOrders()
      .filter((_order: Order) => this.includeShipped || !(_order.shipped) );
  }

  markShipped(order: Order){
    order.shipped = true;
    this.orderRepository.updateOrder(order);
  }

  delete(id: number){
    this.orderRepository.deleteOrder(id);
  }

}

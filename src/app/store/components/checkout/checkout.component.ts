import { Component, OnInit } from '@angular/core';
import {OrderRepository} from "../../../service/order-repository.service";
import {Order} from "../../../model/Order.model";
import {NgForm} from "@angular/forms";

  /*
    This components sending a valid Cart Object to the server via repository
    Navigate to CartDetailComponent or StoreComponent
    The component present two views depending on order is sent (orderSent:boolean)
  */

@Component({
  moduleId: module.id,
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styles:[
    'input.ng-invalid.ng-dirty { border : 2px solid red }',
    'input.ng-valid.ng-dirty { border : 2px solid greenyellow }'
  ]
})
export class CheckoutComponent {
  submitted: boolean = false;
  orderSent: boolean = false;

  constructor(public orderRepository: OrderRepository,
              public order: Order){ }

  onSumbitOrder(form: NgForm){
    this.submitted = true;
    if(form.valid){
      this.orderRepository.saveOrder(this.order).subscribe((order: Order)=>{
        this.order.clear();
        this.submitted = false;
        this.orderSent = true;
      })
    }
  }
}

import {NgModule} from "@angular/core";
import {ProductRepository} from "./product-repository.service";
import {MockDatasource} from "./mock-datasource.service";
import {Cart} from "../model/Cart.model";
import {OrderRepository} from "./order-repository.service";
import {Order} from "../model/Order.model";
import {RestDatasource} from "./rest-datasource.service";
import {HttpModule} from "@angular/http";

/*
   This module declare service module and the model
   which is used throughout the entire application
*/


@NgModule({
  imports: [
    /*Angular Module*/
    HttpModule,
  ],
  providers: [
    /*  Repository api  */
    ProductRepository,
    OrderRepository,
    /*  Datasource api  */
    //MockDatasource,
    {provide: MockDatasource, useClass: RestDatasource},
    /*  Model */
    Cart,
    Order,
  ]
})
export class ServiceModule{ }

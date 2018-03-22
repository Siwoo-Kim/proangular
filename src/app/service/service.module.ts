import {NgModule} from "@angular/core";
import {ProductRepository} from "./product-repository.service";
import {MockDatasource} from "./mock-datasource.service";
import {Cart} from "../model/Cart.model";
import {OrderRepository} from "./order-repository.service";
import {Order} from "../model/Order.model";
import {RestDatasource} from "./rest-datasource.service";
import {HttpModule} from "@angular/http";
import {AuthService} from "./auth.service";

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
    /*  Util  */
    AuthService,
    /*  Repository api  */
    ProductRepository,
    OrderRepository,
    /*  Datasource api  */
    //MockDatasource,
    {provide: MockDatasource, useClass: RestDatasource},
    RestDatasource,
    /*  Model */
    Cart,
    Order,
  ]
})
export class ServiceModule{ }

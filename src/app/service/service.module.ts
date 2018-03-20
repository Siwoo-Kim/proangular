import {NgModule} from "@angular/core";
import {ProductRepository} from "./product-repository.service";
import {MockDatasource} from "./mock-datasource.service";
import {Cart} from "../model/Cart.model";

/*
   This module declare service module and the model
   which is used throughout the entire application
*/


@NgModule({
  providers: [
    /*  Repository api  */
    ProductRepository,
    /*  Datasource api  */
    MockDatasource,
    /*  Model */
    Cart,
  ]
})
export class ServiceModule{ }

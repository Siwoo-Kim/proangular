import {NgModule} from "@angular/core";
import {ProductRepository} from "./product-repository.service";
import {MockDatasource} from "./mock-datasource.service";


@NgModule({
  providers: [
    /*  Repository api  */
    ProductRepository,
    /*  Datasource api  */
    MockDatasource,
  ]
})
export class ServiceModule{ }

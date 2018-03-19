import {NgModule} from "@angular/core";
import {StoreComponent} from "./components/store/store.component";
import {ServiceModule} from "../service/service.module";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {ShareModule} from "../directive/share.module";

@NgModule({
  declarations: [
    StoreComponent,
  ],
  imports: [
    /*  Angular Module  */
    FormsModule,
    CommonModule,
    /*  App Module  */
    ServiceModule,
    ShareModule,
  ],
  exports: [
    StoreComponent,
  ]
})
export class StoresModule{ }

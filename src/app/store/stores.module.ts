import {NgModule} from "@angular/core";
import {StoreComponent} from "./components/store/store.component";
import {ServiceModule} from "../service/service.module";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {ShareModule} from "../directive/share.module";
import { CartSummaryComponent } from './components/store/cart-summary/cart-summary.component';
import { CartDetailComponent } from './components/cart-detail/cart-detail.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    StoreComponent,
    CartSummaryComponent,
    CartDetailComponent,
    CheckoutComponent,
  ],
  imports: [
    /*  Angular Module  */
    FormsModule,
    CommonModule,
    RouterModule,
    /*  App Module  */
    ServiceModule,
    ShareModule,

  ],
  exports: [
    StoreComponent,
  ]
})
export class StoresModule{ }

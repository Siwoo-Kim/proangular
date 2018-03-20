import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {ServiceModule} from "./service/service.module";
import {StoreComponent} from "./store/components/store/store.component";
import {StoresModule} from "./store/stores.module";
import { AuthComponent } from './admin/auth/auth.component';
import { AdminComponent } from './admin/admin/admin.component';
import {RouterModule, Routes} from "@angular/router";
import {CartDetailComponent} from "./store/components/cart-detail/cart-detail.component";
import {CheckoutComponent} from "./store/components/checkout/checkout.component";
import {StoreFirstGuard} from "./guards/store-first.guard";


const routes: Routes = [
  {path: 'store' , component: StoreComponent, /*canActivate: [StoreFirstGuard,]*/},
  {path: 'cart' , component: CartDetailComponent, /*canActivate: [StoreFirstGuard,]*/},
  {path: 'checkout' , component: CheckoutComponent, /*canActivate: [StoreFirstGuard,]*/},
  {path: '**' , redirectTo: 'store' },
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    /*  Angular Module  */
    BrowserModule,
    /*  App Module  */
    StoresModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    /*  Guards  */
    StoreFirstGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

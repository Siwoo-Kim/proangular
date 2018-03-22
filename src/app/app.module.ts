import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {StoreComponent} from "./store/components/store/store.component";
import {StoresModule} from "./store/stores.module";
import {RouterModule, Routes} from "@angular/router";
import {CartDetailComponent} from "./store/components/cart-detail/cart-detail.component";
import {CheckoutComponent} from "./store/components/checkout/checkout.component";
import {StoreFirstGuard} from "./guards/store-first.guard";
import {AuthComponent} from "./admin/auth/auth.component";
import {FormsModule} from "@angular/forms";
import { AdminComponent } from './admin/admin/admin.component';
import {AdminModule} from "./admin/admin.module";


const routes: Routes = [
  { path: 'store', component: StoreComponent, /*canActivate: [StoreFirstGuard,]*/},
  { path: 'cart', component: CartDetailComponent, /*canActivate: [StoreFirstGuard,]*/},
  { path: 'checkout', component: CheckoutComponent, /*canActivate: [StoreFirstGuard,]*/},
  /*  Dynamically Loading module  */
  { path: 'admin', loadChildren: '../app/admin/admin.module#AdminModule' },
  { path: '**', redirectTo: 'store' },
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    /*  Angular Module  */
    BrowserModule,
    FormsModule,
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

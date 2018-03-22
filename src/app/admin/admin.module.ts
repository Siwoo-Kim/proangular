import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {AdminComponent} from "./admin/admin.component";
import {AuthComponent} from "./auth/auth.component";
import {ServiceModule} from "../service/service.module";
import {AuthGuard} from "./guards/auth.guard";
import { ProductTableComponent } from './admin/product-table/product-table.component';
import { ProductEditorComponent } from './admin/product-editor/product-editor.component';
import { OrderTableComponent } from './admin/order-table/order-table.component';

/*
  The module is dynamically loaded and provides admin feature.
*/

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'main', component: AdminComponent, /*canActivate: [AuthGuard], */children: [
      { path: 'products/:mode/:id', component: ProductEditorComponent, },
      { path: 'products/:mode', component: ProductEditorComponent, },
      { path: 'products', component: ProductTableComponent, },
      { path: 'orders', component: OrderTableComponent, },
      { path: '', redirectTo: 'products', pathMatch: 'full' },
      { path: '**', redirectTo: 'products' },
    ]
  },
  { path: '**', redirectTo: 'auth' },
];

@NgModule({
  imports: [
    /*  Angular Module  */
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    /*  App Module  */
    ServiceModule,
  ],
  providers: [
    AuthGuard,
  ],
  declarations: [
    AdminComponent,
    AuthComponent,
    ProductTableComponent,
    ProductEditorComponent,
    OrderTableComponent,
  ]
})
export class AdminModule{ }

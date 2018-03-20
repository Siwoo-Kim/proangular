import {NgModule} from "@angular/core";
import {AuthComponent} from "./auth/auth.component";
import {AdminComponent} from "./admin/admin.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

const routes = [
  {path: 'main', component: AdminComponent},
  {path: 'login', component: AuthComponent},
  {path: '**', redirectTo: 'login'},
];

@NgModule({
  declarations: [
    AuthComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class AuthModule{ }

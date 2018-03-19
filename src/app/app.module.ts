import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {ServiceModule} from "./service/service.module";
import {StoreComponent} from "./store/components/store/store.component";
import {StoresModule} from "./store/stores.module";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    /*  Angular Module  */
    BrowserModule,
    /*  App Module  */
    StoresModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

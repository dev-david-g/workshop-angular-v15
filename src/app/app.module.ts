import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {PancakeReceiptListComponent} from "./pancake-receipt-list/pancake-receipt-list.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PancakeReceiptListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

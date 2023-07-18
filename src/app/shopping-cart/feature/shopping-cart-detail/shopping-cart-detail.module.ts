import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ShoppingCartDetailRoutingModule} from './shopping-cart-detail-routing.module';
import {ShoppingCartDetailComponent} from './shopping-cart-detail.component';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    ShoppingCartDetailComponent
  ],
  imports: [
    CommonModule,
    ShoppingCartDetailRoutingModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class ShoppingCartDetailModule {
}

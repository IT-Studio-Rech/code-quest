import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductDetailRoutingModule} from './product-detail-routing.module';
import {ProductDetailComponent} from './product-detail.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from "@angular/forms";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatButtonModule} from "@angular/material/button";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";


@NgModule({
  declarations: [
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductDetailRoutingModule,
    MatCardModule,
    MatInputModule,
    MatExpansionModule,
    MatButtonModule,
    MatOptionModule,
    MatSelectModule
  ]
})
export class ProductDetailModule {
}

// @ts-nocheck
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterModule} from '@angular/router';
import {ProductService} from '../../data-access/product.service';
import {firstValueFrom} from 'rxjs';
import {Product} from '../../data-access/mock/MOCK_PRODUCT_LIST';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatButtonModule} from "@angular/material/button";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatExpansionModule,
    MatButtonModule,
    MatOptionModule,
    MatSelectModule,
    RouterModule
  ],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  public product: Product | undefined;
  public quantity: number = 1;

  constructor(
    private _route: ActivatedRoute,
    private _productService: ProductService
  ) {
  }

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id');

    this.product = this._productService.getProduct$(id);
  }

  async addToCart(id: number) {
    const result = await firstValueFrom(
      this._productService.addToCart(id, this.quantity)
    );
    console.log('Product added to shopping cart', result);
  }
}

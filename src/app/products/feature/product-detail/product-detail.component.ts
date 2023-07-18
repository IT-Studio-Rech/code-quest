// @ts-nocheck
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../data-access/product.service';
import { firstValueFrom, Observable } from 'rxjs';
import { Product } from '../../data-access/mock/MOCK_PRODUCT_LIST';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  public product: Product | undefined;
  public quantity: number = 1;

  constructor(
    private _route: ActivatedRoute,
    private _productService: ProductService
  ) {}

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

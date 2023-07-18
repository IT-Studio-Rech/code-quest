import {Component} from '@angular/core';
import {BehaviorSubject, firstValueFrom, map, Observable, switchMap, tap,} from 'rxjs';
import {Product} from '../../../products/data-access/mock/MOCK_PRODUCT_LIST';
import {ShoppingCartService} from '../../data-access/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart-detail',
  templateUrl: './shopping-cart-detail.component.html',
  styleUrls: ['./shopping-cart-detail.component.scss'],
})
export class ShoppingCartDetailComponent {
  private _refreshData$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  public cartItems$: Observable<{ product: Product; quantity: number }[]> | undefined;
  public totalPrice$: Observable<number> | undefined;

  constructor(private _shoppingCartService: ShoppingCartService) {
    this.cartItems$ = this._refreshData$.pipe(
      switchMap(() => this._shoppingCartService.getShoppingCart$())
    );

    this.totalPrice$ = this.cartItems$.pipe(
      map((cartItems) =>
        cartItems
          .map((item) => item.product.price * item.quantity)
          .reduce((acc, currentValue) => (acc += currentValue), 0)
      ),
      tap(console.log)
    );
  }

  onEditProductQuantity(productId: number | undefined, quantity: number): void {
    firstValueFrom(
      this._shoppingCartService.editProductQuantity$(productId, quantity)
    ).then(() => this._refreshData$.next(true));
  }

  onRemoveProduct(productId: number | undefined): void {
    firstValueFrom(this._shoppingCartService.removeProduct$(productId)).then(() =>
      this._refreshData$.next(true)
    );
  }

  onCompletePurchase(): void {
    console.log('########## onCompletePurchase');
  }
}

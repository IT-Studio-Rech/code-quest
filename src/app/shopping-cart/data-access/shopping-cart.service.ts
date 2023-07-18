import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../../products/data-access/mock/MOCK_PRODUCT_LIST';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  constructor(private _http: HttpClient) {
  }

  getShoppingCart$() {
    return this._http.get<{ product: Product; quantity: number }[]>('/cart');
  }

  editProductQuantity$(productId: number | undefined, quantity: number) {
    return this._http.post('/cart/edit', JSON.stringify({ productId, quantity })
    );
  }

  removeProduct$(productId: number | undefined) {
    return this._http.delete('/cart/remove', {
      body: JSON.stringify({ productId }),
    });
  }
}

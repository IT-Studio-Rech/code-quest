import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse,} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {LocalStorageHandler} from '../../../shared/utils/local-storage.handler';
import {MOCK_PRODUCTS, Product,} from '../../../products/data-access/mock/MOCK_PRODUCT_LIST';

@Injectable()
export class MockShoppingCartInterceptor implements HttpInterceptor {
  constructor() {
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.method === 'GET' && request.url.endsWith('/cart')) {
      const shoppingCart = LocalStorageHandler.getShoppingCart();

      const responseData: { product: Product | undefined; quantity: number }[] =
        Object.keys(shoppingCart)
          .map((id) => Number.parseInt(id))
          .map((id) => ({
            product: MOCK_PRODUCTS().find((product) => product.id === id),
            quantity: shoppingCart[id],
          }));

      return of(new HttpResponse({ status: 200, body: responseData }));
    }

    if (request.method === 'POST' && request.url.endsWith('/cart/edit')) {
      const body = JSON.parse(request.body);
      LocalStorageHandler.addProductToShoppingCart(
        body.productId,
        body.quantity
      );
      return of(new HttpResponse({ status: 200, body: { success: true } }));
    }

    if (request.method === 'DELETE' && request.url.endsWith('/cart/remove')) {
      const body = JSON.parse(request.body);
      LocalStorageHandler.removeProductFromShoppingCart(body.productId);
      return of(new HttpResponse({ status: 200, body: { success: true } }));
    }

    return next.handle(request);
  }
}

import {HttpInterceptorFn, HttpResponse,} from '@angular/common/http';
import {of} from 'rxjs';
import {LocalStorageHandler} from '../../../shared/utils/local-storage.handler';
import {MOCK_PRODUCTS, Product,} from '../../../products/data-access/mock/MOCK_PRODUCT_LIST';

export const MockShoppingCartInterceptor: HttpInterceptorFn = (request, next) => {
  if (request.method === 'GET' && request.url.endsWith('/cart')) {
    const shoppingCart = LocalStorageHandler.getShoppingCart();

    const responseData: { product: Product | undefined; quantity: number }[] =
      Object.keys(shoppingCart)
        .map((id) => Number.parseInt(id))
        .map((id) => ({
          product: MOCK_PRODUCTS().find((product) => product.id === id),
          quantity: shoppingCart[id],
        }))
        .filter(item => item.product);

    return of(new HttpResponse({status: 200, body: responseData}));
  }

  if (request.method === 'POST' && request.url.endsWith('/cart/edit')) {
    const body = JSON.parse((request.body as any));
    LocalStorageHandler.addProductToShoppingCart(
      body.productId,
      body.quantity
    );
    return of(new HttpResponse({status: 200, body: {success: true}}));
  }

  if (request.method === 'DELETE' && request.url.endsWith('/cart/remove')) {
    const body = JSON.parse((request.body as any));
    LocalStorageHandler.removeProductFromShoppingCart(body.productId);
    return of(new HttpResponse({status: 200, body: {success: true}}));
  }

  return next(request);
};

import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse,} from '@angular/common/http';
import {delay, Observable, of} from 'rxjs';
import {MOCK_PRODUCTS} from './MOCK_PRODUCT_LIST';
import {LocalStorageHandler} from '../../../shared/utils/local-storage.handler';

@Injectable()
export class MockProductInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.method === 'GET' && request.url.endsWith('/product/list')) {
      // Verzögern Sie die Antwort um 500 ms, um den Effekt einer echten Serverantwort zu simulieren
      return of(new HttpResponse({ status: 200, body: MOCK_PRODUCTS() })).pipe(
        delay(500)
      );
    }

    if (request.method === 'GET' && request.url.includes('/product')) {
      // Produkt-ID aus der URL extrahieren
      const id = Number.parseInt(request.url.split('/')?.pop() || '1');
      const mockProduct = MOCK_PRODUCTS().find((product) => product.id == id);

      // Antwortverzögerung um 500 ms, um den Effekt einer echten Serverantwort zu simulieren
      return of(new HttpResponse({ status: 200, body: mockProduct })).pipe(
        delay(500)
      );
    }

    if (request.method === 'POST' && request.url.includes('/cart/add')) {
      const requestBody: { productId: number; quantity: number } = request.body;

      LocalStorageHandler.addProductToShoppingCart(
        requestBody.productId,
        requestBody.quantity
      );

      const mockResponse = {
        status: 'success',
        message:
          'Product ' +
          requestBody.productId +
          ' added to cart. Quantity: ' +
          requestBody.quantity,
      };

      return of(new HttpResponse({ status: 200, body: mockResponse })).pipe(
        delay(500)
      );
    }

    return next.handle(request);
  }
}

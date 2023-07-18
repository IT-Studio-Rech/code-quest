import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from './mock/MOCK_PRODUCT_LIST';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _productUrl = '/product';

  constructor(private _http: HttpClient) {
  }

  getProducts$(): Observable<Product[]> {
    return this._http.get<Product[]>(`${this._productUrl}/list`);
  }

  getProduct$(id: string | null): Observable<Product> {
    return this._http.get<Product>(`${this._productUrl}/${id}`);
  }

  addToCart(productId: number, quantity: number) {
    // Kontextbruch
    // ggf. eigenen Service unter shared, ein feature darf nicht auf das andere zugreifen
    return this._http.post('/cart/add', { productId, quantity });
  }
}

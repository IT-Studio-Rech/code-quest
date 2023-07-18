import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController,} from '@angular/common/http/testing';
import {ShoppingCartService} from './shopping-cart.service';
import {Product} from '../../products/data-access/mock/MOCK_PRODUCT_LIST';

describe('ShoppingCartService', () => {
  let service: ShoppingCartService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ShoppingCartService],
    });

    service = TestBed.inject(ShoppingCartService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch the shopping cart', () => {
    const mockCart: { product: Product; quantity: number }[] = [
      {
        product: {
          id: 1,
          name: 'Product 1',
          price: 10,
          tags: [],
          description: '',
          parameters: [],
          deliveryDate: '',
          imageUrl: '',
        },
        quantity: 2,
      },
      {
        product: {
          id: 2,
          name: 'Product 2',
          price: 20,
          tags: [],
          description: '',
          parameters: [],
          deliveryDate: '',
          imageUrl: '',
        },
        quantity: 3,
      },
    ];

    service.getShoppingCart$().subscribe((cart) => {
      expect(cart).toEqual(mockCart);
    });

    const req = httpMock.expectOne('/cart');
    expect(req.request.method).toBe('GET');
    req.flush(mockCart);
  });

  it('should edit the product quantity', () => {
    const productId = 1;
    const quantity = 5;

    service.editProductQuantity$(productId, quantity).subscribe((response) => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne('/cart/edit');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(JSON.stringify({ productId, quantity }));
    req.flush({});
  });

  it('should remove the product', () => {
    const productId = 1;

    service.removeProduct$(productId).subscribe((response) => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne('/cart/remove');
    expect(req.request.method).toBe('DELETE');
    expect(req.request.body).toEqual(JSON.stringify({ productId }));
    req.flush({});
  });
});

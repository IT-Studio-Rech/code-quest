import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {of} from 'rxjs';
import {ProductListComponent} from './product-list.component';
import {ProductService} from '../../data-access/product.service';
import {Product} from '../../data-access/mock/MOCK_PRODUCT_LIST';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let productService: ProductService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ProductListComponent],
      providers: [ProductService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    productService = TestBed.inject(ProductService);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch products and assign them to searchedProducts', async () => {
    const mockProducts: Product[] = [
      {
        id: 1,
        name: 'Product 1',
        price: 10,
        tags: ['tag1', 'tag2'],
        description: 'Product 1 description',
        parameters: [
          { key: 'param1', value: 'value1' },
          { key: 'param2', value: 'value2' },
        ],
        deliveryDate: '2023-06-01',
        imageUrl: 'product1.jpg',
      },
      {
        id: 2,
        name: 'Product 2',
        price: 20,
        tags: ['tag3', 'tag4'],
        description: 'Product 2 description',
        parameters: [
          { key: 'param3', value: 'value3' },
          { key: 'param4', value: 'value4' },
        ],
        deliveryDate: '2023-06-02',
        imageUrl: 'product2.jpg',
      },
    ];

    spyOn(productService, 'getProducts$').and.returnValue(of(mockProducts));

    component.ngOnInit();
    await fixture.whenStable();

    expect(productService.getProducts$).toHaveBeenCalled();
    expect(component.searchedProducts).toEqual(mockProducts);
  });

  it('should extract tags from products', () => {
    const mockProducts: Product[] = [
      {
        id: 1,
        name: 'Product 1',
        price: 10,
        tags: ['tag1', 'tag2'],
        description: 'Product 1 description',
        parameters: [
          { key: 'param1', value: 'value1' },
          { key: 'param2', value: 'value2' },
        ],
        deliveryDate: '2023-06-01',
        imageUrl: 'product1.jpg',
      },
      {
        id: 2,
        name: 'Product 2',
        price: 20,
        tags: ['tag3', 'tag4'],
        description: 'Product 2 description',
        parameters: [
          { key: 'param3', value: 'value3' },
          { key: 'param4', value: 'value4' },
        ],
        deliveryDate: '2023-06-02',
        imageUrl: 'product2.jpg',
      },
    ];

    const expectedTags = ['tag1', 'tag2', 'tag3', 'tag4'];

    const result = component.getTagsFromProducts(mockProducts);

    expect(result).toEqual(expectedTags);
  });

  it('should add or remove tags in searchTags array', () => {
    component.searchTags = ['tag1', 'tag2'];

    // Add new tag
    component.selectedTagsChanged('tag3');
    expect(component.searchTags).toEqual(['tag1', 'tag2', 'tag3']);

    // Remove existing tag
    component.selectedTagsChanged('tag2');
    expect(component.searchTags).toEqual(['tag1', 'tag3']);
  });
});

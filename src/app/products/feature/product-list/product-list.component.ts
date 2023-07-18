import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../../data-access/mock/MOCK_PRODUCT_LIST';
import {ProductService} from '../../data-access/product.service';
import {firstValueFrom} from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @ViewChild('searchKeyInput') myInput!: ElementRef<HTMLInputElement>;

  public searchKey: string = '';
  public searchTags: string[] = [];
  public searchedProducts: Product[] = [];

  constructor(private _http: HttpClient,
              private _productService: ProductService) {
  }

  ngOnInit(): void {
    firstValueFrom(this._productService.getProducts$()).then(
      (products: Product[]) => {
        this.searchedProducts = products;
      }
    );
  }

  getTagsFromProducts(products: Product[]): string[] {
    const tagsSet = new Set<string>();
    products.forEach((product) => {
      product.tags.forEach((tag) => tagsSet.add(tag));
    });
    return Array.from(tagsSet);
  }

  selectedTagsChanged(tag: string): void {
    const index: number = this.searchTags.indexOf(tag);
    if (index > -1) {
      // Remove Tag from list
      this.searchTags.splice(index, 1);
    } else {
      // Add Tag to list
      this.searchTags.push(tag);
    }

    // An dieser Stelle müssen wir eine neue Instance von searchTags erstellen,
    // damit die View (Html) erkennen kann, dass es eine Änderung im Array gibt.
    this.searchTags = [...this.searchTags];
  }
}

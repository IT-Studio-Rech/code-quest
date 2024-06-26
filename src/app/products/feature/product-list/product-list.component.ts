import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Product} from '../../data-access/mock/MOCK_PRODUCT_LIST';
import {ProductService} from '../../data-access/product.service';
import {firstValueFrom} from 'rxjs';
import {CommonModule} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatChipsModule} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import {EmojiDependentOnDateDirective} from "../../../shared/ui/directive/emoji-dependent-on-date.directive";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {FilterProductsPipe} from "../../ui/pipes/filter-products.pipe";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule,
    HttpClientModule,
    EmojiDependentOnDateDirective,
    FormsModule,
    MatButtonModule,
    FilterProductsPipe
  ],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @ViewChild('searchKeyInput') myInput!: ElementRef<HTMLInputElement>;

  public searchKey: string = '';
  public searchTags: string[] = [];
  public searchedProducts: Product[] = [];

  constructor(private _productService: ProductService) {
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
      this.searchTags.splice(index, 1);
    } else {
      this.searchTags.push(tag);
    }
    this.searchTags = [...this.searchTags];
  }
}

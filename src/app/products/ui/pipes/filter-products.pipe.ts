import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  standalone: true,
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {
  transform(products: any[], searchKey: string, searchTags: string[]): any[] {
    if (!products) {
      return [];
    }
    if (!searchKey && (!searchTags || searchTags.length === 0)) {
      return products;
    }

    return products.filter((product) => {
      let searchKeyMatch = true;
      let tagMatch = true;

      if (searchKey) {
        searchKeyMatch = product.name.toLowerCase().includes(searchKey.toLowerCase()) ||
          product.description.toLowerCase().includes(searchKey.toLowerCase());
      }

      if (searchTags && searchTags.length > 0) {
        tagMatch = searchTags.every((tag) => product.tags.includes(tag));
      }

      return searchKeyMatch && tagMatch;
    });
  }
}

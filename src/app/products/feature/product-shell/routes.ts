import {Routes} from '@angular/router';


export const featureProductsRouting: Routes = [
  {
    path: 'list',
    loadComponent: () => import('../product-list/product-list.component').then(m => m.ProductListComponent)
  },
  {
    path: ':id',
    loadComponent: () => import('../product-detail/product-detail.component').then(m => m.ProductDetailComponent)
  }
];

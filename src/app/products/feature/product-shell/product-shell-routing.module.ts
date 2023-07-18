import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: 'list',
    loadChildren: () => import('../product-list/product-list.module').then(m => m.ProductListModule)
  },
  {
    path: ':id',
    loadChildren: () => import('../product-detail/product-detail.module').then(m => m.ProductDetailModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class ProductShellRoutingModule {
}

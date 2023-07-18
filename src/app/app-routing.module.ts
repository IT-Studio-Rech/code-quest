import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'product',
    loadChildren: () => import('./products/feature/product-shell/product-shell.module').then((module) => module.ProductShellModule)
  },
  {
    path: 'shopping-cart',
    loadChildren: () => import('./shopping-cart/feature/shopping-cart-shell/shopping-cart-shell.module').then((module) => module.ShoppingCartShellModule)
  },
  {
    path: '',
    redirectTo: 'product/list',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

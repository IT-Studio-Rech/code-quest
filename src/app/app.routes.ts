import {Routes} from "@angular/router";
import {featureProductsRouting} from "./products/feature/product-shell/routes";

export const routes: Routes = [
  {
    path: 'product',
    children: featureProductsRouting
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

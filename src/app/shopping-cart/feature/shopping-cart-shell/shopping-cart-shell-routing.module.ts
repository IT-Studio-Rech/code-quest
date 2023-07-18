import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../shopping-cart-detail/shopping-cart-detail.module').then(m => m.ShoppingCartDetailModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class ShoppingCartShellRoutingModule {
}

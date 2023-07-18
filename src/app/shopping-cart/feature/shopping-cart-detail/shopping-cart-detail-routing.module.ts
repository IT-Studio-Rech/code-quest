import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShoppingCartDetailComponent} from './shopping-cart-detail.component';

const routes: Routes = [{ path: '', component: ShoppingCartDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingCartDetailRoutingModule {
}

import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";
import {HeadlineComponent} from "./shared/ui/component/headline/headline.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MockProductInterceptor} from "./products/data-access/mock/mock-products.interceptor";
import {MockShoppingCartInterceptor} from "./shopping-cart/data-access/mock/mock-shopping-cart.interceptor";
import {MockProfileDetailsInterceptor} from "./profile/data-access/mock/mock-profile-details.interceptor";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    HeadlineComponent,
    HttpClientModule
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: MockProductInterceptor,
    //   multi: true,
    // },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: MockShoppingCartInterceptor,
    //   multi: true,
    // },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: MockProfileDetailsInterceptor,
    //   multi: true,
    // },
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'code-quest';
}

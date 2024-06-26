import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {BrowserAnimationsModule, provideAnimations} from "@angular/platform-browser/animations";
import {HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors} from "@angular/common/http";
import {MockProductInterceptor} from "./products/data-access/mock/mock-products.interceptor";
import {MockShoppingCartInterceptor} from "./shopping-cart/data-access/mock/mock-shopping-cart.interceptor";
import {MockProfileDetailsInterceptor} from "./profile/data-access/mock/mock-profile-details.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(withInterceptors([MockProductInterceptor, MockShoppingCartInterceptor, MockProfileDetailsInterceptor]))
  ]
};

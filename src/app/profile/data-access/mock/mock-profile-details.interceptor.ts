import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse,} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable()
export class MockProfileDetailsInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {

    if (request.method === 'PUT' && request.url.endsWith('/user-profile')) {
      // Profildaten in LocalStorage speichern
      localStorage.setItem('userProfile', JSON.stringify(request.body));
      return of(new HttpResponse({ status: 200, body: { success: true } }));
    }

    if (request.method === 'GET' && request.url.endsWith('/user-profile')) {
      // Profildaten aus LocalStorage abrufen
      const userProfile = JSON.parse(
        localStorage.getItem('userProfile') || '{}'
      );
      return of(new HttpResponse({ status: 200, body: userProfile }));
    }

    // Alle anderen Anfragen unverändert durchlassen
    return next.handle(request);
  }
}

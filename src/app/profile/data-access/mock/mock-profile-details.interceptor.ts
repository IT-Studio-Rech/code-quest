import {HttpInterceptorFn, HttpResponse,} from '@angular/common/http';
import {of} from 'rxjs';

export const MockProfileDetailsInterceptor: HttpInterceptorFn = (request, next) => {
  if (request.method === 'PUT' && request.url.endsWith('/user-profile')) {
    // Profildaten in LocalStorage speichern
    localStorage.setItem('userProfile', JSON.stringify(request.body));
    return of(new HttpResponse({status: 200, body: {success: true}}));
  }

  if (request.method === 'GET' && request.url.endsWith('/user-profile')) {
    // Profildaten aus LocalStorage abrufen
    const userProfile = JSON.parse(
      localStorage.getItem('userProfile') || '{}'
    );
    return of(new HttpResponse({status: 200, body: userProfile}));
  }

  // Alle anderen Anfragen unverändert durchlassen
  return next(request);
};

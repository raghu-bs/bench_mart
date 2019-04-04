import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';
import { environment } from '../../environments/environment';
import 'rxjs/Rx';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  errorMsg: string;
  constructor(public http: HttpClient, private router: Router) { };
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token: string = localStorage.getItem('token');

    if (token) {
      req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
    }

    if (!req.headers.has('Content-Type')) {
      req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
    }
    
    req = req.clone({ headers: req.headers.set('Accept', 'application/json') });

    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('event--->>>', event);
        }
        return event;
      }));
  }
}



    // let reqcloned;
    // if ((req.url.indexOf("slowchangingitems") > -1)) {
    //   reqcloned = req.clone({
    //     setHeaders: {
    //       'clientId': 'FDWhv53XWJXBVUCJGZG3DQ==',
    //       'secret': 'n3aLfxWtj9cvOTTJuRRSwNjMMF5GTTrbacfZt8l2x4o=',
    //       'Content-Type': 'application/json'
    //     }
    //   })
    // } else {
    //   reqcloned = req.clone({
    //     setHeaders: {
    //       'clientId': 'FDWhv53XWJXBVUCJGZG3DQ==',
    //       'secret': 'n3aLfxWtj9cvOTTJuRRSwNjMMF5GTTrbacfZt8l2x4o=',
    //       'Content-Type': 'application/json',
    //       'Authorization': 'Bearer ' + sessionStorage.getItem('token')
    //     }
    //   });
    // }

        // return next.handle(req).do(evt => {
    //   if (evt instanceof HttpResponse) { }
    // }, err_evt => {
    // }).catch((err) => {
    //   return Observable.throw(err);
    // });
  // }
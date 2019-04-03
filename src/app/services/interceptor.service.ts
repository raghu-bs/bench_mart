import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';
import { environment } from '../../environments/environment';
import 'rxjs/Rx';
import { map } from 'rxjs/operators';
import { CommonService } from './common.service';
import { Router } from '../../../node_modules/@angular/router';
//import { AuthService } from '../services/auth.service';

@Injectable()
export class InterceptorService implements HttpInterceptor {
  logoutres;
  errorMsg: string;
  constructor(public http: HttpClient, public commonservice: CommonService, private router: Router) { };
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let reqcloned;
    //const authToken = this.authService.authtokendata;

    if ((req.url.indexOf("slowchangingitems") > -1)) {
      reqcloned = req.clone({
        setHeaders: {
          'clientId': 'FDWhv53XWJXBVUCJGZG3DQ==',
          'secret':'n3aLfxWtj9cvOTTJuRRSwNjMMF5GTTrbacfZt8l2x4o=',    
          'Content-Type': 'application/json'
        }

      })
    } else {
      reqcloned = req.clone({
        setHeaders: {
          'clientId': 'FDWhv53XWJXBVUCJGZG3DQ==',
          'secret':'n3aLfxWtj9cvOTTJuRRSwNjMMF5GTTrbacfZt8l2x4o=',    
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + sessionStorage.getItem('token')
        }
      });
    }

    return next.handle(reqcloned).do(evt => {
      if (evt instanceof HttpResponse) {}
    }, err_evt => {
      }).catch((err) => {
        return Observable.throw(err);
      });
  }

}

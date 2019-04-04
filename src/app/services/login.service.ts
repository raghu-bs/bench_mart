import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs';

@Injectable()
export class LoginService {


  constructor(private http: HttpClient) { }

  login(data) {
    return this.http.post('http://localhost:8080/api/login', data)
    .map(resdata => {
      return resdata;
    }, error => {
      return null;
    });
  }

  getCustomerDetails() {
    return this.http.get('http://localhost:3070/customers/details');
  }

}
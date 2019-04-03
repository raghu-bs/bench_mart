import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/operator/map';

@Injectable()
export class LoginService {

    constructor(private http: HttpClient) { }

    login(data) {
        // data = { email: 'admin', password: 'admin' };
        return this.http.get('http://localhost:8080/api/contacts');
    }

    getCustomerDetails() {
        return this.http.get('http://localhost:3070/customers/details');
    }

}
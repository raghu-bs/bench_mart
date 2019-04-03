import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs';

@Injectable()
export class CommonService {
  constructor(public http: HttpClient) { }


  ngOnInit(){}
}
  
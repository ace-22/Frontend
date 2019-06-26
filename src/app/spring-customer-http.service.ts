import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpErrorResponse, HttpParams } from "@angular/common/http";
import {
  Http,
  Headers,
  Response,
  RequestOptions,
  ResponseContentType
} from "@angular/http";

import "rxjs/add/operator/map";

@Injectable({
  providedIn: "root"
})
export class SpringCustomerHttpService {
  public url = "http://localhost:8070/api/customers";

  constructor(public _http: HttpClient) {}

  public getCustomer() {
    let response = this._http.get(this.url);
    console.log(response);
    return response;
  }

  public addCustomer(data): Observable<any> {
    var param = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email
    };

    return this._http.post(this.url, param);
  }

  public getSingleCustomer(id) {
    let response = this._http.get(this.url + "/" + id);
    console.log(response);
    return response;
  }

  public updateCustomer(data, id): Observable<any> {
    var param = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email
    };

    return this._http.put(
      `http://localhost:8081/spring-crm-rest/api/customers/${id}`,
      param
    );
  }
}

import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

import {environment} from '../../../../environments/environment';
import {catchError, map} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockInventoryService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(`${environment.api}/products`).pipe(catchError(err => err));
  }

  getCartItems() {
    return this.http.get(`${environment.api}/cart`).pipe(catchError((err => err)));
  }

  checkBranchId(id: string) {
    const params = new HttpParams({fromObject: {id}});
    return this.http.get<any[]>(`${environment.api}/branches`, {params})
      .pipe(
        map((items) => !!items.length),
        catchError((error) => throwError(error.json()))
      );
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from '../../../../environments/environment';
import {catchError} from 'rxjs/operators';

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
}

import { TestBed } from '@angular/core/testing';

import { StockInventoryService } from './stock-inventory.service';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';

class HttpMock {
  get() {
    return of([])
  }
}

const fakeProducts = [{ id: 1, price: 10, name: 'Test' }, { id: 2, price: 100, name: 'Another Test' }];
const fakeCards = [{ product_id: 1, quantity: 10 }, { product_id: 2, quantity: 5 }];

describe('StockInventoryService', () => {
  let service: StockInventoryService;
  let http: HttpClient

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StockInventoryService, {provide: HttpClient, useClass: HttpMock}]
    });

    http = TestBed.get(HttpClient);
    service = TestBed.get(StockInventoryService);
  });

  it('should get cart items', () => {
    spyOn(http, 'get').and.returnValue(of([...fakeCards]));

    service.getCartItems().subscribe((result: any[]) => {
      expect(result.length).toEqual(fakeCards.length);
      expect(result).toEqual(fakeCards);
    });
  });

  it('should get product items', () => {
    spyOn(http, 'get').and.returnValue(of([...fakeProducts]));

    service.getCartItems().subscribe((result: any[]) => {
      expect(result.length).toEqual(fakeProducts.length);
      expect(result).toEqual(fakeProducts);
    });
  });
});

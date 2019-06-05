import {AbstractControl} from '@angular/forms';
import {Injectable} from '@angular/core';
import {StockInventoryService} from '../services/stock-inventory.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StockValidators {

  constructor(private stockInventory: StockInventoryService) {
  }

  static StockBranch(control: AbstractControl) {
    const match = /^[a-z]\d{3}$/i;
    const value = control.value.match(match);
    return value ? null : {invalidBranch: true};
  }

  static CheckStockExists(control: AbstractControl) {
    const stockItem = control.get('stock');
    const selector = control.get('selector');

    if (stockItem && selector) {
      const exists = stockItem.value.some((stock) => stock.product_id === parseInt(selector.value.product_id, 10));
      return exists ? {stockExists: true} : null;
    }

    return null;
  }

  CheckBranchId(control: AbstractControl) {
    return this.stockInventory.checkBranchId(control.value)
      .pipe(map(result => result ? null :  { unknownBranch: true }));
  }
}

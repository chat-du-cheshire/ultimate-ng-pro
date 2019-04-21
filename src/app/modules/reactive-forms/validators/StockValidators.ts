import {AbstractControl} from '@angular/forms';

export class StockValidators {
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
      console.log(exists)
      return exists ? {stockExists: true} : null;
    }

    return null;
  }
}

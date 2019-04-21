import {AbstractControl} from '@angular/forms';

export class StockValidators {
  static StockBranch(control: AbstractControl) {
    const match = /^[a-z]\d{3}$/i;
    const value = control.value.match(match);
    return value ? null : { invalidBranch: true };
  }
}

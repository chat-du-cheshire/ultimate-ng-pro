import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

const STOCK_COUNTER_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => StockCounterComponent),
  multi: true
};

@Component({
  selector: 'stock-counter',
  templateUrl: './stock-counter.component.html',
  styleUrls: ['./stock-counter.component.scss'],
  providers: [STOCK_COUNTER_ACCESSOR]
})
export class StockCounterComponent implements ControlValueAccessor {

  private onTouched: Function;
  private onValueChanged: Function;

  @Input() step = 10;
  @Input() min = 10;
  @Input() max = 1000;

  value = 10;

  writeValue(value: number): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onValueChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onIncrement() {
    if (this.value < this.max) {
      this.value += this.step;
      this.onValueChanged(this.value);
    }

    this.onTouched();
  }

  onDecrement() {
    if (this.value > this.min) {
      this.value -= this.step;
      this.onValueChanged(this.value);
    }

    this.onTouched();
  }

}

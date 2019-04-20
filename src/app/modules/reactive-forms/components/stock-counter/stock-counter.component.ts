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
  focused: boolean;

  onKeyDown(event: KeyboardEvent) {
    const handler = {
      ArrowUp: () => this.onIncrement(),
      ArrowDown: () => this.onDecrement()
    };

    if (handler[event.code]) {
      handler[event.code]();
      event.preventDefault();
      event.stopPropagation();
    }

    this.onTouched();
  }

  onBlur(event: FocusEvent) {
    this.focused = false;
    event.preventDefault();
    event.stopPropagation();
    this.onTouched();
  }

  onFocus(event: FocusEvent) {
    this.focused = true;
    event.preventDefault();
    event.stopPropagation();
    this.onTouched();
  }

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

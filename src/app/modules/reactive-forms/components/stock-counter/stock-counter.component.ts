import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'stock-counter',
  templateUrl: './stock-counter.component.html',
  styleUrls: ['./stock-counter.component.scss']
})
export class StockCounterComponent implements OnInit {

  @Input() step = 10;
  @Input() min = 10;
  @Input() max = 1000;

  value = 10;

  constructor() {
  }

  ngOnInit() {
  }

  onIncrement() {
    if (this.value < this.max) {
      this.value += this.step;
    }
  }

  onDecrement() {
    if (this.value > this.min) {
      this.value -= this.step;
    }
  }

}
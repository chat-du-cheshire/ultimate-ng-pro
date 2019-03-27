import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';

@Component({
  selector: 'stock-products',
  templateUrl: './stock-products.component.html',
  styleUrls: ['./stock-products.component.scss']
})
export class StockProductsComponent implements OnInit {

  @Output() removed = new EventEmitter<any>();

  @Input() parent: FormGroup;
  get stocks() {
    return (this.parent.get('stock') as FormArray).controls;
  }

  onRemove(item, index) {
    this.removed.next({item, index})
  }

  constructor() { }

  ngOnInit() {
  }

}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, FormArray, FormGroup} from '@angular/forms';
import {IProduct} from '../../interfaces/IProduct';
import {IItem} from '../../interfaces/IItem';

@Component({
  selector: 'stock-products',
  templateUrl: './stock-products.component.html',
  styleUrls: ['./stock-products.component.scss']
})
export class StockProductsComponent implements OnInit {
  @Input() map: Map<number, IProduct>;

  @Output() removed = new EventEmitter<any>();

  @Input() parent: FormGroup;

  get stocks() {
    return (this.parent.get('stock') as FormArray).controls;
  }

  constructor() { }

  ngOnInit() {
  }

  getProduct(id: number): IProduct {
    return this.map.get(id);
  }

  getItemValue(item: AbstractControl): IItem {
    return item.value;
  }

  onRemove(item, index) {
    this.removed.next({item, index});
  }
}

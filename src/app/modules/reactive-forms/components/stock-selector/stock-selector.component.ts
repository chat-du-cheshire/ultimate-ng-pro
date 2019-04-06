import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {IProduct} from '../../interfaces/IProduct';

@Component({
  selector: 'stock-selector',
  templateUrl: './stock-selector.component.html',
  styleUrls: ['./stock-selector.component.scss']
})
export class StockSelectorComponent implements OnInit {

  @Input() parent: FormGroup;
  @Input() products: IProduct[];

  @Output() added = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  onAdd() {
    this.added.emit(this.parent.get('selector').value);
    this.parent.get('selector').reset({
      product_id: null,
      quantity: 10
    });
  }
}

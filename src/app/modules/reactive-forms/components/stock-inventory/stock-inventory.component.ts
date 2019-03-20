import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {IProduct} from '../../interfaces/IProduct';

@Component({
  selector: 'stock-inventory',
  templateUrl: './stock-inventory.component.html',
  styleUrls: ['./stock-inventory.component.scss']
})
export class StockInventoryComponent implements OnInit {

  products: IProduct[] = [
    {
      'id': 1,
      'name': 'Stark',
      'price': 3307
    },
    {
      'id': 2,
      'name': 'Maura',
      'price': 5296
    },
    {
      'id': 3,
      'name': 'Rebecca',
      'price': 9493
    },
    {
      'id': 4,
      'name': 'Sexton',
      'price': 3826
    },
    {
      'id': 5,
      'name': 'Atkinson',
      'price': 855
    },
    {
      'id': 6,
      'name': 'Shanna',
      'price': 6859
    },
    {
      'id': 7,
      'name': 'Leticia',
      'price': 5366
    },
    {
      'id': 8,
      'name': 'Hilary',
      'price': 3733
    }
  ];

  form = new FormGroup({
    store: new FormGroup({
      branch: new FormControl(''),
      code: new FormControl('')
    }),
    selector: this.createStock({}),
    stock: new FormArray([
      this.createStock({product_id: 2, quantity: 50}),
      this.createStock({product_id: 5, quantity: 20}),
    ])
  });

  constructor() {
  }

  createStock(stock) {
    return new FormGroup({
      product_id: new FormControl(parseInt(stock.product_id, 10) || ''),
      quantity: new FormControl(stock.quantity || 10)
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(`Submit:`, this.form.value);
  }
}

import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {IProduct} from '../../interfaces/IProduct';
import {StockInventoryService} from '../../services/stock-inventory.service';
import {forkJoin} from 'rxjs';
import {map} from 'rxjs/operators';
import {IItem} from '../../interfaces/IItem';

@Component({
  selector: 'stock-inventory',
  templateUrl: './stock-inventory.component.html',
  styleUrls: ['./stock-inventory.component.scss']
})
export class StockInventoryComponent implements OnInit {

  productMap = new Map<number, IProduct>();

  products: IProduct[];

  form = this.fb.group({
    store: this.fb.group({
      branch: '',
      code: ''
    }),
    selector: this.createStock({}),
    stock: this.fb.array([])
  });

  constructor(private fb: FormBuilder, private stock: StockInventoryService) {
  }

  createStock(stock) {
    return this.fb.group({
      product_id: parseInt(stock.product_id, 10) || '',
      quantity: stock.quantity || 10
    });
  }

  addStock(stock) {
    const control = this.form.get('stock') as FormArray;
    control.push(this.createStock(stock));
  }

  removeStock({index}) {
    const control = this.form.get('stock') as FormArray;
    control.removeAt(index);
  }

  ngOnInit() {
    const items$ = this.stock.getCartItems();
    const products$ = this.stock.getProducts();

    forkJoin([products$, items$])
      .subscribe(([products, items]: [IProduct[], IItem[]]) => {
        products.forEach((prod: IProduct) => {
          this.productMap.set(prod.id, prod);
        });

        items.forEach(item => this.addStock(item));

        this.products = products;
      });
  }

  onSubmit() {
    console.log(`Submit:`, this.form.value);
  }
}

import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, Validators} from '@angular/forms';
import {IProduct} from '../../interfaces/IProduct';
import {StockInventoryService} from '../../services/stock-inventory.service';
import {forkJoin} from 'rxjs';
import {IItem} from '../../interfaces/IItem';
import {StockValidators} from '../../validators/StockValidators';

@Component({
  selector: 'stock-inventory',
  templateUrl: './stock-inventory.component.html',
  styleUrls: ['./stock-inventory.component.scss']
})
export class StockInventoryComponent implements OnInit {

  productMap = new Map<number, IProduct>();

  products: IProduct[];

  total = 0;

  form = this.fb.group({
    store: this.fb.group({
      branch: [
        '',
        [Validators.required, StockValidators.StockBranch],
        [this.validators.CheckBranchId.bind(this.validators)]
      ],
      code: ['', Validators.required]
    }),
    selector: this.createStock({}),
    stock: this.fb.array([])
  }, { validators: StockValidators.CheckStockExists });

  constructor(private fb: FormBuilder,
              private stock: StockInventoryService,
              private validators: StockValidators) { }

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

    this.form.valueChanges.subscribe((value) => this.calcTotal(value.stock));
  }

  calcTotal(value: IItem[]) {
    this.total = value.reduce((acc, item) => acc + (item.quantity * this.productMap.get(item.product_id).price), 0);
  }

  onSubmit() {
    console.log(`Submit:`, this.form.value);
  }
}

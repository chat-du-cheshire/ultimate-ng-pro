import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'stock-branch',
  templateUrl: './stock-branch.component.html',
  styleUrls: ['./stock-branch.component.scss']
})
export class StockBranchComponent implements OnInit {

  @Input() parent: FormGroup;

  get invalid() {
    const name = 'branch';
    return (
      this.parent.get(`store.${name}`).getError('invalidBranch') &&
      this.parent.get(`store.${name}`).dirty &&
      !this.required(name)
    );
  }

  required(name: string) {
    return (
      this.parent.get(`store.${name}`).getError('required') &&
      this.parent.get(`store.${name}`).touched
    );
  }

  constructor() {
  }

  ngOnInit() {
  }

}

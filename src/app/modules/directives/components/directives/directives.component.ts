import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  items = ['Foo', 'Bar', 'Baz'];

  constructor() {
  }

  ngOnInit() {
    setTimeout(() => {
      this.items = [...this.items, 'Zoo'];
    }, 2000);
  }

}

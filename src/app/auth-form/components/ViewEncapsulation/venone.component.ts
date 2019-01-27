import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'venone',
  encapsulation: ViewEncapsulation.None,
  template: `
    <p class="ve-class">
      venone works!
    </p>
  `,
  styles: [`.ve-class { background-color: aqua }`]
})
export class VENoneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

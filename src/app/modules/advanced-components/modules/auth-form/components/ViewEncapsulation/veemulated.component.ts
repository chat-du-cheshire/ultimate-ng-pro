import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'veemulated',
  encapsulation: ViewEncapsulation.Emulated,
  template: `
    <p class="ve-class">
      veemulated works!
    </p>
  `,
  styles: [`.ve-class { background-color: #9f72e6 }`]
})
export class VeemulatedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'veshadowdom',
  encapsulation: ViewEncapsulation.Native,
  template: `
    <p class="ve-class">
      veshadowdom works!
    </p>
  `,
  styles: [`:host {display: block} .ve-class { background-color: aquamarine }`]
})
export class VeshadowdomComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

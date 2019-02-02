import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[credit-card]'
})
export class CreditCardDirective {

  constructor(private el: ElementRef) {
    console.log(el);
  }

}

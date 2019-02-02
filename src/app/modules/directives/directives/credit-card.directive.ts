import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[credit-card]'
})
export class CreditCardDirective {

  @HostBinding('style.border') border: string;

  @HostListener('input', ['$event']) onInput(event) {
    const input = <HTMLInputElement>event.target;

    const value = input.value;

    let trimmed = value.replace(/\s/g, '');

    if (trimmed.length > 16) {
      trimmed = trimmed.substr(0, 16);
    }

    const numbers = [];
    for (let i = 0; i < trimmed.length; i += 4) {
      numbers.push(trimmed.substr(i, 4));
    }

    input.value = numbers.join(' ');

    this.border = '';
    if (/\D+/.test(trimmed)) {
      this.border = '1px solid red';
    }
  }

  constructor(private el: ElementRef) {
    console.log(el);
  }

}

import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class MyForDirective {

  @Input() set myForOf(items: any[]) {
    this.view.clear();
    items.forEach((value, index) => {
      this.view.createEmbeddedView(this.template, {$implicit: value, index});
    });
  }

  constructor(private view: ViewContainerRef, private template: TemplateRef<any>) {
  }

}

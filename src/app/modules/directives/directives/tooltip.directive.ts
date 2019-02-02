import {ComponentFactoryResolver, ComponentRef, Directive, ElementRef, Input, ViewContainerRef} from '@angular/core';
import {TooltipContainerComponent} from '../components/tooltip-container/tooltip-container.component';

@Directive({
  selector: '[tooltip]',
  exportAs: 'tooltip'
})
export class TooltipDirective {
  @Input() tooltip: string;
  private component: ComponentRef<TooltipContainerComponent>;

  constructor(private el: ElementRef, private  view: ViewContainerRef, private factoryResolver: ComponentFactoryResolver) { }

  show() {
    const tooltipContainerFactory = this.factoryResolver.resolveComponentFactory(TooltipContainerComponent);
    this.component = this.view.createComponent(tooltipContainerFactory);
    this.component.instance.text = this.tooltip;
  }

  hide() {
    this.component.destroy();
  }
}

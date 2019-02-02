import {Component, Input} from '@angular/core';

@Component({
  selector: 'tooltip-container',
  template: `{{text}}`,
  styleUrls: ['./tooltip-container.component.scss']
})
export class TooltipContainerComponent {
  @Input() text: string;
}

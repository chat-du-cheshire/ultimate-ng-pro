import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'cd-on-push',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p>
      cd-on-push works! {{sum}}
    </p>
    <div>{{obj | json}}</div>
  `,
  styles: []
})
export class CdOnPushComponent implements OnInit {
  private _b: number;
  private _a: number;

  @Input() set a(v) {
    this._a = v;
  }

  @Input() set b(v) {
    this._b = v;
  }

  @Input() obj;

  get sum() {
    return this._a + this._b;
  }

  constructor() { }

  ngOnInit() {
  }

}

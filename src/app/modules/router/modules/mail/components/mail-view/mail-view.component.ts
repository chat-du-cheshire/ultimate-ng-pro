import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {pluck} from 'rxjs/operators';

@Component({
  selector: 'mail-view',
  templateUrl: './mail-view.component.html',
  styleUrls: ['./mail-view.component.scss']
})
export class MailViewComponent implements OnInit {
  id = this.route.params.pipe(pluck('id'));
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}

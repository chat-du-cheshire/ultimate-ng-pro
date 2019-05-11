import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onActivate($event: any) {
    console.log('Activate', $event);
  }

  onDeactivate($event: any) {
    console.log('Deactivate', $event);
  }
}

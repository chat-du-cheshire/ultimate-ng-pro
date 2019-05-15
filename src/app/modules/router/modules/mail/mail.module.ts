import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MailComponent} from './components/mail/mail.component';
import {RouterModule, Routes} from '@angular/router';
import {MailItemComponent} from './components/mail-item/mail-item.component';
import {MailFolderComponent} from './components/mail-folder/mail-folder.component';
import {MailResolver} from './services/mail.resolver';
import {HttpClientModule} from '@angular/common/http';
import {MailService} from './services/mail.service';
import {MailViewComponent} from './components/mail-view/mail-view.component';

export const ROUTES: Routes = [
  {
    path: 'message/:id',
    component: MailViewComponent,
    outlet: 'pane'
  },
  {
    path: 'folder/:name',
    component: MailFolderComponent,
    resolve: {messages: MailResolver}
  }
];

@NgModule({
  declarations: [MailComponent, MailItemComponent, MailFolderComponent, MailViewComponent],
  providers: [MailService, MailResolver],
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule
  ],
  exports: [MailComponent]
})
export class MailModule {
}

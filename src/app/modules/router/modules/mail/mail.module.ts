import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailComponent } from './components/mail/mail.component';
import {RouterModule, Routes} from '@angular/router';
import { MailItemComponent } from './components/mail-item/mail-item.component';
import { MailFolderComponent } from './components/mail-folder/mail-folder.component';

export const ROUTES: Routes = [
  { path: 'folder/:name', component: MailFolderComponent }
];

@NgModule({
  declarations: [MailComponent, MailItemComponent, MailFolderComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [MailComponent]
})
export class MailModule { }

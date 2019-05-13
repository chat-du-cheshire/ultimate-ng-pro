import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Mail} from '../interfaces/mail';
import {Observable} from 'rxjs';
import {MailService} from './mail.service';

@Injectable()
export class MailResolver implements Resolve<Mail[]> {
  constructor(private mail: MailService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Mail[]> {
    return this.mail.getFolder(route.params.name);
  }
}

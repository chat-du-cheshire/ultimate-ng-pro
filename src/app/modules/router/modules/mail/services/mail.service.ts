import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Mail} from '../interfaces/mail';
import {environment} from '../../../../../../environments/environment';

@Injectable()
export class MailService {
  constructor(private http: HttpClient) {}

  getFolder(folder: string) {
    const params = new HttpParams({fromObject: { folder }});
    return this.http.get<Mail[]>(`${environment.api}/messages`, {params});
  }
}

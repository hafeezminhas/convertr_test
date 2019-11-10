import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Advertiser} from '../../models/advertiser';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdvertiserService {
  apiPrefix = environment.apiPrefix + '/test/api';

  constructor(private http: HttpClient) { }

  getAdvertisers(): Observable<any> {
    return this.http.get(`${this.apiPrefix}/advertisers`);
  }

  loadAddress(url: string): Promise<any> {
    return this.http.get(`${this.apiPrefix}${url}`).toPromise();
  }

  addNewAddress(url, payload): Observable<any> {
    return this.http.post(`${this.apiPrefix}${url}`, payload);
  }
}

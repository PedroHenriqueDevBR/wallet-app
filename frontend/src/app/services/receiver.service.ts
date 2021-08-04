import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceiverService {

  SERVER_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  public getTransfers(): Observable<any> {
    return this.http.get(`${this.SERVER_URL}/receiver`);
  }
}

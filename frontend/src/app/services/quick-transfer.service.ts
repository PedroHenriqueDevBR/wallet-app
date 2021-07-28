import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuickTransferService {

  SERVER_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  public getQuickTransfers() {
    return this.http.get(`${this.SERVER_URL}/quick-transfers`);
  }
}

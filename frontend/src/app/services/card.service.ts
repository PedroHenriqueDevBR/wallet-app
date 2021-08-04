import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  SERVER_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  public getCards(): Observable<any> {
    return this.http.get(`${this.SERVER_URL}/cards`);
  }
}

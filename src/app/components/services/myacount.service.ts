import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class MyacountService {

  private baseUrl = `${environment.apiUrl}/myaccounts`;

  constructor(private http: HttpClient) { }

  createAccount(account: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/create/1`, account);
  }
 //http://localhost:8180/api/myaccounts/myaccount
  getAccounts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/myaccount`);
  }


}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CallbackForm } from '../models/callbackForm';
import { PaymentForm } from '../models/paymentForm';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  apiUrl = 'https://localhost:44306/api/';
  constructor(private httpClient:HttpClient) { }

  payment():Observable<PaymentForm>{
    let newPath = this.apiUrl + "payments/payment";
    return this.httpClient.get<PaymentForm>(newPath);
  }

  callback(token:any):Observable<CallbackForm>{
    let newPath = this.apiUrl + "payments/callback?token=" + token;
    return this.httpClient.get<CallbackForm>(newPath);
  }
}

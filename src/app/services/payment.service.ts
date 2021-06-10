import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CallbackForm } from '../models/callbackForm';
import { PaymentForm } from '../models/paymentForm';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private httpClient:HttpClient) { }

  payment():Observable<PaymentForm>{
    let newPath = environment.getApiUrl + "payments/payment";
    return this.httpClient.get<PaymentForm>(newPath);
  }

  callback(token:any):Observable<CallbackForm>{
    let newPath = environment.getApiUrl + "payments/callback?token=" + token;
    return this.httpClient.get<CallbackForm>(newPath);
  }
}

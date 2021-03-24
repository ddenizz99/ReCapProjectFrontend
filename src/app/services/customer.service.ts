import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDetailDtoListResponseModel } from '../models/userDetailDtoListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl = 'https://localhost:44306/api/users/getalldetails';
  constructor(private httpClient:HttpClient) { }

  getCustomers():Observable<UserDetailDtoListResponseModel>{
    return this.httpClient.get<UserDetailDtoListResponseModel>(this.apiUrl);
  }
}

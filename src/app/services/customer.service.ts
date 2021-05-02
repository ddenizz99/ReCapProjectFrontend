import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { UserDetailDto } from '../models/userDetailDto';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl = 'https://localhost:44306/api/';
  constructor(private httpClient:HttpClient) { }

  getCustomers():Observable<ListResponseModel<UserDetailDto>>{
    let newPath = this.apiUrl + "users/getalldetails";
    return this.httpClient.get<ListResponseModel<UserDetailDto>>(newPath);
  }
}

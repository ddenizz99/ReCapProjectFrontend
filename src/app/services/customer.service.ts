import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from '../models/listResponseModel';
import { UserDetailDto } from '../models/userDetailDto';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient:HttpClient) { }

  getCustomers():Observable<ListResponseModel<UserDetailDto>>{
    let newPath = environment.getApiUrl + "users/getalldetails";
    return this.httpClient.get<ListResponseModel<UserDetailDto>>(newPath);
  }
}

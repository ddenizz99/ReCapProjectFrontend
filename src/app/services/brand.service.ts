import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandListResponseModel } from '../models/brandListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = 'https://localhost:44306/api/brands/getall';
  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<BrandListResponseModel>{
    return this.httpClient.get<BrandListResponseModel>(this.apiUrl);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailDtoListResponseModel } from '../models/carDetailDtoListResponseModel';
import { CarListResponseModel } from '../models/carListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = 'https://localhost:44306/api/cars/getcardetails';
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<CarDetailDtoListResponseModel>{     
    return this.httpClient.get<CarDetailDtoListResponseModel>(this.apiUrl);
  }
}

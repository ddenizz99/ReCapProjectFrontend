import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailDto } from '../models/carDetailDto';
import { CarImage } from '../models/carImage';
import { DataResponseModel } from '../models/dataResponseModel';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = 'https://localhost:44306/api/';
  constructor(private httpClient:HttpClient) { }

  getByIdCarDetail(carId:number):Observable<DataResponseModel<CarDetailDto>>{   
    let newPath = this.apiUrl + "cars/getcardetailbyid?carid=" + carId;  
    return this.httpClient.get<DataResponseModel<CarDetailDto>>(newPath);
  }

  getCars():Observable<ListResponseModel<CarDetailDto>>{   
    let newPath = this.apiUrl + "cars/getcardetails";  
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getCarsByBrandId(brandId:Number):Observable<ListResponseModel<CarDetailDto>>{
    let newPath = this.apiUrl + "cars/getcardetailsbybrandid?brandid=" + brandId;  
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getCarsByColorId(colorId:Number):Observable<ListResponseModel<CarDetailDto>>{
    let newPath = this.apiUrl + "cars/getcardetailsbycolorid?colorid=" + colorId;  
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getCarImages(carId:number):Observable<ListResponseModel<CarImage>>{   
    let newPath = this.apiUrl + "carimages/getbycarid?carid=" + carId;  
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
}

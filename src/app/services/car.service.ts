import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarDetailDto } from '../models/carDetailDto';
import { CarImage } from '../models/carImage';
import { DataResponseModel } from '../models/dataResponseModel';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient:HttpClient) { }

  getByIdCarDetail(carId:number):Observable<DataResponseModel<CarDetailDto>>{   
    let newPath = environment.getApiUrl + "cars/getcardetailbyid?carid=" + carId;  
    return this.httpClient.get<DataResponseModel<CarDetailDto>>(newPath);
  }

  getCars():Observable<ListResponseModel<CarDetailDto>>{   
    let newPath = environment.getApiUrl + "cars/getcardetails";  
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getCarsByBrandId(brandId:Number):Observable<ListResponseModel<CarDetailDto>>{
    let newPath = environment.getApiUrl + "cars/getcardetailsbybrandid?brandid=" + brandId;  
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getCarsByColorId(colorId:Number):Observable<ListResponseModel<CarDetailDto>>{
    let newPath = environment.getApiUrl + "cars/getcardetailsbycolorid?colorid=" + colorId;  
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getCarImages(carId:number):Observable<ListResponseModel<CarImage>>{   
    let newPath = environment.getApiUrl + "carimages/getbycarid?carid=" + carId;  
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
}

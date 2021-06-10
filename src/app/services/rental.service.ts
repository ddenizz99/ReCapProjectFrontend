import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { RentalDetailDto } from '../models/rentalDetailDto';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  constructor(private httpClient:HttpClient) { }

  getRentalDetails():Observable<ListResponseModel<RentalDetailDto>>{
    let newPath = environment.getApiUrl + "rentals/getrentaldetails";
    return this.httpClient.get<ListResponseModel<RentalDetailDto>>(newPath);
  }

  addRental(rental:Rental):Observable<ResponseModel>{
    let newPath = environment.getApiUrl + "rentals/add";
    return this.httpClient.post<ResponseModel>(newPath, rental);
  }
}

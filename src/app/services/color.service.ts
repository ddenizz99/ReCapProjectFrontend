import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorListResponseModel } from '../models/colorListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl = 'https://localhost:44306/api/colors/getall';
  constructor(private httpClient:HttpClient) { }

  getColors():Observable<ColorListResponseModel>{
    return this.httpClient.get<ColorListResponseModel>(this.apiUrl);
  }
}

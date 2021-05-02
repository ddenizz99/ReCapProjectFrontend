import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  cars:CarDetailDto[] = [];
  carImagePath:string = "https://localhost:44306";
  dataLoaded = false;
  errorMessage:string = "";
  constructor(private carService:CarService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getCars();
    this.activatedRoute.params.subscribe(params => {
      if (params["brandId"]) {
        this.getCarsByBrandId(params["brandId"]);
      } else if (params["colorId"]) {
        this.getCarsByColorId(params["colorId"]);
      } else {
        this.getCars();
      }
    });
  }

  getCars(){
    this.carService.getCars()
    .subscribe(response => {
      this.errorMessage = "";
      this.cars = response.data;
      this.dataLoaded = true;      
    }, responseError => {
      if (!responseError.status) {
        this.errorMessage = "Bağlantı hatası.";
        this.dataLoaded = true;
      }else{
        this.errorMessage = responseError.error.message ?? responseError.error.Message;
      }
    });
  }

  getCarsByBrandId(brandId:Number){
    this.carService.getCarsByBrandId(brandId)
    .subscribe(response => {
      this.errorMessage = "";
      this.cars = response.data;
      this.dataLoaded = true;
    }, responseError => {
      this.errorMessage = responseError.error.message ?? responseError.error.Message;
    });
  }

  getCarsByColorId(colorId:Number){
    this.carService.getCarsByColorId(colorId)
    .subscribe(response => {
      this.errorMessage = "";
      this.cars = response.data;
      this.dataLoaded = true;
    }, responseError => {
      this.errorMessage = responseError.error.message ?? responseError.error.Message;
    });
  }

}

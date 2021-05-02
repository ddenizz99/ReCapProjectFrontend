import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { CarImage } from 'src/app/models/carImage';
import { CarService } from 'src/app/services/car.service';
import {FormGroup,FormBuilder, FormControl, Validators} from "@angular/forms";
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  @ViewChild('closebutton') closebutton:any;

  cars:CarDetailDto[] = [];
  carImages:CarImage[] = [];
  carDetail:CarDetailDto = {carId:1, colorName:"", brandName:"", dailyPrice:1, description:"", coverPhotoPath:""}
  dataLoaded = false;
  carsLoaded = false;
  carImagePath:string = "https://localhost:44306";
  empty:string = "";

  carRentalForm:FormGroup = this.formBuilder.group({});
  rentalFormMessage:string = "";
  messageClass:string = "alert alert-danger";

  constructor(
      private carService:CarService,
      private activatedRoute:ActivatedRoute,
      private formBuilder:FormBuilder,
      private rentalService:RentalService
      ) { }

  ngOnInit(): void {
    this.getCars();
    this.activatedRoute.params.subscribe(params => {
      if (params["carId"]) {
        this.getByIdCarDetail(params["carId"]);
        this.getCarImages(params["carId"]);
        this.createCarRentalForm(params["carId"]);
      }  else {
        alert("Hatalı işlem!");
      }
    });
  }

  getCars(){
    this.carService.getCars()
    .subscribe(response => {
      this.cars = response.data;
      this.carsLoaded = true;      
    });
  }

  getCarsByBrandId(brandId:Number){
    this.carService.getCarsByBrandId(brandId)
    .subscribe(response => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByColorId(colorId:Number){
    this.carService.getCarsByColorId(colorId)
    .subscribe(response => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getByIdCarDetail(carId:number){
    this.carService.getByIdCarDetail(carId)
    .subscribe(response => {
      this.carDetail = response.data;
      this.dataLoaded = true;
    });
  }

  getCarImages(carId:number){
    this.carService.getCarImages(carId)
    .subscribe(response => {
      this.carImages = response.data;
      this.dataLoaded = true;
    });
  }

  createCarRentalForm(carId:number){
    var id:number = +carId; 
    this.carRentalForm = this.formBuilder.group({ 	
      carId:[id, Validators.required],			
      customerId: [5, Validators.required],
      rentDate:["", Validators.required],
      returnDate:[null]
    })
 }

 addRental(){
  this.messageClass = "alert alert-danger";
  if (this.carRentalForm.valid) {
    let rentalModel = Object.assign({}, this.carRentalForm.value);
    this.rentalService.addRental(rentalModel).subscribe(response => {
      this.messageClass = "alert alert-success";
      this.rentalFormMessage = "Başarılı";
      setTimeout(() => {
        this.closebutton.nativeElement.click();
      },2000);
      //this.closebutton.nativeElement.click();
    }, errorResponse => {
      this.rentalFormMessage = errorResponse.error.message ?? errorResponse.error.Message;
    });
  }else{
   this.rentalFormMessage = "Eksik alanları doldurunuz.";
  }
  setTimeout(() => {
    this.rentalFormMessage = "";
  },2000);
 }

 
}



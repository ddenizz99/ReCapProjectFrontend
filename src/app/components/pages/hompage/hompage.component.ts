import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-hompage',
  templateUrl: './hompage.component.html',
  styleUrls: ['./hompage.component.css']
})
export class HompageComponent implements OnInit {

  cars:CarDetailDto[] = [];
  brands:Brand[] = [];
  colors:Color[] = [];
  carImagePath:string = "https://localhost:44306";

  brandFilter:string = "";
  colorFilter:string = "";

  errorMessage:string = "";

  carsLoaded:boolean = false;
  brandsLoaded:boolean = false;
  colorsLoaded:boolean = false;
  emptyFilterButton:boolean = false;

  hata:boolean = false;

  constructor(
    private carService:CarService,
    private brandService:BrandService,
    private colorService:ColorService,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.getBrands();
    this.getColors();
    this.getCars();
  }

  getBrands(){
    this.brandService.getBrands()
    .subscribe(response => {
      this.brands = response.data;
      this.brandsLoaded = true;
    });
  }

  getColors(){
    this.colorService.getColors()
    .subscribe(response => {
      this.colors = response.data;
      this.colorsLoaded = true;
    });
  }

  getCars(){
    this.carService.getCars()
    .subscribe(response => {
      this.errorMessage = "";
      this.cars = response.data;
      this.carsLoaded = true;  
    }, responseError => {
      if (!responseError.status) {
        this.errorMessage = "Bağlantı hatası.";
        Swal.fire({
          title: 'Hata!',
          text: 'Veri kaynağına bağlanılamıyor. Lütfen daha sonra tekrar deneyiniz.',
          icon: 'error',
          confirmButtonText: 'Kapat',
        });
      }
    });
  }

  getCarImage(carId:number){
    this.carService.getCarImages(carId)
    .subscribe(response => {
      this.carImagePath += response.data[0].imagePath;
    });
  }

  setCurrentFilter(data:any){
    if (data.color || data.brand) {
      this.colorFilter = data.color;
      this.brandFilter = data.brand;
      this.emptyFilterButton = true;
    }else{
      this.toastr.error('Filtreleme yapmadınız.', 'Hata!');
    }
  }

  clearSelection(){
    this.colorFilter = "";
    this.brandFilter = "";
    this.emptyFilterButton = false;
    this.toastr.info('Filtre temizlendi.', 'Bilgi!');
  }

}

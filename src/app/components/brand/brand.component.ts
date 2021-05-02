import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands:Brand[] = [];
  filterText:string = "";
  errorMessage:string = "";
  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this.brandService.getBrands()
    .subscribe(response => {
      this.brands = response.data;
    }, responseError => {
      if (!responseError.status) {
        this.errorMessage = "Bağlantı Hatası! : Veriye erişilemiyor.";
      }
    });
  }

}

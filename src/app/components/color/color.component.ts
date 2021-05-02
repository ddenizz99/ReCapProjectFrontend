import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors:Color[] = []
  filterText:string = "";
  errorMessage:string = "";
  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
    this.getColors();
  }

  getColors(){
    this.colorService.getColors()
    .subscribe(response => {
      this.colors = response.data;
    }, responseError => {
      if (!responseError.status) {
        this.errorMessage = "Bağlantı Hatası! : Veriye erişilemiyor.";
      }
    });
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  navLogo:string = './assets/logo.png';

  constructor() { }

  ngOnInit(): void {
  }

}

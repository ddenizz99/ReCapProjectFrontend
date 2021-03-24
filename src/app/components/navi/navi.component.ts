import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  navLogo:string = 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Logo_of_Show_TV.png';

  constructor() { }

  ngOnInit(): void {
  }

}

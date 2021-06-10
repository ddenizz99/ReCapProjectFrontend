import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  isLoggin: boolean = false;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.isLoggin = this.authService.isAuthenticated();
  }

  getCurrentClass():string{
    if (this.isLoggin) {
      return "col-md-9 ms-sm-auto col-lg-10 px-md-4";
    }
    return "col-md-12";
  }
}

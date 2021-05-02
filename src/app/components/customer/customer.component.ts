import { Component, OnInit } from '@angular/core';
import { UserDetailDto } from 'src/app/models/userDetailDto';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers:UserDetailDto[] = [];
  dataSuccess = false;
  dataMessage = 'Veriye Erişilemiyor!';
  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(){
    this.customerService.getCustomers()
    .subscribe(response => {
      if (response.success) {
        this.customers = response.data;
        this.dataSuccess = true;
      }else{
        this.dataMessage = response.message;
      }
    });
  }

}

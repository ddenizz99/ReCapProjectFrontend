import { Component, OnInit } from '@angular/core';
import { CallbackForm } from 'src/app/models/callbackForm';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  callbackForm:CallbackForm = {token:"", paymentStatus:"", status:"", errorMessage:""};
  constructor(private paymentService:PaymentService) { }

  ngOnInit(): void {
    this.getCallback(localStorage.getItem("token"));
  }

  getCallback(token:any){
    this.paymentService.callback(token).subscribe(response => {
      this.callbackForm = response;
    });
  }

}

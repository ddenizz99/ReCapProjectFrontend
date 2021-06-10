import { Component, OnInit } from '@angular/core';
import { CallbackForm } from 'src/app/models/callbackForm';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  callbackForm:CallbackForm = {token:"", paymentStatus:"", status:"", errorMessage:""};
  constructor(private paymentService:PaymentService, private storageService:LocalStorageService) { }

  ngOnInit(): void {
    this.getCallback(this.storageService.getItem("paymentToken"));
  }

  getCallback(token:any){
    this.paymentService.callback(token).subscribe(response => {
      this.callbackForm = response;
    });
  }

}

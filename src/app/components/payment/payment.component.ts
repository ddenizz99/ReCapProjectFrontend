import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentForm } from 'src/app/models/paymentForm';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  paymentForm:PaymentForm = {
    token:"", 
    checkoutFormContent:"", 
    tokenExpireTime:0, 
    paymentPageUrl:"",
    status:"",
    errorCode:"",
    errorMessage:"",
    errorGroup:"",
    locale:"",
    systemTime:0,
    conversationId:"" 
  };
  constructor(
    private _renderer2: Renderer2, 
    @Inject(DOCUMENT) private _document: Document,
    private paymentService:PaymentService,private route:Router,private storageService:LocalStorageService) { }

  ngOnInit(): void {
    this.getPayment();
  }

  getPayment(){
    this.paymentService.payment().subscribe(response => {
      this.paymentForm = response;
      console.log(response);
      if (response.status == "success") {
        this.setScriptCode(response.checkoutFormContent);
        this.storageService.setItem("paymentToken", response.token);
      }else{
        console.log(response.errorMessage);
      }
    }, errorResponse => {
      this.route.navigate(['']);
    });
  }

  setScriptCode(scriptCode:string){
    let script = this._renderer2.createElement('script');
    script.type = 'text/javascript';
    script.text = scriptCode.replace( /(<([^>]+)>)/ig, '');
    this._renderer2.appendChild(this._document.body, script);
  }

}

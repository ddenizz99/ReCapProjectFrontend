import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { CategoryComponent } from './components/category/category.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { CarComponent } from './components/car/car.component';
import { HompageComponent } from './components/pages/hompage/hompage.component';
import { FooterComponent } from './components/footer/footer.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { BrandFilterPipePipe } from './pipes/brand-filter-pipe.pipe';
import { ColorFilterPipePipe } from './pipes/color-filter-pipe.pipe';
import { CarFilterPipePipe } from './pipes/car-filter-pipe.pipe';
import { CarLimitPipePipe } from './pipes/car-limit-pipe.pipe';
import { HideCarPipePipe } from './pipes/hide-car-pipe.pipe';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { PaymentComponent } from './components/payment/payment.component';
import { CallbackComponent } from './components/pages/callback/callback.component';



@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    CategoryComponent,
    CarDetailComponent,
    BrandComponent,
    ColorComponent,
    CustomerComponent,
    RentalComponent,
    CarComponent,
    HompageComponent,
    FooterComponent,
    VatAddedPipe,
    BrandFilterPipePipe,
    ColorFilterPipePipe,
    CarFilterPipePipe,
    CarLimitPipePipe,
    HideCarPipePipe,
    PageNotFoundComponent,
    PaymentComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({positionClass:"toast-bottom-right"})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

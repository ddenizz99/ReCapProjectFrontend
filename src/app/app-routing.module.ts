import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CallbackComponent } from './components/pages/callback/callback.component';
import { HompageComponent } from './components/pages/hompage/hompage.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
  {path:"",pathMatch:"full", component:HompageComponent},
  {path:"cars", component:CarDetailComponent},
  {path:"colors", component:ColorComponent},
  {path:"brands", component:BrandComponent},
  {path:"customers", component:CustomerComponent},
  {path:"rentals", component:RentalComponent},
  {path:"cars/brand/:brandId", component:CarDetailComponent},
  {path:"cars/color/:colorId", component:CarDetailComponent},
  {path:"car/:carId", component:CarComponent},
  {path:"payment", component:PaymentComponent},
  {path:"callback", component:CallbackComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

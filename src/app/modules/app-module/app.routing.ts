import { Routes } from '@angular/router';
import { BrandComponent } from 'src/app/components/brand/brand.component';
import { CarDetailComponent } from 'src/app/components/car-detail/car-detail.component';
import { CarComponent } from 'src/app/components/car/car.component';
import { ColorComponent } from 'src/app/components/color/color.component';
import { CustomerComponent } from 'src/app/components/customer/customer.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { CallbackComponent } from 'src/app/components/pages/callback/callback.component';
import { HompageComponent } from 'src/app/components/pages/hompage/hompage.component';
import { PaymentComponent } from 'src/app/components/payment/payment.component';
import { RentalComponent } from 'src/app/components/rental/rental.component';

export const AppLayoutRoutes: Routes = [

    {path:"",pathMatch:"full", component:HompageComponent},
    {path: 'login', component: LoginComponent},
    {path:"cars", component:CarDetailComponent},
    {path:"colors", component:ColorComponent},
    {path:"brands", component:BrandComponent},
    {path:"customers", component:CustomerComponent},
    {path:"rentals", component:RentalComponent},
    {path:"cars/brand/:brandId", component:CarDetailComponent},
    {path:"cars/color/:colorId", component:CarDetailComponent},
    {path:"car/:carId", component:CarComponent},
    {path:"payment", component:PaymentComponent},
    {path:"callback", component:CallbackComponent}
    
];
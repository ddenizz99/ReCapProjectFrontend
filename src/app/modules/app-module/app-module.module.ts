import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppLayoutRoutes } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponentComponent } from './app-component/app-component.component';
import { NaviComponent } from 'src/app/components/navi/navi.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { CategoryComponent } from 'src/app/components/category/category.component';
import { CarDetailComponent } from 'src/app/components/car-detail/car-detail.component';
import { BrandComponent } from 'src/app/components/brand/brand.component';
import { ColorComponent } from 'src/app/components/color/color.component';
import { CarComponent } from 'src/app/components/car/car.component';
import { HompageComponent } from 'src/app/components/pages/hompage/hompage.component';
import { PaymentComponent } from 'src/app/components/payment/payment.component';
import { CallbackComponent } from 'src/app/components/pages/callback/callback.component';
import { VatAddedPipe } from 'src/app/pipes/vat-added.pipe';
import { BrandFilterPipePipe } from 'src/app/pipes/brand-filter-pipe.pipe';
import { ColorFilterPipePipe } from 'src/app/pipes/color-filter-pipe.pipe';
import { CarFilterPipePipe } from 'src/app/pipes/car-filter-pipe.pipe';
import { CarLimitPipePipe } from 'src/app/pipes/car-limit-pipe.pipe';
import { HideCarPipePipe } from 'src/app/pipes/hide-car-pipe.pipe';





@NgModule({
  declarations: [
    AppComponentComponent,
    HompageComponent,
    NaviComponent,
    FooterComponent,
    CategoryComponent,
    CarDetailComponent,
    BrandComponent,
    ColorComponent,
    CarComponent,
    PaymentComponent,
    CallbackComponent,
    VatAddedPipe,
    BrandFilterPipePipe,
    ColorFilterPipePipe,
    CarFilterPipePipe,
    CarLimitPipePipe,
    HideCarPipePipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AppLayoutRoutes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AppModuleModule { }

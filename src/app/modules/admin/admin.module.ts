import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { AdminLayoutRoutes } from './admin.routing';
import { DashboardComponent } from 'src/app/components/admin/dashboard/dashboard.component';
import { NavbarComponent } from 'src/app/components/admin/navbar/navbar.component';
import { SidebarComponent } from 'src/app/components/admin/sidebar/sidebar.component';
import { OrderComponent } from 'src/app/components/admin/order/order.component';



@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes)
  ]
})
export class AdminModule { }

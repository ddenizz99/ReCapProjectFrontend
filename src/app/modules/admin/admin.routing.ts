import { Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/components/admin/dashboard/dashboard.component';
import { OrderComponent } from 'src/app/components/admin/order/order.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { AdminLoginGuard } from 'src/app/guards/admin-login.guard';

export const AdminLayoutRoutes: Routes = [

    { path: '', pathMatch: 'full', component: DashboardComponent, canActivate:[AdminLoginGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent , canActivate:[AdminLoginGuard]},
    { path: 'orders', component: OrderComponent , canActivate:[AdminLoginGuard]}
    
];
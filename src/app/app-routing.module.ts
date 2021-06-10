import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { AdminComponent } from './modules/admin/admin/admin.component';
import { AppComponentComponent } from './modules/app-module/app-component/app-component.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [{
      path: '',
      loadChildren: './modules/admin/admin.module#AdminModule'
    }]
  },
  {
    path: '',
    component: AppComponentComponent,
    children: [{
      path: '',
      loadChildren: './modules/app-module/app-module.module#AppModuleModule'
    }]
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

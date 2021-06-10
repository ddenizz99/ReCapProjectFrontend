import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginGuard implements CanActivate {

  constructor(
    private authService:AuthService, 
    private toastrService:ToastrService,
    private router:Router
    ){}
    
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if (this.authService.isAuthenticated()) {
        if (this.authService.isItAdmin()) {
          return true;
        }
        this.router.navigate(["404"]);
        this.toastrService.error("Sisteme giriş yetkiniz yoktur.");
        return false;
      }else{
        this.router.navigate(["login"]);
        return false;
      }
  }
  
}

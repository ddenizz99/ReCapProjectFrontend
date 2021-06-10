import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private storageService:LocalStorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = this.storageService.getToken();
    let newRequest:HttpRequest<any>;
    newRequest = request.clone({
      headers : request.headers.set("Authorization", "Bearer " + token)
    });
    return next.handle(newRequest);
  }
}
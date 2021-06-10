import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DataResponseModel } from '../models/dataResponseModel';
import { LoginModel } from '../models/loginModel';
import { TokenModel } from '../models/tokenModel';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userName: string = "";
  private decodedToken: any;
  private jwtHelper: JwtHelperService = new JwtHelperService();
  private claims: string[] = [];

  constructor(
    private httpClient:HttpClient, 
    private storageService:LocalStorageService
    ) { }

  login(loginModel:LoginModel):Observable<DataResponseModel<TokenModel>>{
    let newPath = environment.getApiUrl + 'auth/login';
    return this.httpClient.post<DataResponseModel<TokenModel>>(newPath, loginModel);
  }

  isAuthenticated():boolean{
    if (this.storageService.getToken()) {
      return true;
    }
    return false;
  }

  isItAdmin():boolean{
    if (this.isAuthenticated()) {
      if (this.getClaims().indexOf("admin") !== -1) {
        return true;
      }
    }
    return false;
  }

  logout(){
    this.storageService.removeToken();
  }

  decodeToken(token:string):any{
    this.decodedToken = this.jwtHelper.decodeToken(token);
    return this.decodedToken;
  }

  getClaims():string[]{
    let decode = this.decodeToken(this.storageService.getToken());
    this.claims = decode[Object.keys(decode).filter(x => x.endsWith("/role"))[0]];
    return this.claims;
  }

  getUserName():string{
    let decode = this.decodeToken(this.storageService.getToken());
    this.userName = decode[Object.keys(decode).filter(x => x.endsWith("/name"))[0]];
    return this.userName;
  }

  setItems(){
    this.decodedToken = this.jwtHelper.decodeToken(this.storageService.getToken());
    this.userName = this.decodedToken[Object.keys(this.decodedToken).filter(x => x.endsWith("/name"))[0]];
    this.claims = this.decodedToken[Object.keys(this.decodedToken).filter(x => x.endsWith("/role"))[0]];
  }
}

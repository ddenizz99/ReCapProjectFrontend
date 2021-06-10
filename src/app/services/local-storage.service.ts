import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setToken(token: string) {
    localStorage.setItem("authToken", token);
  }

  removeToken(){
    localStorage.removeItem("authToken");
  }

  removeItem(itemName:string)
  {
    localStorage.removeItem(itemName);
  }

  getToken():any {
    return localStorage.getItem("authToken");
  }

  setItem(key:string,data:any){
    localStorage.setItem(key,data);
  }

  getItem(key:string){
    return localStorage.getItem(key);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup = this.formBuilder.group({});
  constructor(
    private formBuilder:FormBuilder, 
    private authService:AuthService, 
    private storageService:LocalStorageService,
    private router: Router
    ) { }

  ngOnInit(): void {
    if(this.isAuthenticated()){
      if(this.isItAdmin()){
        this.router.navigateByUrl("/admin");
      }else{
        this.router.navigateByUrl("");
      } 
    }
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email: ["",[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ["",Validators.required]
    });
  }

  get emailInRequired() { return this.loginForm.get('email')?.errors?.required; }
  get passwordInRequired() { return this.loginForm.get('password')?.errors?.required; }

  login(){
    //this.loginForm.disable();
    if (this.loginForm.valid) {
      let loginModel = Object.assign({}, this.loginForm.value);
      this.authService.login(loginModel).subscribe(response => {
        if (response.success) {
          this.storageService.setToken(response.data.token);
          if(this.isItAdmin()){
            this.router.navigateByUrl("/admin");
          }
          // const helps = new JwtHelperService();
          // var decode = helps.decodeToken(this.storageService.getToken());
          // var obsa = Object.keys(decode).filter(x => x.endsWith("/name"))[0];
          // var clms = Object.keys(decode).filter(x => x.endsWith("/role"))[0];
          // this.claims = decode[clms];
          // console.log(this.claims.indexOf("admin"));
          // console.log("token expired => " + Number(helps.getTokenExpirationDate(this.storageService.getToken())?.getTime()) + ", Simdi => " + new Date().getTime());
          // let texpr = helps.getTokenExpirationDate(this.storageService.getToken())?.getTime();
          // let topl = Number(texpr);
          // console.log(new Date().getTime() > topl ? "Süre bitti" : "Süre var");
          //texp = helps.getTokenExpirationDate(this.storageService.getToken());
          //console.log(simdi > helps.getTokenExpirationDate(this.storageService.getToken()));
        }
      }, errorResponse => {
        console.log(errorResponse);
        alert(errorResponse.error.message == "Yetkin yok." ? "Sisteme giriş yetkiniz yok." : "Kullanıcı adı veya şifre hatalı.");
      });
    }
  }

  isAuthenticated():boolean{
    return this.authService.isAuthenticated();
  }

  isItAdmin():boolean{
    return this.authService.isItAdmin();
  }

  logout(){
    this.authService.logout();
  }

}

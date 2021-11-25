import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {GloablService} from '../gloabl.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public hide=true;
  public loginData = {
    username:"",
    password:"",
  };
  public loginStatus=false;
  public loginResponse:any=[];
  constructor(private _global:GloablService, private _http:HttpClient, private _router:Router) { }

  ngOnInit(): void {
    this._global.noHeader=true;
    this._global.noSideNav=true;

    if(localStorage.getItem("user")){
      this._router.navigate(['/home']);
    }
  }

  onLogin(){
    this.loginStatus=true;
    console.log(this.loginData.username);
    // this._global.params={
    //   username:this.loginData.username,
    //   password:this.loginData.password
    // }
    
    this._global.loginService(this.loginData).subscribe(data=>{
      this.loginResponse = data[0];
      console.log("Resp:::", this.loginResponse);
      if(this.loginResponse && this.loginResponse.status=="success"){
        console.log("In first IF");
        localStorage.setItem("user",this.loginResponse.username);
        this._router.navigate(['/home']);
      }
      else{
        console.log("Login Failed", this.loginResponse.status);
      }
      this.loginStatus=false;
    });

  }
  ngOnDestroy():void{
    this._global.noHeader=false;
    this._global.noSideNav=false;
  }
}

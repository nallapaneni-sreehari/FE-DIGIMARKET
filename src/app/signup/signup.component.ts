import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GloablService } from '../gloabl.service';
import { HttpClient } from '@angular/common/http';
import { GlobaldataService } from '../shared/globaldata.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public hide=true;
  public country = new FormControl;
  public cont = new FormControl;
  public lang = new FormControl;
  
  public countriesList:any=[];
  public languagesList:any=[];

  public NotifErrors:any=[];
  public loginData:any = {
    fullname:"",
    email:"",
    gender:"",
    continent:"",
    country:"",
    mobile:"",
    language:"",
    username:"",
    password:"",
    confPassword:""
  };
  public loginStatus=false;
  public loginResponse:any=[];
  constructor(private _global:GloablService, private _http:HttpClient, private _router:Router, private countries: GlobaldataService) { }

  public continents=this.countries.counList;

  ngOnInit(): void {
    this._global.noHeader=true;
    this._global.noSideNav=true;
    // if(localStorage.getItem("user")){
    //   this._router.navigate(['/home']);
    // }
  }

  onSignup(){
    this.loginStatus=true;
    console.log(this.loginData);
    // this._global.params={
    //   username:this.loginData.username,
    //   password:this.loginData.password
    // }
    
    this._global.signUpService(this.loginData).subscribe(data=>{
      this.loginResponse = data;
      console.log("Resp:::", this.loginResponse);
      if(this.loginResponse && this.loginResponse.statusCode==201){
        console.log("In first IF");
        // localStorage.setItem("user",this.loginResponse.username);
        alert("Signup success please Login !")
        setTimeout(()=>{
          this._router.navigate(['/login']);
        }, 2000);
      }
      else{
        console.log("Login Failed", this.loginResponse.status);
      }
      this.loginStatus=false;
    },
    error=>{
      console.log(error);
      this.loginStatus=false;
      this.NotifErrors.message=error.message;
    });

  }
  onContinentChange(){
    // console.log("countriesList::", this.countriesList)
    this.countriesList=[];
    if(this.loginData.continent){
      for(let c of this.countries.continents){
        if(this.loginData.continent == c.continent){
          this.countriesList.push(c);
        }
      }
    }
    else{
      this.loginData.errors="Please select Continent First.";
    }
    // console.log("countriesList::", this.countriesList)
  }
  onCountryChange(){
    // console.log("onCountryChange", this.languagesList)
    this.languagesList=[];
    if(this.loginData.country){
      for(let c of this.countries.continents){
        if(this.loginData.country == c.country){
          if(c.lan){
            for(let l of c.lan){
              this.languagesList.push(l);
            }
          }
        }
      }
    }
    else{
      this.loginData.errors="Please select Country First.";
    }
    // console.log("languagesList::", this.languagesList)
  }

}
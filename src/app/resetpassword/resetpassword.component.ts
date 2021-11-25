import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { GloablService } from './../gloabl.service'
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  public hide=false;
  public sentMail=false;
  public passwordMisMatch=false;
  public responseOTPData:any=[];
  public responseResetData:any=[];
  public resetData={
    email:"",
    otp:"",
    Newpassword:"",
    Confpassword:""
  }
  constructor(private router:Router, private _global:GloablService) { }

  ngOnInit(): void {
    this._global.noHeader=true;
    this._global.noSideNav=true;
  }

  onReset(){
    //on reset functionality
    console.log("Password Reset Called..!");
    // if(!localStorage.getItem("user")){
    //   this.router.navigate(['login']);
    // }
    if(this.resetData.Newpassword!=this.resetData.Confpassword){
      this.passwordMisMatch=true;
    }

    this._global.resetPasswordService(this.resetData).subscribe(data=>{
      console.log("responseResetData:::", data);
      this.responseResetData=data[0];
    });
  }

  onSendEmail(){
    //send email functionality here
    this._global.sendEmailService(this.resetData).subscribe(data =>{
      console.log("OTP Data::", data);
      this.responseOTPData=data[0];
      //Compare Otp Here and send request for password update 
    });
    this.sentMail=true;

  }

}

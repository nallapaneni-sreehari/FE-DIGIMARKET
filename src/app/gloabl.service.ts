import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GloablService {

  constructor(private _http: HttpClient) { }

  public noHeader=false;
  public noSideNav=false;
  
  public readonly APIURL='http:localhost:51617/api';
  public test_url = "http://localhost:3000/api/";
  // params={username:"",password:""}

  loginService(params:any): Observable<any> {
    return this._http.post<any>(this.test_url+'login',params);
    // return this._http.get<any>(this.test_url);

  }

  resetPasswordService(params:any): Observable<any> {
    return this._http.post<any>(this.test_url+'reset',params);

  }

  sendEmailService(params:any): Observable<any> {
    return this._http.post<any>(this.test_url+'sendMail',params);

  }

  
}


// ./../assets/login.json
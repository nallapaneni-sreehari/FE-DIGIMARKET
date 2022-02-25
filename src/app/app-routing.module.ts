import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MessagesComponent } from './messages/messages.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path:'login', component:LoginComponent},
  {path:'resetpassword', component:ResetpasswordComponent},
  {path:'home', component:HomeComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'messages', component:MessagesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MessagesComponent } from './messages/messages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgImageSliderModule } from 'ng-image-slider';
import { ConnectionService } from './services/connection.service';
import { HttpClientModule } from '@angular/common/http';


import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatBadgeModule} from '@angular/material/badge';


import { SignupComponent } from './signup/signup.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import {MatSelectModule} from '@angular/material/select';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ResetpasswordComponent,
    
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    MessagesComponent
  ],
  imports: [
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatFormFieldModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule,
    MatDividerModule,
    MatListModule,
    NgImageSliderModule
  ],
  providers: [ConnectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }

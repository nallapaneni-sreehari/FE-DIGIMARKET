import { Component, NgZone } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { ChangeDetectionStrategy } from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DigiMarket';
  sidebarOpen=true;
  showHead: boolean = false;

  constructor(private router: Router) {
  // on route change to '/login', set the variable showHead to false
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'] == '/login' || event['url'] == '/signup' || event['url'] == '/resetpassword' || event['url'] == '/') {
          this.showHead = false;
        } else {
          // console.log("NU")
          this.showHead = true;
        }
      }
    });
  }

  sidebarToggler(){
    this.sidebarOpen=!this.sidebarOpen;
  }
}

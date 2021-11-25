import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { GloablService } from '../gloabl.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router, private _global: GloablService) {}

  public noHeader=false;
  ngOnInit(): void {
    this.noHeader = this._global.noHeader;
    console.log("No Header:::",this.noHeader)
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

}

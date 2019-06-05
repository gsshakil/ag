import { Component, OnInit } from '@angular/core';
import { faCoffee, faBars, faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public leftMenuState: string;

  faCoffee = faCoffee;
  faBars = faBars;
  faUserCircle = faUserCircle;

  events: string[] = [];
  opened: boolean;
  
}



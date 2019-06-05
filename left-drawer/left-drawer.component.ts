import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-drawer',
  templateUrl: './left-drawer.component.html',
  styleUrls: ['./left-drawer.component.scss']
})
export class LeftDrawerComponent implements OnInit {

  events: string[] = [];
  opened: boolean;
  
  constructor() { }

  ngOnInit() {
  }

}

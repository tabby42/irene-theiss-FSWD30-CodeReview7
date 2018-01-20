import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public projectName:string;
  public isCollapsed = true;

  constructor() { }

  ngOnInit() {
    this.projectName = "Coders Dating";
  }

  

}

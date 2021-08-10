import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  isLoggedIn:boolean = false;
  isNotLoggedIn:boolean = !this.isLoggedIn;
  isAdmin:boolean = false;

  ngOnInit(): void {
    this.isLoggedIn = localStorage.getItem("isLoggedIn") == "true" ? true: false;
    this.isAdmin = localStorage.getItem("isAdmin") == "true" ? true: false;
    this.isNotLoggedIn = !this.isLoggedIn;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isAdmin:boolean = false;
  userId:any;
  
  constructor() { }

  ngOnInit(): void {
    this.isAdmin = localStorage.getItem("isAdmin") == "true" ? true: false;
    this.userId = localStorage.getItem("userId");
  }
}

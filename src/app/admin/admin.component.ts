import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor() { }

  isTasksShown = true;
  isUsersShown = false;
  userId:any;

  ngOnInit(): void {
    this.userId = localStorage.getItem("userId");
  }

  showUsers() {
    this.isTasksShown = false;
    this.isUsersShown = true;
  }

  showTasks() {
    this.isTasksShown = true;
    this.isUsersShown = false;  
  }

}

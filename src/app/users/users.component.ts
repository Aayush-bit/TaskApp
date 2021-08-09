import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { UsersService } from '../services/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private router:Router, private _usersService: UsersService) { }

  // users = [
  //   {
  //     name: "John"
  //   },
  //   {
  //     name: "Joseph"
  //   },
  //   {
  //     name: "Stark"
  //   },
  //   {
  //     name: "Josephene"
  //   },
  //   {
  //     name: "Goofy"
  //   },
  //   {
  //     name: "Donald"
  //   }
  // ]

  users = []

  ngOnInit(): void {
    this._usersService.getUsers()
    .subscribe(data => this.users = data);
  }


  onSelectUser(id:any) {
    this.router.navigate(['/user', id]);
  }
}

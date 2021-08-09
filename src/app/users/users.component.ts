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

  users = []

  ngOnInit(): void {
    this._usersService.getUsers()
    .subscribe(data => this.users = data);

    // this._usersService.getUser(1)
    // .subscribe(data => console.log(data));
  }


  onSelectUser(id:any) {
    this.router.navigate(['/user', id]);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UsersService } from '../services/users/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  public userId:any;
  public userData:any;
  constructor(private route: ActivatedRoute, private _usersService: UsersService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap) => {
      let id = params.get('userId')
      this.userId = id;
    })

    this._usersService.getUser(this.userId)
    .subscribe(data => this.userData = data);
  }

}

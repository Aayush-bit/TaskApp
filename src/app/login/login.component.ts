import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _usersService: UsersService) { }

  formSubmit(formData: any) {
    if(formData.email == "" || formData.password == "") return;
    
    this._usersService.loginUser(formData)
    .subscribe(data => {
      localStorage.setItem("userId", data.id);
      localStorage.setItem("email", data.email);
      localStorage.setItem("isAdmin", data.isAdmin);
      localStorage.setItem("isLoggedIn", "true");
      
      location.assign("/dashboard");
    });
  }
  
  ngOnInit(): void {
  }
}

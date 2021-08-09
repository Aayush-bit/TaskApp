import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// import usersData from "../../../assets/users.json";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  private _url = `../../../assets/users.json`;

  getUsers():Observable<any> {
    return this.http.get<any>(this._url);
  }

  // getUser(id:any):Observable<any> {
  //   // find for the user with the given "id" and return the required data
  //   return this.http.get<any>(this._url);
  // }
}

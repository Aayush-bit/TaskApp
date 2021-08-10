import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  private _url = `../../../assets/users.json`;

  loginUser(userData: any):Observable<any> {
    // return 
    let reqdUser:any;

    return this.http.get<any>(this._url)
    .pipe(
      map(users => {
        users.filter((user:any) => {
          if(user.email == userData.email) {
            reqdUser = user
          }
        });
        return reqdUser;
      })
    )
  }

  getUsers():Observable<any> {
    return this.http.get<any>(this._url);
  }

  getUser(id:any):Observable<any> {
    // find for the user with the given "id" and return the required data

    let reqdUser:any;

    return this.http.get<any>(this._url)
    .pipe(
      map(users => {
        users.filter((user:any) => {
          if(user.id == id) {
            reqdUser = user
          }
        });
        return reqdUser;
      })
    )
  }

  // createUser() {}
  // removeUser(userId:any) {}
}

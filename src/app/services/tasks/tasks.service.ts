import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// import TasksData from "../../../assets/tasks.json"

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http:HttpClient) { }

  private _url = `../../../assets/tasks.json`;

  getTasks():Observable<any> {
    return this.http.get<any>(this._url);
  }

  // getTasks() {
  //   return TasksData;
  // }

  // getTask(id:any):Observable<any> {
  //   // let data = this.http.get(this._url);
  //   // let arr = []
  //   // // for (let i = 0; i<sizeof(data))
  //   // arr.map(() => {});
  //   return this.http.get<any>(this._url);
  // }
}

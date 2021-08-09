import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http:HttpClient) { }

  private _url = `../../../assets/tasks.json`;

  getTasks():Observable<any> {
    // ? re-consider the logic here
    return this.http.get<any>(this._url);
  }

  getTask(id:any):Observable<any> {
    // find for the task with the given "id" and return the required data

    let reqdTask:any;

    return this.http.get<any>(this._url)
    .pipe(
      map(tasks => {
        tasks.filter((task:any) => {
          if(task.tid == id) {
            reqdTask = task;
          }
        });
        return reqdTask;
      })
    )
  }
}

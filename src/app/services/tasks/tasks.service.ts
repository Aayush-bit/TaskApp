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

  // get tasks of a particular user on the basis of "userId"
  getTasks(userId:any):Observable<any> {
    let requiredTasks:any = [];

    return this.http.get<any>(this._url)
    .pipe(
      map(tasks => {
        tasks.filter((task:any) => {
          if(task.uid == userId) {
            requiredTasks.push(task);
          }
        });
        return requiredTasks;
      })
    )
  }

  // get a particular task on the basis of "taskId"
  getTask(taskId:any):Observable<any> {
    let reqdTask:any;

    return this.http.get<any>(this._url)
    .pipe(
      map(tasks => {
        tasks.filter((task:any) => {
          if(task.tid == taskId) {
            reqdTask = task;
          }
        });
        return reqdTask;
      })
    )
  }

  // createTask(userId:any) {}
  // removeTask(taskId:any) {}
}

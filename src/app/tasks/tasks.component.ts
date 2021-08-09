import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  constructor(private _taskService: TasksService) { }

  // tasks = [
  //   {
  //     title: "task 1"
  //   },
  //   {
  //     title: "task 2"
  //   },
  //   {
  //     title: "task 3"
  //   },
  //   {
  //     title: "task 4"
  //   },
  //   {
  //     title: "task 5"
  //   },
  //   {
  //     title: "task 6"
  //   }
  // ]
  userId = 1;
  tasks = []
  myTasks = [];
  ngOnInit(): void {
    this._taskService.getTasks()
    .subscribe(data => this.tasks = data);
    // .subscribe(data => this.tasks = JSON.parse(JSON.stringify(data)));
    // .subscribe(data => {
    //   // this.tasks = data
    //   data.map((item:Object) => {
    //     if(item.uid) {
    //       this.myTasks.push(item);
    //     }
    //   });
    // });    
  }
}

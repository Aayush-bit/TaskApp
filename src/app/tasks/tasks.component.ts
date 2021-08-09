import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks/tasks.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  constructor(private _taskService: TasksService, private router:Router) { }

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
  
  onSelectTask(id:any) {
    this.router.navigate(['/task', id]);
  }
}

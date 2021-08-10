import { Component, OnInit, Input } from '@angular/core';
import { TasksService } from '../services/tasks/tasks.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  constructor(private _taskService: TasksService, private router:Router) { }

  @Input('userId') public userId:any;
  tasks = []
  
  ngOnInit(): void {
    this._taskService.getTasks(this.userId)
    .subscribe(data => this.tasks = data);
  }
  
  onSelectTask(id:any) {
    this.router.navigate(['/task', id]);
  }
}

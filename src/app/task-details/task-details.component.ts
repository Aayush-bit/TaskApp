import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { TasksService } from '../services/tasks/tasks.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private _tasksService: TasksService) { }

  taskId: any;
  taskData: any;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap) => {
      let id = params.get('taskId')
      this.taskId = id;
    })

    this._tasksService.getTask(this.taskId)
    .subscribe(data => this.taskData = data);
  }

}

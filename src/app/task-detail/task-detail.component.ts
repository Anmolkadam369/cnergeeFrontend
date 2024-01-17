import { Component, OnInit } from '@angular/core';
import {TaskService, Task} from '../task.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent {

  task: Task | undefined;

  constructor(private route:ActivatedRoute , private taskService:TaskService){
    const taskId = Number(route.snapshot.paramMap.get('id'));
    console.log("taskId",taskId)
    this.task = this.taskService.getTasks().find((t)=> t.id === taskId)
    console.log("This.task", this.taskService.getTasks())
  }

}

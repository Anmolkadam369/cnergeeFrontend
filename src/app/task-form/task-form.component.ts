import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService, Task } from '../task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  newTask : Task = {id:0, title:'', description:''};
  
  constructor(private router:Router, private taskService:TaskService) {}
  
  createTask():void {
    this.newTask.id = Date.now(),
    this.taskService.addTask(this.newTask)
    this.router.navigate(['/task'])
    console.log("hey",this.newTask)
    console.log("Added task:", this.newTask);
  }
}



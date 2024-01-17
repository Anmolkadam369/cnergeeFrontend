import { Component } from '@angular/core';
import { TaskService, Task } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html'
  
})
export class TaskListComponent {
  tasks: Task[] = [];

  constructor(private router:Router, private taskService: TaskService) {
    this.tasks = this.taskService.getTasks();
  }

  deleteTask(index: number): void {
    this.taskService.deleteTask(index);
    this.tasks = this.taskService.getTasks();
  } 

  viewTask(index: number): void {
    console.log("task ARRAY",this.tasks)
    console.log('View task with id:', this.tasks[index].id);
    this.router.navigate([`/task/${this.tasks[index].id}`])
  }

  updateTask(index :number):void{
    this.router.navigate([`/update/${this.tasks[index].id}`]);
  }
  

}



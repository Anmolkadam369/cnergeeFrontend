import { Component, OnInit } from '@angular/core';
import { Task, TaskService } from '../task.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-task-update',
  templateUrl: './task-update.component.html',
  styleUrls: ['./task-update.component.css']
})
export class TaskUpdateComponent {
  task: Task | undefined;
  updatedTask : Task = {id:0,title:'',description:''}

  constructor(private router: Router, private route:ActivatedRoute, private taskSevice:TaskService) 
  {
    const taskId = Number(route.snapshot.paramMap.get('id'));
    console.log('taskId',taskId);
    this.task = this.taskSevice.getTasks().find((t)=>t.id == taskId);
  }



  updateTask(): void {
    if (this.task) {
      const index = this.taskSevice.getTasks().findIndex((t) => t.id === this.task.id);
  
      if (index !== -1) {
        // Update the properties of the existing task
        console.log("updatedTASK", this.updatedTask)
        this.taskSevice.getTasks()[index].title = this.updatedTask.title;
        this.taskSevice.getTasks()[index].description = this.updatedTask.description;
  
        this.router.navigate(['/task']);
      }
    }
  }
  


  
}

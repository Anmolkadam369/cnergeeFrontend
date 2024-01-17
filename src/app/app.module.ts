import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskService } from './task.service';
import { TaskUpdateComponent } from './task-update/task-update.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskDetailComponent,
    TaskFormComponent,
    TaskUpdateComponent
  ],
  imports :[
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [TaskService],
  bootstrap: [AppComponent],
}) 
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskUpdateComponent } from './task-update/task-update.component';

const routes: Routes = [
  {path:'task', component:TaskListComponent},
  {path:'task/:id', component:TaskDetailComponent},
  {path:'create', component:TaskFormComponent},
  {path:'update/:id', component:TaskUpdateComponent},
  {path:'', redirectTo:'/tasks', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

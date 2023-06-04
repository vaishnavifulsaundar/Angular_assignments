import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminTaskComponent } from './admin-task/admin-task.component';
import { RouterModule, Routes } from '@angular/router';

console.warn("Staff module loaded")
const routes: Routes = [
  {path:'admindashbaord',component:AdminDashboardComponent},
  {path:'admintask',component:AdminTaskComponent},

];

@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminTaskComponent
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModule { }

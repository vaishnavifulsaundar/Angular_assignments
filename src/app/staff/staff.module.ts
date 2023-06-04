import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import { RouterModule, Routes } from '@angular/router';

console.warn("Staff module loaded")

const routes: Routes = [
  {path:'staffdashboard',component:StaffDashboardComponent},

];

@NgModule({
  declarations: [
    StaffDashboardComponent
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffModule { }

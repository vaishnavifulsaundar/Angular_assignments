import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'admin',loadChildren :()=>import('./admin/admin.module').then(m=>m.AdminModule)},
  {path:'staff',loadChildren :()=>import('./staff/staff.module').then(m=>m.StaffModule)},
  {path:'home',component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

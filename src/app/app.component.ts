import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang';
  constructor(private route:Router){}


  admin(){
    this.route.navigate(['./admin/admindashbaord']);
  }

  staff(){
    this.route.navigate(['./staff/staffdashboard']);
  }
 
  Home(){
    this.route.navigate(['./home'])
  }
}

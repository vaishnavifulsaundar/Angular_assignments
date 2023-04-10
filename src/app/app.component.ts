import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public str="Marvellous Infosystems";


  upper(){
   console.log( this.str.toUpperCase());
  }

  lower(){
    console.log( this.str.toLowerCase());
  }
}

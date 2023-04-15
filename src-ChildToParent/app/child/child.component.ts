import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Output() 
  public Event = new EventEmitter();

  public value:any;
  
  sendMessage(){
 this.Event.emit(this.value);
  }
}

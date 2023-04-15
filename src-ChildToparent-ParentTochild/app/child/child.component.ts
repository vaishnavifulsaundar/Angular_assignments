import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

@Input()
public msgfromparent ="";

 @Output()
public event = new EventEmitter();

sendmsg(){
  this.event.emit("Hello From Child!");
}
}

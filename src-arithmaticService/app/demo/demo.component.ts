import { Component } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {

  constructor(private arith:ArithmeticService){}

  public addition=0;
  public substract =0;

  ngOnInit(){
    this.addition = this.arith.Addition(10,11);
    this.substract = this.arith.substraction(22,10);
  }
  
}

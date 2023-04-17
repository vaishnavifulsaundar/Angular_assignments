import { Component } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {

  constructor(private num:NumberService){}
   
  public checkPrime: boolean | undefined;
   public number =23;


  ngOnInit(){
    this.checkPrime = this.num.chkPrime(this.number);

  }
}

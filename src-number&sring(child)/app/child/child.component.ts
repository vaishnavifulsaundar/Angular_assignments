import { Component } from '@angular/core';
import { StringService } from '../string.service';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  public checkPrime: boolean | undefined;
  public str ='MARVELLOUS Infosystems';
   public number =23;
   public count=0;
  
  constructor(private num:NumberService,private capital:StringService){}

  ngOnInit(){
    this.checkPrime = this.num.chkPrime(this.number);
    this.count = this.capital.CountCapital(this.str);
  }
}

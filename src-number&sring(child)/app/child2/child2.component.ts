import { Component } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {

  constructor(private capital:StringService){}
   
  public count=0;
   public str ='MARVELLOUS Infosystems';

  ngOnInit(){
    this.count = this.capital.CountCapital(this.str);
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {

  constructor() { }


  public Addition(iNo1:number , iNo2:number){
    return iNo1 + iNo2;
  }

   public substraction(iNo1:number , iNo2:number){
    return iNo1 - iNo2;
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }

  public CountCapital(str:any):any{
    let ch='A';
    let iCnt=0;

    let i = 0;
    while (i < str.length) {
      if (str[i] >= 'A' && str[i] <= 'Z') {
        iCnt++;
      }
      i++;
    }
    return iCnt;
  }

  
}

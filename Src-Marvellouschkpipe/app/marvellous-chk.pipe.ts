import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value: any, parameter:string): any {
    if (parameter === 'Prime') {
      return this.isPrime(value) ? 'Prime' : 'Not Prime';
    } else if (parameter === 'Perfect') {
      return this.isPerfect(value) ? 'Perfect' : 'Not Perfect';
    } else if (parameter === 'Even') {
      return this.Even(value) ? 'Even' : 'Odd';
    } else if (parameter === 'Even') {
      return this.Odd(value) ? 'Odd' : 'Even';
    } else {
      return 'Invalid Parameter';
    }
    
  }

  private isPrime(num:number){
    for(let i=2;i<num/2;i++){
      if(num %i == 0){
        return false;
      }
    }
    return true;
  }

  private isPerfect(num: number): boolean {
    let sum = 0;
    for (let i = 1; i < num; i++) {
      if (num % i === 0) {
        sum += i;
      }
    }
    return num === sum;
  }
  


  private Even(num:number){
    if(num%2 ==0){
      return true;
    }
    else{
      return false;
    }
  }

  private Odd(num:number){
    if(num%2 !=0){
      return true;
    }
    else{
      return false;
    }
  }
}

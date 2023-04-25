import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellouschk'
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value: number, param?: string): string {
    if (param === 'prime') {
      return this.isPrime(value);
    } else if (param === 'even') {
      return this.isEven(value);
    } else if (param === 'odd') {
      return this.isOdd(value);
    } else if (param === 'perfect') {
      return this.isPerfect(value);
    } else {
      return 'Invalid parameter';
    }
  }

  private isPrime(num: number): string {
    for(let i = 2; i <= num/2; i++) {
      if(num % i === 0) {
        return num + ' is not a prime number';
      }
    }
    return num + ' is a prime number';
  }

  private isEven(num: number): string {
    if(num %2 ==0){
      return "It is even number";
    }
    else {
      return "It is odd number"
    }
  }

  private isOdd(num: number): string {
    if(num %2 !=0){
      return "It is odd number";
    }
    else {
      return "It is not odd number"
    }
  }

  private isPerfect(num: number): string {
    let sum = 0;
    for (let i = 1; i < num; i++) {
      if (num % i === 0) {
        sum = sum + i;
      }
    }
    if(sum == num){
     return "It is perfect number"
    }
    else {
    return "It is  not perfect number"

    }
  }

}
